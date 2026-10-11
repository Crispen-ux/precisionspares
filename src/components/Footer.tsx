import Link from "next/link";
import { Logo } from "./Logo";
import { CallLink, WhatsAppLink, WhatsAppIcon } from "./ContactLinks";
import { brandsList, servicesList, sparesList } from "@/lib/content";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = 2026;
  return (
    <footer className="on-dark bg-ink text-[#c4d0da]">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed">
            Industrial automation and electrical spares for South African plants, backed by real engineering expertise.
          </p>
          <WhatsAppLink
            where="footer"
            className="btn btn-amber mt-5 !min-h-[44px] !px-4 !py-2.5 text-[0.95rem]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Message us on WhatsApp
          </WhatsAppLink>
        </div>

        <nav aria-label="Spares">
          <h3 className="mb-3 text-base text-paper">Spares</h3>
          <ul className="space-y-2 text-[0.95rem]">
            {sparesList.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-white hover:underline">{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Solutions and services">
          <h3 className="mb-3 text-base text-paper">Solutions</h3>
          <ul className="space-y-2 text-[0.95rem]">
            {brandsList.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-white hover:underline">{s.name}</Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-3 mt-6 text-base text-paper">Services</h3>
          <ul className="space-y-2 text-[0.95rem]">
            {servicesList.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-white hover:underline">{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h3 className="mb-3 text-base text-paper">Resources</h3>
          <ul className="space-y-2 text-[0.95rem]">
            <li><Link href="/obsolete-parts" className="hover:text-white hover:underline">Obsolete parts</Link></li>
            <li><Link href="/resources" className="hover:text-white hover:underline">All resources</Link></li>
            <li><Link href="/insights" className="hover:text-white hover:underline">Guides</Link></li>
            <li><Link href="/resources/tools/part-number-identifier" className="hover:text-white hover:underline">Part number identifier</Link></li>
            <li><Link href="/resources/tools/motor-current-calculator" className="hover:text-white hover:underline">Motor current calculator</Link></li>
            <li><Link href="/resources/glossary" className="hover:text-white hover:underline">Glossary</Link></li>
            <li><Link href="/spares-by-series" className="hover:text-white hover:underline">Spares by series</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-3 text-base text-paper">Talk to an engineer</h3>
          <p className="text-[0.95rem]">
            <CallLink where="footer" className="text-xl font-semibold text-paper hover:text-amber" />
          </p>
          {SITE.email && (
            <p className="mt-1 text-[0.95rem]">
              <a href={`mailto:${SITE.email}`} className="hover:text-white hover:underline">{SITE.email}</a>
            </p>
          )}
          <p className="mt-4 text-[0.95rem]">Open every day, 07:00 to 17:00</p>
          <p className="mt-1 text-[0.95rem]">Delivery across South Africa</p>
          <Link href="/contact-industrial-automation-supplier#quote" className="btn btn-ghost mt-5 !min-h-[44px] !px-4 !py-2.5 text-[0.95rem] text-paper">
            Request a quote
          </Link>
        </div>
      </div>
      <div className="border-t border-[#1d3246]">
        <div className="container-x flex flex-col gap-2 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Precision Spares. All brand names belong to their respective owners.</p>
          <p className="flex gap-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
