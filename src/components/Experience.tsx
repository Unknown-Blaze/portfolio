import { experience } from "../content";
import { SheetHead } from "./SheetHead";

/** Roles hang off one vertical dimension line, a tick per role; each opens to its résumé bullets. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <SheetHead id="experience-title" no="03" label="Experience" title="Experience">
        Robotics, cloud, full stack, research and embedded firmware, newest first. Open a role for the detail.
      </SheetHead>
      <ol className="timeline">
        {experience.map((r, i) => (
          <li key={`${r.org}-${r.period}`} className="timeline-item">
            <span className="timeline-tick" aria-hidden="true" />
            <details open={i === 0}>
              <summary>
                <span className="timeline-period mono">{r.period}</span>
                <span className="timeline-title">{r.title}</span>
                <span className="org-tag mono" title={r.org}>
                  {r.tag}
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
        ))}
      </ol>
    </section>
  );
}
