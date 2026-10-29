import { useEffect, useRef, useState, type RefObject } from "react";
import { prefersReducedMotion } from "./motion";

const DURATION_MS = 1400;
// Digits read the same at 30 frames a second, and each frame is a React render.
const MIN_FRAME_MS = 1000 / 30 - 1;

const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

/**
 * Progress from 0 to 1, started the first time the element scrolls into view.
 * With reduced motion, or without IntersectionObserver, it is 1 from the first paint.
 */
export function useRevealProgress<T extends Element>(): [RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(() =>
    prefersReducedMotion() || typeof IntersectionObserver === "undefined" ? 1 : 0,
  );
  // Whether the count starts already finished; read once, so the effect below runs once per mount.
  const doneAtMount = useRef(progress === 1);

  useEffect(() => {
    const el = ref.current;
    if (!el || doneAtMount.current) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        let last = -Infinity;
        const tick = (now: number): void => {
          const t = Math.min(1, (now - start) / DURATION_MS);
          if (now - last >= MIN_FRAME_MS || t === 1) {
            last = now;
            setProgress(easeOut(t));
          }
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return [ref, progress];
}
