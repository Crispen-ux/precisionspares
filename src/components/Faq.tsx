import type { Faq } from "@/lib/content";
import { JsonLd } from "./JsonLd";

export function FaqList({ faqs, dark = false }: { faqs: Faq[]; dark?: boolean }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className={`divide-y ${dark ? "divide-[#243a50]" : "divide-line"} border-y ${dark ? "border-[#243a50]" : "border-line"}`}>
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex min-h-[64px] cursor-pointer items-center justify-between gap-6 py-4 text-left">
              <span className="font-display text-lg font-semibold leading-snug sm:text-xl">{f.q}</span>
              <span
                aria-hidden="true"
                className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current text-xl leading-none transition-transform"
              >
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-6 pr-12 opacity-85">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
