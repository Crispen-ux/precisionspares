"use client";

import { useState } from "react";
import { Card, Chips, Notice, TextField, ToolCta } from "./ToolUI";

const SOLIDS: Record<string, string> = {
  "0": "No protection against solid objects.",
  "1": "Objects larger than 50 mm, such as a hand.",
  "2": "Objects larger than 12.5 mm, such as a finger.",
  "3": "Objects larger than 2.5 mm, such as tools and thick wires.",
  "4": "Objects larger than 1 mm, such as most wires and screws.",
  "5": "Dust-protected. Some dust may enter, but not enough to interfere with operation.",
  "6": "Dust-tight. No dust enters.",
  X: "Not rated for solid objects or dust.",
};

const WATER: Record<string, string> = {
  "0": "No protection against water.",
  "1": "Vertically dripping water.",
  "2": "Dripping water when tilted up to 15 degrees.",
  "3": "Spraying water at up to 60 degrees from vertical.",
  "4": "Splashing water from any direction.",
  "5": "Water jets from a 6.3 mm nozzle.",
  "6": "Powerful water jets from a 12.5 mm nozzle.",
  "7": "Temporary immersion, up to 1 m for 30 minutes.",
  "8": "Continuous immersion, to conditions set by the manufacturer.",
  "9": "High-pressure, high-temperature water jets.",
  X: "Not rated for water.",
};

const TYPICAL: Record<string, string> = {
  IP20: "Typically suits the inside of a clean, dry control cabinet.",
  IP54: "Typically suits indoor areas with dust and splashing, such as a workshop.",
  IP55: "Typically suits dusty areas and washdown with low-pressure jets.",
  IP65: "Typically suits dusty areas and hosed-down equipment, but not high-pressure cleaning.",
  IP66: "Suits outdoor equipment exposed to heavy rain and strong hose-down. It does not cover high-pressure, high-temperature cleaning, which is IP69.",
  IP67: "Typically suits equipment that may be temporarily submerged.",
};

const QUICK = ["IP20", "IP54", "IP55", "IP65", "IP66", "IP67"];

export function IpDecoder() {
  const [code, setCode] = useState("IP65");
  const m = code.trim().toUpperCase().replace(/\s/g, "").match(/^IP([0-6X])([0-9X])([A-Z]?)$/);
  const normalised = m ? `IP${m[1]}${m[2]}${m[3] ?? ""}` : "";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <div className="space-y-5">
          <TextField label="IP code" value={code} onChange={setCode} placeholder="IP65" hint="Type a code such as IP54, or pick one below" />
          <Chips label="Common ratings" options={QUICK} value={normalised} onPick={setCode} />
        </div>
      </Card>

      <div className="space-y-4">
        {m ? (
          <>
            <div className="readout">
              <p className="font-mono text-[2.3rem] leading-none text-amber">{normalised}</p>
            </div>
            <Card>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-steel">First digit ({m[1]}): solids and dust</dt>
                  <dd className="mt-1">{SOLIDS[m[1]]}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-steel">Second digit ({m[2]}): water</dt>
                  <dd className="mt-1">{WATER[m[2]]}</dd>
                </div>
              </dl>
            </Card>
            {TYPICAL[normalised] && <Notice>{TYPICAL[normalised]}</Notice>}
            <ToolCta
              label="Need a part for a harsh area?"
              summary={`I need equipment rated ${normalised} for a dusty or wet area. `}
            />
          </>
        ) : (
          <Notice tone="warn">Enter an IP code: the letters IP followed by two characters, for example IP54.</Notice>
        )}
      </div>
    </div>
  );
}
