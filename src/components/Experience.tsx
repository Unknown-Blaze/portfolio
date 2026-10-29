import { experience, KINDS, REVISION } from "../content";
import { parsePeriod, yearOf } from "../lib/period";
import { SheetHead } from "./SheetHead";

const spans = experience.map((r) => parsePeriod(r.period, REVISION));
const known = spans.filter((s) => s !== null);
const FIRST_YEAR = Math.min(...known.map((s) => yearOf(s.start)));
const LAST_YEAR = Math.max(...known.map((s) => yearOf(s.end)));
const YEARS = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => FIRST_YEAR + i);
const RANGE_START = FIRST_YEAR * 12;
const RANGE = YEARS.length * 12;
const pct = (m: number): string => `${((m - RANGE_START) / RANGE) * 100}%`;
const kindLabel = (k: string): string => KINDS.find((x) => x.kind === k)?.label ?? k;

/** Fig. 3: every role as a bar on a year ruler, coloured by kind; the list below carries the words. */
function YearRuler() {
  return (
    <figure className="ruler" aria-hidden="true">
      <div className="ruler-lanes">
        {experience.map((r, i) => {
          const s = spans[i];
          if (!s) return null;
          return (
            <div key={`${r.org}-${r.period}`} className="ruler-lane">
              <span className="ruler-tag mono">{r.tag}</span>
              <span className="ruler-track">
                <span
                  className="ruler-bar"
                  data-kind={r.kind}
                  style={{ left: pct(s.start), width: `calc(${pct(s.end + 1)} - ${pct(s.start)})` }}
                  title={`${r.title}, ${r.period}`}
                />
              </span>
            </div>
          );
        })}
      </div>
      <div className="ruler-axis">
        <span className="ruler-tag" />
        <span className="ruler-scale">
          {YEARS.map((y) => (
            <span key={y} className="ruler-year mono">
              {y}
            </span>
          ))}
        </span>
      </div>
      <figcaption className="mono">
        <span>FIG. 3 · ROLES ON A YEAR RULER</span>
        <span>1 DIV = 1 QUARTER</span>
      </figcaption>
    </figure>
  );
}

/** Roles hang off one vertical dimension line, a tick per role; each opens to its résumé bullets. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <SheetHead id="experience-title" no="03" label="Experience" title="Experience">
        Robotics, cloud, full stack, research and embedded firmware, newest first. Open a role for the detail.
      </SheetHead>
      <YearRuler />
      <ol className="timeline">
        {experience.map((r, i) => {
          const s = spans[i];
          const prev = spans[i - 1];
          const year = s ? yearOf(s.start) : null;
          const newYear = year !== null && (i === 0 || !prev || yearOf(prev.start) !== year);
          return (
            <li key={`${r.org}-${r.period}`} className="timeline-item">
              {newYear ? (
                <span className="timeline-year mono" aria-hidden="true">
                  {year}
                </span>
              ) : null}
              <span className="timeline-tick" data-kind={r.kind} aria-hidden="true" />
              <details open={i === 0}>
                <summary>
                  <span className="timeline-period mono">{r.period}</span>
                  <span className="timeline-title">{r.title}</span>
                  <span className="timeline-tags">
                    <span className="kind-tag mono" data-kind={r.kind}>
                      <span className="kind-swatch" aria-hidden="true" />
                      {kindLabel(r.kind)}
                    </span>
                    <span className="org-tag mono" title={r.org}>
                      {r.tag}
                    </span>
                  </span>
                </summary>
                <div className="timeline-body">
                  <p className="timeline-org">
                    {r.org} · {r.location}
                  </p>
                  <ul className="ticks">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
