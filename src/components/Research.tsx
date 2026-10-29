import { useEffect, useRef, useState } from "react";
import { research, type Research as Entry } from "../content";
import { ExtLink } from "./ExtLink";
import { SheetHead } from "./SheetHead";
import "../styles/sections.css";

type Status = "published" | "submitted" | "poster" | "other";

/** Reads a stamp from the entry's own words, so a change in content.ts changes the stamp with it. */
function stampOf(r: Entry): { status: Status; text: string } {
  const submitted = /submitted to ([^·]+)/i.exec(r.kind);
  if (submitted) return { status: "submitted", text: `SUBMITTED · ${(submitted[1] ?? "").trim().toUpperCase()}` };
  if (/publication/i.test(r.kind)) {
    const venue = /^([^·]+)·\s*(\w+)/.exec(r.meta);
    const text = venue ? `${(venue[2] ?? "").trim()} ${(venue[1] ?? "").trim()}` : r.meta;
    return { status: "published", text: `PUBLISHED · ${text.toUpperCase()}` };
  }
  if (/poster/i.test(r.kind)) {
    const programme = r.kind.split("·")[0]?.trim() ?? "";
    return { status: "poster", text: `POSTER · ${programme.toUpperCase()}` };
  }
  return { status: "other", text: r.kind.toUpperCase() };
}

const DOI = /^doi:(.+)$/i;

/** The DOI as a line of mono text a reader can copy whole, beside the resolver link. */
function DoiLine({ doi, href }: { doi: string; href: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(doi);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // No clipboard (insecure context or denied): the text stays selectable by hand.
      setCopied(false);
    }
  };

  return (
    <p className="doi-line mono">
      <span className="doi-label" aria-hidden="true">
        DOI
      </span>
      <code className="doi-value">{doi}</code>
      <button type="button" className="doi-copy mono" onClick={() => void copy()}>
        {copied ? "Copied" : "Copy"}
        <span className="visually-hidden"> DOI</span>
      </button>
      <ExtLink href={href} className="arrow-link">
        Resolve
      </ExtLink>
      <span className="visually-hidden" aria-live="polite">
        {copied ? "DOI copied to clipboard" : ""}
      </span>
    </p>
  );
}

export function Research() {
  return (
    <section id="research" aria-labelledby="research-title" className="section">
      <SheetHead id="research-title" no="04" label="Research" title="Research & publications" />
      <ol className="refs">
        {research.map((r, i) => {
          const stamp = stampOf(r);
          const doi = r.link ? DOI.exec(r.link.label)?.[1] : undefined;
          return (
            <li key={r.title} className="panel ref">
              <span className="ref-no mono" aria-hidden="true">
                [{i + 1}]
              </span>
              <div className="ref-body">
                <p className="ref-head">
                  <span className="ref-stamp mono" data-status={stamp.status}>
                    {stamp.text}
                  </span>
                  <span className="ref-kind mono">{r.kind}</span>
                </p>
                <h3>{r.title}</h3>
                <p className="ref-detail">{r.detail}</p>
                <p className="research-meta mono">
                  <span>{r.meta}</span>
                  {r.link && !doi ? (
                    <ExtLink href={r.link.href} className="arrow-link">
                      {r.link.label}
                    </ExtLink>
                  ) : null}
                </p>
                {r.link && doi ? <DoiLine doi={doi} href={r.link.href} /> : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
