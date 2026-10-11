import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { TerminalStrip, BrandRail } from "@/components/TerminalStrip";
import { Photo } from "@/components/Photo";
import { FaqList } from "@/components/Faq";
import { CallLink, WhatsAppLink, PhoneIcon, WhatsAppIcon } from "@/components/ContactLinks";
import { brandsList, homeFaqs, industriesList, servicesList, sparesList } from "@/lib/content";
import { SITE } from "@/lib/site";
import { tools } from "@/lib/resources";
import { articles, readMinutes } from "@/lib/insights";

export const metadata: Metadata = {
  title: { absolute: "Precision Spares | Hard-to-Find and Obsolete Industrial Automation Spares" },
  description:
    "Hard-to-find PLC, drive, HMI and sensor parts for South African plants. Send the part number and we check availability, state the source and condition, and flag compatibility before you buy.",
  alternates: { canonical: "/" },
};

const PROOF = [
  "Engineers review every request",
  "Delivery across South Africa",
  "Source and condition stated on every quote",
];

const MONITOR_ROWS = [
  { tag: "Motor M-12", metric: "Current", value: "14.8 A", state: "Watch", tone: "watch" },
  { tag: "Drive D-04", metric: "Temperature", value: "68 °C", state: "Watch", tone: "watch" },
  { tag: "Pump P-07", metric: "Run hours", value: "9 340 h", state: "Service due", tone: "due" },
  { tag: "Fan F-02", metric: "Status", value: "Running", state: "OK", tone: "ok" },
] as const;

const MONITOR_POINTS = [
  "Connects to the PLCs, drives and meters you already have",
  "Alerts by WhatsApp or email when a value drifts",
  "Run-hour and cycle counts to plan maintenance",
  "We source the spare before the part fails",
];

