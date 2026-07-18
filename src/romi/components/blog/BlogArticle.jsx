import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RomiHeader } from "../marketing/RomiHeader";
import { RomiClose } from "../marketing/RomiClose";
import { Container } from "../layout/Container";

/*
 * BlogArticle — the Romi-branded shell for a long-form blog post. It owns the
 * page chrome (RomiHeader + RomiClose footer), the title/author hero, the full
 * per-page SEO head (canonical on romiadhd.com, Open Graph, BlogPosting JSON-LD)
 * and wraps the article body in `.romi-article`, which re-skins the legacy
 * blue prose markup onto Romi tokens (see src/romi/styles/blog.css).
 *
 * Each article file passes its metadata as props and drops its existing
 * `blog-content` markup in as children — no per-article restyling required.
 */

const SITE = "https://www.romiadhd.com";
const DEFAULT_OG = `${SITE}/og/romi-og.png`;
const AUTHOR_IMAGE = "https://NeuroNotionPullZonw.b-cdn.net/headshot%20circle.jpg";
const AUTHOR_NAME = "Josh Budd";

export function BlogArticle({
  // SEO
  title,
  description,
  slug,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  // Presentation
  heading,
  category = "ADHD",
  date, // display date, e.g. "Feb 7, 2025"
  datePublished, // ISO date, e.g. "2025-02-07"
  readingTime, // optional, e.g. "8 min read"
  heroImage, // optional hero illustration/photo
  children,
}) {
  const canonical = slug ? `${SITE}/blog/${slug}` : undefined;
  const shareImage = ogImage || heroImage || DEFAULT_OG;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: heading || title,
    description,
    image: shareImage,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: "Romi" },
    },
    publisher: {
      "@type": "Organization",
      name: "Romi",
      logo: { "@type": "ImageObject", url: `${SITE}/android-chrome-512x512.png` },
    },
    ...(datePublished ? { datePublished } : {}),
    ...(canonical ? { mainEntityOfPage: { "@type": "WebPage", "@id": canonical } } : {}),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph */}
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:type" content="article" />
        {canonical && <meta property="og:url" content={canonical} />}
        <meta property="og:site_name" content="Romi ADHD" />
        <meta property="og:image" content={shareImage} />
        <meta property="og:locale" content="en_GB" />
        {datePublished && <meta property="article:published_time" content={datePublished} />}
        <meta property="article:author" content={AUTHOR_NAME} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="romi-theme romi-shell">
        <RomiHeader />

        {/* ---------- Title + author hero ---------- */}
        <section className="bg-[var(--romi-color-bg)] pt-8 md:pt-12">
            <Container>
              <div className="mx-auto max-w-[760px]">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--romi-color-ink-muted)] transition-colors hover:text-[var(--romi-color-primary)] [font-family:var(--romi-font-display)]"
                >
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                  All articles
                </Link>

                {category && <p className="romi-kicker mt-8">{category}</p>}

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
                  {heading}
                </h1>

                <div className="mt-7 flex items-center gap-3.5">
                  <img
                    src={AUTHOR_IMAGE}
                    alt={AUTHOR_NAME}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="leading-tight">
                    <p className="text-[15px] font-semibold text-[var(--romi-color-ink)] [font-family:var(--romi-font-display)]">
                      {AUTHOR_NAME}
                    </p>
                    <p className="text-[14px] text-[var(--romi-color-ink-muted)]">
                      Founder @ Romi
                      {date && (
                        <>
                          {" · "}
                          <time dateTime={datePublished || undefined}>{date}</time>
                        </>
                      )}
                      {readingTime && ` · ${readingTime}`}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* ---------- Body ---------- */}
          <section className="bg-[var(--romi-color-bg)] pb-6 pt-10">
            <Container>
              <article className="romi-article">{children}</article>
            </Container>
          </section>

        <RomiClose />
      </div>
    </>
  );
}
