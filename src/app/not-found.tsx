import Link from "next/link";
import { CallLink } from "@/components/ContactLinks";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grid-bg bg-panel">
      <div className="container-x py-20 text-center md:py-28">
        <h1 className="text-5xl sm:text-6xl">That page isn&apos;t here</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-ink-2">
          The link may be old. Send us the part number instead, or call {SITE.phoneDisplay}.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact-industrial-automation-supplier#quote" className="btn btn-ink">
            Request a quote
          </Link>
          <CallLink where="404" className="btn btn-ghost text-ink" />
        </div>
      </div>
    </section>
  );
}
