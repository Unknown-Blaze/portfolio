import { beyond, type Pastime } from "../content";
import { CubePlate } from "./CubePlate";
import { KnightTour } from "./KnightTour";
import { PianoPlate } from "./PianoPlate";
import { SheetHead } from "./SheetHead";

function Plate({ kind }: { kind: Pastime["plate"] }) {
  if (kind === "knight") return <KnightTour />;
  const [fig, view] = kind === "piano" ? ["FIG. 5 · KEYBOARD", "PLAN VIEW"] : ["FIG. 6 · 3×3×3 CUBE", "EXPLODED ISO"];
  return (
    <figure className="hobby-figure">
      {kind === "piano" ? <PianoPlate /> : <CubePlate />}
      <figcaption className="mono">
        <span>{fig}</span>
        <span>{view}</span>
      </figcaption>
    </figure>
  );
}

/** Three tiles, each a drawn plate over its words: chess, piano and speedcubing. */
export function Beyond() {
  return (
    <section id="beyond" aria-labelledby="beyond-title" className="section">
      <SheetHead id="beyond-title" no="08" label="Beyond code" title="Beyond code">
        Chess, piano and speedcubing, each drawn as a plate. Hover the board, the keys or the cube.
      </SheetHead>
      <ul className="beyond-tiles">
        {beyond.map((b) => (
          <li key={b.label} className="beyond-tile">
            <Plate kind={b.plate} />
            <div className="beyond-text">
              <p className="kicker mono">{b.label}</p>
              <h3>{b.title}</h3>
              <p>{b.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
