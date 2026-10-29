import { useEffect, useRef } from "react";
import { sheets } from "../content";
import { useActiveSection } from "../lib/activeSection";
import { prefersReducedMotion } from "../lib/motion";
import { useTheme } from "../lib/theme";
import "../styles/hero.css";

const IDS = sheets.map((s) => s.id);

/**
 * A hairline under the bar that fills as the page scrolls. Writes a transform once per frame at most;
 * the page height is cached and refreshed only when the document resizes, so scrolling never reads layout.
 */
function useScrollProgress() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const doc = document.documentElement;
    let range = 1;
    let frame = 0;
    const draw = (): void => {
      frame = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / range));
      bar.style.transform = `scaleX(${p})`;
    };
    const schedule = (): void => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const measure = (): void => {
      range = Math.max(1, doc.scrollHeight - window.innerHeight);
      schedule();
    };
    measure();
    const resize = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    resize?.observe(document.body);
    window.addEventListener("resize", measure, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      resize?.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", schedule);
    };
  }, []);
  return ref;
}

/** Sticky sheet index: every section by sheet number, the current one marked. */
export function Nav() {
  const active = useActiveSection(IDS);
  const [theme, toggle] = useTheme();
  const progressRef = useScrollProgress();
  const stripRef = useRef<HTMLElement>(null);

  // On a narrow bar the index is a strip that scrolls sideways; keep the current sheet in view.
  // Scrolls the strip itself: scrollIntoView would also move the page.
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || !active || strip.scrollWidth <= strip.clientWidth) return;
    const link = strip.querySelector<HTMLElement>(`a[href="#${CSS.escape(active)}"]`);
    if (!link) return;
    const left = link.offsetLeft - (strip.clientWidth - link.offsetWidth) / 2;
    strip.scrollTo({ left, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [active]);

  const next = theme === "dark" ? "light" : "dark";
  return (
    <header className="topbar">
      <a className="monogram mono" href="#top">
        RPG<span className="visually-hidden">, Rudra Prasadh Ganesh, back to top</span>
      </a>
      <nav aria-label="Sheet index" className="index" ref={stripRef}>
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
      <button
        type="button"
        className="theme-toggle mono"
        onClick={toggle}
        aria-label={`Switch to ${next} theme`}
        title={`Switch to ${next} theme`}
      >
        <span aria-hidden="true">{theme === "dark" ? "◐" : "◑"} </span>
        <span className="theme-toggle-word" aria-hidden="true">
          {theme === "dark" ? "DARK" : "LIGHT"}
        </span>
      </button>
      <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}
