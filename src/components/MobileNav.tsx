"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Group = { label: string; href: string; items: { label: string; href: string }[] };

export function MobileNav({ nav, flat }: { nav: Group[]; flat: { label: string; href: string }[] }) {
  // The menu is "open" only for the page it was opened on, so navigating closes it.
  const pathname = usePathname();
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(open) : v;
    setOpenFor(next ? pathname : null);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenFor(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#2a4259] text-paper"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-ink px-5 pb-24 pt-4"
        >
          <ul className="space-y-1">
            {nav.map((g) => (
              <li key={g.label}>
                <details className="group rounded-lg">
                  <summary className="flex min-h-[48px] cursor-pointer items-center justify-between rounded-lg px-3 text-lg font-semibold text-paper">
                    {g.label}
                    <svg viewBox="0 0 12 12" className="h-3.5 w-3.5 transition group-open:rotate-180" aria-hidden="true">
                      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <ul className="mb-2 ml-3 border-l border-[#243a50] pl-3">
                    <li>
                      <Link href={g.href} className="block py-2 text-[0.95rem] font-medium text-amber">
                        All {g.label.toLowerCase()}
                      </Link>
                    </li>
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href} className="block py-2 text-[0.95rem] text-[#d5dee6]">
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            {flat.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-[48px] items-center rounded-lg px-3 text-lg font-semibold text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact-industrial-automation-supplier" className="flex min-h-[48px] items-center rounded-lg px-3 text-lg font-semibold text-paper">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
