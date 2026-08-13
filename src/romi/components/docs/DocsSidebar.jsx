import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { DOCS_CATEGORIES } from "../../docs/manifest";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { cn } from "../../lib/cn";

/*
 * DocsSidebar — the category tree for the /docs section, driven entirely by the
 * docs manifest. Desktop (lg+) renders it as a sticky rail; on mobile the same
 * tree collapses behind a "Browse docs" disclosure so articles stay readable.
 *
 * The rail fades in once per page load, not on every article click: the nav is
 * persistent furniture, so re-animating it on each navigation would be noise.
 * Moving between articles animates only the pill that just became active.
 */

let hasPlayedRailEntrance = false;

function SidebarTree({ currentSlug, onNavigate }) {
  return (
    <nav aria-label="Docs">
      {DOCS_CATEGORIES.map((category) => (
        <div key={category.title} className="docs-side-group">
          <p className="docs-side-title">{category.title}</p>
          {category.articles.map((article) => (
            <Link
              key={article.slug}
              href={`/docs/${article.slug}`}
              className={cn(
                "docs-side-link",
                article.slug === currentSlug && "docs-side-link--active"
              )}
              aria-current={article.slug === currentSlug ? "page" : undefined}
              onClick={onNavigate}
            >
              {article.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}

export function DocsSidebar({ currentSlug }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const railRef = useRef(null);
  const previousSlug = useRef(currentSlug);
  const reducedMotion = useReducedMotion();

  // One-off entrance for the rail: groups fade up in order, then never again.
  // Skipped on a hidden tab, because anime.js pauses there and would leave the
  // nav stranded at opacity 0; a timeout backs that up if it stalls anyway.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail || reducedMotion || hasPlayedRailEntrance) return undefined;
    if (document.visibilityState === "hidden") return undefined;

    const groups = Array.from(rail.querySelectorAll(".docs-side-group"));
    if (!groups.length) return undefined;

    hasPlayedRailEntrance = true;
    let cancelled = false;

    const show = () => {
      groups.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    };

    const safety = window.setTimeout(show, 460 + 55 * groups.length + 400);

    import("animejs")
      .then(({ animate, stagger }) => {
        if (cancelled) return;
        animate(groups, {
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 460,
          delay: stagger(55),
          ease: "out(3)",
          onComplete: () => {
            window.clearTimeout(safety);
            show();
          },
        });
      })
      .catch(show);

    return () => {
      cancelled = true;
      window.clearTimeout(safety);
    };
  }, [reducedMotion]);

  // Landing on a new article: settle the pill that just took over.
  useEffect(() => {
    const rail = railRef.current;
    const changed = previousSlug.current !== currentSlug;
    previousSlug.current = currentSlug;

    if (!rail || reducedMotion || !changed || !currentSlug) return undefined;

    const active = rail.querySelector(".docs-side-link--active");
    if (!active) return undefined;

    let cancelled = false;

    import("animejs")
      .then(({ animate }) => {
        if (cancelled) return;
        animate(active, {
          scale: [0.97, 1],
          duration: 380,
          ease: "out(4)",
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [currentSlug, reducedMotion]);

  return (
    <>
      {/* Desktop rail */}
      {/* -mx-3 lets the active pill extend evenly past the text on both sides
          (docs.css pads each row to match) without moving the text itself. */}
      <aside
        ref={railRef}
        className="docs-rail sticky top-[100px] -mx-3 hidden max-h-[calc(100vh-124px)] overflow-y-auto pb-8 lg:block"
      >
        <SidebarTree currentSlug={currentSlug} />
      </aside>

      {/* Mobile disclosure */}
      <div className="lg:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 rounded-[var(--romi-radius-md)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-4 py-3 text-[15px] font-semibold text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-xs)] transition-colors [font-family:var(--romi-font-display)] hover:bg-[var(--romi-color-surface-muted)]"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((current) => !current)}
        >
          Browse docs
          <ChevronDown
            aria-hidden="true"
            className={cn("h-4 w-4 transition-transform duration-300", isMobileOpen && "rotate-180")}
          />
        </button>
        {isMobileOpen && (
          <div className="docs-side-sheet mt-3 rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] p-4 shadow-[var(--romi-shadow-sm)]">
            <SidebarTree currentSlug={currentSlug} onNavigate={() => setIsMobileOpen(false)} />
          </div>
        )}
      </div>
    </>
  );
}
