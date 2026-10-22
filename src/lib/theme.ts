import { useCallback, useState } from "react";

export type Theme = "light" | "dark";

const KEY = "theme";

// index.html sets data-theme before first paint; this hook only reads and flips it.
const current = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(current);
  const toggle = useCallback(() => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
    setTheme(next);
  }, []);
  return [theme, toggle];
}
