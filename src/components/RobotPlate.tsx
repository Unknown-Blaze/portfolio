const W = 800;
const H = 450;
const T = 50;

/** A drawn plate standing in for a screenshot: plan view of the grouting robot mid-run, annotated. */
export function RobotPlate() {
  const rays = [-60, -40, -20, 0, 20, 40, 60];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="plate-title" className="plate">
      <title id="plate-title">
        Drawing: plan view of a tile-grouting robot on a tiled floor, with grouted joints behind it and LiDAR rays
        ahead.
      </title>
      <g className="plan-grid">
        {Array.from({ length: W / T + 1 }, (_, i) => (
          <line key={`v${i}`} x1={i * T} y1={0} x2={i * T} y2={H} />
        ))}
        {Array.from({ length: H / T + 1 }, (_, i) => (
          <line key={`h${i}`} x1={0} y1={i * T} x2={W} y2={i * T} />
        ))}
      </g>
      <g className="plate-done">
        <path d="M0 300 H400" />
        <path d="M0 250 H800" />
        <path d="M0 200 H800" />
        <path d="M100 200 V450 M150 200 V450 M200 200 V450 M250 200 V450 M300 200 V450 M350 200 V450" />
      </g>
      <g className="plate-rays">
        {rays.map((a) => {
          const r = (a * Math.PI) / 180;
          return <line key={a} x1={440} y1={300} x2={440 + Math.cos(r) * 230} y2={300 + Math.sin(r) * 230} />;
        })}
      </g>
      <g transform="translate(420 300)">
        <rect className="robot-wheel" x={-30} y={-38} width={40} height={12} rx={4} />
        <rect className="robot-wheel" x={-30} y={26} width={40} height={12} rx={4} />
        <rect className="robot-body" x={-42} y={-28} width={84} height={56} rx={12} />
        <rect className="robot-nozzle" x={-54} y={-7} width={14} height={14} rx={3} />
        <circle className="robot-lidar" cx={20} cy={0} r={11} />
      </g>
      <g className="plate-notes">
        <path d="M440 300 L520 110 H640" />
        <text x={526} y={102}>
          LIDAR + CAMERAS
        </text>
        <path d="M368 300 L300 380 H160" />
        <text x={164} y={372}>
          GROUT NOZZLE
        </text>
        <path d="M600 250 L660 170 H760" />
        <text x={664} y={162}>
          GROUTED JOINT
        </text>
      </g>
    </svg>
  );
}
