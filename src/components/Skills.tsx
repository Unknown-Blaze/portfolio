import { skills } from "../content";
import { SheetHead } from "./SheetHead";

/** The résumé's skill groups, keyed A to M like a drawing legend. */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <SheetHead id="skills-title" no="06" label="Skills" title="Skills legend" />
      <dl className="legend">
        {skills.map((s, i) => (
          <div key={s.group} className="legend-row">
            <dt>
              <span className="legend-key mono" aria-hidden="true">
                {String.fromCharCode(65 + i)}
              </span>
              {s.group}
            </dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
