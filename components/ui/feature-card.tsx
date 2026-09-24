type Props = {
  title: string;
  body: string;
  meta?: string;
  className?: string;
};

/**
 * FeatureCard — bordered white card with a title, optional meta line, and body.
 * Used in Product / MVP. Subtle hover lift only.
 */
export default function FeatureCard({ title, body, meta, className = "" }: Props) {
  return (
    <article
      className={`card-base flex h-full flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_8px_24px_-12px_rgba(17,17,17,0.15)] ${className}`}
    >
      {meta && <span className="eyebrow self-start">{meta}</span>}
      <h3 className="h-card text-ink">{title}</h3>
      <p className="body-text text-balance">{body}</p>
    </article>
  );
}
