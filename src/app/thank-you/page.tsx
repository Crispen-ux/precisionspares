import type { Metadata } from "next";
import Link from "next/link";
import { CallLink, WhatsAppLink, PhoneIcon, WhatsAppIcon } from "@/components/ContactLinks";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request received",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <section className="grid-bg bg-panel">
      <div className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-live text-white" aria-hidden="true">
            <svg viewBox="0 0 20 20" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10.5l4 4 8-9" />
            </svg>
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl">We have your request</h1>
          <p className="mt-4 text-lg text-ink-2">
            An engineer will review it and come back to you with availability, lead time and price. We are open every day from 07:00 to 17:00.
          </p>

          <div className="mt-8 rounded-2xl border border-line bg-paper p-6 text-left">
            <h2 className="text-xl">If it can&apos;t wait</h2>
            <p className="mt-2 text-ink-2">
              Call or WhatsApp us and mention the part number you just sent. A photo of the nameplate speeds things up.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <CallLink where="thank_you" className="btn btn-ink">
                <PhoneIcon className="h-5 w-5" />
                {SITE.phoneDisplay}
              </CallLink>
              <WhatsAppLink where="thank_you" message="Hi Precision Spares, I just sent a quote request on your website. Here is the nameplate photo: " className="btn btn-ghost text-ink">
                <WhatsAppIcon className="h-5 w-5" />
                Send a nameplate photo
              </WhatsAppLink>
            </div>
          </div>

          <p className="mt-8">
            <Link href="/" className="font-semibold underline decoration-amber decoration-2 underline-offset-4">
              Back to the home page
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
