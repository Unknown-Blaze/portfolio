const KEY_W = 24;
const KEY_H = 132;
const BLACK_W = 14;
const BLACK_H = 82;
const X0 = 28;
const Y0 = 86;
const WHITE = 15; // C to C over two octaves
// White keys followed by a black key, by position in the octave: C, D, F, G, A.
const HAS_BLACK = new Set([0, 1, 3, 4, 5]);
// The keys pressed in the plate: a C major triad, then its octave, as the hover arpeggio plays them.
const CHORD = [7, 9, 11, 14];

/** Fig. 5: a two-octave keyboard in plan, annotated like a part drawing. Hover plays a quiet arpeggio of highlights. */
export function PianoPlate() {
  const blacks = Array.from({ length: WHITE - 1 }, (_, i) => i).filter((i) => HAS_BLACK.has(i % 7));
  return (
    <svg viewBox="0 0 420 300" role="img" aria-labelledby="piano-title" className="plate hobby-plate piano">
      <title id="piano-title">
        Drawing: two octaves of a piano keyboard in plan view, a C major chord highlighted, annotated ABRSM Grade 8 with
        Distinction.
      </title>
      <g className="piano-keys">
        {Array.from({ length: WHITE }, (_, i) => {
          const on = CHORD.indexOf(i);
          return (
            <rect
              key={i}
              x={X0 + i * KEY_W}
              y={Y0}
              width={KEY_W}
              height={KEY_H}
              rx={2}
              className={on >= 0 ? "key-white key-on" : "key-white"}
              style={on >= 0 ? { animationDelay: `${on * 140}ms` } : undefined}
            />
          );
        })}
        {blacks.map((i) => (
          <rect
            key={`b${i}`}
            x={X0 + (i + 1) * KEY_W - BLACK_W / 2}
            y={Y0}
            width={BLACK_W}
            height={BLACK_H}
            rx={1.5}
            className="key-black"
          />
        ))}
      </g>
      <g className="plate-notes">
        <path d={`M${X0 + 7.5 * KEY_W} ${Y0 + 110} L${X0 + 9.5 * KEY_W} 44 H400`} />
        <text x={X0 + 9.5 * KEY_W + 6} y={36}>
          ABRSM GRADE 8
        </text>
        <path d={`M${X0 + 1.5 * KEY_W} ${Y0 + 30} L${X0 + 0.5 * KEY_W} 44 H${X0 + 150}`} />
        <text x={X0 + 0.5 * KEY_W + 4} y={36}>
          MUSIC DIRECTOR
        </text>
      </g>
      <text x={400} y={64} className="plate-stamp" textAnchor="end">
        DISTINCTION
      </text>
      <g className="plate-dim">
        <path
          d={`M${X0} ${Y0 + KEY_H + 12} V${Y0 + KEY_H + 40} M${X0 + WHITE * KEY_W} ${Y0 + KEY_H + 12} V${Y0 + KEY_H + 40}`}
        />
        <path d={`M${X0} ${Y0 + KEY_H + 30} H${X0 + WHITE * KEY_W}`} />
        <text x={X0 + (WHITE * KEY_W) / 2} y={Y0 + KEY_H + 24} textAnchor="middle">
          2 OCTAVES · 15 WHITE · 10 BLACK
        </text>
      </g>
    </svg>
  );
}
