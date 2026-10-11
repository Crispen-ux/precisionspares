import type { Metadata } from "next";
import Link from "next/link";
import { ResourceFinder, type FinderItem } from "@/components/ResourceFinder";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { CATEGORIES, articles, readMinutes } from "@/lib/insights";
import { downloads, tools } from "@/lib/resources";
import { glossary, termId } from "@/lib/glossary";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources: Tools, Guides and Reference for Industrial Automation",
  description:
    "Free calculators, in-depth guides, a part-number identifier, an automation glossary and downloadable templates for maintenance and engineering teams in South Africa.",
  alternates: { canonical: "/resources" },
};

const finderItems: FinderItem[] = [
  ...tools.map((t) => ({ type: "Tool" as const, title: t.name, description: t.short, href: `/resources/tools/${t.slug}` })),
  ...articles.map((a) => ({ type: "Guide" as const, title: a.title, description: a.description, href: `/insights/${a.slug}` })),
  ...glossary.map((g) => ({ type: "Glossary" as const, title: g.term, description: g.def, href: `/resources/glossary#${termId(g.term)}` })),
  { type: "Reference", title: "Nameplate photo checklist", description: "A printable checklist of what to photograph and record before you ask for a quote.", href: "/resources/nameplate-checklist" },
  ...downloads.map((d) => ({ type: "Download" as const, title: d.name, description: d.description, href: d.file })),
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Precision Spares resources",
          url: `${SITE.url}/resources`,
          description: "Tools, guides and reference material for industrial automation maintenance teams.",
          publisher: { "@id": `${SITE.url}/#organization` },
        }}
      />

      <section className="bg-panel">
        <div className="container-x py-12 md:py-16">
          <h1 className="max-w-3xl text-4xl sm:text-6xl">Resources for the people who keep plants running</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-2 sm:text-xl">
            Calculators, field guides and reference material for maintenance and engineering teams. Use them to identify a part, size a replacement or plan spares, then send us the details.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[0.97rem]">
            <div><dt className="inline font-semibold">{tools.length}</dt> <dd className="inline text-steel">free tools</dd></div>
            <div><dt className="inline font-semibold">{articles.length}</dt> <dd className="inline text-steel">in-depth guides</dd></div>
            <div><dt className="inline font-semibold">{glossary.length}</dt> <dd className="inline text-steel">glossary terms</dd></div>
            <div><dt className="inline font-semibold">{downloads.length + 1}</dt> <dd className="inline text-steel">templates and checklists</dd></div>
          </dl>
        </div>
      </section>

      <ResourceFinder items={finderItems}>
        {/* TOOLS */}
        <section className="bg-paper py-12 md:py-16" aria-labelledby="tools-h">
          <div className="container-x">
            <h2 id="tools-h" className="text-3xl sm:text-4xl">Free tools</h2>
            <p className="mt-2 max-w-2xl text-steel">Quick answers for sizing, scaling and identifying. Every tool ends with a way to send us the details.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/resources/tools/${t.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(11,23,34,0.35)]"
                  >
                    <h3 className="text-xl">{t.name}</h3>
                    <p className="mt-2 text-[0.95rem] text-steel">{t.short}</p>
                    <span className="mt-auto pt-4 font-semibold underline decoration-amber decoration-2 underline-offset-4 group-hover:decoration-4">
                      Open the tool
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GUIDES */}
        <section className="bg-panel py-12 md:py-16" aria-labelledby="guides-h">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <h2 id="guides-h" className="text-3xl sm:text-4xl">Guides</h2>
                <p className="mt-2 max-w-2xl text-ink-2">Practical, vendor-neutral advice on identifying, selecting, fault finding and planning.</p>
              </div>
              <Link href="/insights" className="font-semibold underline decoration-amber decoration-2 underline-offset-4">
                All guides
              </Link>
            </div>
            <div className="mt-8 space-y-10">
              {CATEGORIES.map((c) => {
                const list = articles.filter((a) => a.category === c);
                if (!list.length) return null;
                return (
                  <div key={c}>
                    <h3 className="text-xl">{c}</h3>
                    <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {list.map((a) => (
                        <li key={a.slug}>
                          <Link href={`/insights/${a.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-5 hover:border-ink">
                            <span className="text-sm text-steel">{readMinutes(a)} min read</span>
                            <span className="mt-1 font-display text-xl font-semibold leading-snug">{a.title}</span>
                            <span className="mt-2 text-[0.95rem] text-steel">{a.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* REFERENCE + DOWNLOADS */}
        <section className="bg-paper py-12 md:py-16" aria-labelledby="ref-h">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 id="ref-h" className="text-3xl">Reference</h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                <li>
                  <Link href="/resources/glossary" className="block py-4 hover:bg-panel/60">
                    <span className="font-display text-lg font-semibold">Automation glossary</span>
                    <span className="block text-steel">{glossary.length} terms in plain language, from 4–20 mA to VFD.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tools/part-number-identifier" className="block py-4 hover:bg-panel/60">
                    <span className="font-display text-lg font-semibold">Part number prefix reference</span>
                    <span className="block text-steel">Siemens, Allen-Bradley, Delta and Schneider prefixes and what they mean.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/nameplate-checklist" className="block py-4 hover:bg-panel/60">
                    <span className="font-display text-lg font-semibold">Nameplate photo checklist</span>
                    <span className="block text-steel">What to photograph and write down. Printable.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/spares-by-series" className="block py-4 hover:bg-panel/60">
                    <span className="font-display text-lg font-semibold">Spares by series</span>
                    <span className="block text-steel">S7-300, ControlLogix, PowerFlex, Altivar and more, with what we source for each.</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl">Downloads</h2>
              <ul className="mt-5 space-y-4">
                {downloads.map((d) => (
                  <li key={d.file} className="rounded-2xl border border-line bg-white p-5">
                    <h3 className="text-xl">{d.name}</h3>
                    <p className="mt-2 text-steel">{d.description}</p>
                    <a href={d.file} download className="btn btn-ink mt-4 !min-h-[44px]">
                      Download {d.format}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ResourceFinder>

      <section className="on-dark grid-bg-dark bg-ink py-14 text-paper md:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">Found the part? Ask for the price.</h2>
            <p className="mt-4 max-w-lg text-lg text-[#b9c8d4]">
              Send the part number or a nameplate photo. An engineer replies with availability, lead time and price.
            </p>
          </div>
          <div id="quote" className="scroll-mt-24">
            <LeadForm idPrefix="resources" topic="Resources hub" />
          </div>
        </div>
      </section>
    </>
  );
}
