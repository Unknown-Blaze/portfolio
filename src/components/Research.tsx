import { research } from "../content";
import { ExtLink } from "./ExtLink";
import { SheetHead } from "./SheetHead";

export function Research() {
  return (
    <section id="research" aria-labelledby="research-title" className="section">
      <SheetHead id="research-title" no="04" label="Research" title="Research & publications" />
      <ol className="research">
        {research.map((r, i) => (
          <li key={r.title} className="panel research-item">
            <p className="kicker mono">
              <span aria-hidden="true">[{i + 1}] </span>
              {r.kind}
            </p>
            <h3>{r.title}</h3>
            <p>{r.detail}</p>
            <p className="research-meta mono">
              <span>{r.meta}</span>
              {r.link ? (
                <ExtLink href={r.link.href} className="arrow-link">
                  {r.link.label}
                </ExtLink>
              ) : null}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
