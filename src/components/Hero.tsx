import { facts, person, REVISION } from "../content";
import { asset } from "../lib/asset";
import { HeroPlan } from "./HeroPlan";

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
            <p className="headline">{person.headline}</p>
          </div>
        </div>
        <p className="breadth">{person.breadth}</p>
        <p className="hero-actions">
          <a className="button" href="#work">
            See the work
          </a>
          <a className="button button-quiet" href="#contact">
            Get in touch
          </a>
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
    </section>
  );
}
