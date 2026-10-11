import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { CallLink, WhatsAppLink, PhoneIcon, WhatsAppIcon } from "@/components/ContactLinks";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Precision Spares | Request a Quote",
  description:
    "Request a quote for industrial automation spares or speak to an engineer. Call, WhatsApp or send your part number. Open every day, 07:00 to 17:00.",
  alternates: { canonical: "/contact-industrial-automation-supplier" },
};

export default function ContactPage() {
  return (
    <section className="grid-bg bg-panel">
      <div className="container-x grid items-start gap-10 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <h1 className="text-4xl sm:text-6xl">Talk to an engineer</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-2 sm:text-xl">
            Send us the part number, or describe the fault. We reply with availability, lead time and price.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <CallLink where="contact_page" className="btn btn-ink !justify-start">
              <PhoneIcon className="h-5 w-5" />
              Call {SITE.phoneDisplay}
            </CallLink>
            <WhatsAppLink where="contact_page" className="btn btn-ghost !justify-start text-ink">
              <WhatsAppIcon className="h-5 w-5" />
              Message us on WhatsApp
            </WhatsAppLink>
          </div>

          <dl className="mt-10 space-y-5 text-[1.02rem]">
            <div>
              <dt className="font-display text-lg font-semibold">Opening hours</dt>
              <dd className="mt-1 text-ink-2">Monday to Sunday, 07:00 to 17:00</dd>
            </div>
            <div>
              <dt className="font-display text-lg font-semibold">Delivery</dt>
              <dd className="mt-1 text-ink-2">Nationwide, across South Africa</dd>
            </div>
            {SITE.email && (
              <div>
                <dt className="font-display text-lg font-semibold">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">{SITE.email}</a>
                </dd>
              </div>
            )}
            <div>
              <dt className="font-display text-lg font-semibold">What helps us reply faster</dt>
              <dd className="mt-1 text-ink-2">
                The full part number, a photo of the nameplate, the quantity, and whether the machine is down.
              </dd>
            </div>
          </dl>
        </div>

        <div id="quote" className="scroll-mt-24">
          <LeadForm idPrefix="contact" title="Request a quote" topic="Contact page" />
        </div>
      </div>
    </section>
  );
}
