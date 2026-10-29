import { useMemo, useState, type ReactNode } from "react";
import { DOMAINS, work, type Domain, type Work as WorkItem } from "../content";
import { asset } from "../lib/asset";
import { Callout } from "./Callout";
import { Chips } from "./Chips";
import { ExtLink } from "./ExtLink";
import { Plate } from "./Plate";
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

interface View {
  key: string;
  label: string;
  caption: string;
  className: string;
  node: ReactNode;
}

/** Every figure a card can show, the lead one first. */
function viewsOf(item: WorkItem): View[] {
  const name = item.name.toUpperCase();
  const views: View[] = [];
  const { gallery, image, system } = item;
  if (gallery && gallery.length > 0) {
    views.push({
      key: "screens",
      label: "Screens",
      caption: `${name} · ${gallery.length} SCREENS, ANDROID`,
      className: "feature-shot phones",
      node: (
        // Focusable so keyboard users can scroll the strip sideways when it overflows on narrow screens.
        <ul className="phone-strip" aria-label={`${item.name} screenshots`} tabIndex={0}>
          {gallery.map((g) => (
            <li key={g.src} className="phone">
              <img src={asset(g.src)} alt={g.alt} width={g.width} height={g.height} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      ),
    });
  }
  if (system) {
    views.push({
      key: "system",
      label: "System",
      caption: `SYSTEM PLATE · ${name}`,
      className: "feature-shot plate-shot",
      node: <Plate plate={system} />,
    });
  }
  if (image) {
    views.push({
      key: "image",
      label: system ? "Result" : "Image",
      caption: name,
      className: "feature-shot",
      node: (
        <img
          src={asset(image.src)}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
      ),
    });
  }
  if (views.length === 0 && item.plate === "robot") {
    views.push({
      key: "robot",
      label: "Plan",
      caption: "PLAN VIEW, NOT TO SCALE",
      className: "feature-shot",
      node: <RobotPlate />,
    });
  }
  return views;
}

function Figure({ item, index }: { item: WorkItem; index: number }) {
  const views = viewsOf(item);
  const [key, setKey] = useState(views[0]?.key);
  const view = views.find((v) => v.key === key) ?? views[0];
  if (!view) return null;
  const detail = `DETAIL ${String.fromCharCode(66 + index)}`;
  return (
    <figure className={view.className}>
      {view.node}
      <figcaption className="mono">
        <span aria-hidden="true">
          {detail} · {view.caption}
        </span>
        {views.length > 1 ? (
          <span className="view-toggle" role="group" aria-label={`${item.name} figure`}>
            {views.map((v) => (
              <button
                key={v.key}
                type="button"
                className="view-button mono"
                aria-pressed={v.key === view.key}
                onClick={() => setKey(v.key)}
              >
                {v.label}
              </button>
            ))}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

function Feature({ item, index }: { item: WorkItem; index: number }) {
  return (
    <article className={`feature ${index % 2 === 1 ? "feature-flip" : ""}`} aria-labelledby={`w-${item.id}`}>
      <Figure item={item} index={index} />
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
  const shown = useMemo(() => (filter === "All" ? work : work.filter((w) => w.domains.includes(filter))), [filter]);
  const hasVisual = (w: WorkItem): boolean => Boolean(w.image ?? w.gallery ?? w.plate ?? w.system);
  const features = shown.filter(hasVisual);
  const others = shown.filter((w) => !hasVisual(w));
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
