"use client";

import Link from "next/link";
import { useId, type ReactNode } from "react";
import { WhatsAppIcon, WhatsAppLink } from "@/components/ContactLinks";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-5 shadow-[0_1px_0_rgba(11,23,34,0.04)] sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function NumField({
  label,
  value,
  onChange,
  unit,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  unit?: string;
  hint?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          className={`field field-light ${unit ? "pr-16" : ""}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={hint ? `${id}-hint` : undefined}
        />
        {unit && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-steel">{unit}</span>
        )}
      </div>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-steel">
          {hint}
        </p>
      )}
    </div>
  );
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hint?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        type="text"
        autoComplete="off"
        autoCapitalize="characters"
        spellCheck={false}
        className="field field-light font-mono"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-steel">
          {hint}
        </p>
      )}
    </div>
  );
}

export function Segmented<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-semibold">{label}</legend>
      <div className="inline-flex flex-wrap gap-1 rounded-xl bg-panel p-1">
        {options.map((o) => {
          const on = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o.value)}
              className={`min-h-[40px] rounded-lg px-3.5 text-sm font-semibold transition-colors ${
                on ? "bg-ink text-paper" : "text-ink-2 hover:bg-white"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Chips({
  options,
  value,
  onPick,
  label,
}: {
  options: string[];
  value: string;
  onPick: (v: string) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onPick(o)}
          className={`min-h-[40px] rounded-lg border px-3.5 text-sm font-medium transition-colors ${
            value === o ? "border-ink bg-ink text-paper" : "border-line bg-white hover:border-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

/** Panel-meter style result. */
export function Readout({
  label,
  value,
  unit,
  note,
  tone = "normal",
}: {
  label: string;
  value: string;
  unit?: string;
  note?: string;
  tone?: "normal" | "warn";
}) {
  return (
    <div className="readout">
      <p className="text-sm text-[#a9b9c6]">{label}</p>
      <p
        className={`mt-1 font-mono text-[2rem] leading-none sm:text-[2.3rem] ${
          tone === "warn" ? "text-[#ff9d92]" : "text-amber"
        }`}
        aria-live="polite"
      >
        {value}
        {unit && <span className="ml-2 text-base text-[#a9b9c6]">{unit}</span>}
      </p>
      {note && <p className="mt-2 text-sm text-[#a9b9c6]">{note}</p>}
    </div>
  );
}

export function Notice({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warn" }) {
  return (
    <p
      role={tone === "warn" ? "alert" : undefined}
      className={`rounded-xl border px-4 py-3 text-[0.95rem] ${
        tone === "warn" ? "border-[#e9b2ab] bg-[#fdf1ef] text-[#7a2a21]" : "border-line bg-panel text-ink-2"
      }`}
    >
      {children}
    </p>
  );
}

/** Turns a result into a lead: WhatsApp with the numbers filled in, or the quote form. */
export function ToolCta({ summary, label = "Need the part?" }: { summary: string; label?: string }) {
  return (
    <div className="rounded-2xl bg-ink p-5 text-paper on-dark sm:p-6">
      <h3 className="text-xl text-paper">{label}</h3>
      <p className="mt-1 text-[0.95rem] text-[#b9c8d4]">
        Send these details to an engineer and get availability, lead time and price.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <WhatsAppLink
          where="tool_result"
          message={`Hi Precision Spares, ${summary}`}
          className="btn btn-amber"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp these details
        </WhatsAppLink>
        <Link href="/contact-industrial-automation-supplier#quote" className="btn btn-ghost text-paper">
          Request a quote
        </Link>
      </div>
    </div>
  );
}
