"use client";

import { useState } from "react";
import { Card, NumField, Notice, Readout, ToolCta } from "./ToolUI";
import { fmt, num } from "@/lib/tool-utils";

type Row = { id: number; name: string; qty: string; amps: string };

const STANDARD = [2.5, 5, 10, 20, 40];

let nextId = 6;

export function PowerSupplySizing() {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, name: "PLC CPU (example)", qty: "1", amps: "0.5" },
    { id: 2, name: "Input modules (example)", qty: "2", amps: "0.1" },
    { id: 3, name: "Relay coils (example)", qty: "8", amps: "0.04" },
    { id: 4, name: "Sensors (example)", qty: "10", amps: "0.1" },
    { id: 5, name: "HMI (example)", qty: "1", amps: "0.6" },
  ]);
  const [headroom, setHeadroom] = useState("25");
  const [copied, setCopied] = useState(false);

  const update = (id: number, k: keyof Row, v: string) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [k]: v } : r)));

  const total = rows.reduce((s, r) => {
    const q = num(r.qty);
    const a = num(r.amps);
    return s + (q > 0 && a > 0 ? q * a : 0);
  }, 0);
  const h = num(headroom);
  const hOk = h >= 0 && h <= 200;
  const required = hOk ? total * (1 + h / 100) : NaN;
  const size = Number.isFinite(required) ? STANDARD.find((s) => s >= required) : undefined;
  const util = size ? (total / size) * 100 : NaN;

  const summary = `24 V DC load ${fmt(total, 2)} A, with ${fmt(h, 0)}% headroom ${fmt(required, 2)} A, supply ${size ? size + " A" : "above 40 A"}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard may be blocked */
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
      <Card>
        <div className="hidden grid-cols-[1fr_5rem_6rem_2.5rem] gap-3 px-1 pb-2 text-sm font-semibold text-steel sm:grid">
          <span>Load</span>
          <span>Qty</span>
          <span>Amps each</span>
          <span className="sr-only">Remove</span>
        </div>
        <ul className="space-y-3">
          {rows.map((r) => (
            <li key={r.id} className="grid grid-cols-[1fr_4.5rem_5.5rem_2.5rem] items-end gap-2 sm:gap-3">
              <div>
                <label className="mb-1 block text-xs font-semibold text-steel sm:sr-only" htmlFor={`n${r.id}`}>Load</label>
                <input id={`n${r.id}`} className="field field-light" value={r.name} onChange={(e) => update(r.id, "name", e.target.value)} />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-steel sm:sr-only" htmlFor={`q${r.id}`}>Qty</label>
                <input id={`q${r.id}`} inputMode="decimal" className="field field-light" value={r.qty} onChange={(e) => update(r.id, "qty", e.target.value)} />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-steel sm:sr-only" htmlFor={`a${r.id}`}>Amps each</label>
                <input id={`a${r.id}`} inputMode="decimal" className="field field-light" value={r.amps} onChange={(e) => update(r.id, "amps", e.target.value)} />
              </div>
              <button
                type="button"
                onClick={() => setRows((rs) => rs.filter((x) => x.id !== r.id))}
                aria-label={`Remove ${r.name || "row"}`}
                className="grid h-12 w-10 place-items-center rounded-lg text-steel hover:bg-panel hover:text-ink"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" /></svg>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <button
            type="button"
            className="btn btn-ghost !min-h-[44px]"
            onClick={() => setRows((rs) => [...rs, { id: nextId++, name: "", qty: "1", amps: "" }])}
          >
            Add a load
          </button>
          <div className="w-40">
            <NumField label="Headroom" value={headroom} onChange={setHeadroom} unit="%" />
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <Readout label="Total load" value={fmt(total, 2)} unit="A" />
        {hOk ? (
          <>
            <Readout label={`With ${fmt(h, 0)}% headroom`} value={fmt(required, 2)} unit="A" />
            <Readout
              label="Look for a supply of at least"
              value={size ? String(size) : "40+"}
              unit="A, 24 V DC"
              note={size ? `The load would be about ${fmt(util, 0)} per cent of that supply's rating.` : "Split the load across several supplies or use a larger unit."}
            />
            {total === 0 && <Notice tone="warn">Enter at least one load with a current.</Notice>}
            <button type="button" onClick={copy} className="btn btn-ghost w-full !min-h-[44px]">
              {copied ? "Copied" : "Copy summary"}
            </button>
            <ToolCta summary={`I need a 24 V DC power supply, ${size ?? 40}+ A, for a panel with about ${fmt(total, 1)} A of load. `} />
          </>
        ) : (
          <Notice tone="warn">Enter headroom between 0 and 200 per cent.</Notice>
        )}
      </div>
    </div>
  );
}
