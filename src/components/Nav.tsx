import { sheets } from "../content";
import { useActiveSection } from "../lib/activeSection";
import { useTheme } from "../lib/theme";

const IDS = sheets.map((s) => s.id);

/** Sticky sheet index: every section by sheet number, the current one marked. */
export function Nav() {
  const active = useActiveSection(IDS);
  const [theme, toggle] = useTheme();
  return (
    <header className="topbar">
      <a className="monogram mono" href="#top">
        RPG<span className="visually-hidden">, Rudra Prasadh Ganesh, back to top</span>
      </a>
      <nav aria-label="Sheet index" className="index">
        <ol>
          {sheets.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-current={active === s.id ? "location" : undefined}>
                <span className="index-no mono">{s.no}</span>
                <span className="index-title">{s.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <button type="button" className="theme-toggle mono" onClick={toggle}>
        <span aria-hidden="true">{theme === "dark" ? "◐" : "◑"} </span>
        <span className="theme-toggle-word">{theme === "dark" ? "DARK" : "LIGHT"}</span>
        <span className="visually-hidden"> theme, switch to {theme === "dark" ? "light" : "dark"}</span>
      </button>
    </header>
  );
}
