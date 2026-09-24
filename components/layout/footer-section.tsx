import { content } from "../../data/content";

export default function FooterSection() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-content flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold tracking-tight text-ink">
            {content.footer.brand}
          </span>
          <span className="text-xs text-ink-3">
            Case study · © {content.footer.year} Carro
          </span>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {content.footer.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring rounded-md text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
