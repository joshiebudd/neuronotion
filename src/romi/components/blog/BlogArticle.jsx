import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RomiHeader } from "../marketing/RomiHeader";
import { RomiClose } from "../marketing/RomiClose";
import { Container } from "../layout/Container";
import { HUB_FOR_POST } from "../../hubs/manifest";
import { POST_INDEX } from "../../hubs/post-index";

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
  dateModified, // ISO date, only set when a live post is substantively edited
  dateModifiedDisplay, // display form of dateModified, e.g. "Aug 19, 2026"
  readingTime, // optional, e.g. "8 min read"
  heroImage, // optional hero illustration/photo
  children,
}) {
  const canonical = slug ? `${SITE}/blog/${slug}` : undefined;
  const shareImage = ogImage || heroImage || DEFAULT_OG;

  // Every post belongs to exactly one hub (src/romi/hubs/manifest.js). Linking up
  // to it and across to siblings is what stops posts sitting on one inbound link.
  const hub = slug ? HUB_FOR_POST[slug] : undefined;
  const siblings = hub
    ? hub.sections
        .flatMap((section) => section.posts)
        .filter((s) => s !== slug)
        .slice(0, 3)
    : [];

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
    ...(dateModified ? { dateModified } : {}),
    ...(canonical ? { mainEntityOfPage: { "@type": "WebPage", "@id": canonical } } : {}),
  };

  // Breadcrumb reflects the hub hierarchy added 19 Aug 2026.
  const breadcrumbLd = hub && canonical
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: hub.h1, item: `${SITE}/${hub.slug}` },
          { "@type": "ListItem", position: 3, name: heading || title, item: canonical },
        ],
      }
    : null;

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
        <meta name="twitter:card" content="summary_large_image" />
        {datePublished && <meta property="article:published_time" content={datePublished} />}
        <meta property="article:author" content={AUTHOR_NAME} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {breadcrumbLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
          />
        )}
      </Head>

      <div className="romi-theme romi-shell">
        <RomiHeader />

        {/* ---------- Title + author hero ---------- */}
        <section className="bg-[var(--romi-color-bg)] pt-8 md:pt-12">
            <Container>
              <div className="mx-auto max-w-[760px]">
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14.5px] text-[var(--romi-color-ink-muted)] [font-family:var(--romi-font-display)]">
                    <li>
                      <Link
                        href="/blogs"
                        className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[var(--romi-color-primary)]"
                      >
                        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                        All articles
                      </Link>
                    </li>
                    {hub && (
                      <>
                        <li aria-hidden="true">/</li>
                        <li>
                          <Link
                            href={`/${hub.slug}`}
                            className="font-medium transition-colors hover:text-[var(--romi-color-primary)]"
                          >
                            {hub.h1}
                          </Link>
                        </li>
                      </>
                    )}
                  </ol>
                </nav>

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
                      {dateModified && dateModifiedDisplay && (
                        <>
                          {" · Updated "}
                          <time dateTime={dateModified}>{dateModifiedDisplay}</time>
                        </>
                      )}
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

          {/* ---------- Author box: the Experience half of E-E-A-T, on a YMYL topic ---------- */}
          <section className="bg-[var(--romi-color-bg)] pt-6">
            <Container>
              <div className="mx-auto flex max-w-[760px] flex-col gap-4 rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-6 py-6 sm:flex-row sm:items-start sm:gap-5">
                <img
                  src={AUTHOR_IMAGE}
                  alt={AUTHOR_NAME}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-[16px] font-bold text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]">
                    {AUTHOR_NAME}
                  </p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                    Founder of Romi. Diagnosed with ADHD at 10, kicked out of more than
                    ten schools, and has spent over eight years studying ADHD and
                    building the support systems he never had.{" "}
                    <Link
                      href="/about"
                      className="font-semibold text-[var(--romi-color-primary)] hover:underline"
                    >
                      More about Josh and the team
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* ---------- Up to the hub, across to siblings ---------- */}
          {hub && (
            <section className="bg-[var(--romi-color-bg)] pt-10">
              <Container>
                <div className="mx-auto max-w-[760px]">
                  <h2 className="text-[1.25rem] font-bold tracking-[-0.01em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]">
                    More in {hub.h1}
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {siblings.map((siblingSlug) => {
                      const post = POST_INDEX[siblingSlug];
                      if (!post) return null;
                      return (
                        <Link
                          key={siblingSlug}
                          href={`/blog/${siblingSlug}`}
                          className="group flex flex-col gap-1.5 rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-5 py-4 transition-shadow hover:shadow-[var(--romi-shadow-sm)]"
                        >
                          <span className="text-[15.5px] font-semibold leading-snug text-[var(--romi-color-ink)] transition-colors group-hover:text-[var(--romi-color-primary)] [font-family:var(--romi-font-display)]">
                            {post.heading}
                          </span>
                          <span className="text-[14px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                            {post.blurb}
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href={`/${hub.slug}`}
                      className="group flex flex-col justify-center gap-1.5 rounded-[var(--romi-radius-lg)] border border-dashed border-[var(--romi-color-border)] px-5 py-4 transition-colors hover:border-[var(--romi-color-primary)]"
                    >
                      <span className="text-[15.5px] font-semibold text-[var(--romi-color-primary)] [font-family:var(--romi-font-display)]">
                        See the full guide
                      </span>
                      <span className="text-[14px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                        Everything we have written on {hub.h1.toLowerCase()}.
                      </span>
                    </Link>
                  </div>
                </div>
              </Container>
            </section>
          )}

        <RomiClose />
      </div>
    </>
  );
}
