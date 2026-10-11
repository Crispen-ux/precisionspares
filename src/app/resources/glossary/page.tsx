import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { glossary, glossaryByLetter, termId } from "@/lib/glossary";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industrial Automation Glossary: PLC, VFD, HMI and More",
  description:
    "Plain-language definitions of industrial automation terms: PLC, VFD, HMI, 4–20 mA, IP rating, derating, soft starter, MLFB, obsolescence and more.",
  alternates: { canonical: "/resources/glossary" },
};

export default function GlossaryPage() {
  const groups = glossaryByLetter();
  const known = new Set(glossary.map((g) => g.term.toLowerCase()));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Industrial automation glossary",
          url: `${SITE.url}/resources/glossary`,
          hasDefinedTerm: glossary.map((g) => ({
            "@type": "DefinedTerm",
            name: g.term,
            description: g.def,
            url: `${SITE.url}/resources/glossary#${termId(g.term)}`,
          })),
        }}
      />
      <section className="grid-bg bg-panel">
        <div className="container-x py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-steel">
            <Link href="/resources" className="underline-offset-4 hover:underline">Resources</Link> / <span className="text-ink">Glossary</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-6xl">Industrial automation glossary</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-2">
            {glossary.length} terms in plain language. If a term is missing or unclear, tell us and we will add it.
          </p>
          <nav aria-label="Jump to letter" className="mt-6 flex flex-wrap gap-1.5">
            {groups.map(([l]) => (
              <a key={l} href={`#letter-${l}`} className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white font-semibold hover:border-ink">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-paper py-10 md:py-14">
        <div className="container-x max-w-4xl">
          {groups.map(([letter, terms]) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-24 border-t border-line py-8 first:border-t-0">
              <h2 className="font-display text-4xl text-steel">{letter}</h2>
              <dl className="mt-4 space-y-6">
                {terms.map((t) => (
                  <div key={t.term} id={termId(t.term)} className="scroll-mt-24">
                    <dt className="font-display text-xl font-semibold">{t.term}</dt>
                    <dd className="mt-1 max-w-[68ch] text-ink-2">
                      {t.def}
                      {t.see && (
                        <span className="mt-1 block text-sm text-steel">
                          See also:{" "}
                          {t.see.map((s, i) => (
                            <span key={s}>
                              {i > 0 && ", "}
                              {known.has(s.toLowerCase()) ? (
                                <a href={`#${termId(s)}`} className="underline underline-offset-4">{s}</a>
                              ) : (
                                s
                              )}
                            </span>
                          ))}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="on-dark grid-bg-dark bg-ink py-14 text-paper md:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">Need a part or a second opinion?</h2>
            <p className="mt-4 max-w-lg text-lg text-[#b9c8d4]">Send the part number or describe the fault. An engineer replies.</p>
          </div>
          <div id="quote" className="scroll-mt-24">
            <LeadForm idPrefix="glossary" topic="Glossary" />
          </div>
        </div>
      </section>
    </>
  );
}
