import { useState } from "react";
import { content } from "../../data/content";
import SectionHeader from "../ui/section-header";
import Reveal from "../ui/reveal";
import ProductFeatureGrid from "../ui/product-feature-grid";
import SystemOverview from "../ui/system-overview";
import MvpWorkflow from "../ui/mvp-workflow";

/**
 * Product — explains the connected system and shows the five-step MVP
 * workflow with progressive activation and on-demand capability details.
 */
export default function ProductSection() {
  const { eyebrow, title, lead, featureCards, systemOverview, showcase } = content.product;
  const [activeDetailKey, setActiveDetailKey] = useState<string | null>(null);

  return (
    <section
      id="product"
      aria-labelledby="product-title"
      className="section-pad relative"
    >
      <div className="container-content flex flex-col gap-14 md:gap-20">
        <div className="flex flex-col items-center gap-10">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            align="center"
            className="max-w-[820px]"
          />
          <Reveal className="max-w-[820px]">
            <p className="section-subtitle text-balance text-center md:text-lg">
              {lead}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <ProductFeatureGrid cards={featureCards} />
        </Reveal>

        <div className="flex flex-col gap-8">
          <h3 className="h-card text-center text-ink">SYSTEM OVERVIEW</h3>
          <Reveal>
            <SystemOverview
              overview={systemOverview}
              activeDetailKey={activeDetailKey}
              onDetailToggle={setActiveDetailKey}
            />
          </Reveal>
        </div>

        <div className="flex flex-col gap-10">
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <p className="eyebrow">[ {showcase.eyebrow} ]</p>
            <h3 className="h-section max-w-[820px] text-balance">
              {showcase.title}
            </h3>
          </Reveal>

          <MvpWorkflow
            steps={showcase.items}
            activeDetailKey={activeDetailKey}
            onDetailToggle={setActiveDetailKey}
          />
        </div>
      </div>
    </section>
  );
}
