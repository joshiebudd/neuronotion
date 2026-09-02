import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RomiHeader } from "../marketing/RomiHeader";
import { RomiClose } from "../marketing/RomiClose";
import { DocsSidebar } from "./DocsSidebar";
import { useDocsReveal } from "./useDocsReveal";
import { getDocsArticle, getDocsNeighbours } from "../../docs/manifest";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { cn } from "../../lib/cn";

/*
 * DocsArticle — the shell for every /docs article, mirroring what BlogArticle
 * does for blog posts. Owns the page chrome (RomiHeader + RomiClose), the
 * Vercel-style three-column layout (sidebar / content / on-this-page rail),
 * the per-page SEO head (canonical, OG, Article + BreadcrumbList JSON-LD),
 * prev/next navigation and the support footer.
 *
 * Article files pass their slug plus body children; title, description and
 * category come from the docs manifest so there is one source of truth.
 * `sections` ([{ id, label }]) drives the on-this-page rail and must match the
 * ids on the article's <h2> elements.
 */

const SITE = "https://www.romiadhd.com";
const DEFAULT_OG = `${SITE}/og/romi-og.png`;
const SUPPORT_EMAIL = "josh@romiadhd.com";

function OnThisPage({ sections, reducedMotion }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!sections?.length) return undefined;

    let frame = 0;
    const measure = () => {
      frame = 0;
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 132) current = section.id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  // Glide to the heading instead of jumping, so you keep your place on the page.
  const onJump = useCallback(
    (id) => (event) => {
      const el = document.getElementById(id);
      if (!el) return;
      event.preventDefault();
      el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    },
    [reducedMotion]
  );

  if (!sections?.length) return null;

  return (
    <aside className="docs-rail sticky top-[100px] hidden max-h-[calc(100vh-124px)] overflow-y-auto pb-8 xl:block">
      <p className="docs-toc-title">On this page</p>
      <nav aria-label="On this page">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={onJump(section.id)}
            className={cn("docs-toc-link", section.id === activeId && "docs-toc-link--active")}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function NeighbourCard({ article, direction, reducedMotion }) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ArrowLeft : ArrowRight;

  // Same lift-and-settle the corporate cards use, kept small for a docs footer.
  const onHover = (up) => (event) => {
    if (reducedMotion) return;
    const card = event.currentTarget;
    import("animejs")
      .then(({ animate }) => {
        animate(card, { translateY: up ? -4 : 0, duration: 320, ease: "out(3)" });
      })
      .catch(() => {});
  };

  return (
    <Link
      href={`/docs/${article.slug}`}
      onMouseEnter={onHover(true)}
      onMouseLeave={onHover(false)}
      className={cn(
        "group flex flex-1 flex-col gap-1 rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-5 py-4 transition-shadow hover:shadow-[var(--romi-shadow-sm)]",
        !isPrev && "items-end text-right"
      )}
    >
      <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--romi-color-ink-soft)]">
        {isPrev && <Icon aria-hidden="true" className="docs-neighbour-icon h-3.5 w-3.5" />}
        {isPrev ? "Previous" : "Next"}
        {!isPrev && <Icon aria-hidden="true" className="docs-neighbour-icon h-3.5 w-3.5" />}
      </span>
      <span className="text-[15px] font-semibold text-[var(--romi-color-ink)] transition-colors group-hover:text-[var(--romi-indigo)] [font-family:var(--romi-font-display)]">
        {article.title}
      </span>
    </Link>
  );
}

export function DocsArticle({ slug, heading, sections, children }) {
  const article = getDocsArticle(slug);
  const { prev, next } = getDocsNeighbours(slug);
  const reducedMotion = useReducedMotion();
  const revealRef = useDocsReveal(slug);

  if (!article) {
    throw new Error(`DocsArticle: slug "${slug}" is not in the docs manifest`);
  }

  const canonical = `${SITE}/docs/${slug}`;
  const pageTitle = `${article.title} - Romi Docs`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: heading || article.title,
        description: article.description,
        image: DEFAULT_OG,
        publisher: {
          "@type": "Organization",
          name: "Romi",
          logo: { "@type": "ImageObject", url: `${SITE}/android-chrome-512x512.png` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Docs", item: `${SITE}/docs` },
          { "@type": "ListItem", position: 2, name: article.title, item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={article.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Romi ADHD" />
        <meta property="og:image" content={DEFAULT_OG} />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="romi-theme romi-shell romi-docs">
        <RomiHeader />

        <div className="romi-container">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 pb-20 pt-8 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)_200px]">
            <DocsSidebar currentSlug={slug} />

            <main className="min-w-0" ref={revealRef}>
              <p
                data-reveal
                className="text-[13.5px] font-medium text-[var(--romi-color-ink-soft)] [font-family:var(--romi-font-display)]"
              >
                <Link href="/docs" className="transition-colors hover:text-[var(--romi-indigo)]">
                  Docs
                </Link>
                <span aria-hidden="true" className="mx-2">/</span>
                {article.category}
              </p>

              <h1
                data-reveal
                className="mt-3 text-[var(--romi-color-ink)]"
                style={{
                  fontFamily: "var(--romi-font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                {heading || article.title}
              </h1>

              <div data-reveal className="docs-body mt-5">
                {children}
              </div>

              {(prev || next) && (
                <nav
                  data-reveal
                  aria-label="More docs"
                  className="mt-12 flex max-w-[var(--romi-docs-measure)] flex-col gap-3 sm:flex-row"
                >
                  {prev ? (
                    <NeighbourCard article={prev} direction="prev" reducedMotion={reducedMotion} />
                  ) : (
                    <div className="flex-1" />
                  )}
                  {next ? (
                    <NeighbourCard article={next} direction="next" reducedMotion={reducedMotion} />
                  ) : (
                    <div className="flex-1" />
                  )}
                </nav>
              )}

              <div
                data-reveal
                className="mt-6 max-w-[var(--romi-docs-measure)] rounded-[var(--romi-radius-lg)] bg-[var(--romi-purple-pale)] px-6 py-5"
              >
                <p className="text-[15px] font-semibold text-[var(--romi-color-ink)] [font-family:var(--romi-font-display)]">
                  Still stuck?
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                  Email{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="font-medium text-[var(--romi-indigo)] underline underline-offset-[3px]"
                  >
                    {SUPPORT_EMAIL}
                  </a>{" "}
                  and a human will get back to you.
                </p>
              </div>
            </main>

            <OnThisPage sections={sections} reducedMotion={reducedMotion} />
          </div>
        </div>

        <RomiClose />
      </div>
    </>
  );
}
