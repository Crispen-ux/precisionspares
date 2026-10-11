import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { CallLink, WhatsAppLink } from "@/components/ContactLinks";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nameplate Photo Checklist for Ordering Automation Spares",
  description:
    "A printable checklist of what to photograph and record on PLC modules, drives, motors and sensors before you ask for a quote.",
  alternates: { canonical: "/resources/nameplate-checklist" },
};

const SECTIONS = [
  {
    title: "Any part",
    items: [
      "A clear, straight-on photo of the label, in good light, with no glare",
      "The full order or catalogue number, typed out",
      "Any version, revision or firmware marking",
      "Quantity needed",
      "Machine or line it came from",
      "Is the machine down, needed this week, or planned?",
    ],
  },
  {
    title: "PLC and I/O modules",
    items: [
      "Order number and hardware version from the side or front label",
      "The CPU's firmware version, if you can read it from the software",
      "What the module connects to: digital, analogue, communication",
      "A photo of the LEDs and any fault light",
      "Whether you have a current program backup",
    ],
  },
  {
    title: "Drives",
    items: [
      "Drive label: model, rated current, supply voltage",
      "Motor nameplate: kW, volts, amps, rpm",
      "How the drive is controlled: terminals or network",
      "A photo of the control terminals and any option cards",
      "The fault code on the display",
    ],
  },
  {
    title: "Motors",
    items: [
      "Nameplate: kW, volts and connection, amps, rpm, frame size",
      "Mounting type: foot, flange B5 or B14",
      "Shaft diameter and length",
      "Any brake, encoder or thermistors",
      "Whether it runs from a drive",
    ],
  },
  {
    title: "Sensors and panel parts",
    items: [
      "The model number or a photo of the sensor",
      "Supply voltage and output type",
      "Connector or cable type",
      "Where it is fitted and what it detects",
      "For contactors and relays: coil voltage and current rating",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      <section className="bg-panel">
        <div className="container-x py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="no-print text-sm text-steel">
            <Link href="/resources" className="underline-offset-4 hover:underline">Resources</Link> / <span className="text-ink">Nameplate checklist</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Nameplate photo checklist</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-2">
            Send these details with your request and you can usually get a firm answer in one reply instead of three. Print it for the maintenance team.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrintButton />
            <WhatsAppLink where="checklist" className="btn btn-ghost no-print text-ink">WhatsApp a photo</WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="bg-paper py-10 md:py-14">
        <div className="container-x max-w-4xl">
          <div className="grid gap-5 md:grid-cols-2">
            {SECTIONS.map((s) => (
              <div key={s.title} className="break-inside-avoid rounded-2xl border border-line bg-white p-5">
                <h2 className="text-xl">{s.title}</h2>
                <ul className="mt-3 space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-ink" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-ink-2">
            Send to {SITE.name}: call <CallLink where="checklist" /> or request a quote at {SITE.url.replace("https://", "")}.
          </p>
        </div>
      </section>
    </>
  );
}
