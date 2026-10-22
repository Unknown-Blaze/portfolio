import { useCallback, useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/motion";

const TILE = 40;
const COLS = 12;
const ROWS = 9;
const W = TILE * COLS;
const H = TILE * ROWS;
// The grout run follows tile joints, climbing like the amber line on the GitHub banner.
const RUN = "M40 320 H120 V240 H200 V200 H280 V120 H360 V80 H400";
const VERTICES: readonly [number, number][] = [
  [120, 240],
  [200, 200],
  [280, 120],
  [360, 80],
];
const DURATION_MS = 5200;

const ease = (t: number): number => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Fig. 1: a small robot drives the tile joints and lays the amber grout line behind it. Plays once. */
export function HeroPlan() {
  const runRef = useRef<SVGPathElement>(null);
  const robotRef = useRef<SVGGElement>(null);
  const frame = useRef(0);

  const place = useCallback((progress: number) => {
    const run = runRef.current;
    const robot = robotRef.current;
    if (!run || !robot) return;
    const len = run.getTotalLength();
    const at = len * progress;
    const p = run.getPointAtLength(at);
    const ahead = run.getPointAtLength(Math.min(len, at + 1));
    const behind = run.getPointAtLength(Math.max(0, at - 1));
    const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
    run.style.strokeDasharray = `${len}`;
    run.style.strokeDashoffset = `${len - at}`;
    robot.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${angle})`);
  }, []);

  const play = useCallback(() => {
    cancelAnimationFrame(frame.current);
    if (prefersReducedMotion()) {
      place(1);
      return;
    }
    const start = performance.now();
    const tick = (now: number): void => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      place(ease(t));
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    place(0);
    frame.current = requestAnimationFrame(tick);
  }, [place]);

  useEffect(() => {
    play();
    return () => cancelAnimationFrame(frame.current);
  }, [play]);

  return (
    <figure className="plan">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="plan-title">
        <title id="plan-title">
          Animated plan view: a small robot drives along the joints of a tile grid and lays a grout line behind it.
        </title>
        <g className="plan-grid">
          {Array.from({ length: COLS + 1 }, (_, i) => (
            <line key={`v${i}`} x1={i * TILE} y1={0} x2={i * TILE} y2={H} />
          ))}
          {Array.from({ length: ROWS + 1 }, (_, i) => (
            <line key={`h${i}`} x1={0} y1={i * TILE} x2={W} y2={i * TILE} />
          ))}
        </g>
        <path className="plan-intent" d={RUN} />
        <path ref={runRef} className="plan-run" d={RUN} />
        {VERTICES.map(([x, y]) => (
          <circle key={`${x}-${y}`} className="plan-node" cx={x} cy={y} r={4} />
        ))}
        <circle className="plan-goal" cx={400} cy={80} r={6} />
        <text className="plan-label" x={40} y={346}>
          START
        </text>
        <text className="plan-label" x={400} y={56} textAnchor="middle">
          END OF RUN
        </text>
        <g ref={robotRef} className="robot" transform="translate(400 80)">
          <g className="robot-sweep">
            <path d="M18 -12 A16 16 0 0 1 18 12" />
            <path d="M24 -18 A24 24 0 0 1 24 18" />
            <path d="M30 -24 A32 32 0 0 1 30 24" />
          </g>
          <rect className="robot-wheel" x={-11} y={-16} width={14} height={5} rx={2} />
          <rect className="robot-wheel" x={-11} y={11} width={14} height={5} rx={2} />
          <rect className="robot-body" x={-15} y={-12} width={30} height={24} rx={6} />
          <rect className="robot-nozzle" x={-20} y={-3} width={6} height={6} rx={1.5} />
          <circle className="robot-lidar" cx={4} cy={0} r={5} />
        </g>
      </svg>
      <figcaption className="mono">
        <span>FIG. 1 · ROBOT ON A TILE GRID</span>
        <button type="button" className="link-button mono" onClick={play}>
          ↻ Replay
        </button>
      </figcaption>
    </figure>
  );
}
