import { Check, X } from "lucide-react";

type Props = {
  variant: "negative" | "positive";
  title: string;
  items: readonly string[];
  className?: string;
};

export default function ProblemComparisonCard({
  variant,
  title,
  items,
  className = "",
}: Props) {
  const isPositive = variant === "positive";
  const Marker = isPositive ? Check : X;

  return (
    <article
      className={`flex min-h-[320px] flex-col p-7 md:min-h-[360px] md:p-8 ${
        isPositive
          ? "rounded-2xl border border-line bg-white shadow-[0_14px_32px_-20px_rgba(17,17,17,0.28)]"
          : "bg-white/[0.55]"
      } ${className}`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-[5px] ${
          isPositive ? "bg-ink text-white" : "bg-white text-ink"
        }`}
      >
        <Marker className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
      </div>

      <div className="mt-auto pt-16">
        <h3 className="h-card max-w-[26ch] text-balance text-ink">{title}</h3>
        <ul className="mt-6 space-y-2.5" aria-label={`${title} details`}>
          {items.map((item) => (
            <li key={item} className="body-text flex items-start gap-3">
              <span
                className={`mt-[0.15em] shrink-0 text-base leading-none ${
                  isPositive ? "text-ink" : "text-ink-2"
                }`}
                aria-hidden="true"
              >
                {isPositive ? "✦" : "—"}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
