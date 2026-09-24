import { content } from "../../data/content";
import SectionHeader from "../ui/section-header";
import Reveal from "../ui/reveal";

/**
 * User feedback collected during the MVP trial.
 */
export default function TestimonialSection() {
  const { eyebrow, title, lead, testimonials } = content.testimonials;

  return (
    <section
      id="testimonials"
      aria-label="用户评价"
      className="section-pad relative"
    >
      <div className="container-content flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-8">
          <SectionHeader eyebrow={eyebrow} title={title} align="center" />
          <Reveal className="max-w-[820px]">
            <p className="section-subtitle text-balance text-center md:text-lg">
              {lead}
            </p>
          </Reveal>
        </div>

        <Reveal className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-pair" key={testimonial.name}>
              <article className="testimonial-card testimonial-card--before">
                <div className="testimonial-card-label">BEFORE</div>
                <div className="testimonial-card-content">
                  <span className="testimonial-quote-mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote className="testimonial-quote">
                    {testimonial.beforeQuote}
                  </blockquote>
                </div>
              </article>

              <article className="testimonial-card testimonial-card--after">
                <div className="testimonial-card-label">AFTER</div>
                <div className="testimonial-card-content">
                  <div className="testimonial-card-topline">
                    <span className="testimonial-quote-mark" aria-hidden="true">
                      “
                    </span>
                    <div
                      className="testimonial-rating"
                      aria-label={`${testimonial.rating.toFixed(1)} out of 5 stars`}
                    >
                      <span>{testimonial.rating.toFixed(1)}</span>
                      <span aria-hidden="true">★</span>
                    </div>
                  </div>

                  <blockquote className="testimonial-quote">
                    {testimonial.afterQuote}
                  </blockquote>

                  <footer className="testimonial-author">
                    <p className="testimonial-author-name">{testimonial.name}</p>
                    <p className="testimonial-author-role">{testimonial.role}</p>
                  </footer>
                </div>
              </article>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
