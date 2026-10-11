"use client";

import { useMemo, useState } from "react";
import { Card, Chips, Notice, TextField, ToolCta } from "./ToolUI";
import { identifyPart, prefixes } from "@/lib/resources";

const BRANDS = ["All", "Siemens", "Allen-Bradley", "Delta", "Schneider Electric"];

export function PartIdentifier() {
  const [input, setInput] = useState("");
  const [brand, setBrand] = useState("All");
  const match = useMemo(() => identifyPart(input), [input]);
  const rows = useMemo(() => prefixes.filter((p) => brand === "All" || p.brand === brand), [brand]);
  const typed = input.trim().length >= 3;

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <TextField
            label="Order or catalogue number"
            value={input}
            onChange={setInput}
            placeholder="6ES7 313-5BG04-0AB0"
            hint="Examples: 1756-L71, VFD022EL43A, TM221CE24R, ATV320U15N4B"
          />
        </Card>

        <div className="space-y-4">
          {match ? (
            <>
              <div className="readout">
                <p className="text-sm text-[#a9b9c6]">{match.entry.brand}</p>
                <p className="mt-1 font-display text-2xl text-amber">{match.entry.family}</p>
                <p className="mt-2 text-[#d5dee6]">{match.entry.kind}</p>
                <p className="mt-3 font-mono text-sm text-[#a9b9c6]">Matched prefix: {match.prefix}</p>
              </div>
              {match.entry.note && <Notice>{match.entry.note}</Notice>}
              {!match.exact && <Notice>This is a looser match inside a longer string. Check it against the label.</Notice>}
              <Notice>
                The prefix gives the family, not the exact variant. The full number, with version and revision blocks, decides whether a part fits.
              </Notice>
              <ToolCta summary={`I need a quote for part number ${input.trim()}. `} label="Need this part?" />
            </>
          ) : typed ? (
            <>
              <Notice tone="warn">No match in our prefix list. That does not mean we cannot source it.</Notice>
              <ToolCta summary={`Can you source part number ${input.trim()}? `} label="Send it to an engineer" />
            </>
          ) : (
            <Notice>Type or paste a number to identify it.</Notice>
          )}
        </div>
      </div>

      <section aria-labelledby="ref-h">
        <h2 id="ref-h" className="text-2xl sm:text-3xl">
          Prefix reference
        </h2>
        <p className="mt-2 max-w-2xl text-steel">
          Common prefixes for the four brands we support. It is a guide, not a complete catalogue.
        </p>
        <div className="mt-4">
          <Chips label="Filter by brand" options={BRANDS} value={brand} onPick={setBrand} />
        </div>
        <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-white">
          <table className="w-full min-w-[40rem] text-left text-[0.95rem]">
            <thead className="bg-panel">
              <tr>
                <th className="px-3 py-2.5 font-semibold">Prefix</th>
                <th className="px-3 py-2.5 font-semibold">Brand</th>
                <th className="px-3 py-2.5 font-semibold">Family</th>
                <th className="px-3 py-2.5 font-semibold">What it covers</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.brand + r.prefixes.join()} className="border-t border-line align-top">
                  <td className="px-3 py-2 font-mono text-sm">{r.prefixes.join(", ")}</td>
                  <td className="px-3 py-2">{r.brand}</td>
                  <td className="px-3 py-2 font-medium">{r.family}</td>
                  <td className="px-3 py-2 text-ink-2">
                    {r.kind}
                    {r.note && <span className="block text-sm text-steel">{r.note}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
