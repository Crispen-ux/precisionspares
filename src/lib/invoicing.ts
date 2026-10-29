import { createHash } from "node:crypto";
import type { LeadInput } from "./lead-schema";
import { URGENCY_LABEL } from "./lead-schema";
import { SITE } from "./site";

/** Stable across retries, including on a different server instance. */
export function quoteRequestKey(lead: LeadInput): string {
  return createHash("sha256").update(JSON.stringify({
    ...lead,
    utm: Object.fromEntries(Object.entries(lead.utm).sort(([a], [b]) => a.localeCompare(b))),
  })).digest("hex");
}

export function invoicingConfigured(): boolean {
  return Boolean(process.env.LEDGER_API_URL || process.env.LEDGER_API_KEY);
}

function ledgerMetadata(lead: LeadInput) {
  return {
    part: lead.part, brand: lead.brand, urgency: lead.urgency,
    urgencyLabel: URGENCY_LABEL[lead.urgency], referrer: lead.referrer, utm: lead.utm,
  };
}

export function ledgerLeadPayload(lead: LeadInput, externalId: string) {
  return {
    company: lead.company || lead.name,
    contactName: lead.name,
    email: lead.email,
    phone: lead.phone,
    source: "website",
    sourceDetail: process.env.LEDGER_SITE_ID || "precision-spares",
    service: [lead.brand, lead.topic].filter(Boolean).join(" / ") || "Industrial spares quote request",
    message: lead.notes,
    pageUrl: new URL(lead.page || "/", SITE.url).href,
    campaign: lead.utm.utm_campaign || lead.utm.utm_source || "",
    externalId,
    metadata: ledgerMetadata(lead),
  };
}

/** The existing API truncates metadata at 3000 characters. Fail visibly instead. */
export function invoicingPayloadTooLarge(lead: LeadInput): boolean {
  return JSON.stringify(ledgerMetadata(lead)).length > 3000;
}

/** Only imported by the server route. Credentials never enter the form payload. */
export async function sendToInvoicing(lead: LeadInput, idempotencyKey: string): Promise<boolean> {
  const baseUrl = process.env.LEDGER_API_URL;
  const apiKey = process.env.LEDGER_API_KEY;
  if (!baseUrl || !apiKey) {
    if (invoicingConfigured()) console.error("[lead] Both invoicing environment variables are required");
    return false;
  }
  try {
    const url = new URL(baseUrl);
    const local = process.env.NODE_ENV !== "production" && ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    if ((url.protocol !== "https:" && !(local && url.protocol === "http:")) ||
      url.username || url.password || url.search || url.hash || url.pathname !== "/") {
      throw new Error("LEDGER_API_URL must be an HTTPS origin");
    }
    const payload = ledgerLeadPayload(lead, idempotencyKey);
    if (payload.sourceDetail.length > 128 || invoicingPayloadTooLarge(lead)) return false;
    const response = await fetch(new URL("/api/v1/leads", url), {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "x-idempotency-key": idempotencyKey },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(10_000),
    });
    if (response.status !== 200 && response.status !== 201) {
      console.error("[lead] Invoicing rejected quote request", response.status);
      return false;
    }
    const result = await response.json();
    if (result?.ok !== true || !Number.isSafeInteger(result?.lead?.id) || result.lead.id <= 0) {
      console.error("[lead] Invoicing returned an invalid receipt");
      return false;
    }
    return true;
  } catch {
    console.error("[lead] Could not deliver quote request to invoicing");
    return false;
  }
}
