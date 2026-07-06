import Head from "next/head";
import { cn } from "../../lib/cn";

const SITE = "https://www.romiadhd.com";
const OG_IMAGE = `${SITE}/og/romi-og.png`;

// Site-wide structured data (Organization + WebSite). No socials, so no sameAs.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Romi",
      legalName: "Neuro Notion App Limited",
      url: SITE,
      logo: `${SITE}/android-chrome-512x512.png`,
    },
    {
      "@type": "WebSite",
      name: "Romi ADHD",
      url: SITE,
    },
  ],
};

/*
 * RomiPage — page shell + full per-page SEO head. Site-wide chrome (favicon,
 * manifest, theme-color) lives in _app.js; this owns the per-page title,
 * description, canonical, robots and Open Graph tags. Twitter tags are
 * intentionally absent (no X presence).
 */
export function RomiPage({
  title = "Romi - Your Personal ADHD Companion",
  description = "Romi is your personal ADHD companion. Honest, compassionate support that makes living with ADHD easier, walking alongside you at your pace.",
  canonical,
  ogType = "website",
  ogImage = OG_IMAGE,
  noindex = false,
  className,
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {canonical && <meta property="og:url" content={canonical} />}
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content="Romi ADHD" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Romi, your personal ADHD companion" />
        <meta property="og:locale" content="en_GB" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </Head>
      <div className={cn("romi-theme romi-shell", className)}>{children}</div>
    </>
  );
}
