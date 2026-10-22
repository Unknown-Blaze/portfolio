import type { Callout as CalloutData } from "../content";

/** A key number with a thin leader line to its note, like an annotation on a drawing. */
export function Callout({ value, note }: CalloutData) {
  return (
    <span className="callout">
      <span className="callout-value mono">{value}</span>
      <span className="callout-leader" aria-hidden="true" />
      <span className="callout-note mono">{note}</span>
    </span>
  );
}
