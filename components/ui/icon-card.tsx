import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  body: string;
  className?: string;
};

/**
 * IconCard — bordered white card with a small line icon, a title, and 1–3 lines
 * of explanation. Used in Problem and AI Thinking.
 */
export default function IconCard({ icon, title, body, className = "" }: Props) {
  return (
    <article
      className={`card-base flex h-full flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_8px_24px_-12px_rgba(17,17,17,0.15)] ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft text-ink">
        {icon}
      </div>
      <h3 className="h-card text-ink">{title}</h3>
      <p className="body-text text-balance">{body}</p>
    </article>
  );
}
