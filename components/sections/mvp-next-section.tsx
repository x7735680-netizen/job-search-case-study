import { content } from "../../data/content";
import SectionHeader from "../ui/section-header";
import Reveal from "../ui/reveal";

/**
 * MVP & Next — two columns (Shipped / Next).
 */
export default function MvpNextSection() {
  const { eyebrow, title, lead, shipped, next } = content.mvp;

  return (
    <section
      id="mvp"
      aria-labelledby="mvp-title"
      className="section-pad-tight relative"
    >
      <div className="container-content flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-8">
          <SectionHeader eyebrow={eyebrow} title={title} align="center" />
          <Reveal className="max-w-[760px]">
            <p className="section-subtitle text-balance text-center md:text-lg">
              {lead}
            </p>
          </Reveal>
        </div>

        <div className="mvp-cards-wrapper">
          <Reveal className="mvp-card rounded-2xl border border-line bg-white p-7 md:p-8">
            <div className="mvp-card-header">
              <p className="eyebrow">Shipped</p>
              <h3 className="mvp-card-title h-card mt-3 text-ink">已经跑通的能力</h3>
            </div>
            <ul className="mvp-list mt-6">
              {shipped.map((item) => (
                <li
                  key={item}
                  className="mvp-list-item text-sm leading-relaxed"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mvp-card rounded-2xl border border-line bg-soft p-7 md:p-8">
            <div className="mvp-card-header">
              <p className="eyebrow">Next</p>
              <h3 className="mvp-card-title h-card mt-3 text-ink">接下来想推进的方向</h3>
            </div>
            <ul className="mvp-list mt-6">
              {next.map((item) => (
                <li
                  key={item}
                  className="mvp-list-item text-sm leading-relaxed"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
