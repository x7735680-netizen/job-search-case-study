import { useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  children: ReactNode;
  /** Delay in seconds after the trigger fires. */
  delay?: number;
  /** Travel distance in px. Defaults to 16. */
  y?: number;
  /** Optional override element className applied to the wrapper. */
  className?: string;
  /** Tag for the wrapper. Defaults to "div". */
  as?: "div" | "section" | "li" | "article" | "span" | "ul" | "ol";
};

/**
 * Reveal — thin wrapper that fades + slides the children upward when the
 * element enters the viewport. Honors prefers-reduced-motion via the
 * global CSS reset.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: ref }
  );

  const Tag = as;
  const props = { ref, className };

  // Cast to a permissive element so ref typing works across tag variants.
  return <Tag {...(props as object)}>{children}</Tag>;
}
