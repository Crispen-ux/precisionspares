"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn btn-ink no-print !min-h-[44px]">
      Print this checklist
    </button>
  );
}
