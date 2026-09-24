import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Small rounded pill used to render meta data in the Hero (1 Week · Solo · MVP).
 */
export default function StatPill({ children, className = "" }: Props) {
  return <span className={`pill ${className}`}>{children}</span>;
}
