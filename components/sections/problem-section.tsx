import { content } from "../../data/content";
import SectionHeader from "../ui/section-header";
import ProblemComparisonCard from "../ui/problem-comparison-card";
import Reveal from "../ui/reveal";

/**
 * Problem — comparison between fragmented/manual job searching and an
 * AI-driven personalized workflow.
 */
export default function ProblemSection() {
  const { eyebrow, title, body, cards } = content.problem;
  const negativeCards = cards.filter(({ variant }) => variant === "negative");
  const positiveCard = cards.find(({ variant }) => variant === "positive");

  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="section-pad-tight relative"
    >
      <div className="container-content flex flex-col gap-14 md:gap-16">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          body={body}
          align="center"
        />

        <Reveal className="rounded-[4px] bg-white/[0.45] p-[4px]">
          <div className="grid grid-cols-1 gap-[4px] lg:grid-cols-[1.55fr_1fr] lg:items-stretch">
            <div className="grid grid-cols-1 overflow-hidden border border-line bg-white/80 md:grid-cols-2">
              {negativeCards.map(({ variant, title: cardTitle, items }, index) => (
                <ProblemComparisonCard
                  key={cardTitle}
                  variant={variant}
                  title={cardTitle}
                  items={items}
                  className={
                    index === 0
                      ? "border-b border-line md:border-b-0 md:border-r"
                      : ""
                  }
                />
              ))}
            </div>

            {positiveCard && (
              <ProblemComparisonCard
                variant={positiveCard.variant}
                title={positiveCard.title}
                items={positiveCard.items}
                className="h-full"
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
