"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  stepOneSchema,
  stepTwoSchema,
  URGENCY,
  URGENCY_LABEL,
  type Urgency,
} from "@/lib/lead-schema";
import { BRAND_OPTIONS } from "@/lib/content";
import { captureAttribution, track, trackLead } from "@/lib/track";
import { SITE } from "@/lib/site";
import { WhatsAppLink, WhatsAppIcon, CallLink } from "./ContactLinks";

type Errors = Partial<Record<string, string>>;

const URGENCY_HINT: Record<Urgency, string> = {
  down: "We prioritise these",
  week: "Planned repair or order",
  planning: "Budget or project pricing",
};

const URGENCY_DOT: Record<Urgency, string> = {
  down: "bg-alarm",
  week: "bg-amber",
  planning: "bg-live",
};

export function LeadForm({
  title = "Get a quote",
  subtitle = "Tell us what you need. An engineer replies with availability, lead time and price.",
  defaultBrand = "",
  topic = "",
  idPrefix = "lead",
}: {
  title?: string;
  subtitle?: string;
  defaultBrand?: string;
  topic?: string;
  idPrefix?: string;
}) {
  const router = useRouter();
  const uid = useId();
  const id = (n: string) => `${idPrefix}-${uid}-${n}`;

  const [step, setStep] = useState<1 | 2>(1);
  const [part, setPart] = useState("");
  const [brand, setBrand] = useState(defaultBrand);
  const [urgency, setUrgency] = useState<Urgency | "">("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState("");
  const startedAt = useRef<number>(0);
  const started = useRef(false);
  const stepHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    track("quote_form_start", { topic });
  }

  function fieldErrors(issues: { path: PropertyKey[]; message: string }[]) {
    const out: Errors = {};
    for (const i of issues) {
      const k = String(i.path[0] ?? "form");
      if (!out[k]) out[k] = i.message;
    }
    return out;
  }

  function next(e: React.FormEvent) {
    e.preventDefault();
    const r = stepOneSchema.safeParse({ part, brand, urgency: urgency || undefined });
    if (!r.success) {
      setErrors(fieldErrors(r.error.issues));
      return;
    }
    setErrors({});
    setStep(2);
    track("quote_form_step2", { urgency, brand });
    requestAnimationFrame(() => stepHeading.current?.focus());
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const a = stepOneSchema.safeParse({ part, brand, urgency: urgency || undefined });
    const b = stepTwoSchema.safeParse({ name, company, phone, email, notes });
    if (!a.success || !b.success) {
      const merged = {
        ...(a.success ? {} : fieldErrors(a.error.issues)),
        ...(b.success ? {} : fieldErrors(b.error.issues)),
      };
      setErrors(merged);
      if (!a.success) setStep(1);
      return;
    }
    setErrors({});
    setBusy(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...a.data,
          ...b.data,
          topic,
          page: window.location.pathname,
          referrer: document.referrer,
          utm: captureAttribution(),
          website,
          startedAt: startedAt.current,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: Errors;
      };
      if (!res.ok || !data.ok) {
        if (data.fields) setErrors(data.fields);
        setServerError(
          data.error ??
            `Something went wrong. Please call ${SITE.phoneDisplay} or message us on WhatsApp.`,
        );
        setBusy(false);
        return;
      }
      trackLead({ urgency: a.data.urgency, brand: a.data.brand, topic });
      router.push(`/thank-you?u=${a.data.urgency}`);
    } catch {
      setServerError(
        `We could not reach the server. Please call ${SITE.phoneDisplay} or message us on WhatsApp.`,
      );
      setBusy(false);
    }
  }

  const err = (k: string) => errors[k];
  const describe = (k: string) => (err(k) ? id(`${k}-err`) : undefined);

  return (
    <div className="nameplate p-5 sm:p-7" onFocusCapture={markStarted}>
      <span className="rivet left-2.5 top-2.5" />
      <span className="rivet right-2.5 top-2.5" />
      <span className="rivet bottom-2.5 left-2.5" />
      <span className="rivet bottom-2.5 right-2.5" />

      <div className="on-dark">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              ref={stepHeading}
              tabIndex={-1}
              className="font-display text-[1.65rem] leading-tight text-paper outline-none sm:text-3xl"
            >
              {step === 1 ? title : "Where do we send it?"}
            </h2>
            <p className="mt-1.5 text-[0.95rem] leading-snug text-[#a9b9c6]">
              {step === 1
                ? subtitle
                : "We reply by phone or email. Your details are used only to answer this request."}
            </p>
          </div>
          <p className="shrink-0 rounded-md border border-[#34506a] px-2 py-1 font-mono text-xs text-[#a9b9c6]" aria-label={`Step ${step} of 2`}>
            {step}/2
          </p>
        </div>

        {/* Honeypot: hidden from people and assistive tech */}
        <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
          <label>
            Website
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
        </div>

        {step === 1 ? (
          <form onSubmit={next} noValidate className="mt-5 space-y-5">
            <div>
              <label htmlFor={id("part")} className="mb-1.5 block text-sm font-semibold text-paper">
                Part number or description
              </label>
              <textarea
                id={id("part")}
                rows={3}
                className="field resize-y"
                placeholder="e.g. 6ES7 313-5BG04-0AB0, or: 7.5 kW drive, 400 V, Profinet"
                value={part}
                onChange={(e) => setPart(e.target.value)}
                aria-invalid={!!err("part")}
                aria-describedby={describe("part")}
              />
              {err("part") && (
                <p id={id("part-err")} className="mt-1.5 text-sm text-[#ff9d92]">
                  {err("part")}
                </p>
              )}
            </div>

            <fieldset>
              <legend className="mb-1.5 text-sm font-semibold text-paper">Brand</legend>
              <div className="flex flex-wrap gap-2">
                {BRAND_OPTIONS.map((b) => {
                  const on = brand === b;
                  return (
                    <button
                      type="button"
                      key={b}
                      aria-pressed={on}
                      onClick={() => setBrand(on ? "" : b)}
                      className={`min-h-[40px] rounded-lg border px-3.5 text-sm font-medium transition-colors ${
                        on
                          ? "border-amber bg-amber text-ink"
                          : "border-[#34506a] bg-[#0f2132] text-paper hover:border-[#4a6a88]"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-1.5 text-sm font-semibold text-paper">How urgent is it?</legend>
              <div className="grid gap-2 sm:grid-cols-3" role="radiogroup" aria-describedby={describe("urgency")}>
                {URGENCY.map((u) => {
                  const on = urgency === u;
                  return (
                    <label
                      key={u}
                      className={`relative flex cursor-pointer flex-col gap-0.5 rounded-lg border px-3 py-2.5 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-amber ${
                        on
                          ? "border-amber bg-[#1b2f43]"
                          : "border-[#34506a] bg-[#0f2132] hover:border-[#4a6a88]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={id("urgency")}
                        value={u}
                        checked={on}
                        onChange={() => setUrgency(u)}
                        className="sr-only"
                      />
                      <span className="flex items-center gap-2 text-sm font-semibold text-paper">
                        <span className={`h-2.5 w-2.5 rounded-full ${URGENCY_DOT[u]}`} aria-hidden="true" />
                        {URGENCY_LABEL[u]}
                      </span>
                      <span className="text-xs text-[#a9b9c6]">{URGENCY_HINT[u]}</span>
                    </label>
                  );
                })}
              </div>
              {err("urgency") && (
                <p id={id("urgency-err")} className="mt-1.5 text-sm text-[#ff9d92]">
                  {err("urgency")}
                </p>
              )}
            </fieldset>

            <button type="submit" className="btn btn-amber w-full">
              Continue
            </button>
          </form>
        ) : (
          <form onSubmit={submit} noValidate className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={id("name")} className="mb-1.5 block text-sm font-semibold text-paper">
                  Your name
                </label>
                <input
                  id={id("name")}
                  className="field"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!err("name")}
                  aria-describedby={describe("name")}
                />
                {err("name") && (
                  <p id={id("name-err")} className="mt-1.5 text-sm text-[#ff9d92]">{err("name")}</p>
                )}
              </div>
              <div>
                <label htmlFor={id("company")} className="mb-1.5 block text-sm font-semibold text-paper">
                  Company <span className="font-normal text-[#a9b9c6]">(optional)</span>
                </label>
                <input
                  id={id("company")}
                  className="field"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={id("phone")} className="mb-1.5 block text-sm font-semibold text-paper">
                  Phone or WhatsApp
                </label>
                <input
                  id={id("phone")}
                  className="field"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="061 548 4573"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={!!err("phone")}
                  aria-describedby={describe("phone")}
                />
                {err("phone") && (
                  <p id={id("phone-err")} className="mt-1.5 text-sm text-[#ff9d92]">{err("phone")}</p>
                )}
              </div>
              <div>
                <label htmlFor={id("email")} className="mb-1.5 block text-sm font-semibold text-paper">
                  Email <span className="font-normal text-[#a9b9c6]">(optional)</span>
                </label>
                <input
                  id={id("email")}
                  className="field"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!err("email")}
                  aria-describedby={describe("email")}
                />
                {err("email") && (
                  <p id={id("email-err")} className="mt-1.5 text-sm text-[#ff9d92]">{err("email")}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor={id("notes")} className="mb-1.5 block text-sm font-semibold text-paper">
                Anything else? <span className="font-normal text-[#a9b9c6]">(optional)</span>
              </label>
              <textarea
                id={id("notes")}
                rows={2}
                className="field resize-y"
                placeholder="Quantity, machine, site location, or paste a longer parts list"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {serverError && (
              <p role="alert" className="rounded-lg border border-[#ff7b6e] bg-[#3a1a1a] px-3 py-2 text-sm text-[#ffd0ca]">
                {serverError}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="btn btn-ghost text-paper sm:w-auto"
                onClick={() => {
                  setStep(1);
                  requestAnimationFrame(() => stepHeading.current?.focus());
                }}
              >
                Back
              </button>
              <button type="submit" disabled={busy} className="btn btn-amber flex-1 disabled:opacity-70">
                {busy ? "Sending..." : "Request quote"}
              </button>
            </div>
          </form>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#243a50] pt-4 text-sm text-[#a9b9c6]">
          <span>Prefer to talk?</span>
          <CallLink where="form" className="font-semibold text-paper underline decoration-amber decoration-2 underline-offset-4" />
          <WhatsAppLink
            where="form"
            message="Hi Precision Spares, here is a photo of the nameplate: "
            className="inline-flex items-center gap-1.5 font-semibold text-paper underline decoration-amber decoration-2 underline-offset-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send a nameplate photo
          </WhatsAppLink>
        </div>
      </div>
    </div>
  );
}
