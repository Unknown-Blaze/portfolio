import type { ReactNode } from "react";
import { REVISION } from "../content";

interface Props {
  id: string;
  no: string;
  label: string;
  title: string;
  children?: ReactNode;
}

/** The title block every section opens with, as on a drawing sheet. */
export function SheetHead({ id, no, label, title, children }: Props) {
  return (
    <header className="sheet-head">
      <p className="title-block mono" aria-hidden="true">
        <span>SHT {no}</span>
        <span>{label.toUpperCase()}</span>
        <span>REV {REVISION}</span>
      </p>
      <h2 id={id}>{title}</h2>
      {children ? <p className="lede">{children}</p> : null}
    </header>
  );
}
