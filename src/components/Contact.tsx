import { useCallback, useEffect, useRef, useState } from "react";
import { person, REVISION, sheets } from "../content";
import { asset } from "../lib/asset";
import "../styles/hero.css";
import { ExtLink } from "./ExtLink";
import { SheetHead } from "./SheetHead";

type CopyState = "idle" | "copied" | "failed";

const COPIED_MS = 2000;

// navigator.clipboard needs a secure context; the textarea route covers older browsers and plain http previews.
async function copyText(text: string): Promise<boolean> {
  try {
    if ("clipboard" in navigator && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Permission refused: fall through to the legacy route.
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    // Deprecated, but the only copy route without the async Clipboard API (insecure contexts, older browsers).
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

interface CopyEmailProps {
  className?: string;
  /** Visible label while idle; the address itself when omitted. */
  label?: string;
}

/** A button that copies the email address and says "Copied" for two seconds. A native button, so Enter and Space work. */
export function CopyEmail({ className, label }: CopyEmailProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = useCallback(async () => {
    const ok = await copyText(person.email);
    setState(ok ? "copied" : "failed");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), COPIED_MS);
  }, []);

  const text = state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : (label ?? person.email);
  return (
    <button
      type="button"
      className={`copy-email ${className ?? ""}`.trim()}
      data-state={state}
      onClick={() => void onClick()}
      aria-label={state === "idle" ? `Copy email address ${person.email}` : undefined}
    >
      <span className="copy-email-glyph" aria-hidden="true">
        {state === "copied" ? "✓" : "⧉"}
      </span>
      <span aria-live="polite">{text}</span>
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section contact">
      <SheetHead id="contact-title" no="09" label="Contact" title="Contact">
        Email is quickest. Happy to talk about robots, embedded systems, machine learning and the software around them.
      </SheetHead>
      <p className="contact-email">
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </p>
      {/* The sheet's own title block, closing the drawing as a real one does. */}
      <dl className="tb mono" aria-label="Sheet title block">
        <div className="tb-cell tb-title">
          <dt>Title</dt>
          <dd>{person.name}</dd>
        </div>
        <div className="tb-cell">
          <dt>Drawn by</dt>
          <dd>R. P. Ganesh</dd>
        </div>
        <div className="tb-cell">
          <dt>Location</dt>
          <dd>{person.location}</dd>
        </div>
        <div className="tb-cell tb-email">
          <dt>Email</dt>
          <dd>
            <CopyEmail className="tb-copy" />
          </dd>
        </div>
        <div className="tb-cell">
          <dt>LinkedIn</dt>
          <dd>
            <ExtLink href={person.linkedin}>in/unknown-blaze ↗</ExtLink>
          </dd>
        </div>
        <div className="tb-cell">
          <dt>GitHub</dt>
          <dd>
            <ExtLink href={person.github}>Unknown-Blaze ↗</ExtLink>
          </dd>
        </div>
        <div className="tb-cell tb-resume">
          <dt>Résumé</dt>
          <dd>
            <a href={asset(person.resumePdf)} download>
              PDF ↓
            </a>
          </dd>
        </div>
        <div className="tb-cell">
          <dt>Sheet</dt>
          <dd>
            {sheets.length} of {sheets.length}
          </dd>
        </div>
        <div className="tb-cell">
          <dt>Rev</dt>
          <dd>{REVISION}</dd>
        </div>
      </dl>
    </section>
  );
}
