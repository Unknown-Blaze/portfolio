import { now, nowIntro } from "../content";
import { Chips } from "./Chips";
import { SheetHead } from "./SheetHead";

export function Now() {
  return (
    <section id="now" aria-labelledby="now-title" className="section">
      <SheetHead id="now-title" no="01" label="Now" title="What I'm building now">
        {nowIntro}
      </SheetHead>
      <div className="now-grid">
        {now.map((n) => (
          <article key={n.org} className="panel now-card">
            <p className="now-since mono">SINCE {n.since.toUpperCase()}</p>
            <h3>
              {n.org}
              <span className="now-role">{n.role}</span>
            </h3>
            <p>{n.summary}</p>
            <Chips items={n.stack} label={`${n.org} stack`} />
          </article>
        ))}
      </div>
    </section>
  );
}
