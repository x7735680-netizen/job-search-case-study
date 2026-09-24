type Props = {
  index: string;
  title: string;
  body: string;
  className?: string;
};

/**
 * InsightCard — large editorial card for AI Thinking section.
 * Index is rendered as a small numeric marker (01 / 02 / ...).
 */
export default function InsightCard({ index, title, body, className = "" }: Props) {
  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_8px_24px_-12px_rgba(17,17,17,0.15)] md:p-8 ${className}`}
    >
      <span className="font-mono text-sm font-medium tracking-wider text-ink-3">
        {index}
      </span>
      <h3 className="h-card text-ink">{title}</h3>
      <p className="body-text text-balance">{body}</p>
    </article>
  );
}
