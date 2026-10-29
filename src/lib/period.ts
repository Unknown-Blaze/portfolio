const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Months since year 0, so spans can be measured: "Jul 2026" -> 2026 * 12 + 6. */
export type MonthIndex = number;

const parseMonth = (text: string): MonthIndex | null => {
  const [mon, year] = text.trim().split(/\s+/);
  const m = MONTHS.indexOf(mon ?? "");
  const y = Number(year);
  return m >= 0 && Number.isInteger(y) ? y * 12 + m : null;
};

/**
 * Reads a résumé period such as "Jul 2026 – present" into an inclusive month span.
 * "present" means the sheet's revision month, passed as "YYYY-MM".
 */
export function parsePeriod(period: string, revision: string): { start: MonthIndex; end: MonthIndex } | null {
  const [from, to] = period.split("–");
  const start = parseMonth(from ?? "");
  if (start === null) return null;
  const [ry, rm] = revision.split("-").map(Number);
  const now = (ry ?? 0) * 12 + ((rm ?? 1) - 1);
  const end = to === undefined || to.trim() === "present" ? now : parseMonth(to);
  return end === null ? null : { start, end };
}

export const yearOf = (m: MonthIndex): number => Math.floor(m / 12);
