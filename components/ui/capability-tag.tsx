import type { FocusEvent, MouseEvent } from "react";
import type { CapabilityDetail } from "../../data/content";

type Placement = "left" | "right" | "below";

type Props = {
  detail: CapabilityDetail;
  isOpen: boolean;
  detailKey?: string;
  placement?: Placement;
  className?: string;
  buttonClassName?: string;
  onToggle: (id: string | null) => void;
};

function panelId(id: string) {
  return `capability-detail-${id}`;
}

export default function CapabilityTag({
  detail,
  isOpen,
  detailKey = detail.id,
  placement = "below",
  className = "",
  buttonClassName = "",
  onToggle,
}: Props) {
  const id = panelId(detailKey);

  const handleMouseEnter = () => onToggle(detailKey);
  const handleMouseLeave = (event: MouseEvent<HTMLSpanElement>) => {
    if (!event.currentTarget.matches(":focus-within")) onToggle(null);
  };
  const handleFocus = (event: FocusEvent<HTMLSpanElement>) => {
    if (event.currentTarget.matches(":focus-within")) onToggle(detailKey);
  };
  const handleBlur = (event: FocusEvent<HTMLSpanElement>) => {
    if (!event.currentTarget.matches(":focus-within")) onToggle(null);
  };

  return (
    <span
      className={`capability-tag relative inline-flex ${className}`}
      data-placement={placement}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <button
        type="button"
        aria-controls={id}
        aria-expanded={isOpen}
        className={`focus-ring inline-flex min-h-7 items-center rounded-md border border-line bg-white/45 px-2.5 py-1 font-mono text-[10px] font-medium leading-none tracking-[0.08em] text-ink-2 transition-colors duration-200 hover:border-ink/25 hover:text-ink md:text-[11px] ${buttonClassName}`}
        onClick={() => onToggle(isOpen ? null : detailKey)}
        onKeyDown={(event) => {
          if (event.key === "Escape") onToggle(null);
        }}
      >
        {detail.label}
      </button>

      <div
        id={id}
        role="tooltip"
        aria-hidden={!isOpen}
        data-open={isOpen}
        data-placement={placement}
        className="capability-detail-panel z-30 w-[min(320px,calc(100vw-3rem))] rounded-xl border border-line bg-white p-4 text-left shadow-[0_18px_36px_-22px_rgba(17,17,17,0.32)]"
        onMouseEnter={() => onToggle(detailKey)}
        onMouseLeave={() => onToggle(null)}
      >
        <p className="eyebrow text-[10px]">{detail.detailTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">{detail.detailBody}</p>
      </div>
    </span>
  );
}
