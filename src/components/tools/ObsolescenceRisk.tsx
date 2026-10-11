"use client";

import { useState } from "react";
import { Card, Notice, Readout, Segmented, ToolCta } from "./ToolUI";

type Opt = { value: string; label: string };

const AGE: Opt[] = [
  { value: "0", label: "Under 5 years" },
  { value: "1", label: "5 to 10" },
  { value: "2", label: "10 to 15" },
  { value: "3", label: "Over 15" },
];
const SOLD: Opt[] = [
  { value: "0", label: "Yes" },
  { value: "1", label: "Not sure" },
  { value: "3", label: "No" },
];
const SPARE: Opt[] = [
  { value: "0", label: "Several" },
  { value: "1", label: "One" },
  { value: "2", label: "None" },
];
const DOWN: Opt[] = [
  { value: "0", label: "A week or more" },
  { value: "1", label: "A day or two" },
  { value: "2", label: "Hours" },
];
const BACKUP: Opt[] = [
  { value: "0", label: "Yes, and tested" },
  { value: "1", label: "Partly" },
  { value: "2", label: "No" },
];
const LINE: Opt[] = [
  { value: "0", label: "No" },
  { value: "2", label: "Yes" },
];

const MAX = 14;

export function ObsolescenceRisk() {
  const [age, setAge] = useState("");
  const [sold, setSold] = useState("");
  const [spare, setSpare] = useState("");
  const [down, setDown] = useState("");
  const [backup, setBackup] = useState("");
  const [line, setLine] = useState("");

  const answered = [age, sold, spare, down, backup, line].every((v) => v !== "");
  const score = answered ? [age, sold, spare, down, backup, line].reduce((a, v) => a + Number(v), 0) : 0;
  const level = score >= 9 ? "High" : score >= 5 ? "Medium" : "Low";

  const actions: string[] = [];
  if (answered) {
    if (sold === "3")
      actions.push(
        "You say it is no longer sold new. Check the manufacturer's lifecycle notice for the exact order number, then decide whether to buy a tested spare now or plan a successor.",
      );
    if (sold === "1")
      actions.push("You are not sure whether it is still sold. Look up the full order number on the manufacturer's site, or send it to us.");
    if (spare === "2" && sold !== "0") actions.push("Buy a tested spare while one can still be found.");
    if (spare === "2" && sold === "0") actions.push("If this part would stop the line, hold at least one spare.");
    if (backup !== "0")
      actions.push("Back up the program, drive parameters or HMI project and test that you can restore it. A spare is of little use without it.");
    if (line === "2" && down === "2")
      actions.push("This part can stop a whole line within hours. Treat it as a critical spare and keep it at the top of your register.");
    if (Number(age) >= 2) actions.push("Equipment of this age often has other ageing parts. List the whole panel, not only this part.");
    actions.push("Send us the full order number and we will check availability, source, condition and lead time.");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <div className="space-y-5">
          <Segmented label="How old is the equipment?" value={age} onChange={setAge} options={AGE} />
          <Segmented label="Is the manufacturer still selling this exact part new?" value={sold} onChange={setSold} options={SOLD} />
          <Segmented label="How many spares do you hold?" value={spare} onChange={setSpare} options={SPARE} />
          <Segmented label="How long could the machine be down before it costs serious money?" value={down} onChange={setDown} options={DOWN} />
          <Segmented label="Do you have a tested backup of its program or parameters?" value={backup} onChange={setBackup} options={BACKUP} />
          <Segmented label="Does its failure stop a whole line?" value={line} onChange={setLine} options={LINE} />
        </div>
      </Card>

      <div className="space-y-4">
        {answered ? (
          <>
            <Readout
              label="Obsolescence risk"
              value={level}
              tone={level === "High" ? "warn" : "normal"}
              note={`Score ${score} of ${MAX}. Higher means more exposed.`}
            />
            <Card>
              <h3 className="text-lg">What to do next</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-[0.97rem] text-ink-2">
                {actions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>
            </Card>
            <Notice>
              This is a rough guide, not a lifecycle status. Only the manufacturer can say whether a product is discontinued.
            </Notice>
            <ToolCta
              summary={`I ran your obsolescence risk check and the result was ${level.toLowerCase()} (${score} of ${MAX}). I need availability for: `}
              label="Want it checked?"
            />
          </>
        ) : (
          <Notice>Answer all six questions to see the result.</Notice>
        )}
      </div>
    </div>
  );
}
