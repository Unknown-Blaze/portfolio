import * as content from "../content";
import { SheetHead } from "./SheetHead";
import "../styles/sections.css";

const { skills } = content;
const TICKS = 5;

/** Keys whose strings are addresses, not words a reader sees, so they would only add noise. */
const SKIP_KEYS = new Set(["href", "src", "resumePdf"]);

/** Every visible string on the sheet except the skills legend itself, gathered once from content.ts. */
function collect(value: unknown, key: string, out: string[]): void {
  if (SKIP_KEYS.has(key)) return;
  if (typeof value === "string") {
    if (!/^https?:\/\//.test(value)) out.push(value);
  } else if (Array.isArray(value)) {
    for (const v of value) collect(v, key, out);
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) collect(v, k, out);
  }
}

const corpus = ((): string => {
  const out: string[] = [];
  for (const [k, v] of Object.entries(content)) if (k !== "skills") collect(v, k, out);
  return out.join("\n");
})();

const escape = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * How many times a group's keywords appear across the sheet. Longest keywords match first and are blanked out,
 * so "ROS 2" is not also counted as "ROS". One-letter keywords ("C") are skipped: they match initials and noise.
 */
function mentions(items: string): number {
  const keywords = items
    .split(",")
    .map((k) => k.trim())
    .filter((k) => k.length > 1)
    .sort((a, b) => b.length - a.length);
  let text = corpus;
  let hits = 0;
  for (const k of keywords) {
    const re = new RegExp(`(?<![\\p{L}\\p{N}])${escape(k).replace(/ /g, "[\\s\\u00a0]")}(?![\\p{L}\\p{N}])`, "giu");
    text = text.replace(re, (m) => {
      hits += 1;
      return " ".repeat(m.length);
    });
  }
  return hits;
}

const counts = skills.map((s) => mentions(s.items));
const most = Math.max(1, ...counts);
// A square-root scale, so one very common group does not flatten every other group to a single tick.
const ticksFor = (n: number): number =>
  n === 0 ? 0 : Math.max(1, Math.round((Math.sqrt(n) / Math.sqrt(most)) * TICKS));

const keyOf = (i: number): string => String.fromCharCode(65 + i);

/** The résumé's skill groups, keyed A to M like a drawing legend. */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <SheetHead id="skills-title" no="06" label="Skills" title="Skills legend" />
      <p className="legend-note mono">
        <span className="freq freq-sample" aria-hidden="true">
          {Array.from({ length: TICKS }, (_, k) => (
            <span key={k} className="freq-tick" data-on={k < 3 ? "" : undefined} />
          ))}
        </span>
        <span className="legend-note-text">
          Ticks: frequency on this sheet, how often a group&rsquo;s keywords appear in the text of this page. Not a
          proficiency rating.
        </span>
      </p>
      <dl className="legend">
        {skills.map((s, i) => {
          const key = keyOf(i);
          const id = `skill-${key.toLowerCase()}`;
          const n = counts[i] ?? 0;
          const on = ticksFor(n);
          return (
            <div key={s.group} id={id} className="legend-row">
              <dt>
                <a className="legend-key mono" href={`#${id}`} aria-label={`Key ${key}, link to ${s.group}`}>
                  {key}
                </a>
                <span className="legend-group">{s.group}</span>
                <span className="freq" title={`${n} mentions on this sheet`}>
                  <span aria-hidden="true" className="freq-ticks">
                    {Array.from({ length: TICKS }, (_, k) => (
                      <span key={k} className="freq-tick" data-on={k < on ? "" : undefined} />
                    ))}
                  </span>
                  <span className="freq-count mono">{n}×</span>
                  <span className="visually-hidden">
                    {" "}
                    mentions on this sheet, {on} of {TICKS} ticks
                  </span>
                </span>
              </dt>
              <dd>{s.items}</dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
