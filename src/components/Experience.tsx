import { useState } from "react";
import { experience, KINDS, REVISION, type Callout as CalloutData } from "../content";
import { parsePeriod, yearOf } from "../lib/period";
import { Callout } from "./Callout";
import { SheetHead } from "./SheetHead";
import "../styles/sections.css";

const spans = experience.map((r) => parsePeriod(r.period, REVISION));
const known = spans.filter((s) => s !== null);
const FIRST_YEAR = Math.min(...known.map((s) => yearOf(s.start)));
const LAST_YEAR = Math.max(...known.map((s) => yearOf(s.end)));
const YEARS = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => FIRST_YEAR + i);
const RANGE_START = FIRST_YEAR * 12;
const RANGE = YEARS.length * 12;
const pct = (m: number): string => `${((m - RANGE_START) / RANGE) * 100}%`;
const kindLabel = (k: string): string => KINDS.find((x) => x.kind === k)?.label ?? k;

/** Inclusive length of a role, read off the same spans the ruler draws. */
function duration(span: { start: number; end: number } | null): string | null {
  if (!span) return null;
  const months = span.end - span.start + 1;
  if (months < 12) return `${months} mo`;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return m ? `${y} yr ${m} mo` : `${y} yr`;
}

const LEADING_VERB = /^[a-z]+ed$/i;
const STOP = new Set(["with", "and", "through", "for", "on", "in", "to", "of", "the", "a"]);

/** Up to two words after a figure, stopping at punctuation or a joining word. */
function wordsAfter(rest: string): string {
  const out: string[] = [];
  for (const w of rest.trim().split(/\s+/)) {
    const clean = w.replace(/[.,;:]+$/, "");
    if (!clean || STOP.has(clean.toLowerCase())) break;
    out.push(clean);
    if (clean !== w || out.length === 2) break;
  }
  return out.join(" ");
}

/** The last two words before "by"/"from", minus a leading past-tense verb ("Improved performance" -> "performance"). */
function wordsBefore(head: string): string {
  const words = head.trim().split(/\s+/).slice(-2);
  if (words.length > 1 && LEADING_VERB.test(words[0] ?? "")) words.shift();
  return words.join(" ");
}

/**
 * Figures already written in a role's bullets, lifted out as callouts. Only numbers that are in the
 * text are shown, so the callouts can never say more than the résumé does.
 */
const PATTERNS: readonly ((b: string) => CalloutData | null)[] = [
  (b) => {
    const m = /^(.*?)\s+from\s+(\d+(?:\.\d+)?)\s*ms\s+to\s+(\d+(?:\.\d+)?)\s*ms/i.exec(b);
    return m ? { value: `${m[2]}→${m[3]} ms`, note: wordsBefore(m[1] ?? "") } : null;
  },
  (b) => {
    const m = /(\d+(?:\.\d+)?)\s*(?:percent|%)(.*)$/i.exec(b);
    if (!m) return null;
    const before = b.slice(0, m.index);
    const note = /\bby\s*$/i.test(before) ? wordsBefore(before.replace(/\s*by\s*$/i, "")) : wordsAfter(m[2] ?? "");
    return { value: `${m[1]}%`, note };
  },
  (b) => {
    const m = /(\d+)\s+or more\s+(.*)$/i.exec(b);
    return m ? { value: `${m[1]}+`, note: wordsAfter(m[2] ?? "") } : null;
  },
  (b) => {
    const m = /(\d+)-participant/i.exec(b);
    return m ? { value: m[1] ?? "", note: "participants" } : null;
  },
  (b) => {
    const m = /across\s+(\d+)\s+(.*)$/i.exec(b);
    return m ? { value: m[1] ?? "", note: wordsAfter(m[2] ?? "") } : null;
  },
];

function metrics(bullets: readonly string[]): CalloutData[] {
  const found: CalloutData[] = [];
  for (const pattern of PATTERNS) {
    for (const b of bullets) {
      const c = pattern(b);
      if (c && c.note && !found.some((f) => f.value === c.value)) found.push(c);
    }
  }
  return found.slice(0, 2);
}

const roles = experience.map((r, i) => ({
  role: r,
  key: `${r.org}-${r.period}`,
  span: spans[i] ?? null,
  length: duration(spans[i] ?? null),
  ongoing: r.period.includes("present"),
  metrics: metrics(r.bullets),
}));

interface Hover {
  active: number | null;
  setActive: (i: number | null) => void;
}

/** Fig. 3: every role as a bar on a year ruler, coloured by kind; the list below carries the words. */
function YearRuler({ active, setActive }: Hover) {
  return (
    <figure className="ruler" aria-hidden="true" onMouseLeave={() => setActive(null)}>
      <div className="ruler-lanes">
        {roles.map(({ role: r, key, span: s }, i) => {
          if (!s) return null;
          return (
            <div
              key={key}
              className="ruler-lane"
              data-role={i}
              data-active={active === i ? "" : undefined}
              onMouseEnter={() => setActive(i)}
            >
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
  // Which role is under the pointer (or focused), so its row and its ruler bar light up together.
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <SheetHead id="experience-title" no="03" label="Experience" title="Experience">
        Robotics, cloud, full stack, research and embedded firmware, newest first. Open a role for the detail.
      </SheetHead>
      <YearRuler active={active} setActive={setActive} />
      <ol className="timeline" onMouseLeave={() => setActive(null)}>
        {roles.map(({ role: r, key, span: s, length, ongoing, metrics: figures }, i) => {
          const prev = roles[i - 1]?.span;
          const year = s ? yearOf(s.start) : null;
          const newYear = year !== null && (i === 0 || !prev || yearOf(prev.start) !== year);
          return (
            <li
              key={key}
              className="timeline-item"
              data-role={i}
              data-active={active === i ? "" : undefined}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            >
              {newYear ? (
                <span className="timeline-year mono" aria-hidden="true">
                  {year}
                </span>
              ) : null}
              <span className="timeline-tick" data-kind={r.kind} aria-hidden="true" />
              <details open={i === 0}>
                <summary>
                  <span className="timeline-period mono">{r.period}</span>
                  <span className="timeline-main">
                    <span className="timeline-title">{r.title}</span>
                    {figures.length ? (
                      // The same figures are in the bullets, so screen readers hear them once, there.
                      <span className="role-metrics" aria-hidden="true">
                        {figures.map((c) => (
                          <Callout key={c.value} {...c} />
                        ))}
                      </span>
                    ) : null}
                  </span>
                  <span className="role-spec mono">
                    {length ? (
                      <span className="role-length">
                        <span className="visually-hidden">Length: </span>
                        {length}
                        {ongoing ? <span className="role-ongoing"> · ongoing</span> : null}
                      </span>
                    ) : null}
                    <span className="timeline-tags">
                      <span className="kind-tag mono" data-kind={r.kind}>
                        <span className="kind-swatch" aria-hidden="true" />
                        {kindLabel(r.kind)}
                      </span>
                      <span className="org-tag mono" title={r.org}>
                        {r.tag}
                      </span>
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
