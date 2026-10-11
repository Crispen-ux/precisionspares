import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, readMinutes, relatedArticles } from "@/lib/insights";
import { ArticleBody, headingsOf, slugify } from "@/components/ArticleBody";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { getTool } from "@/lib/resources";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.date },
  };
}

const fmt = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const heads = headingsOf(a.body);
  const related = relatedArticles(a.slug, 3);
  const tools = (a.tools ?? []).map(getTool).filter((t): t is NonNullable<typeof t> => !!t);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.description,
            datePublished: a.date,
            dateModified: a.date,
            author: { "@type": "Organization", name: SITE.name },
            publisher: { "@id": `${SITE.url}/#organization` },
            mainEntityOfPage: `${SITE.url}/insights/${a.slug}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
              { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE.url}/insights` },
              { "@type": "ListItem", position: 3, name: a.title, item: `${SITE.url}/insights/${a.slug}` },
            ],
          },
        ]}
      />
      <section className="grid-bg bg-panel">
        <div className="container-x py-12 md:py-16">
          <Link href="/insights" className="text-sm font-medium underline underline-offset-4">
            All guides
          </Link>
          <p className="mt-4 text-sm font-semibold text-steel">{a.category}</p>
          <h1 className="mt-1 max-w-3xl text-4xl sm:text-5xl">{a.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-2">{a.description}</p>
          <p className="mt-4 text-steel">
            {fmt(a.date)} &middot; {readMinutes(a)} min read
          </p>
        </div>
      </section>

      <section className="bg-paper py-10 md:py-14">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <article>
            {heads.length > 2 && (
              <details className="mb-6 rounded-xl border border-line bg-white p-4 lg:hidden">
                <summary className="cursor-pointer font-semibold">In this guide</summary>
                <ol className="mt-3 space-y-1.5 text-[0.95rem]">
                  {heads.map((h) => (
                    <li key={h}><a href={`#${slugify(h)}`} className="underline-offset-4 hover:underline">{h}</a></li>
                  ))}
                </ol>
              </details>
            )}
            <ArticleBody body={a.body} />

            {tools.length > 0 && (
              <div className="mt-10 rounded-2xl border border-line bg-white p-5">
                <h2 className="text-xl">Related tools</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <li key={t.slug}>
                      <Link href={`/resources/tools/${t.slug}`} className="inline-flex min-h-[44px] items-center rounded-full border border-line bg-paper px-4 font-medium hover:border-ink">
                        {t.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24">
            {heads.length > 2 && (
              <nav aria-label="In this guide" className="hidden rounded-2xl border border-line bg-white p-5 lg:block">
                <h2 className="text-lg">In this guide</h2>
                <ol className="mt-3 space-y-2 text-[0.95rem]">
                  {heads.map((h) => (
                    <li key={h}><a href={`#${slugify(h)}`} className="text-ink-2 underline-offset-4 hover:text-ink hover:underline">{h}</a></li>
                  ))}
                </ol>
              </nav>
            )}
            <LeadForm
              idPrefix={`art-${a.slug}`}
              title="Need a part?"
              subtitle="Send the part number and an engineer replies with availability and price."
              topic={`Guide: ${a.slug}`}
            />
          </aside>
        </div>
      </section>

      <section className="bg-panel py-12 md:py-16">
        <div className="container-x">
          <h2 className="text-2xl sm:text-3xl">More guides</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/insights/${r.slug}`} className="block h-full rounded-2xl border border-line bg-paper p-5 hover:border-ink">
                  <span className="text-sm text-steel">{r.category}</span>
                  <span className="mt-1 block font-display text-lg font-semibold leading-snug">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
