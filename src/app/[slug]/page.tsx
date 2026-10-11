import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { Photo } from "@/components/Photo";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Bp01Showcase } from "@/components/Bp01Showcase";
import { CallLink, WhatsAppLink, PhoneIcon, WhatsAppIcon } from "@/components/ContactLinks";
import {
  getHub,
  getLanding,
  hubs,
  landings,
  landingsByKind,
  type Landing,
} from "@/lib/content";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return [...landings.map((l) => ({ slug: l.slug })), ...hubs.map((h) => ({ slug: h.slug }))];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = getLanding(slug);
  const h = getHub(slug);
  const meta = l ?? h;
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: meta.title, description: meta.description, url: `${SITE.url}/${slug}` },
  };
}

const KIND_LABEL: Record<Landing["kind"], string> = {
  spares: "Spares",
  brand: "Solutions",
  service: "Services",
  industry: "Industries",
  series: "Series",
};
const KIND_HUB: Record<Landing["kind"], string> = {
  spares: "/industrial-automation-spares",
  brand: "/plc-automation-solutions",
  service: "/engineering-services",
  industry: "/applications",
  series: "/spares-by-series",
};

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const landing = getLanding(slug);
  const hub = getHub(slug);
  if (!landing && !hub) notFound();

  if (hub) {
    const items = landingsByKind(hub.kind);
    return (
      <>
        <section className="grid-bg bg-panel">
          <div className="container-x py-14 md:py-20">
            <h1 className="max-w-3xl text-4xl sm:text-6xl">{hub.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-2 sm:text-xl">{hub.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-industrial-automation-supplier#quote" className="btn btn-ink">
                Request a quote
              </Link>
              <CallLink where={`hub_${slug}`} className="btn btn-ghost text-ink">
                <PhoneIcon className="h-5 w-5" />
                {SITE.phoneDisplay}
              </CallLink>
            </div>
          </div>
        </section>

        <section className="bg-paper py-14 md:py-20">
          <div className="container-x">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/${l.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(11,23,34,0.35)]"
                  >
                    {l.image && (
                      <Photo src={l.image} alt={l.imageAlt ?? l.name} className="aspect-[16/9]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      {l.kind === "series" && l.formBrand && (
                        <p className="mb-2 w-fit rounded-md bg-panel px-2 py-0.5 text-xs font-semibold text-ink-2">{l.formBrand}</p>
                      )}
                      <h2 className="text-xl">{l.name}</h2>
                      <p className="mt-2 text-[0.97rem] text-steel">{l.intro}</p>
                      <span className="mt-auto pt-4 font-semibold underline decoration-amber decoration-2 underline-offset-4">
                        See {l.name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-panel py-14 md:py-20">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl sm:text-4xl">About {hub.name.toLowerCase()}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-2">
              {hub.content.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-paper py-14 md:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="text-3xl sm:text-4xl">Common questions</h2>
            <FaqList faqs={hub.faqs} />
          </div>
        </section>

        <section className="on-dark grid-bg-dark bg-ink py-14 text-paper md:py-20">
          <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl">Don&apos;t see what you need?</h2>
              <p className="mt-4 max-w-lg text-lg text-[#b9c8d4]">
                Send the part number or a photo of the nameplate. If we can source it, we will tell you the lead time and price.
              </p>
            </div>
            <div id="quote" className="scroll-mt-24">
              <LeadForm idPrefix={`hub-${slug}`} topic={hub.name} />
            </div>
          </div>
        </section>
      </>
    );
  }

  const l = landing!;
  const siblings = landingsByKind(l.kind).filter((s) => s.slug !== l.slug);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": l.kind === "service" ? "Service" : "WebPage",
    name: l.title,
    description: l.description,
    url: `${SITE.url}/${l.slug}`,
    ...(l.kind === "service"
      ? { provider: { "@id": `${SITE.url}/#organization` }, areaServed: "ZA" }
      : { isPartOf: { "@id": `${SITE.url}/#organization` } }),
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: KIND_LABEL[l.kind], item: `${SITE.url}${KIND_HUB[l.kind]}` },
      { "@type": "ListItem", position: 3, name: l.name, item: `${SITE.url}/${l.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[pageSchema, crumbs]} />

      {/* Hero with form */}
      <section className="grid-bg bg-panel">
        <div className="container-x grid items-start gap-10 py-10 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-steel">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="underline-offset-4 hover:underline">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href={KIND_HUB[l.kind]} className="underline-offset-4 hover:underline">{KIND_LABEL[l.kind]}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink">{l.name}</li>
              </ol>
            </nav>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.4rem]">{l.h1}</h1>
            <p className="mt-5 max-w-xl text-lg text-ink-2 sm:text-xl">{l.intro}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallLink where={`page_${l.slug}`} className="btn btn-ink">
                <PhoneIcon className="h-5 w-5" />
                {SITE.phoneDisplay}
              </CallLink>
              <WhatsAppLink
                where={`page_${l.slug}`}
                message={`Hi Precision Spares, I need a quote for ${l.leadTopic}: `}
                className="btn btn-ghost text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp us
              </WhatsAppLink>
            </div>

            {l.image && (
              <Photo
                src={l.image}
                alt={l.imageAlt ?? l.name}
                priority
                contain={l.image.startsWith("/")}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="mt-8 hidden aspect-[16/8] rounded-2xl lg:block"
              />
            )}
          </div>

          <div id="quote" className="scroll-mt-24">
            <LeadForm
              idPrefix={`lp-${l.slug}`}
              title={`Request a quote: ${l.name}`}
              defaultBrand={l.formBrand}
              topic={l.leadTopic}
            />
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="bg-paper py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">{l.coversLabel}</h2>
            {l.image && (
              <Photo src={l.image} alt={l.imageAlt ?? l.name} contain={l.image.startsWith("/")} className="mt-6 aspect-[16/10] rounded-2xl lg:hidden" sizes="100vw" />
            )}
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {l.covers.map((c) => (
              <li key={c} className="flex gap-3 rounded-xl border border-line bg-white p-4">
                <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-live" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {l.slug === "industrial-burner-control-boxes" && <Bp01Showcase />}

      {/* Highlights */}
      <section className="bg-panel py-14 md:py-20">
        <div className="container-x">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">How we handle {l.name.toLowerCase()} requests</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {l.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="text-xl">{h.title}</h3>
                <p className="mt-2 text-ink-2">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-paper py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">About {l.name.toLowerCase()} from Precision Spares</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-2">
            {l.content.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className="text-3xl sm:text-4xl">Common questions</h2>
          <FaqList faqs={l.faqs} />
        </div>
      </section>

      {/* Second RFQ form */}
      <section className="on-dark grid-bg-dark bg-ink py-14 text-paper md:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">Ready to request a quote?</h2>
            <p className="mt-4 max-w-lg text-lg text-[#b9c8d4]">
              Send the part number or a photo of the nameplate for {l.name.toLowerCase()}. An engineer replies with availability, source, condition and lead time.
            </p>
          </div>
          <div>
            <LeadForm
              idPrefix={`lp2-${l.slug}`}
              title={`Request a quote: ${l.name}`}
              defaultBrand={l.formBrand}
              topic={l.leadTopic}
            />
          </div>
        </div>
      </section>

      {/* Urgent band */}
      <section className="on-dark grid-bg-dark bg-ink text-paper">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl">Need it urgently?</h2>
            <p className="mt-2 max-w-lg text-[#b9c8d4]">
              Call or WhatsApp the nameplate. Every day, 07:00 to 17:00.
              {" "}Part discontinued?{" "}
              <Link href="/obsolete-parts" className="underline decoration-amber decoration-2 underline-offset-4">How we source obsolete parts</Link>.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CallLink where={`urgent_${l.slug}`} className="btn btn-amber">
              <PhoneIcon className="h-5 w-5" />
              {SITE.phoneDisplay}
            </CallLink>
            <WhatsAppLink where={`urgent_${l.slug}`} className="btn btn-ghost text-paper">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-paper py-14 md:py-20">
        <div className="container-x">
          <h2 className="text-2xl sm:text-3xl">More in {KIND_LABEL[l.kind].toLowerCase()}</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="inline-flex min-h-[44px] items-center rounded-full border border-line bg-white px-4 font-medium hover:border-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
