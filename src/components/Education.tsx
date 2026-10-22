import { certifications, education, languages } from "../content";
import { SheetHead } from "./SheetHead";

export function Education() {
  const [main, ...schools] = education;
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <SheetHead id="education-title" no="07" label="Education" title="Education & certifications" />
      <div className="edu-grid">
        {main ? (
          <article className="panel edu-main">
            <p className="kicker mono">
              {main.period} · {main.place}
            </p>
            <h3>{main.name}</h3>
            <p className="feature-context">{main.award}</p>
            <ul className="ticks">
              {main.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ) : null}
        <div className="edu-side">
          {schools.map((s) => (
            <article key={s.name} className="panel">
              <p className="kicker mono">
                {s.period} · {s.place}
              </p>
              <h3>{s.name}</h3>
              <p className="feature-context">{s.award}</p>
              {s.points.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </article>
          ))}
          <article className="panel">
            <h3>Certifications</h3>
            <ul className="ticks">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </article>
          <article className="panel">
            <h3>Languages</h3>
            <dl className="langs">
              {languages.map((l) => (
                <div key={l.name}>
                  <dt>{l.name}</dt>
                  <dd className="mono">{l.level}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
