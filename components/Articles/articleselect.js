import React from "react";
import Link from "next/link";
import { RomiHeader, RomiClose, Container } from "../../src/romi";
import BlogCard from "./blogcard";
import { HUBS } from "../../src/romi/hubs/manifest";
import { POST_INDEX } from "../../src/romi/hubs/post-index";
import { CARD_META } from "../../src/romi/hubs/card-meta";

/*
 * The blog index, grouped into categories (19 Aug 2026).
 *
 * Same hero, same cards, same thumbnails as before. The only change is that the
 * flat 46-card grid is now split into the five categories defined in
 * src/romi/hubs/manifest.js, with a jump nav at the top and a link from each
 * category heading to its fuller guide page.
 *
 * Card titles and blurbs come from POST_INDEX (generated from the post files),
 * so retitling a post updates its card here automatically. Dates and thumbnails
 * come from CARD_META.
 */
const ArticleSelect = () => {
  return (
    <div className="romi-theme romi-shell">
      <RomiHeader />

      <section className="bg-[var(--romi-color-bg)] pt-10 pb-4 md:pt-16">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="romi-kicker">Blog</p>
            <h1
              className="mt-3 text-[var(--romi-color-ink)]"
              style={{
                fontFamily: "var(--romi-font-display)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
              }}
            >
              ADHD insights that actually help
            </h1>
            <p className="mx-auto mt-5 max-w-[560px] text-[1.125rem] leading-relaxed text-[var(--romi-color-ink-muted)]">
              Honest, practical reads on living and working with ADHD. Jump to a
              topic, or scroll and pick anything that looks useful.
            </p>

            {/* Category jump nav */}
            <nav aria-label="Blog categories" className="mt-8">
              <ul className="flex flex-wrap justify-center gap-2.5">
                {HUBS.map((hub) => (
                  <li key={hub.slug}>
                    <a
                      href={`#${hub.slug}`}
                      className="inline-block rounded-full border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-4 py-2 text-[14px] font-semibold text-[var(--romi-color-ink)] transition-colors hover:border-[var(--romi-color-primary)] hover:text-[var(--romi-color-primary)]"
                    >
                      {hub.shortLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </section>

      {HUBS.map((hub) => (
        <section
          key={hub.slug}
          id={hub.slug}
          className="scroll-mt-24 bg-[var(--romi-color-bg)] pb-12 pt-8"
        >
          <Container>
            <div className="mb-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[var(--romi-color-border)] pb-4">
              <h2
                className="text-[1.5rem] font-bold tracking-[-0.015em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]"
              >
                {hub.shortLabel}
              </h2>
              <Link
                href={`/${hub.slug}`}
                className="text-[14.5px] font-semibold text-[var(--romi-color-primary)] transition-opacity hover:opacity-75"
              >
                Read the full guide →
              </Link>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {hub.sections
                .flatMap((section) => section.posts)
                .map((slug) => {
                  const post = POST_INDEX[slug];
                  const meta = CARD_META[slug];
                  if (!post || !meta) return null;
                  return (
                    <BlogCard
                      key={slug}
                      date={meta.date}
                      CardTitle={post.heading}
                      CardDescription={post.blurb}
                      image={meta.image}
                      slug={slug}
                    />
                  );
                })}
            </div>
          </Container>
        </section>
      ))}

      <RomiClose />
    </div>
  );
};

export default ArticleSelect;
