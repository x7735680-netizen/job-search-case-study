type Props = {
  label: string;
  caption?: string;
  aspect?: "16:9" | "3:2" | "4:3" | "21:9" | "3:1";
  className?: string;
};

const ASPECT_CLASS: Record<NonNullable<Props["aspect"]>, string> = {
  "16:9": "aspect-[16/9]",
  "3:2": "aspect-[3/2]",
  "4:3": "aspect-[4/3]",
  "21:9": "aspect-[21/9]",
  "3:1": "aspect-[3/1]",
};

/**
 * ProductPlaceholder — tasteful light-blue box with a dashed border shown
 * when a product image has not yet been supplied. Lets the page render
 * fully without the missing assets; replacing the .jpg removes the need
 * for any code change.
 */
export default function ProductPlaceholder({
  label,
  caption,
  aspect = "16:9",
  className = "",
}: Props) {
  return (
    <figure
      role="img"
      aria-label={label}
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-line bg-soft ${ASPECT_CLASS[aspect]} ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <span className="eyebrow">Image</span>
        <p className="max-w-md text-sm font-medium text-ink md:text-base">
          {label}
        </p>
        <p className="max-w-md text-xs text-ink-3">
          {caption ?? "Image will be added soon. Replace the file in public/assets/product/ to swap in the real screenshot."}
        </p>
      </div>
    </figure>
  );
}
