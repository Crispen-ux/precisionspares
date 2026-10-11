/** Parse a number typed by a person: accepts "7,5" and "7.5". Returns NaN when empty or invalid. */
export function num(s: string): number {
  const t = s.trim().replace(/\s/g, "").replace(",", ".");
  if (t === "") return NaN;
  const n = Number(t);
  return Number.isFinite(n) ? n : NaN;
}

/** Fixed-locale formatting so server and browser render the same text. */
export function fmt(n: number, decimals = 1): string {
  if (!Number.isFinite(n)) return "-";
  const fixed = n.toFixed(decimals);
  if (Number(fixed) === 0) return "0";
  // trim trailing zeros after the decimal point
  return fixed.includes(".") ? fixed.replace(/\.?0+$/, "") : fixed;
}

/** 12 345 with a non-breaking space as the thousands separator. */
export function fmtInt(n: number): string {
  if (!Number.isFinite(n)) return "-";
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const rand = (n: number) => `R ${fmtInt(n)}`;

/** IEC preferred motor ratings in kW. */
export const IEC_KW = [
  0.06, 0.09, 0.12, 0.18, 0.25, 0.37, 0.55, 0.75, 1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110,
  132, 160, 200, 250, 315, 355, 400, 450, 500, 560, 630, 710, 800, 900, 1000,
];

export const HP_PER_KW = 1 / 0.7457;
export const PS_PER_KW = 1 / 0.7355;
