/**
 * BackgroundLayer — a decorative top-layer background that covers Hero and
 * the upper sections of the page.
 *
 * Implementation notes (matches the approved plan):
 *  - Lives inside the page wrapper, position absolute, top-anchored.
 *  - Height 2200px so the bg + fade covers Hero, Problem, and the upper
 *    half of Product. Below that the page is white again.
 *  - Uses background-image: url(...). bg-cover + bg-top frame the image.
 *  - A vertical linear-gradient from transparent → page base fades the bg
 *    into white before "Building with AI".
 *  - aria-hidden + pointer-events-none so it never blocks interaction.
 *  - NEVER uses background-attachment: fixed. The whole element scrolls
 *    naturally with the document.
 */
export default function BackgroundLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[2200px] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: "url(/assets/hero/background.webp)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />
    </div>
  );
}
