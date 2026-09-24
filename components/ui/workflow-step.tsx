type Props = {
  index: number;
  title: string;
  body: string;
  className?: string;
};

/**
 * WorkflowStep — numbered step used in the Product workflow timeline.
 * Renders a small numbered circle + title + body.
 */
export default function WorkflowStep({ index, title, body, className = "" }: Props) {
  return (
    <li
      className={`relative flex gap-5 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_8px_24px_-12px_rgba(17,17,17,0.15)] md:p-6 ${className}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-soft font-mono text-sm font-semibold text-ink">
        {String(index).padStart(2, "0")}
      </span>
      <div className="flex flex-col gap-1.5">
        <h4 className="text-base font-semibold leading-tight text-ink md:text-lg">
          {title}
        </h4>
        <p className="body-text text-sm">{body}</p>
      </div>
    </li>
  );
}
