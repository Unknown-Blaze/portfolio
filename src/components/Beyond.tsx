import { beyond } from "../content";
import { KnightTour } from "./KnightTour";
import { SheetHead } from "./SheetHead";

export function Beyond() {
  return (
    <section id="beyond" aria-labelledby="beyond-title" className="section">
      <SheetHead id="beyond-title" no="08" label="Beyond code" title="Beyond code" />
      <div className="beyond-grid">
        <ul className="beyond-list">
          {beyond.map((b) => (
            <li key={b.label} className="panel">
              <p className="kicker mono">{b.label}</p>
              <h3>{b.title}</h3>
              <p>{b.detail}</p>
            </li>
          ))}
        </ul>
        <KnightTour />
      </div>
    </section>
  );
}
