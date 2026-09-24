import ProductPlaceholder from "./product-placeholder";
import { useEffect, useState } from "react";

type Props = {
  src?: string;
  alt: string;
  caption?: string;
  aspect?: "16:9" | "3:2" | "4:3" | "21:9" | "3:1";
  placeholderLabel?: string;
  rounded?: "lg" | "xl" | "2xl";
  className?: string;
};

const ASPECT_CLASS: Record<NonNullable<Props["aspect"]>, string> = {
  "16:9": "aspect-[16/9]",
  "3:2": "aspect-[3/2]",
  "4:3": "aspect-[4/3]",
  "21:9": "aspect-[21/9]",
  "3:1": "aspect-[3/1]",
};

const ROUNDED_CLASS: Record<NonNullable<NonNullable<Props["rounded"]>>, string> = {
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

/**
 * ImageShowcase — polished frame around a product screenshot.
 * Falls back to ProductPlaceholder when `src` is missing/empty,
 * allowing the page to ship before the assets arrive.
 */
export default function ImageShowcase({
  src,
  alt,
  caption,
  aspect = "16:9",
  placeholderLabel,
  rounded = "2xl",
  className = "",
}: Props) {
  const [imageError, setImageError] = useState(false);
  const frameClass = `relative w-full overflow-hidden border border-line bg-white shadow-[0_24px_48px_-24px_rgba(17,17,17,0.18)] transition-all duration-500 hover:shadow-[0_28px_60px_-28px_rgba(17,17,17,0.22)] ${ROUNDED_CLASS[rounded]}`;
  const aspectClass = ASPECT_CLASS[aspect];

  useEffect(() => {
    setImageError(false);
  }, [src]);

  if (!src || imageError) {
    return (
      <ProductPlaceholder
        label={placeholderLabel ?? alt}
        aspect={aspect}
        className={`${aspectClass} ${frameClass} ${className}`}
      />
    );
  }

  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div className={`${frameClass} ${aspectClass}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.015]"
        />
      </div>
      {caption && (
        <figcaption className="text-sm leading-relaxed text-ink-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
