import { content } from "../../data/content";
import Reveal from "../ui/reveal";

function PixelIcon() {
  const pattern = ["11011", "10001", "00100", "10001", "11011"];
  return (
    <svg aria-hidden="true" className="building-ai__pixel-icon" viewBox="0 0 25 25" role="presentation" shapeRendering="crispEdges">
      {pattern.flatMap((row, rowIndex) =>
        [...row].flatMap((value, columnIndex) =>
          value === "1"
            ? [<rect key={`${rowIndex}-${columnIndex}`} x={columnIndex * 5} y={rowIndex * 5} width="5" height="5" />]
            : []
        )
      )}
    </svg>
  );
}

export default function BuildingWithAISection() {
  const { eyebrow, title, lead, primary, external, metrics, tools } = content.building;
  const titleLines = title.split("\n");
  const primaryTitleLines = primary.title.split("\n");

  return (
    <section id="building" aria-labelledby="building-title" className="building-ai section-pad-tight relative">
      <div className="container-content flex flex-col">
        <Reveal className="building-ai__hero">
          <header className="building-ai__hero-copy">
            <p className="eyebrow">[ {eyebrow} ]</p>
            <h2 id="building-title" className="building-ai__hero-title">
              {titleLines.map((line) => <span key={line} className="block">{line}</span>)}
            </h2>
            <p className="building-ai__hero-lead section-subtitle">{lead}</p>
          </header>
        </Reveal>

        <Reveal className="building-ai__frame-wrap">
          <div className="building-ai__frame">
            <article className="building-ai__primary">
              <div className="building-ai__primary-copy">
                <h3 className="building-ai__primary-title">
                  {primaryTitleLines.map((line) => (
                    <span key={line} className="building-ai__primary-title-line block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p>{primary.body}</p>
                <p className="building-ai__note">{primary.note}</p>
              </div>
              <div className="building-ai__cta-row">
                <a className="building-ai__trial" href={primary.href} target="_blank" rel="noreferrer">{primary.action}</a>
                <span className="building-ai__desktop-note">{primary.desktopNote}</span>
              </div>
            </article>

            <div className="building-ai__supporting">
              <article className="building-ai__external">
                <div className="building-ai__external-icon"><PixelIcon /></div>
                <div>
                  <h3>{external.title}</h3>
                  <p>{external.body}</p>
                </div>
              </article>
              <div className="building-ai__metrics">
                {metrics.map((metric) => (
                  <article className="building-ai__metric" key={metric.label}>
                    <div>
                      <p className="building-ai__metric-label">{metric.label}</p>
                      <p className="building-ai__metric-value">{metric.value}</p>
                    </div>
                    <p className="building-ai__metric-body">{metric.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="building-ai__tools" aria-label="AI tool capabilities">
          {tools.map((tool) => (
            <article className="building-ai__tool" key={tool.title}>
              <div className="building-ai__tool-icon-wrap">
                <img className="building-ai__tool-icon" src={tool.icon} alt="" aria-hidden="true" />
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
