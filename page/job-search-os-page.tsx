import BackgroundLayer from "../components/layout/background-layer";
import Navbar from "../components/layout/navbar";
import FooterSection from "../components/layout/footer-section";
import HeroSection from "../components/sections/hero-section";
import ProblemSection from "../components/sections/problem-section";
import ProductSection from "../components/sections/product-section";
import BuildingWithAISection from "../components/sections/building-with-ai-section";
import AIThinkingSection from "../components/sections/ai-thinking-section";
import MvpNextSection from "../components/sections/mvp-next-section";
import TestimonialSection from "../components/sections/testimonial-section";

/**
 * Job Search OS — single long-scroll case study page.
 *
 * Composition order (matches the approved plan):
 *   1. Decorative background layer (absolute, scrolls naturally, fades to white)
 *   2. Sticky navbar (light, unobtrusive)
 *   3. Hero (#hero)
 *   4. Problem (#problem)
 *   5. Product (#product)
 *   6. Building with AI (#building)
 *   7. AI Thinking (#thinking)
 *   8. MVP & Next (#mvp)
 *   9. User testimonials (#testimonials)
 *   10. Footer
 *
 * All content is sourced from `../data/content.ts` so copy can be iterated
 * without touching layout components.
 */
export default function JobSearchOSPage() {
  return (
    <div className="relative overflow-x-clip bg-base text-ink">
      <BackgroundLayer />

      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <HeroSection />
          <ProblemSection />
          <ProductSection />
          <BuildingWithAISection />
          <AIThinkingSection />
          <MvpNextSection />
          <TestimonialSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
}
