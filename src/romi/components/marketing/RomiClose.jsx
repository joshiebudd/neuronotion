import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { RomiRating } from "../ui/RomiRating";
import { ClickTooltip } from "../ui/ClickTooltip";
import { openBooking } from "../ui/BookingModal";
import { Lock } from "lucide-react";

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

const SIGNUP_URL = "https://app.romiadhd.com/?page=signup";

const footerCols = [
  {
    title: "Who it's for",
    links: [
      // Placeholder pages aren't live yet, so these show but don't link.
      { label: "For Healthcare", href: "/romiforhealthcare", disabled: true },
      { label: "For Corporates", href: "/corporates" },
      // { label: "For ADHD Clinics", href: "/romiforclinics" }, // unlinked from footer (page still reachable by direct URL)
      { label: "For Coaches", href: "/romiforcoaches", disabled: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://www.romiadhd.com/blogs" },
      { label: "Privacy", href: "https://app.romiadhd.com/privacy" },
      { label: "Terms of Use", href: "https://app.romiadhd.com/terms" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "hello@romiadhd.com", href: "mailto:hello@romiadhd.com" }],
  },
];

const certifications = [
  "Cyber Essentials+",
  "GDPR",
  "SOC II",
  "UK storage",
];

const stores = [
  { src: "/romi/landing/store-app-store.webp", alt: "Download on the App Store" },
  { src: "/romi/landing/store-google-play.webp", alt: "Get it on Google Play" },
];

function StoreButtons({ className }) {
  return (
    <div className={className}>
      {stores.map((store) => (
        <ClickTooltip key={store.src} label="Temporarily disabled due to rebranding.">
          <Image
            src={store.src}
            alt={store.alt}
            width={196}
            height={67}
            className="h-[44px] w-auto md:h-[46px]"
          />
        </ClickTooltip>
      ))}
    </div>
  );
}

export function RomiClose({
  titleLine1 = "Don't Battle ADHD alone.",
  titleLine2 = "Talk it out with Romi",
  // The landing's short line 2 stays on one line; longer custom titles wrap.
  titleNoWrap = true,
  subtitle = "Life with ADHD is hard. But together with Romi, it's a little easier.",
  footerTagline = "The personal companion for adults with ADHD.",
  ctaLabel = "Try Romi Free",
  ctaHref = SIGNUP_URL,
  bookCta = false, // when true, the CTA opens the Motion booking modal instead
  bookUrl, // optional: a specific Motion booking page (e.g. the clinic call)

  // Force line 1 onto one line (corporate). Off by default so the landing's
  // short line 1 can still wrap on very narrow phones. A longer line 1 pairs
  // this with a smaller titleClamp so it actually fits.
  line1NoWrap = false,
  titleClamp = "clamp(2.25rem, 4.6vw, var(--romi-display-xl))",
}) {
  const year = new Date().getFullYear();

  const onCtaClick = (event) => {
    if (ctaHref.startsWith("#")) {
      event.preventDefault();
      document.querySelector(ctaHref)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[var(--romi-color-bg)] px-[var(--romi-page-gutter)] pb-[var(--romi-page-gutter)] pt-12 md:pt-14">
      <div className="mx-auto max-w-[1340px] overflow-hidden rounded-[40px] shadow-[0_2px_4px_rgb(79_46_18_/_0.06),0_30px_56px_-18px_rgb(79_46_18_/_0.2),0_56px_96px_-44px_rgb(79_46_18_/_0.24)] md:rounded-[64px]">
        {/* ---------- CTA ---------- */}
        <div
          className="px-6 py-16 text-center md:px-10 md:py-24"
          style={{
            backgroundColor: "var(--romi-color-section-alt)",
            backgroundImage: "url('/romi/landing/clouds-cta.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mx-auto max-w-[780px]">
            <h2
              className="font-bold tracking-[-0.015em] text-[var(--romi-color-ink)]"
              style={{
                fontFamily: "var(--romi-font-display)",
                fontSize: titleClamp,
                lineHeight: "1.04",
              }}
            >
              <span className={line1NoWrap ? "whitespace-normal md:whitespace-nowrap" : undefined}>{titleLine1}</span>
              <br />
              <span className={titleNoWrap ? "whitespace-normal md:whitespace-nowrap text-[var(--romi-color-primary)]" : "text-[var(--romi-color-primary)]"}>
                {titleLine2}
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
              {subtitle}
            </p>

            <div className="mt-9 flex flex-col items-center gap-3">
              <Button
                as={bookCta ? "button" : "a"}
                {...(bookCta ? { type: "button", onClick: () => openBooking(bookUrl) } : { href: ctaHref, onClick: onCtaClick })}
                variant="primary"
                size="xl"
                className="px-10 text-[1.05rem] shadow-[var(--romi-shadow-md)]"
              >
                {ctaLabel}
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
              <Link href="/" aria-label="Romi home" className="inline-block">
                <Image src="/romi/romi-logo-linear.svg" alt="Romi" width={150} height={36} className="h-9 w-auto" />
              </Link>
              <p
                className="mt-5 max-w-[320px] text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
              >
                {footerTagline}
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
                      {col.links.map((link) => {
                        const external = /^(https?:|mailto:)/.test(link.href);
                        const linkClass =
                          "text-[var(--romi-color-ink-muted)] transition-colors hover:text-[var(--romi-color-primary)]";
                        const linkStyle = { fontSize: "var(--romi-text-md)" };
                        return (
                          <li key={link.label}>
                            {link.disabled ? (
                              <span className="cursor-default text-[var(--romi-color-ink-soft)]" style={linkStyle}>
                                {link.label}
                              </span>
                            ) : external ? (
                              <a href={link.href} className={linkClass} style={linkStyle}>
                                {link.label}
                              </a>
                            ) : (
                              <Link href={link.href} className={linkClass} style={linkStyle}>
                                {link.label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full-width bottom bar: security pills (left) + copyright (right) */}
          <div className="mt-14 pt-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <ul className="flex flex-wrap gap-2.5">
                  {certifications.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-2 rounded-full border border-[var(--romi-charcoal)]/15 bg-[var(--romi-color-surface)] px-4 py-2 text-sm font-semibold text-[var(--romi-color-ink-muted)]"
                    >
                      <Lock aria-hidden="true" className="h-4 w-4 text-[var(--romi-indigo)]" />
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