const STEPS = [
  {
    t: "Send what you have",
    d: "A part number, a photo of the nameplate, or a description of the machine. Rough is fine.",
  },
  {
    t: "We check the part",
    d: "An engineer confirms the exact match, availability and lead time, and flags anything that looks wrong.",
  },
  {
    t: "You get a clear quote",
    d: "Price, lead time and delivery in one reply, by phone, WhatsApp or email.",
  },
  {
    t: "Parts ship nationwide",
    d: "Approve the quote and we arrange delivery to your plant. Our engineers can help with installation if you need it.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grid-bg relative overflow-hidden bg-panel">
        <div className="container-x grid items-start gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <div className="lg:pt-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/70 px-3.5 py-1.5 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-live" aria-hidden="true" />
              Open every day, 07:00 to 17:00
            </p>
            <h1 className="mt-5 text-[2.7rem] sm:text-6xl lg:text-[4.4rem]">
              Part discontinued or machine down? Send us the part number.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-2 sm:text-xl">
              Hard-to-find PLC, drive, HMI and sensor parts for South African plants. We check availability, tell you the source and condition of every part, and flag compatibility before you buy.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallLink where="hero" className="btn btn-ink">
                <PhoneIcon className="h-5 w-5" />
                Call {SITE.phoneDisplay}
              </CallLink>
              <WhatsAppLink where="hero" className="btn btn-ghost text-ink">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp a nameplate photo
              </WhatsAppLink>
            </div>

            <ul className="mt-8 grid gap-x-6 gap-y-2 text-[0.97rem] sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {PROOF.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-live" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>

            <TerminalStrip className="mt-10 hidden max-w-xl md:flex" />
          </div>

          <div id="quote" className="scroll-mt-24">
            <LeadForm
              idPrefix="hero"
              title="Get a quote"
              subtitle="Tell us what you need. An engineer replies with availability, lead time and price."
            />
          </div>
        </div>
      </section>

      {/* PLANT MONITORING APP */}
      <section className="bg-paper py-16 md:py-24" aria-labelledby="monitor-h">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-panel px-3.5 py-1.5 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-live" aria-hidden="true" />
              Our plant monitoring app
            </p>
            <h2 id="monitor-h" className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
              Stop reacting to breakdowns. See them coming.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-ink-2">
              Our plant monitoring app watches the PLCs, drives and motors you already run, and warns you before a part fails. You plan the repair instead of losing production — and when an alert points to a part on its way out, we source the spare before it stops the line.
            </p>
            <ul className="mt-6 grid gap-x-6 gap-y-2 text-[0.97rem] sm:grid-cols-2">
              {MONITOR_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-live" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/predictive-maintenance-plant-monitoring" className="btn btn-ink">
                Explore plant monitoring
              </Link>
              <CallLink where="monitoring_home" className="btn btn-ghost text-ink">
                <PhoneIcon className="h-5 w-5" />
                Talk to an engineer
              </CallLink>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_18px_40px_-18px_rgba(11,23,34,0.35)] sm:p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-wide text-steel">PLANT MONITORING</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-live">
                <span className="h-2 w-2 rounded-full bg-live" aria-hidden="true" />
                LIVE
              </span>
            </div>
            <div className="mt-5 space-y-2.5">
              {MONITOR_ROWS.map((r) => (
                <div key={r.tag} className="flex items-center justify-between gap-3 rounded-xl border border-line bg-panel px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{r.tag}</p>
                    <p className="text-sm text-steel">{r.metric}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-ink">{r.value}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold text-ink">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${r.tone === "ok" ? "bg-live" : r.tone === "watch" ? "bg-amber" : "bg-alarm"}`}
                        aria-hidden="true"
                      />
                      {r.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-steel">
              Illustration of the monitoring dashboard. Signals depend on what your equipment can report.
            </p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-paper py-14 md:py-16" aria-labelledby="brands-h">
        <div className="container-x">
          <h2 id="brands-h" className="max-w-2xl text-3xl sm:text-4xl">
            The brands your plant already runs on
          </h2>
          <div className="mt-8">
            <BrandRail brands={["Siemens", "Delta", "Allen-Bradley", "Schneider Electric"]} />
          </div>
          <p className="mt-4 max-w-2xl text-steel">
            Not sure of the brand, or running something else? Send the part number anyway and we will tell you what we can source.
          </p>
        </div>
      </section>

      {/* OBSOLETE PARTS */}
      <section className="bg-paper pb-16 md:pb-24" aria-labelledby="obs-h">
        <div className="container-x">
          <div className="grid items-center gap-6 rounded-2xl border border-line bg-panel p-6 md:grid-cols-[1.4fr_1fr] md:p-10">
            <div>
              <h2 id="obs-h" className="text-3xl sm:text-4xl">Discontinued parts are our speciality</h2>
              <p className="mt-3 max-w-xl text-lg text-ink-2">
                When a part is no longer sold new, there are five routes to keep the machine running. We help you pick the right one and tell you the condition and source up front.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/obsolete-parts" className="btn btn-ink">How we source obsolete parts</Link>
              <Link href="/resources/tools/obsolescence-risk-assessment" className="btn btn-ghost text-ink">Check your obsolescence risk</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-paper pb-16 md:pb-24" aria-labelledby="cats-h">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="cats-h" className="max-w-xl text-3xl sm:text-4xl">
              What we source
            </h2>
            <Link href="/industrial-automation-spares" className="font-semibold underline decoration-amber decoration-2 underline-offset-4">
              See all spares
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sparesList.map((s, i) => (
              <li key={s.slug} className={[0, 3, 5].includes(i) ? "lg:col-span-2" : ""}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(11,23,34,0.35)]"
                >
                  <Photo
                    src={s.image}
                    alt={s.imageAlt ?? s.name}
                    className={[0, 3, 5].includes(i) ? "aspect-[16/7]" : "aspect-[16/9]"}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl">{s.name}</h3>
                    <p className="mt-2 text-[0.97rem] text-steel">{s.intro}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {s.covers.slice(0, 3).map((c) => (
                        <li key={c} className="rounded-md bg-panel px-2.5 py-1 text-[0.8rem] text-ink-2">
                          {c}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto pt-5 font-semibold underline decoration-amber decoration-2 underline-offset-4 group-hover:decoration-4">
                      Quote {s.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-panel py-16 md:py-24" aria-labelledby="how-h">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="how-h" className="text-3xl sm:text-4xl">
              From part number to quote, with an engineer in the loop
            </h2>
            <p className="mt-4 text-lg text-ink-2">
              Wrong part, wrong revision, wrong voltage. Every request is checked by someone who understands the system before a price goes out.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {STEPS.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-line bg-paper p-5">
                <span className="font-mono text-sm text-steel">Step {i + 1}</span>
                <h3 className="mt-1 text-xl">{s.t}</h3>
                <p className="mt-2 text-[0.97rem] text-ink-2">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="on-dark grid-bg-dark bg-ink text-paper" aria-labelledby="urgent-h">
        <div className="container-x grid items-center gap-8 py-14 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div>
            <h2 id="urgent-h" className="text-3xl sm:text-5xl">
              Production stopped? Skip the form.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#b9c8d4]">
              Call or WhatsApp us the nameplate. We respond with availability, lead time and price as quickly as the part allows.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <CallLink where="emergency" className="btn btn-amber !min-h-[60px] text-lg">
              <PhoneIcon className="h-6 w-6" />
              {SITE.phoneDisplay}
            </CallLink>
            <WhatsAppLink where="emergency" className="btn btn-ghost !min-h-[56px] text-paper">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp us the nameplate
            </WhatsAppLink>
            <p className="text-center text-sm text-[#8ea2b3]">Every day, 07:00 to 17:00</p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS BY BRAND */}
      <section className="bg-paper py-16 md:py-24" aria-labelledby="sol-h">
        <div className="container-x">
          <h2 id="sol-h" className="max-w-2xl text-3xl sm:text-4xl">
            Solutions by platform
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-steel">
            Spares replacement, upgrades and lifecycle support on the four platforms we are asked about most.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brandsList.map((b) => (
              <li key={b.slug}>
                <Link href={`/${b.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(11,23,34,0.35)]">
                  <Photo src={b.image} alt={b.imageAlt ?? b.name} className="aspect-[4/3]" sizes="(min-width: 1024px) 25vw, 50vw" />
                  <div className="p-5">
                    <h3 className="text-xl">{b.name}</h3>
                    <p className="mt-2 text-[0.95rem] text-steel">{b.intro}</p>
                    <span className="mt-3 inline-block font-semibold underline decoration-amber decoration-2 underline-offset-4">
                      {b.name} solutions
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES + INDUSTRIES */}
      <section className="bg-panel py-16 md:py-24" aria-labelledby="svc-h">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <h2 id="svc-h" className="text-3xl sm:text-4xl">
              Engineers behind the spares
            </h2>
            <p className="mt-3 text-lg text-ink-2">
              Not sure what failed? Our team can diagnose, program and commission as well as supply.
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {servicesList.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="group flex min-h-[72px] items-center justify-between gap-4 py-4">
                    <span>
                      <span className="block font-display text-lg font-semibold">{s.name}</span>
                      <span className="block text-[0.93rem] text-steel">{s.intro}</span>
                    </span>
                    <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:translate-x-1">
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4l6 6-6 6" /></svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="industries">
            <h2 className="text-3xl sm:text-4xl">Built for the plants that can&apos;t stop</h2>
            <p className="mt-3 text-lg text-ink-2">
              Different industries fail in different ways. See what we are commonly asked for in yours.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {industriesList.map((ind, i) => (
                <li key={ind.slug} className={i === 0 ? "col-span-2" : ""}>
                  <Link href={`/${ind.slug}`} className="group relative block overflow-hidden rounded-xl">
                    <Photo src={ind.image} alt={ind.imageAlt ?? ind.name} className={i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"} sizes="(min-width: 1024px) 25vw, 50vw" />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" aria-hidden="true" />
                    <span className="absolute inset-x-0 bottom-0 p-3.5 font-display text-lg font-semibold text-paper">{ind.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-paper py-16 md:py-24" aria-labelledby="res-h">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 id="res-h" className="max-w-2xl text-3xl sm:text-4xl">
                Free tools and field guides for maintenance teams
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-steel">
                Size a drive, decode a part number, scale a 4–20 mA signal, or read how to find a fault. Free to use.
              </p>
            </div>
            <Link href="/resources" className="font-semibold underline decoration-amber decoration-2 underline-offset-4">
              Browse all resources
            </Link>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.slice(0, 4).map((t) => (
              <li key={t.slug}>
                <Link href={`/resources/tools/${t.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(11,23,34,0.35)]">
                  <h3 className="text-xl">{t.name}</h3>
                  <p className="mt-2 text-[0.95rem] text-steel">{t.short}</p>
                  <span className="mt-auto pt-4 font-semibold underline decoration-amber decoration-2 underline-offset-4">Open the tool</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {articles.slice(3, 6).map((a) => (
              <li key={a.slug}>
                <Link href={`/insights/${a.slug}`} className="block h-full rounded-2xl bg-panel p-5 hover:bg-[#dde1db]">
                  <span className="text-sm text-steel">{a.category} &middot; {readMinutes(a)} min read</span>
                  <span className="mt-1 block font-display text-lg font-semibold leading-snug">{a.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-16 md:py-24" aria-labelledby="faq-h">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="faq-h" className="text-3xl sm:text-4xl">
              Questions we hear most
            </h2>
            <p className="mt-3 text-lg text-steel">
              Can&apos;t see yours? Call {SITE.phoneDisplay} and ask an engineer.
            </p>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="on-dark grid-bg-dark bg-ink py-16 text-paper md:py-24" aria-labelledby="final-h">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 id="final-h" className="text-3xl sm:text-5xl">
              Send the part number. We&apos;ll take it from there.
            </h2>
            <p className="mt-4 max-w-lg text-lg text-[#b9c8d4]">
              Requests are reviewed by engineers, not a call centre. You get availability, lead time and price in one reply.
            </p>
            <dl className="mt-8 space-y-3 text-[1.02rem]">
              <div className="flex gap-3">
                <dt className="w-20 text-[#8ea2b3]">Phone</dt>
                <dd><CallLink where="final" className="font-semibold hover:text-amber" /></dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 text-[#8ea2b3]">WhatsApp</dt>
                <dd>
                  <WhatsAppLink where="final" className="font-semibold hover:text-amber">Message us now</WhatsAppLink>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 text-[#8ea2b3]">Hours</dt>
                <dd>Every day, 07:00 to 17:00</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 text-[#8ea2b3]">Delivery</dt>
                <dd>Nationwide</dd>
              </div>
            </dl>
          </div>
          <LeadForm idPrefix="final" title="Get a quote" />
        </div>
      </section>
    </>
  );
}
