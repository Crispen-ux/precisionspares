import { NextResponse } from "next/server";
import { leadSchema, URGENCY_LABEL, type LeadInput } from "@/lib/lead-schema";
import { SITE } from "@/lib/site";

/**
 * Lead capture endpoint.
 *
 * Delivery channels (configure any combination in .env):
 *  - RESEND_API_KEY + LEAD_TO_EMAIL (+ LEAD_FROM_EMAIL): email notification and auto-reply
 *  - LEAD_WEBHOOK_URL: JSON POST (Zapier, Make, Google Sheets, HubSpot, a CRM, Slack ...)
 *
 * If nothing is configured in production the endpoint returns 503 so a lead is
 * never silently lost; the form then offers phone and WhatsApp instead.
 */

// ---- very small in-memory rate limit (per server instance) -------------
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

// ---- duplicate / replay guard (same part + phone within a short window) --
const seen = new Map<string, number>();
const DEDUP_MS = 2 * 60 * 1000;

function isDuplicate(sig: string) {
  const now = Date.now();
  const prev = seen.get(sig);
  if (prev && now - prev < DEDUP_MS) return true;
  seen.set(sig, now);
  if (seen.size > 5000) {
    for (const [k, v] of seen) {
      if (now - v >= DEDUP_MS) seen.delete(k);
    }
  }
  return false;
}

// ---- reject cross-site posts (same-origin form submissions only) --------
function originAllowed(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // some clients strip Origin; callers still face validation + rate limit
  const host = request.headers.get("host");
  const allowed = new Set<string>();
  try {
    allowed.add(new URL(SITE.url).origin);
  } catch {
    /* ignore malformed SITE.url */
  }
  if (host) {
    allowed.add(`https://${host}`);
    allowed.add(`http://${host}`);
  }
  return allowed.has(origin);
}

const MAX_BODY_BYTES = 20_000;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

function buildSubject(l: LeadInput) {
  const hot = l.urgency === "down" ? "[MACHINE DOWN] " : "";
  const brand = l.brand ? `${l.brand} - ` : "";
  return `${hot}${brand}${l.part.slice(0, 70)} (${l.name})`;
}

function buildText(l: LeadInput) {
  const utm = Object.entries(l.utm)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");
  return [
    `New quote request - ${URGENCY_LABEL[l.urgency]}`,
    "",
    `Part / description: ${l.part}`,
    `Brand: ${l.brand || "-"}`,
    `Topic: ${l.topic || "-"}`,
    "",
    `Name: ${l.name}`,
    `Company: ${l.company || "-"}`,
    `Phone: ${l.phone}`,
    `Email: ${l.email || "-"}`,
    "",
    `Notes: ${l.notes || "-"}`,
    "",
    `Page: ${l.page || "-"}`,
    `Referrer: ${l.referrer || "-"}`,
    `UTM: ${utm || "-"}`,
  ].join("\n");
}

function buildHtml(l: LeadInput) {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#5b6b76;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;color:#0b1722"><strong>${esc(v || "-")}</strong></td></tr>`;
  const phoneDigits = l.phone.replace(/[^\d+]/g, "");
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px">
  <h2 style="margin:0 0 4px">${l.urgency === "down" ? "Machine down: " : ""}New quote request</h2>
  <p style="margin:0 0 16px;color:#5b6b76">${esc(URGENCY_LABEL[l.urgency])}</p>
  <table style="border-collapse:collapse;font-size:14px">
    ${row("Part / description", l.part)}
    ${row("Brand", l.brand)}
    ${row("Name", l.name)}
    ${row("Company", l.company)}
    ${row("Phone", l.phone)}
    ${row("Email", l.email)}
    ${row("Notes", l.notes)}
    ${row("Page", l.page)}
  </table>
  <p style="margin-top:20px"><a href="tel:${esc(phoneDigits)}" style="background:#ffb000;color:#0b1722;padding:10px 16px;border-radius:6px;text-decoration:none;font-weight:bold">Call ${esc(l.name)}</a></p>
</div>`;
}

async function sendEmail(l: LeadInput) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!key || !to) return false;
  const from =
    process.env.LEAD_FROM_EMAIL ?? `${SITE.name} <onboarding@resend.dev>`;

  const toList = to.split(",").map((s) => s.trim()).filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: toList,
      reply_to: l.email || undefined,
      subject: buildSubject(l),
      html: buildHtml(l),
      text: buildText(l),
    }),
  });
  if (!res.ok) {
    console.error("[lead] Resend notification failed", res.status, await res.text());
    return false;
  }

  // Auto-reply to the customer (only if they gave an email)
  if (l.email) {
    const first = l.name.split(" ")[0];
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [l.email],
        subject: `We have your request: ${l.part.slice(0, 60)}`,
        text: `Hi ${first},\n\nThanks for your request. Our engineers will review it and come back with availability, lead time and price.\n\nIf this is urgent, call us on ${SITE.phoneDisplay} or message us on WhatsApp: https://wa.me/${SITE.whatsapp}\n\nWhat you sent us:\n${l.part}\n\nPrecision Spares\n${SITE.url}`,
      }),
    }).catch(() => undefined);
  }
  return true;
}

async function sendWebhook(l: LeadInput) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      receivedAt: new Date().toISOString(),
      priority: l.urgency === "down" ? "hot" : l.urgency === "week" ? "warm" : "standard",
      urgencyLabel: URGENCY_LABEL[l.urgency],
      ...l,
    }),
  });
  if (!res.ok) {
    console.error("[lead] Webhook failed", res.status);
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  const len = Number(request.headers.get("content-length") ?? 0);
  if (len > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Request too large" }, { status: 413 });
  }

  if (!originAllowed(request)) {
    return NextResponse.json({ ok: false, error: "Request blocked" }, { status: 403 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fields[String(issue.path[0] ?? "form")] = issue.message;
    }
    return NextResponse.json({ ok: false, error: "Check the highlighted fields", fields }, { status: 422 });
  }
  const lead = parsed.data;

  // Bots: honeypot filled or form submitted impossibly fast. Pretend success.
  const tooFast = lead.startedAt ? Date.now() - lead.startedAt < 2500 : false;
  if (lead.website || tooFast) {
    return NextResponse.json({ ok: true });
  }

  // Drop replayed or accidental double submissions before doing any work.
  if (isDuplicate(`${lead.phone.toLowerCase()}|${lead.part.toLowerCase()}`)) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please call or WhatsApp us instead." },
      { status: 429 },
    );
  }

  const results = await Promise.allSettled([sendEmail(lead), sendWebhook(lead)]);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value === true);

  if (!delivered) {
    // Never lose a lead silently. Always log the full record.
    console.log("[lead] UNDELIVERED LEAD", JSON.stringify(lead));
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          ok: false,
          error: `We could not send your request. Please call ${SITE.phoneDisplay} or WhatsApp us.`,
        },
        { status: 503 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
