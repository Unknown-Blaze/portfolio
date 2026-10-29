import { person, REVISION } from "../content";
import "../styles/hero.css";
import { ExtLink } from "./ExtLink";

/** Sheet border: credits, revision and a way back up drawn as a vertical dimension. */
export function Footer() {
  return (
    <footer className="footer mono">
      <span>Drawn by hand, no template.</span>
      <span>REV {REVISION}</span>
      <ExtLink href={person.repo}>Source on GitHub</ExtLink>
      <a className="to-top" href="#top">
        <svg className="to-top-dim" viewBox="0 0 12 28" width="12" height="28" aria-hidden="true" focusable="false">
          <path d="M1 27 H11" />
          <path d="M6 27 V3" />
          <path className="to-top-head" d="M6 1 L2.5 8 H9.5 Z" />
        </svg>
        <span>Back to top</span>
      </a>
    </footer>
  );
}
