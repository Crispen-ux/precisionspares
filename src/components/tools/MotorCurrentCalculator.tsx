"use client";

import { useState } from "react";
import { Card, Chips, NumField, Notice, Readout, Segmented, ToolCta } from "./ToolUI";
import { fmt, num } from "@/lib/tool-utils";

const VOLTS = ["230", "380", "400", "415", "525", "690"];

export function MotorCurrentCalculator() {
  const [power, setPower] = useState("7.5");
  const [unit, setUnit] = useState<"kW" | "hp">("kW");
  const [volts, setVolts] = useState("400");
  const [eff, setEff] = useState("90");
  const [pf, setPf] = useState("0.85");

  const p = num(power);
  const v = num(volts);
  const e = num(eff);
  const f = num(pf);
  const kw = unit === "hp" ? p * 0.7457 : p;

  const problems: string[] = [];
  if (!(p > 0)) problems.push("Enter the motor power.");
  if (!(v >= 100 && v <= 1000)) problems.push("Enter a line-to-line voltage between 100 and 1000 V.");
  if (!(e >= 40 && e <= 100)) problems.push("Efficiency should be between 40 and 100 per cent.");
  if (!(f >= 0.3 && f <= 1)) problems.push("Power factor should be between 0.3 and 1.");

  const ok = problems.length === 0;
  const amps = ok ? (kw * 1000) / (Math.sqrt(3) * v * (e / 100) * f) : NaN;
  const inputKw = ok ? kw / (e / 100) : NaN;
  const kva = ok ? (Math.sqrt(3) * v * amps) / 1000 : NaN;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <Card>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2 flex flex-wrap items-end gap-4">
            <div className="min-w-[10rem] flex-1">
              <NumField label="Motor power" value={power} onChange={setPower} unit={unit} />
            </div>
            <Segmented
              label="Unit"
              value={unit}
              onChange={setUnit}
              options={[
                { value: "kW", label: "kW" },
                { value: "hp", label: "hp" },
              ]}
            />
          </div>
          <div className="sm:col-span-2">
            <NumField label="Supply voltage (line to line)" value={volts} onChange={setVolts} unit="V" />
            <div className="mt-2">
              <Chips label="Common voltages" options={VOLTS} value={volts} onPick={setVolts} />
            </div>
          </div>
          <NumField label="Efficiency (η)" value={eff} onChange={setEff} unit="%" hint="On the nameplate, or about 85–96 typical" />
          <NumField label="Power factor (cos φ)" value={pf} onChange={setPf} hint="On the nameplate, or about 0.80–0.90 typical" />
        </div>
      </Card>

      <div className="space-y-4">
        {ok ? (
          <>
            <Readout
              label="Estimated full-load current"
              value={fmt(amps, 1)}
              unit="A"
              note={`Choose a drive or starter rated for at least this current. Always confirm against the nameplate.`}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Readout label="Electrical input power" value={fmt(inputKw, 2)} unit="kW" />
              <Readout label="Apparent power" value={fmt(kva, 2)} unit="kVA" />
            </div>
            <Notice>
              Started direct on line, this motor would typically draw about {fmt(amps * 6, 0)} to {fmt(amps * 8, 0)} A for a
              moment. A drive or soft starter limits that.
            </Notice>
            <ToolCta
              summary={`I need a drive or starter for a ${fmt(kw, 2)} kW motor at ${fmt(v, 0)} V (about ${fmt(amps, 1)} A full-load). `}
            />
          </>
        ) : (
          <Notice tone="warn">{problems.join(" ")}</Notice>
        )}
      </div>
    </div>
  );
}
