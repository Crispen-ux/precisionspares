const WIRES = ["#1f56c8", "#8a4b21", "#0b1722", "#1a9a62", "#ffb000", "#1f56c8", "#d6372a", "#0b1722", "#8a4b21", "#1a9a62", "#1f56c8", "#ffb000"];

/** Decorative DIN-rail terminal strip. Energises once on load. */
export function TerminalStrip({ count = 12, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`rail rail-live ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="terminal"
          style={{ ["--wire" as string]: WIRES[i % WIRES.length], ["--i" as string]: i }}
        >
          <span className="screw" />
          <span className="led" />
          <span className="num">{i + 1}</span>
        </div>
      ))}
    </div>
  );
}

/** Brand names set into terminal blocks. */
export function BrandRail({ brands }: { brands: string[] }) {
  return (
    <ul className="rail" aria-label="Brands we source">
      {brands.map((b, i) => (
        <li
          key={b}
          className="terminal !min-h-[88px] !items-center !justify-center !gap-1 !px-2 text-center"
          style={{ ["--wire" as string]: WIRES[(i * 3) % WIRES.length] }}
        >
          <span className="screw" aria-hidden="true" />
          <span className="font-display text-base font-bold leading-tight sm:text-xl">{b}</span>
        </li>
      ))}
    </ul>
  );
}
