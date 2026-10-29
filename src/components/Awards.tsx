import { hackathons, honours, type Medal } from "../content";
import { ExtLink } from "./ExtLink";
import { SheetHead } from "./SheetHead";
import "../styles/sections.css";

/** The mark inside the medal ring: a placing number if the placing has one, "W" for a win, else its initial. */
function glyphOf(placing: string): string {
  if (/^WINNER$/i.test(placing.trim())) return "W";
  const n = /\d+/.exec(placing);
  if (n) return n[0];
  return placing.trim().charAt(0).toUpperCase();
}

/** "4 / 4 YEARS" is a repeat: one tile with a ×4 badge rather than four copies. */
function repeatOf(placing: string): number | null {
  const m = /^(\d+)\s*\/\s*(\d+)/.exec(placing);
  return m ? Number(m[1]) : null;
}

/** A medal: ribbon, ring and inner ring, the placing's mark in the middle. Drawn, not an icon font. */
function MedalGlyph({ mark }: { mark: string }) {
  const size = mark.length > 1 ? 12.5 : 15;
  return (
    <svg className="medal-glyph" viewBox="0 0 40 46" width="40" height="46" aria-hidden="true" focusable="false">
      <path d="M13 1 L20 13 L27 1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="28" r="16" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="20" cy="28" r="12.5" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1.5 2" />
      <text
        x="20"
        y="28"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize={size}
        fontWeight="600"
        fontFamily="var(--mono)"
      >
        {mark}
      </text>
    </svg>
  );
}

function Rail({ title, items, wide }: { title: string; items: readonly Medal[]; wide?: boolean }) {
  const id = `rail-${title.toLowerCase()}`;
  return (
    <>
      <h3 className="sub-head mono" id={id}>
        {title}
      </h3>
      {/* Focusable so keyboard users can scroll the rail sideways on narrow screens. */}
      <ul className={wide ? "rail rail-wide" : "rail"} aria-labelledby={id} tabIndex={0}>
        {items.map((m) => {
          const repeat = repeatOf(m.placing);
          return (
            <li key={m.name} className="medal">
              <span className="medal-top">
                <MedalGlyph mark={glyphOf(m.placing)} />
                <span className="medal-placing mono">{m.placing}</span>
                {repeat ? (
                  <span className="medal-repeat mono">
                    <span aria-hidden="true">×{repeat}</span>
                    <span className="visually-hidden">, {repeat} times</span>
                  </span>
                ) : null}
              </span>
              <h4>{m.name}</h4>
              <p className="medal-event">
                {m.event}
                {m.date ? ` · ${m.date}` : ""}
              </p>
              {repeat ? (
                <span className="medal-years" aria-hidden="true">
                  {Array.from({ length: repeat }, (_, k) => (
                    <span key={k} className="medal-year mono">
                      Y{k + 1}
                    </span>
                  ))}
                </span>
              ) : null}
              <p className="medal-note">{m.note}</p>
              {m.link ? (
                <ExtLink href={m.link.href} className="arrow-link mono">
                  {m.link.label}
                </ExtLink>
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="section">
      <SheetHead id="awards-title" no="05" label="Hackathons & awards" title="Hackathons & awards" />
      <Rail title="Hackathons" items={hackathons} wide />
      <Rail title="Honours" items={honours} />
    </section>
  );
}
