type Props = {
  heading: string;
  variant: "human" | "ai";
  items: readonly string[];
  className?: string;
};

/**
 * ComparisonColumn — used in the Human × AI side-by-side in Building with AI.
 * The `variant` controls a subtle visual differentiation between the two sides.
 */
export default function ComparisonColumn({
  heading,
  variant,
  items,
  className = "",
}: Props) {
  const isHuman = variant === "human";
  const surface = isHuman ? "bg-white" : "bg-soft";
  const labelTone = isHuman ? "text-ink" : "text-ink/80";
  const marker = isHuman ? "01" : "02";

  return (
    <div
      className={`flex h-full flex-col gap-5 rounded-2xl border border-line ${surface} p-7 md:p-8 ${className}`}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm font-medium tracking-wider text-ink-3">
          {marker}
        </span>
        <h3 className={`text-lg font-semibold leading-tight md:text-xl ${labelTone}`}>
          {heading}
        </h3>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-ink-2 md:text-base"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
