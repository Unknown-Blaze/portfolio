import { useCallback, useEffect, useRef, useState } from "react";
import { KNIGHTS_TOUR } from "../content";
import { prefersReducedMotion } from "../lib/motion";

const SQ = 40;
const STEP_MS = 75;
const TOTAL = KNIGHTS_TOUR.length;

const centre = (square: number): [number, number] => [(square % 8) * SQ + SQ / 2, Math.floor(square / 8) * SQ + SQ / 2];

/** An 8x8 board where a knight visits every square exactly once. Hover or press to play. */
export function KnightTour() {
  const [step, setStep] = useState(1);
  const timer = useRef<number | undefined>(undefined);
  const running = useRef(false);

  const stop = (): void => {
    window.clearInterval(timer.current);
    running.current = false;
  };

  const play = useCallback(() => {
    if (running.current) return;
    if (prefersReducedMotion()) {
      setStep(TOTAL);
      return;
    }
    running.current = true;
    let n = 1;
    setStep(n);
    timer.current = window.setInterval(() => {
      n += 1;
      setStep(n);
      if (n >= TOTAL) stop();
    }, STEP_MS);
  }, []);

  useEffect(() => stop, []);

  const visited = KNIGHTS_TOUR.slice(0, step);
  const here = visited[visited.length - 1] ?? 56;
  const [kx, ky] = centre(here);
  const points = visited.map((sq) => centre(sq).join(",")).join(" ");

  return (
    <figure className="knight">
      <button
        type="button"
        className="knight-board"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") play();
        }}
        onClick={play}
      >
        <span className="visually-hidden">Play a knight's tour: the knight visits all 64 squares exactly once.</span>
        <svg viewBox={`0 0 ${SQ * 8} ${SQ * 8}`} aria-hidden="true">
          {Array.from({ length: 64 }, (_, sq) => {
            const x = (sq % 8) * SQ;
            const y = Math.floor(sq / 8) * SQ;
            const dark = (Math.floor(sq / 8) + (sq % 8)) % 2 === 1;
            return <rect key={sq} x={x} y={y} width={SQ} height={SQ} className={dark ? "sq-dark" : "sq-light"} />;
          })}
          <polyline className="knight-path" points={points} />
          {visited.map((sq, i) => {
            const [x, y] = centre(sq);
            return (
              <text key={sq} x={x} y={y + 13} className="knight-move" textAnchor="middle">
                {i + 1}
              </text>
            );
          })}
          <text x={kx} y={ky + 8} className="knight-piece" textAnchor="middle">
            ♞
          </text>
        </svg>
      </button>
      <figcaption className="mono">
        <span>FIG. 2 · KNIGHT'S TOUR</span>
        <span aria-live="polite">
          {step === 1 ? "HOVER OR TAP TO PLAY" : `MOVE ${String(step).padStart(2, "0")} / ${TOTAL}`}
        </span>
      </figcaption>
    </figure>
  );
}
