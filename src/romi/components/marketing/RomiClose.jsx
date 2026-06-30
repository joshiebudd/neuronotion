import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { RomiRating } from "../ui/RomiRating";

/*
 * RomiClose — the closing CTA + footer, combined into one floating, rounded
 * card (per the wireframe: "Floating, slightly opaque CTA + Footer combined
 * with rounded corners").
 *
 * Built entirely on Romi design tokens:
 *   - Card floats on the beige page, inset by --romi-page-gutter, big section
 *     radius (40/64px) to match the page's stacked-layer language, shadow-xl.
 *   - CTA zone sits on a clean, flat --romi-color-section-alt (purple-pale):
 *     one solid wash, no gradient. A charcoal hairline divides it from the
 *     footer. Headline emphasis line uses --romi-color-primary.
 *   - Footer body is the light surface so the dark logo + store badges read
 *     exactly as they do in the hero. Copyright + legal name sit under the
 *     store badges, bottom-left.
 *   - Security pills sit in their own band beneath the columns as warm frosted
 *     beige pills — no card wrapper.
 *
 * Copy is lifted from the live Neuro page (<LPFinalCTA /> / <LPFooter />) with
 * the rebrand swap Claudia -> Romi.
 */

const footerCols = [
  {
    title: "Who it's for",
    links: [
      { label: "For Healthcare", href: "/for-healthcare" },
      { label: "For Corporates", href: "/for-work" },
      { label: "For Diagnosis Clinics", href: "/for-adhd-clinics" },
      { label: "For Coaches", href: "/for-coaches" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Cookies", href: "/cookies" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "hello@romiadhd.com", href: "mailto:hello@romiadhd.com" }],
  },
];

const certifications = [
  "UK GDPR",
  "ICO Registered",
  "SOC 2 Type II",
  "Cyber Essentials+",
  "AES-256",
  "No Data Monetisation",
];

const stores = [
  { src: "/romi/landing/store-app-store.webp", alt: "Download on the App Store" },
  { src: "/romi/landing/store-google-play.webp", alt: "Get it on Google Play" },
];

function StoreButtons({ className }) {
  return (
    <div className={className}>
      {stores.map((store) => (
        <a key={store.src} href="#" onClick={(event) => event.preventDefault()} aria-label={store.alt}>
          <Image
            src={store.src}
            alt={store.alt}
            width={196}
            height={67}
            className="h-[44px] w-auto transition-opacity hover:opacity-90 md:h-[46px]"
          />
        </a>
      ))}
    </div>
  );
}

export function RomiClose() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-[var(--romi-color-bg)] px-[var(--romi-page-gutter)] pb-[var(--romi-page-gutter)] pt-12 md:pt-14">
      <div className="mx-auto max-w-[1340px] overflow-hidden rounded-[40px] shadow-[0_2px_4px_rgb(79_46_18_/_0.06),0_30px_56px_-18px_rgb(79_46_18_/_0.2),0_56px_96px_-44px_rgb(79_46_18_/_0.24)] md:rounded-[64px]">
        {/* ---------- CTA ---------- */}
        <div
          className="px-6 py-16 text-center md:px-10 md:py-24"
          style={{ background: "var(--romi-color-section-alt)" }}
        >
          <div className="mx-auto max-w-[780px]">
            <h2
              className="font-bold tracking-[-0.015em] text-[var(--romi-color-ink)]"
              style={{
                fontFamily: "var(--romi-font-display)",
                fontSize: "clamp(2.25rem, 4.6vw, var(--romi-display-xl))",
                lineHeight: "1.04",
              }}
            >
              Don&apos;t Battle ADHD alone.
              <br />
              <span className="whitespace-nowrap text-[var(--romi-color-primary)]">
                Talk it out with Romi
                <img
                  src="/romi/landing/romi-avatar.svg"
                  alt="Romi"
                  className="ml-3 inline-block h-[1.15em] w-[1.15em] rounded-full align-[-0.26em] shadow-[0_3px_10px_rgb(38_19_64_/_0.18)]"
                />
              </span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-[520px] font-medium text-[var(--romi-color-ink-muted)]"
              style={{ fontSize: "var(--romi-text-xl)", lineHeight: "var(--romi-line-xl)" }}
            >
              Life with ADHD is hard. But together with Romi, it&apos;s a little easier.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3">
              <Button
                as="a"
                href="#"
                onClick={(event) => event.preventDefault()}
                variant="primary"
                size="xl"
                className="px-10 text-[1.05rem] shadow-[var(--romi-shadow-md)]"
              >
                Try Romi Free
              </Button>

              <RomiRating />
            </div>
          </div>
        </div>

        {/* Charcoal hairline dividing the CTA from the footer */}
        <div aria-hidden="true" className="h-px bg-[var(--romi-color-ink)]/15" />

        {/* ---------- Footer ---------- */}
        <div className="bg-[var(--romi-color-surface)] px-6 pb-12 pt-12 md:px-12 md:pb-14 md:pt-16">
          {/* Top: one-third brand column, two-thirds link columns */}
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Left third: brand + app */}
            <div className="lg:col-span-1">
              <Image src="/romi/romi-logo-linear.svg" alt="Romi" width={150} height={36} className="h-9 w-auto" />
              <p
                className="mt-5 max-w-[320px] text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
              >
                The personal companion for adults with ADHD.
              </p>
              <StoreButtons className="mt-6 flex flex-wrap gap-3" />
            </div>

            {/* Right two-thirds: link columns */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {footerCols.map((col) => (
                  <div key={col.title}>
                    <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-[var(--romi-color-ink)]">
                      {col.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-[var(--romi-color-ink-muted)] transition-colors hover:text-[var(--romi-color-primary)]"
                            style={{ fontSize: "var(--romi-text-md)" }}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full-width bottom bar: security pills (left) + copyright (right) */}
          <div className="mt-14 border-t border-[var(--romi-color-border)] pt-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--romi-color-ink-soft)]">
                  Security &amp; data
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {certifications.map((cert) => (
                    <li
                      key={cert}
                      className="rounded-full border border-[var(--romi-charcoal)]/15 bg-[var(--romi-color-surface)] px-4 py-2 text-sm font-semibold text-[var(--romi-color-ink-muted)]"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="shrink-0 text-sm text-[var(--romi-color-ink-soft)] lg:text-right">
                &copy; {year} Neuro Notion App Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
