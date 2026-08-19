import Head from "next/head";
import Link from "next/link";
import { RomiHeader } from "../marketing/RomiHeader";
import { RomiClose } from "../marketing/RomiClose";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { HUBS } from "../../hubs/manifest";
import { POST_INDEX } from "../../hubs/post-index";

const SITE = "https://www.romiadhd.com";
const SIGNUP = "https://app.romiadhd.com/?page=signup";

/*
 * Shared renderer for the five hub (pillar) pages.
 *
 * Deliberately plain: this page's job is to pass authority down to the posts and
 * to answer the broad query well enough to rank on its own. It uses the Romi
 * token layer and the marketing header/footer so it belongs to the site, but it
 * does not compete with the landing page for attention.
 *
 * SEO/GEO notes:
 *  - CollectionPage + ItemList so the grouping is machine-readable.
 *  - FAQPage schema on the FAQ block. Google restricted FAQ rich results to
 *    authoritative sites in 2023, so this is here for AI retrieval (answer-first
 *    Q&A passages are the most citable format) rather than for rich snippets.
 *  - BreadcrumbList so the hierarchy is explicit.
 *  - Sibling links to the other hubs so authority circulates rather than
 *    dead-ending.
 */
export function HubPage({ hub }) {
  const canonical = `${SITE}/${hub.slug}`;
  const siblings = HUBS.filter((h) => h.slug !== hub.slug);
  const allPosts = hub.sections.flatMap((s) => s.posts);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": canonical,
        name: hub.h1,
        description: hub.description,
        url: canonical,
        isPartOf: { "@type": "WebSite", name: "Romi ADHD", url: SITE },
        about: { "@type": "Thing", name: "ADHD" },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: allPosts.length,
          itemListElement: allPosts.map((slug, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE}/blog/${slug}`,
            name: POST_INDEX[slug]?.title || slug,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: hub.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: hub.h1, item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{hub.title}</title>
        <meta name="description" content={hub.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={hub.title} />
        <meta property="og:description" content={hub.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Romi ADHD" />
        <meta property="og:image" content={`${SITE}/og/romi-og.png`} />
        <meta property="og:locale" content="en_GB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="romi-theme romi-shell">
        <RomiHeader />

        <main className="bg-[var(--romi-color-bg)] pb-20 pt-28 md:pt-32">
          <Container>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-[14px] text-[var(--romi-color-ink-muted)]">
                <li>
                  <Link href="/" className="hover:text-[var(--romi-color-primary)]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[var(--romi-color-ink)]">{hub.h1}</li>
              </ol>
            </nav>

            <div className="max-w-[760px]">
              <Badge character={{ body: 2, expression: "16-cheerful" }}>{hub.kicker}</Badge>

              <h1
                className="mt-5 text-[var(--romi-color-heading)]"
                style={{
                  fontFamily: "var(--romi-font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 5vw, 3.1rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                {hub.h1}
              </h1>

              {hub.intro.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="mt-5 text-[1.09rem] leading-relaxed text-[var(--romi-color-ink-muted)]"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Grouped post cards */}
            {hub.sections.map((section) => (
              <section key={section.title} className="mt-14">
                <h2
                  className="text-[1.35rem] font-bold tracking-[-0.01em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]"
                >
                  {section.title}
                </h2>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {section.posts.map((slug) => {
                    const post = POST_INDEX[slug];
                    if (!post) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/blog/${slug}`}
                        className="group flex flex-col gap-2 rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-6 py-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--romi-shadow-sm)]"
                      >
                        <span className="text-[16px] font-semibold leading-snug text-[var(--romi-color-ink)] transition-colors group-hover:text-[var(--romi-color-primary)] [font-family:var(--romi-font-display)]">
                          {post.heading}
                        </span>
                        <span className="text-[14.5px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                          {post.blurb}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* FAQ */}
            <section id="faq" className="mt-16 max-w-[820px]">
              <h2
                className="text-[1.6rem] font-bold tracking-[-0.015em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]"
              >
                Common questions
              </h2>
              <dl className="mt-6 space-y-6">
                {hub.faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-[var(--romi-radius-lg)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-6 py-5"
                  >
                    <dt className="text-[16.5px] font-semibold text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]">
                      {faq.q}
                    </dt>
                    <dd className="mt-2 text-[15.5px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Sibling hubs */}
            <section className="mt-16">
              <h2 className="text-[1.35rem] font-bold tracking-[-0.01em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]">
                Other guides
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {siblings.map((h) => (
                  <Link
                    key={h.slug}
                    href={`/${h.slug}`}
                    className="rounded-full border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-5 py-2.5 text-[14.5px] font-semibold text-[var(--romi-color-ink)] transition-colors hover:border-[var(--romi-color-primary)] hover:text-[var(--romi-color-primary)]"
                  >
                    {h.h1}
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-16 rounded-[var(--romi-radius-2xl)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-8 py-10 text-center">
              <h2 className="text-[1.5rem] font-bold tracking-[-0.015em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]">
                Reading about it helps. Having something alongside you helps more.
              </h2>
              <p className="mx-auto mt-3 max-w-[560px] text-[15.5px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                Romi is a personal ADHD companion. It holds what you would otherwise
                have to remember, breaks work down when starting feels impossible,
                and is there on the days that are harder than usual.
              </p>
              <a
                href={`${SIGNUP}&utm_source=site&utm_medium=hub&utm_content=${hub.slug}`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--romi-color-primary)] px-7 py-3 text-[15.5px] font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Try Romi
              </a>
            </section>
          </Container>
        </main>

        <RomiClose />
      </div>
    </>
  );
}
