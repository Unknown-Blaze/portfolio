import { useMemo, useState } from "react";
import { DOMAINS, work, type Domain, type Work as WorkItem } from "../content";
import { asset } from "../lib/asset";
import { Callout } from "./Callout";
import { Chips } from "./Chips";
import { ExtLink } from "./ExtLink";
import { RobotPlate } from "./RobotPlate";
import { SheetHead } from "./SheetHead";

type Filter = Domain | "All";

function Links({ item }: { item: WorkItem }) {
  if (item.links.length === 0) return <p className="work-links not-public mono">Not public</p>;
  return (
    <p className="work-links">
      {item.links.map((l) => (
        <ExtLink key={l.href} href={l.href} className="arrow-link">
          {l.label}
        </ExtLink>
      ))}
    </p>
  );
}

function Feature({ item, index }: { item: WorkItem; index: number }) {
  const image = item.image;
  return (
    <article className={`feature ${index % 2 === 1 ? "feature-flip" : ""}`} aria-labelledby={`w-${item.id}`}>
      {image ? (
        <figure className="feature-shot">
          <img
            src={asset(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mono" aria-hidden="true">
            DETAIL {String.fromCharCode(66 + index)} · {item.name.toUpperCase()}
          </figcaption>
        </figure>
      ) : item.plate === "robot" ? (
        <figure className="feature-shot">
          <RobotPlate />
          <figcaption className="mono" aria-hidden="true">
            DETAIL {String.fromCharCode(66 + index)} · PLAN VIEW, NOT TO SCALE
          </figcaption>
        </figure>
      ) : null}
      <div className="feature-body">
        <p className="kicker mono">
          {item.domains.join(" · ")}
          {item.period ? ` · ${item.period}` : ""}
        </p>
        <h3 id={`w-${item.id}`}>{item.name}</h3>
        <p className="feature-context">{item.context}</p>
        <p>{item.summary}</p>
        {item.points.length > 0 ? (
          <ul className="ticks">
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        ) : null}
        {item.callouts.length > 0 ? (
          <p className="callouts">
            {item.callouts.map((c) => (
              <Callout key={c.value} {...c} />
            ))}
          </p>
        ) : null}
        <Chips items={item.stack} label={`${item.name} stack`} />
        <Links item={item} />
      </div>
    </article>
  );
}

function Compact({ item }: { item: WorkItem }) {
  return (
    <article className="panel compact" aria-labelledby={`w-${item.id}`}>
      <p className="kicker mono">
        {item.domains.length > 0 ? item.domains.join(" · ") : "VR"}
        {item.period ? ` · ${item.period}` : ""}
      </p>
      <h3 id={`w-${item.id}`}>{item.name}</h3>
      <p className="feature-context">{item.context}</p>
      <p>{item.summary}</p>
      {item.points.length > 0 ? (
        <ul className="ticks">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ) : null}
      {item.callouts.length > 0 ? (
        <p className="callouts">
          {item.callouts.map((c) => (
            <Callout key={c.value} {...c} />
          ))}
        </p>
      ) : null}
      <Chips items={item.stack} label={`${item.name} stack`} />
      <Links item={item} />
    </article>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = useMemo(
    () => (filter === "All" ? work : work.filter((w) => w.domains.includes(filter))),
    [filter],
  );
  const features = shown.filter((w) => w.image ?? w.plate);
  const others = shown.filter((w) => !(w.image ?? w.plate));
  const count = (d: Domain): number => work.filter((w) => w.domains.includes(d)).length;

  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <SheetHead id="work-title" no="02" label="Selected work" title="Selected work">
        AI systems, production apps, research and robots. Filter by domain.
      </SheetHead>
      <div className="filters" role="group" aria-label="Filter work by domain">
        {(["All", ...DOMAINS] as const).map((d) => (
          <button
            key={d}
            type="button"
            className="filter mono"
            aria-pressed={filter === d}
            onClick={() => setFilter(d)}
          >
            {d}
            <span className="filter-count">{d === "All" ? work.length : count(d)}</span>
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
        {filter === "All" ? "" : ` in ${filter}`}.
      </p>
      <div className="features">
        {features.map((w, i) => (
          <Feature key={w.id} item={w} index={i} />
        ))}
      </div>
      {others.length > 0 ? (
        <>
          <h3 className="sub-head mono">{features.length > 0 ? "Also on the sheet" : "On the sheet"}</h3>
          <div className="compact-grid">
            {others.map((w) => (
              <Compact key={w.id} item={w} />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
