import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CallLink, WhatsAppLink, PhoneIcon, WhatsAppIcon } from "@/components/ContactLinks";
import { seriesList, type Faq } from "@/lib/content";
import { SITE } from "@/lib/site";

const TITLE = "Obsolete and Discontinued Automation Parts in South Africa";
const DESC =
  "Looking for a discontinued PLC, drive, HMI or sensor? Send the part number. We check availability, state the source and condition of every part, and flag compatibility before you buy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/obsolete-parts" },
  openGraph: { title: TITLE, description: DESC, url: `${SITE.url}/obsolete-parts` },
};

const ROUTES = [
  { n: "1", t: "Same part, new old stock", d: "Unused stock from original production. Best when nothing on the machine should change." },
  { n: "2", t: "Same part, surplus", d: "Unused excess from another site or distributor. Ask for the origin in writing." },
  { n: "3", t: "Same part, refurbished or tested used", d: "An exact match when no unused stock exists. Needs clear test and warranty terms." },
  { n: "4", t: "Successor or compatible replacement", d: "A newer model that does the same job. May need wiring, program or parameter changes." },
  { n: "5", t: "Migrate the section", d: "When several parts are ageing, a staged upgrade can cost less than repeated emergency buys." },
];

const QUOTE_ITEMS = [
  { t: "Source", d: "Where the part comes from, in plain words." },
  { t: "Condition", d: "New, new old stock, surplus, refurbished or used." },
  { t: "Version", d: "Hardware and firmware version where it can be read." },
  { t: "Terms", d: "Warranty, returns and lead time." },
];

const FAQS: Faq[] = [
  {
    q: "How do I know if a part is really discontinued?",
    a: "Status belongs to an exact order number, so start with the full number on the label. Manufacturers publish lifecycle information for their products. Send us the number and we will tell you what we can find.",
  },
  {
    q: "What do I need to send?",
    a: "The full order number from the nameplate, or a clear photo of it. Tell us the machine it came from, the quantity, and whether it is down now.",
  },
  {
    q: "Will you tell me if a part is used or refurbished?",
    a: "Yes. Every quote should state the condition, the source, the version where it can be read, and the warranty and lead time, so you can compare like with like.",
  },
  {
    q: "What if the exact part cannot be found?",
    a: "We can look at a successor or compatible replacement and tell you what would need to change, such as wiring, program or parameters. Test any replacement before it goes into production.",
  },
  {
    q: "Can I plan ahead instead of waiting for a failure?",
    a: "Yes. Our obsolescence risk check gives a rough guide, and the critical spares guide helps decide what to hold on the shelf.",
  },
];

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: TITLE,
      description: DESC,
      url: `${SITE.url}/obsolete-parts`,
      isPartOf: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Obsolete parts", item: `${SITE.url}/obsolete-parts` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schema} />

      <section className="grid-bg bg-panel">
        <div className="container-x grid items-start gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl sm:text-6xl">Can&apos;t find a discontinued automation part?</h1>
            <p className="mt-5 max-w-xl text-lg text-ink-2 sm:text-xl">
              Send us the part number. We check what can be sourced and tell you the source, condition and lead time before you buy.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallLink where="obsolete_hero" className="btn btn-ink">
                <PhoneIcon className="h-5 w-5" />
                {SITE.phoneDisplay}
              </CallLink>
              <WhatsAppLink
                where="obsolete_hero"
                message="Hi, I need a hard-to-find part. Part number: "
                className="btn btn-ghost text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp the part number
              </WhatsAppLink>
            </div>
          </div>
          <div id="quote" className="scroll-mt-24">
            <LeadForm
              idPrefix="obsolete"
              topic="Obsolete / hard-to-find part"
              title="Request a hard-to-find part"
              subtitle="Send the part number. An engineer replies with what can be sourced, the condition and the lead time."
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="container-x">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Five routes when a part is discontinued</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-2">
            The right route depends on the machine, the part and how long you can wait.{" "}
            <Link href="/insights/what-to-do-when-a-part-is-discontinued" className="font-semibold underline decoration-amber decoration-2 underline-offset-4">
              Read the full guide
            </Link>
            .
          </p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((r) => (
              <li key={r.n} className="rounded-2xl border border-line bg-white p-5">
                <span className="font-mono text-sm font-semibold text-steel">Route {r.n}</span>
                <h3 className="mt-1 text-xl">{r.t}</h3>
                <p className="mt-2 text-[0.97rem] text-steel">{r.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-panel py-14 md:py-20">
        <div className="container-x">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">What every quote should tell you</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-2">
            With hard-to-find parts, the details decide the risk. See{" "}
            <Link href="/insights/new-surplus-refurbished-used-parts-explained" className="font-semibold underline decoration-amber decoration-2 underline-offset-4">
              what the condition terms mean
            </Link>
            .
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUOTE_ITEMS.map((q) => (
              <li key={q.t} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="text-xl">{q.t}</h3>
                <p className="mt-2 text-[0.97rem] text-steel">{q.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="container-x">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Find parts by platform</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {seriesList.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="flex min-h-[56px] items-center justify-between rounded-xl border border-line bg-white px-4 py-3 font-semibold transition-shadow hover:shadow-[0_12px_28px_-16px_rgba(11,23,34,0.35)]"
                >
                  {s.name}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-panel py-14 md:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">Is it really obsolete? Check before you panic</h2>
            <p className="mt-4 max-w-xl text-lg text-ink-2">
              A part may be phased out while a close variant is still sold, or a successor exists. Start with the exact order number.
            </p>
          </div>
          <ul className="space-y-3">
            <li>
              <Link href="/resources/tools/obsolescence-risk-assessment" className="block rounded-xl border border-line bg-white p-4 font-semibold hover:shadow-md">
                Obsolescence risk check <span className="block text-sm font-normal text-steel">A rough guide to how exposed a machine is.</span>
              </Link>
            </li>
            <li>
              <Link href="/resources/tools/part-number-identifier" className="block rounded-xl border border-line bg-white p-4 font-semibold hover:shadow-md">
                Part number identifier <span className="block text-sm font-normal text-steel">Decode the prefix on a label.</span>
              </Link>
            </li>
            <li>
              <Link href="/insights/obsolescence-planning-for-automation" className="block rounded-xl border border-line bg-white p-4 font-semibold hover:shadow-md">
                Obsolescence planning guide <span className="block text-sm font-normal text-steel">Plan ahead instead of reacting.</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="container-x">
          <h2 className="mb-8 text-3xl sm:text-4xl">Questions about hard-to-find parts</h2>
          <FaqList faqs={FAQS} />
        </div>
      </section>

      <section className="on-dark grid-bg-dark bg-ink py-14 text-paper md:py-20">
        <div className="container-x text-center">
          <h2 className="text-3xl sm:text-4xl">Can&apos;t find it anywhere? Tell us anyway.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#b9c8d4]">
            Send the number or a photo of the nameplate. We will tell you what we can find.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#quote" className="btn btn-amber">Request a part</Link>
            <CallLink where="obsolete_footer" className="btn btn-ghost text-paper">
              <PhoneIcon className="h-5 w-5" />
              {SITE.phoneDisplay}
            </CallLink>
          </div>
        </div>
      </section>
    </>
  );
}
