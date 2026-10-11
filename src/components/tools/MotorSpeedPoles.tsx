"use client";

import { useState } from "react";
import { Card, Chips, NumField, Notice, Readout, Segmented, ToolCta } from "./ToolUI";
import { fmt, num } from "@/lib/tool-utils";

const POLES = [2, 4, 6, 8, 10, 12];
type Mode = "rpm" | "poles";

export function MotorSpeedPoles() {
  const [mode, setMode] = useState<Mode>("rpm");
  const [rpm, setRpm] = useState("1450");
  const [freq, setFreq] = useState("50");
  const [poles, setPoles] = useState("4");

  const f = num(freq);
  const r = num(rpm);
  const fOk = f >= 1 && f <= 400;

  // rpm to poles
  let foundPoles = NaN;
  let sync = NaN;
  let slip = NaN;
  if (mode === "rpm" && fOk && r > 0) {
    for (const p of POLES) {
      const s = (120 * f) / p;
      if (s >= r) {
        foundPoles = p;
        sync = s;
      }
    }
    // Largest pole count whose synchronous speed is still at or above the rpm is the closest match.
    if (Number.isFinite(sync)) slip = ((sync - r) / sync) * 100;
  }

  // poles to speed
  const p = Number(poles);
  const syncB = fOk ? (120 * f) / p : NaN;
  const atBase = fOk ? (120 * 50) / p : NaN;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <div className="space-y-5">
          <Segmented
            label="What do you know?"
            value={mode}
            onChange={setMode}
            options={[
              { value: "rpm", label: "Nameplate rpm" },
              { value: "poles", label: "Poles" },
            ]}
          />
          {mode === "rpm" ? (
            <NumField label="Speed on the nameplate" value={rpm} onChange={setRpm} unit="rpm" />
          ) : (
            <div>
              <p className="mb-1.5 text-sm font-semibold">Number of poles</p>
              <Chips label="Poles" options={POLES.map(String)} value={poles} onPick={setPoles} />
            </div>
          )}
          <NumField label="Supply frequency" value={freq} onChange={setFreq} unit="Hz" hint="50 Hz on the South African grid. Use the drive output frequency when running from a drive." />
        </div>
      </Card>

      <div className="space-y-4">
        {!fOk ? (
          <Notice tone="warn">Enter a frequency between 1 and 400 Hz.</Notice>
        ) : mode === "rpm" ? (
          Number.isFinite(foundPoles) ? (
            <>
              <Readout label="Number of poles" value={String(foundPoles)} unit="poles" note={`Synchronous speed ${fmt(sync, 0)} rpm at ${fmt(f, 0)} Hz.`} />
              <Readout label="Slip at this speed" value={fmt(slip, 1)} unit="%" tone={slip > 10 ? "warn" : "normal"} />
              {slip > 10 ? (
                <Notice tone="warn">That slip is unusually large. Check the rpm and the frequency you entered.</Notice>
              ) : (
                <Notice>Typical full-load slip is a few per cent, so this is consistent with a {foundPoles}-pole motor.</Notice>
              )}
              <ToolCta summary={`I need a ${foundPoles}-pole motor (nameplate ${fmt(r, 0)} rpm). `} />
            </>
          ) : (
            <Notice tone="warn">
              That speed is higher than a two-pole motor reaches at {fmt(f, 0)} Hz. Check the rpm and the frequency.
            </Notice>
          )
        ) : (
          <>
            <Readout label="Synchronous speed" value={fmt(syncB, 0)} unit="rpm" note={`${poles} poles at ${fmt(f, 0)} Hz.`} />
            <Readout
              label="Typical full-load speed"
              value={`${fmt(syncB * 0.95, 0)} to ${fmt(syncB * 0.995, 0)}`}
              unit="rpm"
              note="Loaded motors run below synchronous speed: well under one per cent on large motors, up to several per cent on small ones."
            />
            {f !== 50 && (
              <Notice>
                At {fmt(f, 0)} Hz the speed is {fmt((f / 50) * 100, 0)} per cent of the 50 Hz speed ({fmt(atBase, 0)} rpm). Above 50 Hz, available torque falls and the motor and load must be suitable for the higher speed.
              </Notice>
            )}
            <ToolCta summary={`I need a ${poles}-pole motor. `} />
          </>
        )}
      </div>
    </div>
  );
}
