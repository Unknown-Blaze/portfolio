import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const KEY = "theme";

// index.html sets data-theme before first paint; the DOM attribute is the single source of truth.
const current = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

const listeners = new Set<() => void>();
let observer: MutationObserver | null = null;

// One observer on <html> serves every subscriber, so the nav toggle and every plate stay in step.
function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  if (!observer) {
    observer = new MutationObserver(() => listeners.forEach((l) => l()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  }
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && observer) {
      observer.disconnect();
      observer = null;
    }
  };
}

/** The current theme, shared by every caller and updated whenever `data-theme` changes. */
export function useThemeValue(): Theme {
  return useSyncExternalStore(subscribe, current, () => "light");
}

export function useTheme(): [Theme, () => void] {
  const theme = useThemeValue();
  const toggle = useCallback(() => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }, []);
  return [theme, toggle];
}
