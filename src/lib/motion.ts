const QUERY = "(prefers-reduced-motion: reduce)";

export const prefersReducedMotion = (): boolean => typeof window !== "undefined" && window.matchMedia(QUERY).matches;
