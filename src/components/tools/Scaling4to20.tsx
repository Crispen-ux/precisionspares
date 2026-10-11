"use client";

import { useState } from "react";
import { Card, NumField, Notice, Readout, Segmented, TextField, ToolCta } from "./ToolUI";
import { fmt, num } from "@/lib/tool-utils";

type Mode = "toValue" | "toMa";

export function Scaling4to20() {
  const [mode, setMode] = useState<Mode>("toValue");
  const [low, setLow] = useState("0");
  const [high, setHigh] = useState("10");
  const [unit, setUnit] = useState("bar");
  const [ma, setMa] = useState("12");
  const [val, setVal] = useState("5");

  const lo = num(low);
  const hi = num(high);
  const rangeOk = Number.isFinite(lo) && Number.isFinite(hi) && hi !== lo;

  const mA = num(ma);
  const v = num(val);

  const outValue = rangeOk && Number.isFinite(mA) ? lo + ((mA - 4) / 16) * (hi - lo) : NaN;
  const outMa = rangeOk && Number.isFinite(v) ? 4 + ((v - lo) / (hi - lo)) * 16 : NaN;

  const currentMa = mode === "toValue" ? mA : outMa;
  const pct = Number.isFinite(currentMa) ? ((currentMa - 4) / 16) * 100 : NaN;
  const counts = Number.isFinite(currentMa) ? ((currentMa - 4) / 16) * 27648 : NaN;

  let status: { text: string; warn: boolean } | null = null;
  if (Number.isFinite(currentMa)) {
    if (currentMa < 3.6) status = { text: "Below 3.6 mA: treated as a fault (NAMUR NE 43). Check for a broken wire, missing loop supply or failed transmitter.", warn: true };
    else if (currentMa > 21) status = { text: "Above 21 mA: treated as a fault (NAMUR NE 43). Check the transmitter and wiring.", warn: true };
    else if (currentMa < 3.8) status = { text: "Under-range: between 3.6 and 3.8 mA, below the valid measuring range.", warn: true };
    else if (currentMa > 20.5) status = { text: "Over-range: between 20.5 and 21 mA, above the valid measuring range.", warn: true };
    else status = { text: "Within the valid measuring range (3.8 to 20.5 mA).", warn: false };
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <div className="space-y-5">
          <Segmented
            label="Direction"
            value={mode}
            onChange={setMode}
            options={[
              { value: "toValue", label: "mA to value" },
              { value: "toMa", label: "Value to mA" },
            ]}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <NumField label="Value at 4 mA" value={low} onChange={setLow} />
            <NumField label="Value at 20 mA" value={high} onChange={setHigh} />
            <TextField label="Units" value={unit} onChange={setUnit} placeholder="bar" />
          </div>
          {mode === "toValue" ? (
            <NumField label="Measured current" value={ma} onChange={setMa} unit="mA" />
          ) : (
            <NumField label={`Process value${unit ? ` (${unit})` : ""}`} value={val} onChange={setVal} />
          )}
          {!rangeOk && <Notice tone="warn">Enter two different values for the 4 mA and 20 mA points.</Notice>}
        </div>
      </Card>

      <div className="space-y-4">
        {rangeOk && Number.isFinite(currentMa) ? (
          <>
            {mode === "toValue" ? (
              <Readout label="Process value" value={fmt(outValue, 3)} unit={unit} note={`${fmt(pct, 1)} per cent of span`} />
            ) : (
              <Readout label="Loop current" value={fmt(outMa, 2)} unit="mA" note={`${fmt(pct, 1)} per cent of span`} />
            )}
            <Readout
              label="Siemens normalised value"
              value={fmt(counts, 0)}
              note="0 at 4 mA and 27648 at 20 mA on S7-300, S7-1200 and S7-1500 analogue inputs. Other brands use different ranges."
            />
            {status && <Notice tone={status.warn ? "warn" : "info"}>{status.text}</Notice>}
            <ToolCta
              label="Reading looks wrong?"
              summary={`I have a 4–20 mA loop problem (range ${fmt(lo, 2)} to ${fmt(hi, 2)} ${unit}). `}
            />
          </>
        ) : (
          <Notice tone="warn">Enter a number to convert.</Notice>
        )}
      </div>
    </div>
  );
}
