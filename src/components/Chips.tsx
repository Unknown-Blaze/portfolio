interface Props {
  items: readonly string[];
  label: string;
}

export function Chips({ items, label }: Props) {
  return (
    <ul className="chips" aria-label={label}>
      {items.map((s) => (
        <li key={s} className="chip mono">
          {s}
        </li>
      ))}
    </ul>
  );
}
