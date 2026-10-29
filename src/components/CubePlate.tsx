type P3 = readonly [number, number, number];

const S = 34; // one cubie, in drawing units
const OX = 210;
const OY = 165;
const LIFT = 1.3; // how far the exploded top layer floats, in cubies
const TWIST = (22 * Math.PI) / 180;
const C30 = Math.cos(Math.PI / 6);

// Isometric projection: x runs down-right, y down-left, z up.
const project = ([x, y, z]: P3): [number, number] => [OX + (x - y) * C30 * S, OY + ((x + y) / 2 - z) * S];
const rotate = ([x, y, z]: P3, a: number): P3 => {
  const dx = x - 1.5;
  const dy = y - 1.5;
  return [1.5 + dx * Math.cos(a) - dy * Math.sin(a), 1.5 + dx * Math.sin(a) + dy * Math.cos(a), z];
};
const add = (a: P3, b: P3, k = 1): P3 => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];

/** The 3 x n stickers of a face spanned by u (3 cubies) and v (n cubies) from origin o, inset like real stickers. */
function stickers(o: P3, u: P3, v: P3, rows: number, map: (p: P3) => P3, cls: string, key: string) {
  const inset = 0.08;
  const out = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < rows; j++) {
      const corners: P3[] = [
        [i + inset, j + inset],
        [i + 1 - inset, j + inset],
        [i + 1 - inset, j + 1 - inset],
        [i + inset, j + 1 - inset],
      ].map(([a = 0, b = 0]) => map(add(add(o, u, a / 3), v, b / rows)));
      out.push(<polygon key={`${key}${i}${j}`} className={cls} points={corners.map((c) => project(c).join(",")).join(" ")} />);
    }
  }
  return out;
}

const id = (p: P3): P3 => p;
const layer = (p: P3): P3 => {
  const r = rotate(p, TWIST);
  return [r[0], r[1], r[2] + LIFT];
};

/** Fig. 6: a 3x3x3 cube in exploded isometric view, the top layer lifted and mid-turn. */
export function CubePlate() {
  // Visible side faces of the twisted layer: those whose outward normal points toward the viewer at (+x, +y).
  const sides: { o: P3; u: P3; n: P3 }[] = [
    { o: [3, 0, 2], u: [0, 3, 0], n: [1, 0, 0] },
    { o: [0, 3, 2], u: [3, 0, 0], n: [0, 1, 0] },
    { o: [0, 0, 2], u: [0, 3, 0], n: [-1, 0, 0] },
    { o: [0, 0, 2], u: [3, 0, 0], n: [0, -1, 0] },
  ];
  const visible = sides.filter(({ n }) => {
    const [nx, ny] = rotate(add([1.5, 1.5, 0], n), TWIST);
    return nx - 1.5 + (ny - 1.5) > 0;
  });
  const [ax, ay] = project([3, 0, 0]);
  const [bx, by] = project([3, 3, 0]);
  return (
    <svg viewBox="0 0 420 300" role="img" aria-labelledby="cube-title" className="plate hobby-plate cube">
      <title id="cube-title">
        Drawing: a 3 by 3 by 3 puzzle cube in exploded isometric view with the top layer lifted and turned, annotated
        Malaysia National Cubing Open finalist.
      </title>
      <g className="cube-base">
        {stickers([3, 0, 0], [0, 3, 0], [0, 0, 2], 2, id, "cube-r", "r")}
        {stickers([0, 3, 0], [3, 0, 0], [0, 0, 2], 2, id, "cube-l", "l")}
        {stickers([0, 0, 2], [3, 0, 0], [0, 3, 0], 3, id, "cube-t cube-inner", "m")}
      </g>
      <g className="cube-guides">
        {(
          [
            [3, 0],
            [0, 3],
            [3, 3],
          ] as const
        ).map(([x, y]) => {
          const [x1, y1] = project([x, y, 2]);
          const [x2, y2] = project(layer([x, y, 2]));
          return <line key={`${x}${y}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <g className="cube-layer">
        {visible.map(({ o, u, n }, k) =>
          stickers(o, u, [0, 0, 1], 1, layer, n[0] !== 0 ? "cube-r" : "cube-l", `s${k}`),
        )}
        {stickers([0, 0, 3], [3, 0, 0], [0, 3, 0], 3, layer, "cube-t", "t")}
      </g>
      <g className="plate-notes">
        <path d={`M${project(layer([1.5, 0, 3]))[0]} ${project(layer([1.5, 0, 3]))[1]} L228 30 H410`} />
        <text x={232} y={22}>
          TOP LAYER, 22° TURN
        </text>
        <path d={`M${project([1.5, 3, 1])[0]} ${project([1.5, 3, 1])[1]} L60 250 H10`} />
        <text x={12} y={242}>
          3×3×3
        </text>
      </g>
      <g className="plate-dim">
        <path d={`M${ax + 8} ${ay + 4} L${bx + 8} ${by + 4}`} />
      </g>
      <text x={410} y={292} className="plate-stamp" textAnchor="end">
        MALAYSIA NATIONAL CUBING OPEN · FINALIST
      </text>
    </svg>
  );
}
