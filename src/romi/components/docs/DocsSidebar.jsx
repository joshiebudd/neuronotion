import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DOCS_CATEGORIES } from "../../docs/manifest";
import { cn } from "../../lib/cn";

/*
 * DocsSidebar — the category tree for the /docs section, driven entirely by the
 * docs manifest. Desktop (lg+) renders it as a sticky rail; on mobile the same
 * tree collapses behind a "Browse docs" disclosure so articles stay readable.
 */

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

  return (
    <>
      {/* Desktop rail */}
      <aside className="sticky top-[100px] hidden max-h-[calc(100vh-124px)] overflow-y-auto pb-8 pr-2 lg:block">
        <SidebarTree currentSlug={currentSlug} />
      </aside>

      {/* Mobile disclosure */}
      <div className="lg:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 rounded-[var(--romi-radius-md)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-4 py-3 text-[15px] font-semibold text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-xs)] [font-family:var(--romi-font-display)]"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((current) => !current)}
        >
          Browse docs
          <ChevronDown
            aria-hidden="true"
            className={cn("h-4 w-4 transition-transform", isMobileOpen && "rotate-180")}
          />
        </button>
        {isMobileOpen && (
          <div className="mt-3 rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] p-4 shadow-[var(--romi-shadow-sm)]">
            <SidebarTree currentSlug={currentSlug} onNavigate={() => setIsMobileOpen(false)} />
          </div>
        )}
      </div>
    </>
  );
}
