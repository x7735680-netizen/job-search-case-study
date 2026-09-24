# Job Search OS — Case Study Page

A standalone long-scroll case study built with **Vite + React + TypeScript + Tailwind CSS + GSAP**, rooted at this directory.

## Stack

- **Vite 6** — build tool
- **React 19** — UI
- **TypeScript 5** — types
- **Tailwind CSS 3** — utility styling, with design tokens declared in `tailwind.config.ts`
- **GSAP 3 + @gsap/react** — entrance animations (fade + subtle upward translate) gated on scroll
- **lucide-react** — line icons

## File map

| Path | Purpose |
| --- | --- |
| `index.html` | Vite entry |
| `src/main.tsx` | React mount |
| `page/job-search-os-page.tsx` | Page entry that composes every section |
| `data/content.ts` | Every visible string, structured by section |
| `styles/globals.css` | Tailwind layers + reusable CSS components |
| `components/layout/` | `navbar`, `background-layer`, `footer-section` |
| `components/sections/` | `hero-section`, `problem-section`, `product-section`, `building-with-ai-section`, `ai-thinking-section`, `mvp-next-section` |
| `components/ui/` | `section-label`, `section-header`, `stat-pill`, `icon-card`, `feature-card`, `insight-card`, `workflow-step`, `comparison-column`, `image-showcase`, `product-placeholder`, `reveal` |
| `public/assets/hero/` | `background.webp`, `hero-product-poster.png` |
| `public/assets/product/` | Product screenshots (placeholders until supplied) |

## Run

```bash
npm install
npm run dev      # local development
npm run build    # tsc -b && vite build
npm run preview  # serve the production build
```

## Background behavior

The decorative `background.webp` lives in a top-anchored absolute layer (`components/layout/background-layer.tsx`). It scrolls **naturally** with the page — there is no `background-attachment: fixed` and no parallax. A vertical `linear-gradient` fades the layer to the page base color by the time the reader reaches *Building with AI*.

## Animations

- Section entrances (fade + 16px upward translate, 0.7s `power2.out`) are wired through the `<Reveal>` wrapper, which uses `useGSAP` + `ScrollTrigger` with `start: "top 88%"` and `toggleActions: "play none none none"`.
- All animations honor `prefers-reduced-motion: reduce` (handled both in `globals.css` and by the GSAP toggles).
- Hover lifts on cards are pure CSS via Tailwind.

## Missing assets

Until the four product `.jpg` files (`product-knowledge-base`, `product-job-matching`, `product-tailored-resume`, `product-build-evidence`) are supplied, `<ImageShowcase>` renders a tasteful `<ProductPlaceholder>` (light-blue dashed frame + label). Drop real `.jpg` files into `public/assets/product/` with the expected filenames and the page picks them up automatically — no code change required.
