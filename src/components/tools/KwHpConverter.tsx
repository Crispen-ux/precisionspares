"use client";

import { useState } from "react";
import { Card, NumField, Notice, Readout, Segmented, ToolCta } from "./ToolUI";
import { HP_PER_KW, IEC_KW, PS_PER_KW, fmt, num } from "@/lib/tool-utils";

type Unit = "kw" | "hp" | "ps";

export function KwHpConverter() {
  const [value, setValue] = useState("10");
  const [unit, setUnit] = useState<Unit>("hp");

  const n = num(value);
  const kw = unit === "kw" ? n : unit === "hp" ? n * 0.7457 : n * 0.7355;
  const ok = n > 0;

  let nearest = NaN;
  let nextUp = NaN;
  if (ok) {
    nearest = IEC_KW.reduce((a, b) => (Math.abs(b - kw) < Math.abs(a - kw) ? b : a));
    nextUp = IEC_KW.find((s) => s >= kw - 0.005) ?? NaN;
    if (kw > IEC_KW[IEC_KW.length - 1] * 1.05) {
      nearest = NaN;
      nextUp = NaN;
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <div className="flex flex-wrap items-end gap-4">
            <div className="min-w-[10rem] flex-1">
              <NumField label="Power" value={value} onChange={setValue} unit={unit === "kw" ? "kW" : unit === "hp" ? "hp" : "PS"} />
            </div>
            <Segmented
              label="Unit"
              value={unit}
              onChange={setUnit}
              options={[
                { value: "kw", label: "kW" },
                { value: "hp", label: "hp" },
                { value: "ps", label: "metric hp" },
              ]}
            />
          </div>
        </Card>
        <Card>
          <h3 className="text-lg">Standard IEC ratings and their hp equivalent</h3>
          <div className="mt-3 max-h-72 overflow-auto rounded-lg border border-line">
            <table className="w-full text-left text-[0.95rem]">
              <thead className="sticky top-0 bg-panel">
                <tr>
                  <th className="px-3 py-2 font-semibold">kW</th>
                  <th className="px-3 py-2 font-semibold">hp (mechanical)</th>
                </tr>
              </thead>
              <tbody>
                {IEC_KW.filter((k) => k >= 0.37).map((k) => (
                  <tr key={k} className="border-t border-line">
                    <td className="px-3 py-1.5 font-mono">{k}</td>
                    <td className="px-3 py-1.5 font-mono">{fmt(k * HP_PER_KW, 2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        {ok ? (
          <>
            <div className="grid gap-4 sm:grid-cols-3">
              <Readout label="Kilowatts" value={fmt(kw, 2)} unit="kW" />
              <Readout label="Horsepower" value={fmt(kw * HP_PER_KW, 2)} unit="hp" />
              <Readout label="Metric hp" value={fmt(kw * PS_PER_KW, 2)} unit="PS" />
            </div>
            <Readout
              label="Nearest standard IEC size"
              value={fmt(nearest, 2)}
              unit="kW"
              note={
                !Number.isFinite(nearest)
                  ? "This is above the standard size table. Send us the details and an engineer will advise."
                  : Number.isFinite(nextUp) && nextUp !== nearest
                  ? `If you need at least this much power, the next size up is ${fmt(nextUp, 2)} kW.`
                  : "This also covers the rating you entered."
              }
            />
            <Notice>
              Power is only one part of a motor match. Frame size, speed, mounting and voltage decide whether a replacement fits.
            </Notice>
            <ToolCta summary={`I need a ${fmt(Number.isFinite(nearest) ? nearest : kw, 2)} kW motor (converted from ${fmt(n, 2)} ${unit === "kw" ? "kW" : unit === "hp" ? "hp" : "PS"}). `} />
          </>
        ) : (
          <Notice tone="warn">Enter a power greater than zero.</Notice>
        )}
      </div>
    </div>
  );
}
