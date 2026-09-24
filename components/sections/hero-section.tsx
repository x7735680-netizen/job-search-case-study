import { content } from "../../data/content";
import Reveal from "../ui/reveal";
import StatPill from "../ui/stat-pill";
import ImageShowcase from "../ui/image-showcase";

/**
 * Hero — centered composition with eyebrow, big H1, body, stat pills,
 * and a polished framed static poster. No video, no autoplay.
 */
export default function HeroSection() {
  const { eyebrow, title, body, stats, poster } = content.hero;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="section-pad relative"
    >
      <div className="container-hero flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="eyebrow inline-block rounded-full border border-line bg-white/70 px-4 py-1.5 backdrop-blur-sm">
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            id="hero-title"
            className="h-hero whitespace-pre-line text-balance text-ink"
          >
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="section-subtitle max-w-hero-text text-balance">{body}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {stats.map((label) => (
              <li key={label}>
                <StatPill>{label}</StatPill>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} y={24} className="w-full">
          <div className="mx-auto mt-2 w-full max-w-[1120px]">
            <ImageShowcase
              src={poster.src}
              alt={poster.alt}
              aspect="3:1"
              placeholderLabel="Hero product poster — Job Search OS workspace overview"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
