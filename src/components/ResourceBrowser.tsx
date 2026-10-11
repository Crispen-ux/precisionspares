"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Item = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryName: string;
  readMinutes: number;
};
type Cat = { id: string; name: string };

/** Searchable, filterable article list. */
export function ResourceBrowser({ items, categories }: { items: Item[]; categories: Cat[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter(
      (a) =>
        (cat === "all" || a.category === cat) &&
        (!needle || (a.title + " " + a.description).toLowerCase().includes(needle)),
    );
  }, [items, q, cat]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative md:w-96">
          <label htmlFor="res-search" className="sr-only">
            Search guides
          </label>
          <input
            id="res-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search guides, for example: VFD trip"
            className="field field-light"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
          {[{ id: "all", name: "All" }, ...categories].map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
              className={`min-h-[40px] rounded-full border px-3.5 text-sm font-medium transition-colors ${
                cat === c.id ? "border-ink bg-ink text-paper" : "border-line bg-white hover:border-ink"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-steel" aria-live="polite">
        {shown.length} {shown.length === 1 ? "guide" : "guides"}
      </p>

      {shown.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-line bg-white p-8 text-center">
          <p className="font-display text-xl font-semibold">No guide matches that yet</p>
          <p className="mt-2 text-steel">
            Ask an engineer instead: send the part number or fault and we will reply.
          </p>
          <Link href="/contact-industrial-automation-supplier#quote" className="btn btn-ink mt-4">
            Ask an engineer
          </Link>
        </div>
      ) : (
        <ul className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/insights/${a.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(11,23,34,0.35)]"
              >
                <p className="text-sm text-steel">
                  {a.categoryName} &middot; {a.readMinutes} min read
                </p>
                <h2 className="mt-3 text-xl leading-snug">{a.title}</h2>
                <p className="mt-3 text-[0.95rem] text-steel">{a.description}</p>
                <span className="mt-auto pt-5 font-semibold underline decoration-amber decoration-2 underline-offset-4">
                  Read the guide
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
