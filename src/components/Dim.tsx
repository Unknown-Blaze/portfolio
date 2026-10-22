interface Props {
  label: string;
}

/** A section divider drawn as a dimension line: extension ticks at both ends, the label in the middle. */
export function Dim({ label }: Props) {
  return (
    <div className="dim" aria-hidden="true">
      <span className="dim-line" />
      <span className="dim-label mono">{label}</span>
      <span className="dim-line" />
    </div>
  );
}
