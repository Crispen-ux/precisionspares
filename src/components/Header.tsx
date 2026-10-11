import Link from "next/link";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { CallLink, PhoneIcon } from "./ContactLinks";
import { brandsList, industriesList, servicesList, sparesList } from "@/lib/content";

export const NAV = [
  {
    label: "Obsolete parts",
    href: "/obsolete-parts",
    items: [
      { label: "How we source them", href: "/obsolete-parts" },
      { label: "Obsolescence risk check", href: "/resources/tools/obsolescence-risk-assessment" },
      { label: "Spares by series", href: "/spares-by-series" },
      { label: "Discontinued-part guide", href: "/insights/what-to-do-when-a-part-is-discontinued" },
    ],
  },
  { label: "Spares", href: "/industrial-automation-spares", items: sparesList.map((s) => ({ label: s.name, href: `/${s.slug}` })) },
  {
    label: "Solutions",
    href: "/plc-automation-solutions",
    items: [
      ...brandsList.map((s) => ({ label: `${s.name} PLC solutions`, href: `/${s.slug}` })),
      { label: "Spares by series", href: "/spares-by-series" },
    ],
  },
  { label: "Services", href: "/engineering-services", items: servicesList.map((s) => ({ label: s.name, href: `/${s.slug}` })) },
  {
    label: "Monitoring",
    href: "/predictive-maintenance-plant-monitoring",
    items: [
      { label: "Plant monitoring app", href: "/predictive-maintenance-plant-monitoring" },
      { label: "Predictive maintenance", href: "/predictive-maintenance-plant-monitoring" },
      { label: "Burner control boxes (BP-01)", href: "/industrial-burner-control-boxes" },
      { label: "Engineering services", href: "/engineering-services" },
      { label: "Obsolescence risk check", href: "/resources/tools/obsolescence-risk-assessment" },
    ],
  },
  { label: "Industries", href: "/applications", items: industriesList.map((s) => ({ label: s.name, href: `/${s.slug}` })) },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Free tools", href: "/resources#tools-h" },
      { label: "Guides", href: "/insights" },
      { label: "Part number identifier", href: "/resources/tools/part-number-identifier" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Nameplate checklist", href: "/resources/nameplate-checklist" },
    ],
  },
] as const;

const FLAT = [{ label: "About", href: "/about" }] as const;

export function Header() {
  return (
    <header className="on-dark sticky top-0 z-40 border-b border-[#1d3246] bg-ink text-paper">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Precision Spares home" className="rounded-md">
          <Logo dark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {NAV.map((group) => (
            <div key={group.label} className="group relative">
              <Link
                href={group.href}
                className="inline-flex min-h-[44px] items-center gap-1 whitespace-nowrap rounded-md px-2.5 text-[0.95rem] font-medium text-[#d5dee6] hover:text-white"
              >
                {group.label}
                <svg viewBox="0 0 12 12" className="h-3 w-3 opacity-70" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-xl border border-[#243a50] bg-ink-2 p-2 opacity-0 shadow-2xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    className="block rounded-lg px-3 py-2 text-[0.93rem] text-[#d5dee6] hover:bg-ink-3 hover:text-white"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {FLAT.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-md px-2.5 text-[0.95rem] font-medium text-[#d5dee6] hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallLink
            where="header"
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-paper hover:text-amber md:inline-flex xl:hidden 2xl:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>061 548 4573</span>
          </CallLink>
          {/* .btn sets display, so hide the wrapper rather than the button itself */}
          <span className="hidden sm:block">
            <Link href="/contact-industrial-automation-supplier#quote" className="btn btn-amber !min-h-[42px] !px-4 !py-2 text-[0.95rem]">
              Get a quote
            </Link>
          </span>
          <MobileNav nav={NAV.map((g) => ({ label: g.label, href: g.href, items: [...g.items] }))} flat={[...FLAT]} />
        </div>
      </div>
    </header>
  );
}
