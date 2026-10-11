"use client";

import Link from "next/link";
import { CallLink, PhoneIcon, WhatsAppIcon, WhatsAppLink } from "./ContactLinks";

/** Mobile: fixed bottom action bar. Desktop: single WhatsApp bubble. */
export function StickyActions() {
  return (
    <>
      <div data-sticky-actions className="on-dark fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-[#243a50] bg-ink p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
        <CallLink
          where="sticky_bar"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-lg bg-ink-3 text-xs font-semibold text-paper"
        >
          <PhoneIcon className="h-5 w-5" />
          Call
        </CallLink>
        <WhatsAppLink
          where="sticky_bar"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-lg bg-ink-3 text-xs font-semibold text-paper"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </WhatsAppLink>
        <Link
          href="/contact-industrial-automation-supplier#quote"
          className="flex min-h-[52px] items-center justify-center rounded-lg bg-amber text-sm font-bold text-ink"
        >
          Get a quote
        </Link>
      </div>

      <WhatsAppLink
        where="floating"
        className="no-print fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-105 md:flex"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="sr-only">Message us on WhatsApp</span>
      </WhatsAppLink>
    </>
  );
}
