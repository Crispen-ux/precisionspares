"use client";

import Link from "next/link";
import { useId, useMemo, useState, type ReactNode } from "react";

export type FinderItem = {
  type: "Tool" | "Guide" | "Glossary" | "Reference" | "Download";
  title: string;
  description: string;
  href: string;
};

/** Search box that swaps the page sections for matching results while a query is typed. */
export function ResourceFinder({ items, children }: { items: FinderItem[]; children: ReactNode }) {
  const [q, setQ] = useState("");
  const id = useId();
  const query = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const words = query.split(/\s+/);
    return items
      .map((it) => {
        const t = it.title.toLowerCase();
        const d = it.description.toLowerCase();
        let score = 0;
        for (const w of words) {
          if (t.includes(w)) score += 3;
          else if (d.includes(w)) score += 1;
          else return { it, score: 0 };
        }
        if (t.startsWith(query)) score += 2;
        return { it, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 14)
      .map((r) => r.it);
  }, [items, query]);

  return (
    <>
      <div className="grid-bg bg-panel">
        <div className="container-x pb-10 md:pb-14">
          <form role="search" onSubmit={(e) => e.preventDefault()} className="max-w-2xl">
            <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
              Search tools, guides and terms
            </label>
            <div className="relative">
              <svg viewBox="0 0 20 20" className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-steel" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="9" cy="9" r="6" />
                <path d="M14 14l4 4" />
              </svg>
              <input
                id={id}
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Try: VFD trips, 4-20 mA, S7-300, IP65"
                className="field field-light !min-h-[56px] pl-11 text-lg"
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>

      {query.length >= 2 ? (
        <section className="bg-paper py-10 md:py-14" aria-live="polite">
          <div className="container-x">
            <h2 className="text-2xl">
              {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{q.trim()}&rdquo;
            </h2>
            {results.length === 0 ? (
              <p className="mt-3 max-w-xl text-ink-2">
                Nothing matches yet. Try a part number prefix, a fault such as &ldquo;overvoltage&rdquo;, or ask an engineer directly on{" "}
                <Link href="/contact-industrial-automation-supplier#quote" className="font-semibold underline decoration-amber decoration-2 underline-offset-4">
                  the quote form
                </Link>
                .
              </p>
            ) : (
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {results.map((r) => (
                  <li key={r.type + r.href}>
                    <Link href={r.href} className="block h-full rounded-xl border border-line bg-white p-4 hover:border-ink">
                      <span className="rounded-md bg-panel px-2 py-0.5 text-xs font-semibold text-ink-2">{r.type}</span>
                      <span className="mt-2 block font-display text-lg font-semibold leading-snug">{r.title}</span>
                      <span className="mt-1 block text-[0.93rem] text-steel">{r.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ) : (
        children
      )}
    </>
  );
}
