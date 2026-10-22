import { person, REVISION, sheets } from "../content";
import { asset } from "../lib/asset";
import { ExtLink } from "./ExtLink";
import { SheetHead } from "./SheetHead";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section contact">
      <SheetHead id="contact-title" no="09" label="Contact" title="Contact">
        Email is quickest. Happy to talk about robots, embedded systems, machine learning and the software around them.
      </SheetHead>
      <div className="contact-grid">
        <div>
          <p className="contact-email">
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
          <ul className="contact-links">
            <li>
              <ExtLink href={person.linkedin} className="button button-quiet">
                LinkedIn
              </ExtLink>
            </li>
            <li>
              <ExtLink href={person.github} className="button button-quiet">
                GitHub
              </ExtLink>
            </li>
            <li>
              <a href={asset(person.resumePdf)} className="button" download>
                Résumé (PDF)
              </a>
            </li>
          </ul>
        </div>
        {/* The sheet's own title block, bottom right where a drawing keeps it. */}
        <dl className="stamp mono" aria-label="Sheet title block">
          <div className="stamp-wide">
            <dt>Title</dt>
            <dd>{person.name}</dd>
          </div>
          <div>
            <dt>Drawn by</dt>
            <dd>R. P. Ganesh</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{person.location}</dd>
          </div>
          <div>
            <dt>Sheet</dt>
            <dd>
              {sheets.length} of {sheets.length}
            </dd>
          </div>
          <div>
            <dt>Rev</dt>
            <dd>{REVISION}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
