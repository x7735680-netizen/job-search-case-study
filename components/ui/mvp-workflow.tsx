import { ArrowRight, Check, Database, FileText, ListChecks, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MvpStep } from "../../data/content";
import CapabilityTag from "./capability-tag";
import ImageShowcase from "./image-showcase";

type Props = {
  steps: readonly MvpStep[];
  activeDetailKey: string | null;
  onDetailToggle: (id: string | null) => void;
};

export default function MvpWorkflow({
  steps,
  activeDetailKey,
  onDetailToggle,
}: Props) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(
      (node): node is HTMLDivElement => node !== null
    );
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const index = nodes.indexOf(visible.target as HTMLDivElement);
        if (index >= 0) setActiveStep(index);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.2, 0.5, 0.8] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-4 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-line md:block" />
      <div
        className="pointer-events-none absolute left-4 top-5 hidden w-px bg-ink transition-[height] duration-400 md:block"
        style={{
          height: `${((activeStep ?? 0) / Math.max(steps.length - 1, 1)) * 100}%`,
        }}
      />

      <div className="flex flex-col gap-12 md:gap-16">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isComplete = activeStep !== null && index < activeStep;

          return (
            <div
              key={step.title}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className={`relative grid items-center gap-6 transition-[opacity,transform] duration-400 md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-8 ${
                isActive ? "opacity-100" : isComplete ? "opacity-85" : "opacity-55"
              }`}
            >
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-base font-mono text-xs font-semibold text-ink md:mt-1">
                {isComplete ? <Check className="h-4 w-4" strokeWidth={1.8} /> : String(index + 1).padStart(2, "0")}
              </div>

              <div className="grid gap-6 transition-[opacity,transform] duration-400 md:grid-cols-2 md:gap-8">
                <MvpVisual step={step} isActive={isActive} isEager={index === 0} />
                <div className={`flex flex-col justify-center gap-4 ${index % 2 === 1 ? "md:order-first" : ""}`}>
                  <span className="eyebrow">
                    {String(index + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                  </span>
                  <h4 className="h-card text-ink md:text-2xl">{step.title}</h4>
                  <div className="flex flex-wrap items-center gap-2" aria-label="AI capability">
                    {step.capabilities.map((capability) => (
                      <CapabilityTag
                        key={capability.id}
                        detail={capability}
                        detailKey={`step-${index}-${capability.id}`}
                        isOpen={activeDetailKey === `step-${index}-${capability.id}`}
                        onToggle={onDetailToggle}
                      />
                    ))}
                  </div>
                  <p className="body-text-dark max-w-[52ch] text-balance">{step.description}</p>
                  {index === 1 && (
                    <span className="inline-flex w-fit items-center rounded-full border border-line bg-white/50 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-ink-2">
                      SEMI-AUTOMATED
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MvpVisual({
  step,
  isActive,
  isEager,
}: {
  step: MvpStep;
  isActive: boolean;
  isEager: boolean;
}) {
  if (step.visual.type === "video") {
    return (
      <VideoShowcase
        src={step.visual.src}
        alt={step.visual.alt}
        isActive={isActive}
        isEager={isEager}
      />
    );
  }

  if (step.visual.type === "image") {
    return (
      <ImageShowcase
        src={step.visual.src}
        alt={step.visual.alt}
        aspect="16:9"
        placeholderLabel={step.visual.alt}
        className="self-center"
      />
    );
  }

  if (step.visual.type === "workflow") return <WorkflowVisual alt={step.visual.alt} />;
  return <TrackingVisual alt={step.visual.alt} />;
}

function VideoShowcase({
  src,
  alt,
  isActive,
  isEager,
}: {
  src?: string;
  alt: string;
  isActive: boolean;
  isEager: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(isEager);

  useEffect(() => {
    setShouldLoad(isEager);
  }, [isEager, src]);

  useEffect(() => {
    if (!src || shouldLoad) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "1000px 0px", threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldLoad, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || !shouldLoad) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    video.muted = true;

    if (!isActive || reduceMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    const playWhenReady = () => {
      video.currentTime = 0;
      void video.play().catch(() => {
        // Autoplay can be blocked by the browser; the poster/first frame remains visible.
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      playWhenReady();
      return;
    }

    video.addEventListener("canplay", playWhenReady, { once: true });
    return () => video.removeEventListener("canplay", playWhenReady);
  }, [isActive, shouldLoad, src]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_48px_-24px_rgba(17,17,17,0.18)]"
    >
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        aria-label={alt}
        muted
        playsInline
        loop
        preload={shouldLoad ? (isEager ? "metadata" : "auto") : "none"}
        className="block aspect-[16/9] h-full w-full object-cover"
      />
    </div>
  );
}

function WorkflowVisual({ alt }: { alt: string }) {
  return (
    <div role="img" aria-label={alt} className="flex aspect-[16/9] flex-col justify-center gap-4 rounded-2xl border border-line bg-white/70 p-5 md:p-7">
      <div className="flex items-center justify-between gap-2">
        <span className="eyebrow">PREFERENCE FILTER</span>
        <Sparkles className="h-4 w-4 text-ink-2" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center gap-3 rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink-2">
          <FileText className="h-4 w-4 text-ink-3" strokeWidth={1.5} aria-hidden="true" />
          Target roles + cities
        </div>
        <div className="flex items-center justify-center text-ink-3">
          <ArrowRight className="h-4 w-4 rotate-90" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-line bg-soft/60 px-3 py-2 text-sm text-ink">
          <ListChecks className="h-4 w-4 text-ink-2" strokeWidth={1.5} aria-hidden="true" />
          Personalized job pool
        </div>
      </div>
    </div>
  );
}

function TrackingVisual({ alt }: { alt: string }) {
  return (
    <div role="img" aria-label={alt} className="flex aspect-[16/9] flex-col justify-between rounded-2xl border border-line bg-white/70 p-5 md:p-7">
      <div className="flex items-center justify-between gap-2">
        <span className="eyebrow">APPLICATION TRACKING</span>
        <Database className="h-4 w-4 text-ink-2" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="grid gap-2 text-sm">
        {[
          ["Company", "Role"],
          ["Stage", "Tailored resume"],
          ["Context", "Reusable"],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-3 border-b border-line py-2 last:border-b-0">
            <span className="text-ink-3">{label}</span>
            <span className="text-right text-ink-2">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
