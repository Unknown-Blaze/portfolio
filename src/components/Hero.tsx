import { facts, person, REVISION, sheets } from "../content";
import { asset } from "../lib/asset";
import "../styles/hero.css";
import { CopyEmail } from "./Contact";
import { HeroPlan } from "./HeroPlan";
import { Legend } from "./Legend";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// REVISION is "YYYY-MM"; anything else is shown as written rather than guessed at.
const issued = (rev: string): string => {
  const [y, m] = rev.split("-");
  const month = MONTHS[Number(m) - 1];
  return y && month ? `${month} ${y}` : rev;
};

// "Role · focus" reads as two lines of different weight; a headline without the dot stays one line.
const [role, focus] = ((): [string, string | null] => {
  const at = person.headline.indexOf(" · ");
  return at < 0 ? [person.headline, null] : [person.headline.slice(0, at), person.headline.slice(at + 3)];
})();

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero-text">
        <p className="title-block mono" aria-hidden="true">
          <span>SHT 00</span>
          <span>GENERAL ARRANGEMENT</span>
          <span>REV {REVISION}</span>
        </p>
        <div className="hero-id">
          <figure className="portrait">
            <img
              src={asset(person.photo.src)}
              srcSet={`${asset("img/rudra-240.webp")} 240w, ${asset(person.photo.src)} 480w`}
              sizes="(max-width: 899px) 92px, 168px"
              alt={person.photo.alt}
              width={person.photo.width}
              height={person.photo.height}
              fetchPriority="high"
            />
            <figcaption className="mono">DETAIL A</figcaption>
          </figure>
          <div>
            <h1 id="hero-name">{person.name}</h1>
            <p className="headline">
              <span className="headline-role">{role}</span>
              {focus ? (
                <>
                  <span className="visually-hidden"> · </span>
                  <span className="headline-focus">{focus}</span>
                </>
              ) : null}
            </p>
          </div>
        </div>
        <p className="breadth">{person.breadth}</p>
        <div className="hero-actions">
          <a className="button" href="#work">
            See the work
          </a>
          <a className="button button-quiet" href="#contact">
            Get in touch
          </a>
          <span className="hero-quick">
            <a className="hero-quick-link mono" href={asset(person.resumePdf)} download>
              <span aria-hidden="true">↓</span> Download résumé
            </a>
            <CopyEmail className="hero-quick-link mono" label="Copy email" />
          </span>
        </div>
        <p className="rev-strip mono">
          <span className="rev-strip-key">REV</span>
          <span>{REVISION}</span>
          <span className="rev-strip-key">ISSUED</span>
          <span>{issued(REVISION)}</span>
          <span className="rev-strip-key">SHEETS</span>
          <span>{String(sheets.length).padStart(2, "0")}</span>
        </p>
      </div>
      <HeroPlan />
      <ul className="facts" aria-label="Highlights">
        {facts.map((f, i) => (
          <li key={f} className="mono">
            <span className="facts-no" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            {f}
          </li>
        ))}
      </ul>
      <Legend />
    </section>
  );
}
