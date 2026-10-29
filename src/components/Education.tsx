import { certifications, education, languages } from "../content";
import { SheetHead } from "./SheetHead";
import "../styles/sections.css";

const WORD_NUMBERS: Record<string, number> = { two: 2, three: 3, four: 4, five: 5 };

/** Honours named in a school's points, as short stamps. Read from the points, so nothing is shown that they do not say. */
const STAMPS: readonly { re: RegExp; label: (m: RegExpExecArray) => string }[] = [
  { re: /gold medal/i, label: () => "Gold Medal" },
  { re: /highest distinction/i, label: () => "Highest Distinction" },
  { re: /\bscholar\b.*full scholarship/i, label: () => "Scholar" },
  {
    re: /dean's list in all (\w+)/i,
    label: (m) => {
      const n = WORD_NUMBERS[(m[1] ?? "").toLowerCase()] ?? Number(m[1]);
      return Number.isFinite(n) && n > 0 ? `Dean's List ×${n}` : "Dean's List";
    },
  },
];

function honoursOf(points: readonly string[]): string[] {
  const out: string[] = [];
  for (const { re, label } of STAMPS) {
    for (const p of points) {
      const m = re.exec(p);
      if (m) {
        out.push(label(m));
        break;
      }
    }
  }
  return out;
}

export function Education() {
  const [main, ...schools] = education;
  const stamps = main ? honoursOf(main.points) : [];
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
            {stamps.length ? (
              <ul className="honours-strip" aria-label="Honours">
                {stamps.map((h) => (
                  <li key={h} className="honour-stamp mono">
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
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
