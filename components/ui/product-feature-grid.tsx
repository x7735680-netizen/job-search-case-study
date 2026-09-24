import type { ProductFeatureCard } from "../../data/content";

type Props = {
  cards: readonly ProductFeatureCard[];
};

const iconClasses = {
  preferences: "pixel-icon--preferences",
  knowledge: "pixel-icon--knowledge",
  tracking: "pixel-icon--tracking",
  resume: "pixel-icon--resume",
} as const;

const pixelPatterns = {
  preferences: ["00100", "01110", "11111", "01110", "00100"],
  knowledge: ["11011", "10001", "00100", "10001", "11011"],
  tracking: ["00100", "00100", "11111", "00100", "00100"],
  resume: ["10001", "01010", "00100", "01010", "10001"],
} as const;

function PixelIcon({ type }: { type: keyof typeof pixelPatterns }) {
  const pattern = pixelPatterns[type];
  const pixel = 5;

  return (
    <svg
      aria-hidden="true"
      className="product-pixel-icon"
      viewBox="0 0 25 25"
      role="presentation"
      shapeRendering="crispEdges"
    >
      {pattern.flatMap((row, rowIndex) =>
        [...row].flatMap((value, columnIndex) =>
          value === "1"
            ? [
                <rect
                  key={`${rowIndex}-${columnIndex}`}
                  x={columnIndex * pixel}
                  y={rowIndex * pixel}
                  width={pixel}
                  height={pixel}
                />,
              ]
            : []
        )
      )}
    </svg>
  );
}

export default function ProductFeatureGrid({ cards }: Props) {
  return (
    <div className="rounded-2xl border border-line bg-white/45 p-1 md:p-1.5">
      <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className="product-feature-card min-h-[292px] rounded-[11px] border border-line bg-white p-[22px] transition-[border-color,box-shadow] duration-200 hover:border-ink/20 hover:shadow-[0_12px_26px_-24px_rgba(17,17,17,0.32)] md:p-6"
          >
            <div className={`product-pixel-icon-wrap ${iconClasses[card.icon]}`}>
              <PixelIcon type={card.icon} />
            </div>
            <div className="product-feature-card__main">
              <h3 className="product-feature-card__title text-ink">{card.title}</h3>
              <p className="product-feature-card__body">{card.body}</p>
            </div>
            <div className="product-feature-card__bottom">
              <div className="product-feature-card__divider" aria-hidden="true" />
              <p className="product-feature-card__summary text-ink-2">{card.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
