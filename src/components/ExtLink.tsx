import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ExtLink({ href, children, className }: Props) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
