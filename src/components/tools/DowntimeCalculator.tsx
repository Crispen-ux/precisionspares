"use client";

import { useState } from "react";
import { Card, NumField, Notice, Readout, ToolCta } from "./ToolUI";
import { fmt, num, rand } from "@/lib/tool-utils";

export function DowntimeCalculator() {
  const [cost, setCost] = useState("25000");
  const [spare, setSpare] = useState("18000");
  const [lead, setLead] = useState("10");
  const [hrs, setHrs] = useState("16");

  const c = num(cost);
  const s = num(spare);
  const d = num(lead);
  const h = num(hrs);
  const ok = c > 0 && s > 0 && d > 0 && h > 0 && h <= 24;

  const hoursStopped = ok ? d * h : NaN;
  const exposure = ok ? hoursStopped * c : NaN;
  const breakEvenHours = ok ? s / c : NaN;
  const breakEvenProb = ok ? (s / exposure) * 100 : NaN;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <div className="grid gap-5 sm:grid-cols-2">
          <NumField label="Cost of one hour stopped" value={cost} onChange={setCost} unit="R" hint="Include lost output, idle labour, scrap and penalties" />
          <NumField label="Price of the spare part" value={spare} onChange={setSpare} unit="R" />
          <NumField label="Working days until you could get the part" value={lead} onChange={setLead} unit="days" hint="Count only days the line would normally run" />
          <NumField label="Production hours per day" value={hrs} onChange={setHrs} unit="h" hint="Hours the line would normally run" />
        </div>
        <p className="mt-4 text-sm text-steel">
          Defaults are examples. Replace them with your own figures.
        </p>
      </Card>

      <div className="space-y-4">
        {ok ? (
          <>
            <Readout
              label="Cost of waiting for the part"
              value={rand(exposure)}
              note={`${fmt(hoursStopped, 0)} production hours lost over ${fmt(d, 0)} days, if the whole line stops.`}
              tone="warn"
            />
            <Readout
              label="Spare pays for itself if it saves"
              value={fmt(breakEvenHours, 1)}
              unit="hours"
              note={`That is about ${fmt(breakEvenHours * 60, 0)} minutes of stoppage at ${rand(c)} an hour.`}
            />
            <Readout
              label="Worth holding if failure chance exceeds"
              value={breakEvenProb >= 100 ? "100+" : fmt(breakEvenProb, 1)}
              unit="%"
              note={
                breakEvenProb >= 100
                  ? "The part costs more than the downtime it would cause on these figures. Revisit your numbers or the lead time."
                  : "Over the period you would otherwise rely on a long lead time. Ignores storage and capital cost."
              }
            />
            <ToolCta
              label="Price your critical spares"
              summary={`I would like a quote on critical spares. Downtime is about ${rand(c)} per hour and lead time is a concern. `}
            />
          </>
        ) : (
          <Notice tone="warn">Enter positive numbers in every field. Production hours per day cannot exceed 24.</Notice>
        )}
      </div>
    </div>
  );
}
