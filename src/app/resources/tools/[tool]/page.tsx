import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toolComponents } from "@/components/tools";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { getTool, tools } from "@/lib/resources";
import { getArticle } from "@/lib/insights";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return tools.map((t) => ({ tool: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/resources/tools/[tool]">): Promise<Metadata> {
  const { tool } = await params;
  const t = getTool(tool);
  if (!t) return {};
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: `/resources/tools/${t.slug}` },
    openGraph: { title: t.title, description: t.description, url: `${SITE.url}/resources/tools/${t.slug}` },
  };
}

export default async function ToolPage({ params }: PageProps<"/resources/tools/[tool]">) {
  const { tool } = await params;
  const t = getTool(tool);
  const Tool = toolComponents[tool];
  if (!t || !Tool) notFound();

  const url = `${SITE.url}/resources/tools/${t.slug}`;
  const guides = t.guides.map(getArticle).filter((a): a is NonNullable<typeof a> => !!a);
  const others = tools.filter((x) => x.slug !== t.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: t.name,
            description: t.description,
            url,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR" },
            publisher: { "@id": `${SITE.url}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
              { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE.url}/resources` },
              { "@type": "ListItem", position: 3, name: t.name, item: url },
            ],
          },
        ]}
      />

      <section className="grid-bg bg-panel">
        <div className="container-x py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-steel">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="underline-offset-4 hover:underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/resources" className="underline-offset-4 hover:underline">Resources</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">{t.name}</li>
            </ol>
          </nav>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{t.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-2">{t.intro}</p>
        </div>
      </section>

      <section className="bg-paper py-10 md:py-14">
        <div className="container-x">
          <Tool />
        </div>
      </section>

      <section className="bg-panel py-12 md:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="text-3xl">How it works</h2>
            <div className="prose-ps mt-2">
              {t.how.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          {guides.length > 0 && (
            <aside>
              <h2 className="text-2xl">Read next</h2>
              <ul className="mt-4 space-y-3">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/insights/${g.slug}`} className="block rounded-xl border border-line bg-paper p-4 hover:border-ink">
                      <span className="font-display text-lg font-semibold leading-snug">{g.title}</span>
                      <span className="mt-1 block text-sm text-steel">{g.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className="text-3xl">Common questions</h2>
          <FaqList faqs={t.faqs} />
        </div>
      </section>

      <section className="on-dark grid-bg-dark bg-ink py-14 text-paper md:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">Send us the part number</h2>
            <p className="mt-4 max-w-lg text-lg text-[#b9c8d4]">
              Got your answer and need the part? An engineer replies with availability, lead time and price.
            </p>
            <h3 className="mt-10 text-xl text-paper">More tools</h3>
            <ul className="mt-3 space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/resources/tools/${o.slug}`} className="underline decoration-amber decoration-2 underline-offset-4 hover:text-amber">
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div id="quote" className="scroll-mt-24">
            <LeadForm idPrefix={`tool-${t.slug}`} topic={`Tool: ${t.leadTopic}`} />
          </div>
        </div>
      </section>
    </>
  );
}
