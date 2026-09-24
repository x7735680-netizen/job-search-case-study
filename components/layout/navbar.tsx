import { useEffect, useState } from "react";
import { content } from "../../data/content";

/**
 * Navbar — light, unobtrusive top nav.
 *  - Left: project name
 *  - Center/right: anchor links to problem / product / thinking / mvp
 * Adds a subtle border/shadow once the user scrolls past the hero.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    function onHashChange() {
      setHash(window.location.hash);
    }
    onScroll();
    onHashChange();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/80 backdrop-blur"
          : "border-b border-transparent bg-white/40 backdrop-blur-sm"
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between gap-6">
        <a
          href="#hero"
          className="focus-ring rounded-md text-sm font-semibold tracking-tight text-ink md:text-base"
        >
          {content.nav.brand}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {content.nav.links.map((link) => {
            const active = hash === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? "true" : undefined}
                  className={`focus-ring rounded-md text-sm transition-colors ${
                    active ? "text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <span aria-hidden="true" className="h-9 w-0 md:w-8" />
      </nav>
    </header>
  );
}
