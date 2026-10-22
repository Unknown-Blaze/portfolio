import { hackathons, honours, type Medal } from "../content";
import { ExtLink } from "./ExtLink";
import { SheetHead } from "./SheetHead";

function Rail({ title, items, wide }: { title: string; items: readonly Medal[]; wide?: boolean }) {
  const id = `rail-${title.toLowerCase()}`;
  return (
    <>
      <h3 className="sub-head mono" id={id}>
        {title}
      </h3>
      {/* Focusable so keyboard users can scroll the rail sideways on narrow screens. */}
      <ul className={wide ? "rail rail-wide" : "rail"} aria-labelledby={id} tabIndex={0}>
        {items.map((m) => (
          <li key={m.name} className="medal">
            <span className="medal-placing mono">{m.placing}</span>
            <h4>{m.name}</h4>
            <p className="medal-event">
              {m.event}
              {m.date ? ` · ${m.date}` : ""}
            </p>
            <p className="medal-note">{m.note}</p>
            {m.link ? (
              <ExtLink href={m.link.href} className="arrow-link mono">
                {m.link.label}
              </ExtLink>
            ) : null}
          </li>
        ))}
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
