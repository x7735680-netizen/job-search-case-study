import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Small bracket-style label used for eyebrows and section markers.
 * Renders as `[ CHILDREN ]` so callers write the bracket text directly.
 */
export default function SectionLabel({ children, className = "" }: Props) {
  return (
    <span
      className={`eyebrow inline-block rounded-full border border-line bg-white/70 px-3.5 py-1.5 backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}
