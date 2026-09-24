import { content } from "../../data/content";
import SectionHeader from "../ui/section-header";
import InsightCard from "../ui/insight-card";
import Reveal from "../ui/reveal";

/**
 * AI Thinking — four editorial insight cards + a large pull quote.
 */
export default function AIThinkingSection() {
  const { eyebrow, title, lead, insights, quote } = content.thinking;

  return (
    <section
      id="thinking"
      aria-labelledby="thinking-title"
      className="section-pad relative"
    >
      <div className="container-content flex flex-col gap-14 md:gap-20">
        <div className="flex flex-col items-center gap-8">
          <SectionHeader eyebrow={eyebrow} title={title} align="center" />
          <Reveal className="max-w-[760px]">
            <p className="section-subtitle text-balance text-center md:text-lg">
              {lead}
            </p>
          </Reveal>
        </div>

        <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {insights.map((insight, idx) => (
            <InsightCard
              key={insight.title}
              index={`0${idx + 1}`}
              title={insight.title}
              body={insight.body}
            />
          ))}
        </Reveal>

        <Reveal className="mx-auto max-w-[920px] text-center">
          <p className="font-serif text-2xl leading-snug text-ink-2 italic md:text-3xl lg:text-[34px]">
            “{quote}”
          </p>
          <div className="mx-auto mt-6 h-px w-12 bg-line" aria-hidden />
        </Reveal>
      </div>
    </section>
  );
}
