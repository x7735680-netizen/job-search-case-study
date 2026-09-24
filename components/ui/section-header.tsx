type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  size?: "md" | "lg";
  className?: string;
};

/**
 * Section header: small eyebrow + title + optional body.
 * - `size="lg"` ⇒ H1 scale (used in Hero)
 * - `size="md"` (default) ⇒ H2 scale (used by every other section)
 * - `align` defaults to "center"
 */
export default function SectionHeader({
  eyebrow,
  title,
  body,
  align = "center",
  size = "md",
  className = "",
}: Props) {
  const isCenter = align === "center";
  const alignment = isCenter ? "text-center mx-auto" : "text-left";
  const TitleTag = size === "lg" ? "h1" : "h2";
  const titleClass = size === "lg" ? "h-hero text-balance" : "h-section text-balance";
  const maxWidth = size === "lg" ? "max-w-hero-text" : "max-w-[820px]";

  return (
    <header className={`${alignment} ${className}`}>
      {eyebrow && (
        <p
          className={`eyebrow mb-5 ${isCenter ? "flex justify-center" : ""}`}
          aria-hidden={false}
        >
          [ {eyebrow} ]
        </p>
      )}
      <TitleTag className={`${titleClass} text-ink ${maxWidth} ${alignment}`}>
        {title}
      </TitleTag>
      {body && (
        <p className={`section-subtitle mt-6 ${maxWidth} ${alignment}`}>{body}</p>
      )}
    </header>
  );
}
