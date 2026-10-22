import { person, REVISION } from "../content";
import { ExtLink } from "./ExtLink";

export function Footer() {
  return (
    <footer className="footer mono">
      <span>Drawn by hand, no template.</span>
      <span>REV {REVISION}</span>
      <ExtLink href={person.repo}>Source on GitHub</ExtLink>
    </footer>
  );
}
