import { numbers, REVISION, type KeyNumber } from "../content";
import { useRevealProgress } from "../lib/countUp";

const format = (n: KeyNumber, progress: number): string => {
  const value = n.from + (n.to - n.from) * progress;
  return `${n.prefix}${value.toFixed(n.decimals)}${n.suffix}`;
};

/** Sheet 00A: six key dimensions, counted up once when they scroll into view. */
export function Numbers() {
  const [ref, progress] = useRevealProgress<HTMLUListElement>();
  return (
    <section className="numbers" aria-labelledby="numbers-title">
      <p className="title-block mono" aria-hidden="true">
        <span>SHT 00A</span>
        <span>KEY DIMENSIONS</span>
        <span>REV {REVISION}</span>
      </p>
      <h2 id="numbers-title" className="numbers-title">
        By the numbers
      </h2>
      <ul ref={ref} className="numbers-grid">
        {numbers.map((n, i) => (
          <li key={n.label} className="number-tile" data-kind={n.kind}>
            <span className="number-no mono" aria-hidden="true">
              D{String(i + 1).padStart(2, "0")}
            </span>
            <span className="number-swatch" aria-hidden="true" />
            <span className="number-value mono" aria-hidden="true">
              {format(n, progress)}
            </span>
            <span className="visually-hidden">
              {format(n, 1)} {n.label}, {n.source}
            </span>
            <span className="number-callout" aria-hidden="true">
              <span className="number-leader" />
              <span className="number-label mono">{n.label}</span>
            </span>
            <span className="number-source mono" aria-hidden="true">
              {n.source}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
