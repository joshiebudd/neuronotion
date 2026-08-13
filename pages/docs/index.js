import Head from "next/head";
import Link from "next/link";
import { RomiHeader, RomiClose } from "../../src/romi";
import { DocsSidebar } from "../../src/romi/components/docs/DocsSidebar";
import { useDocsReveal } from "../../src/romi/components/docs/useDocsReveal";
import { useReducedMotion } from "../../src/romi/lib/useReducedMotion";
import { DOCS_CATEGORIES } from "../../src/romi/docs/manifest";

/*
 * Docs hub - the /docs landing page. Vercel-style: not an article dump but
 * grouped link sections, each card a title + one-line description. Shares the
 * sidebar shell with DocsArticle so the whole section feels like one place.
 */

const SITE = "https://www.romiadhd.com";
const CANONICAL = `${SITE}/docs`;
const TITLE = "Romi Docs - How to use Romi";
const DESCRIPTION =
  "Guides to using Romi: talking to Romi, tasks, the Schedule page, Google Calendar sync, routines, Regulate, billing and your data.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
};

export default function DocsHome() {
  const reducedMotion = useReducedMotion();
  const revealRef = useDocsReveal("hub");

  // Cards lift a little on hover, matching the corporate cards elsewhere.
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
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={CANONICAL} />

        {/* Open Graph */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="Romi ADHD" />
        <meta property="og:image" content={`${SITE}/og/romi-og.png`} />
        <meta property="og:locale" content="en_GB" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </Head>

      <div className="romi-theme romi-shell romi-docs">
        <RomiHeader />

        <div className="romi-container">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 pb-20 pt-8 lg:grid-cols-[230px_minmax(0,1fr)]">
            <DocsSidebar currentSlug={null} />

            <main className="min-w-0" ref={revealRef}>
              <p data-reveal className="romi-kicker">
                Docs
              </p>
              <h1
                data-reveal
                className="mt-3 text-[var(--romi-color-ink)]"
                style={{
                  fontFamily: "var(--romi-font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4.5vw, 2.9rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                How to use Romi
              </h1>
              <p
                data-reveal
                className="mt-4 max-w-[560px] text-[1.125rem] leading-relaxed text-[var(--romi-color-ink-muted)]"
              >
                Short guides to using Romi. Pick a topic below.
              </p>

              {DOCS_CATEGORIES.map((category) => (
                <section data-reveal key={category.title} className="mt-12">
                  <h2 className="text-[1.25rem] font-bold tracking-[-0.01em] text-[var(--romi-color-ink)] [font-family:var(--romi-font-display)]">
                    {category.title}
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {category.articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/docs/${article.slug}`}
                        onMouseEnter={onHover(true)}
                        onMouseLeave={onHover(false)}
                        className="group flex flex-col gap-1 rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-5 py-4 transition-shadow hover:shadow-[var(--romi-shadow-sm)]"
                      >
                        <span className="text-[15.5px] font-semibold text-[var(--romi-color-ink)] transition-colors group-hover:text-[var(--romi-indigo)] [font-family:var(--romi-font-display)]">
                          {article.title}
                        </span>
                        <span className="text-[14px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                          {article.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </main>
          </div>
        </div>

        <RomiClose />
      </div>
    </>
  );
}
