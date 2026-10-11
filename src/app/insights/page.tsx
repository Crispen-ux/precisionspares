import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, articles, readMinutes } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Guides: Practical Automation Spares and Fault-Finding Advice",
  description:
    "In-depth guides on identifying parts, choosing drives, fault finding PLCs and VFDs, power supplies, load shedding and obsolescence planning, from the engineers at Precision Spares.",
  alternates: { canonical: "/insights" },
};

const fmt = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function InsightsPage() {
  return (
    <>
      <section className="grid-bg bg-panel">
        <div className="container-x py-14 md:py-20">
          <h1 className="max-w-3xl text-4xl sm:text-6xl">Practical guides for plants that run on automation</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-2 sm:text-xl">
            How to identify the right part, choose a replacement drive, find a fault and plan spares before something stops.
          </p>
          <p className="mt-6">
            <Link href="/resources" className="font-semibold underline decoration-amber decoration-2 underline-offset-4">
              Also see the free tools, glossary and templates
            </Link>
          </p>
        </div>
      </section>
      <section className="bg-paper py-14 md:py-20">
        <div className="container-x space-y-12">
          {CATEGORIES.map((c) => {
            const list = articles.filter((a) => a.category === c);
            if (!list.length) return null;
            return (
              <div key={c}>
                <h2 className="text-2xl sm:text-3xl">{c}</h2>
                <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {list.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/insights/${a.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(11,23,34,0.35)]">
                        <p className="text-sm text-steel">
                          {fmt(a.date)} &middot; {readMinutes(a)} min read
                        </p>
                        <h3 className="mt-3 text-2xl">{a.title}</h3>
                        <p className="mt-3 text-steel">{a.description}</p>
                        <span className="mt-auto pt-5 font-semibold underline decoration-amber decoration-2 underline-offset-4">
                          Read the guide
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
