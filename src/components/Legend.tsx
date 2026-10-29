import { KINDS } from "../content";

/** The sheet legend: the one colour code the timeline, the numbers and the tags all share. */
export function Legend() {
  return (
    <div className="sheet-legend" role="group" aria-labelledby="legend-title">
      <p id="legend-title" className="sheet-legend-title mono">
        Legend
      </p>
      <ul className="sheet-legend-list">
        {KINDS.map((k) => (
          <li key={k.kind} data-kind={k.kind}>
            <span className="kind-swatch" aria-hidden="true" />
            <span className="sheet-legend-label mono">{k.label}</span>
            <span className="sheet-legend-note">{k.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
