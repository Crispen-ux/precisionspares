import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { LeadForm } from "@/components/LeadForm";
import { BrandRail } from "@/components/TerminalStrip";
import { FaqList } from "@/components/Faq";
import { CallLink, WhatsAppLink, PhoneIcon, WhatsAppIcon } from "@/components/ContactLinks";
import { SITE, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Precision Spares",
  description:
    "Precision Spares supplies industrial automation spares from Siemens, Delta, Allen-Bradley and Schneider Electric, supported by real engineering expertise.",
  alternates: { canonical: "/about" },
};

const POINTS = [
  {
    t: "Fast sourcing",
    d: "When a plant is waiting on a part, speed and accuracy both matter. We check availability and lead time and tell you plainly.",
  },
  {
    t: "Expert technical support",
    d: "Requests are reviewed by people who understand PLCs, drives and control systems, so compatibility questions get a real answer.",
  },
  {
    t: "Trusted brands",
    d: "Parts are sourced from trusted manufacturers, backed by quality assurance.",
  },
];

const FAQS = [
  {
    q: "What does Precision Spares do?",
    a: "We supply hard-to-find and obsolete industrial automation spares — PLCs, drives, HMIs, sensors and control components — for plants across South Africa. Every request is reviewed by an engineer who understands the system.",
  },
  {
    q: "Which brands do you support?",
    a: "We support Siemens, Delta, Allen-Bradley and Schneider Electric systems, including S7-300, S7-1200, S7-1500, ControlLogix, CompactLogix, PowerFlex, Modicon, Altivar and more.",
  },
  {
    q: "Do you only supply parts, or can you help with technical questions?",
    a: "Both. Our engineers can help identify the right part, confirm compatibility, advise on obsolete parts and support installation and commissioning.",
  },
  {
    q: "Where are you based and do you deliver nationwide?",
    a: "We are based in South Africa and deliver to plants, mines and factories across the country. Tell us your location and we will confirm delivery options.",
  },
  {
    q: "Can you source parts that are no longer manufactured?",
    a: "Yes, this is our speciality. We check multiple channels for discontinued parts and, where a like-for-like option is no longer available, we advise on suitable replacements.",
  },
  {
    q: "How do I request a quote?",
    a: "Send the part number, a photo of the nameplate or a description of what you need through our quote form, WhatsApp or phone. An engineer will come back with availability, lead time and price.",
  },
  {
    q: "What information do you need to quote a part?",
    a: "The full part number or order number from the module label is best. A clear photo of the nameplate also works. Add the quantity and whether the job is urgent.",
  },
  {
    q: "Do you offer engineering services beyond spares supply?",
    a: "Yes. We offer PLC programming and support, fault finding and commissioning, turnkey automation projects, predictive maintenance and plant monitoring.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across manufacturing, food and beverage, mining and materials, energy and burners, and water and utilities — any industry that depends on industrial automation.",
  },
  {
    q: "How quickly can you respond to a quote request?",
    a: "We aim to respond to every request within business hours (07:00 to 17:00 daily). Urgent machine-down requests are prioritised — call or WhatsApp us for the fastest response.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="grid-bg bg-panel">
        <div className="container-x grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl sm:text-6xl">Spares supplied with engineering behind them</h1>
            <p className="mt-5 text-lg text-ink-2 sm:text-xl">
              Precision Spares is an industrial spares supplier in South Africa, providing reliable automation and control components to manufacturers, system integrators and maintenance teams across multiple industries.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-industrial-automation-supplier#quote" className="btn btn-ink">
                Request a quote
              </Link>
              <CallLink where="about" className="btn btn-ghost text-ink">
                <PhoneIcon className="h-5 w-5" />
                {SITE.phoneDisplay}
              </CallLink>
            </div>
          </div>
          <Photo
            src={img("industrial-spares-supplier-south-africa-1024x682.jpg")}
            alt="Industrial automation spares"
            priority
            className="aspect-[3/2] rounded-2xl"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">Who we are</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              Precision Spares was founded to solve a problem that every maintenance team in South Africa knows too well: when a critical automation component fails, finding a replacement is slow, uncertain and often expensive. Too often, the part you need is discontinued, hard to identify or locked behind a distributor who does not understand your system.
            </p>
            <p>
              We built Precision Spares to be the supplier we ourselves would want to work with. Every request is reviewed by an engineer who understands PLCs, drives, HMIs and control systems — not a call centre reading from a script. We check availability across multiple channels, tell you the source and condition of every part, and flag compatibility issues before you spend money on the wrong component.
            </p>
            <p>
              From a single discontinued module to a full panel rebuild, we treat every request with the same urgency and care. Our goal is simple: keep South African plants running.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-panel py-14 md:py-20">
        <div className="container-x">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">What you can expect from us</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {POINTS.map((p) => (
              <div key={p.t} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-xl">{p.t}</h3>
                <p className="mt-2 text-ink-2">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <BrandRail brands={["Siemens", "Delta", "Allen-Bradley", "Schneider Electric"]} />
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">What we supply</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              We supply a full range of industrial automation spares across the four platforms we are asked about most: Siemens, Delta, Allen-Bradley and Schneider Electric. This includes PLC CPUs and I/O modules, variable frequency drives, HMIs and operator panels, sensors, control components, panel components and motors.
            </p>
            <p>
              Beyond spares supply, our engineering team supports PLC programming, fault finding and commissioning, turnkey automation projects, predictive maintenance and plant monitoring. When a part is replaced, the program often needs attention too — we handle both so the line restarts properly.
            </p>
            <p>
              We also specialise in obsolete and discontinued parts. When a component is no longer manufactured, we check multiple sourcing channels and, where a like-for-like replacement is no longer available, we advise on the best alternative and what the changeover involves.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-panel py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className="text-3xl sm:text-4xl">Common questions</h2>
          <FaqList faqs={FAQS} />
        </div>
      </section>

      <section className="on-dark grid-bg-dark bg-ink py-14 text-paper md:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">Tell us what your plant needs</h2>
            <p className="mt-4 max-w-lg text-lg text-[#b9c8d4]">
              We support factories, processing plants and mining operations with reliable parts, fast sourcing and expert technical support.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallLink where="about_cta" className="btn btn-amber">
                <PhoneIcon className="h-5 w-5" />
                {SITE.phoneDisplay}
              </CallLink>
              <WhatsAppLink where="about_cta" className="btn btn-ghost text-paper">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp us
              </WhatsAppLink>
            </div>
          </div>
          <LeadForm idPrefix="about" topic="About page" />
        </div>
      </section>
    </>
  );
}
