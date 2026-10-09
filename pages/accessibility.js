import Head from "next/head";
import Link from "next/link";
import { RomiHeader, RomiClose, Container } from "../src/romi";

const SITE = "https://www.romiadhd.com";
const CANONICAL = `${SITE}/accessibility`;
const TITLE = "Accessibility Statement | Romi";
const DESCRIPTION =
  "How Romi makes its website and app accessible to everyone, including people with disabilities, and how to report an accessibility problem.";
const CONTACT_EMAIL = "josh@romiadhd.com";

/*
 * /accessibility - Romi's Accessibility Statement.
 *
 * The text is the approved statement from Assuric (document jjEdHFohalQYAcrfoUVM,
 * v1.0). Assuric's document-control tables are left out; only the statement
 * itself is shown. Update this page whenever the statement is re-approved there.
 *
 * Deliberately not linked from the header or footer.
 */

const STEPS = [
  [
    "Provide Text Alternatives",
    "We include alt text for all non-text content like images and multimedia.",
  ],
  [
    "Colour Contrast",
    "We maintain sufficient colour contrast for text and interactive elements to be readable.",
  ],
  [
    "Readable Text",
    "We use readable fonts and text sizes, and we allow users to adjust text size without loss of content or functionality.",
  ],
  [
    "Navigation and Consistency",
    "We ensure a consistent and logical navigation structure throughout our websites.",
  ],
  [
    "Headings and Semantic HTML",
    "We use proper heading structure (h1, h2, h3, etc.) and semantic HTML elements.",
  ],
  [
    "Form Accessibility",
    "We make all forms, including error messages, labels, and input fields, accessible.",
  ],
  [
    "Time-Based Media",
    "We ensure that time-based media (e.g., animations, slideshows) can be paused and controlled by users.",
  ],
  [
    "Page Titles and Link Text",
    "We use descriptive page titles and meaningful link text.",
  ],
  [
    "Consistent Language",
    "We maintain consistent language and avoid jargon or acronyms that may be unfamiliar.",
  ],
  [
    "Forms and Errors",
    "We provide clear instructions for form completion and error messages.",
  ],
  [
    "Content Reordering",
    "We ensure that content is presented in a meaningful sequence when styles or scripts are disabled.",
  ],
  [
    "Responsive Design",
    "We ensure that our websites are usable on various devices and screen sizes.",
  ],
  [
    "Voice or text",
    "People can use Romi by talking or by typing, so they can choose whichever suits them.",
  ],
  [
    "Reminders and structure",
    "Tasks, routines and reminders help users who find planning and remembering difficult.",
  ],
  [
    "Automated accessibility testing",
    "Automated accessibility tests run in our build pipeline on every change to the app.",
  ],
  [
    "Keyboard Accessibility",
    "All website and app functions and content can be navigated and operated using a keyboard alone.",
  ],
  [
    "Audio content",
    "Written transcripts are provided for audio exercises such as guided meditation.",
  ],
  [
    "Accessibility audit",
    "The website and app were audited against WCAG 2.2 level AA in October 2026, with no issues found.",
  ],
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      url: CANONICAL,
      isPartOf: { "@type": "WebSite", name: "Romi ADHD", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Accessibility Statement",
          item: CANONICAL,
        },
      ],
    },
  ],
};

const H2 =
  "mt-12 text-[1.5rem] font-bold tracking-[-0.015em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]";
const P = "mt-4 text-[16px] leading-relaxed text-[var(--romi-color-ink-muted)]";
const A =
  "font-semibold text-[var(--romi-color-primary)] underline underline-offset-2 hover:no-underline";

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="Romi ADHD" />
        <meta property="og:image" content={`${SITE}/og/romi-og.png`} />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </Head>

      <div className="romi-theme romi-shell">
        <RomiHeader />

        <main className="bg-[var(--romi-color-bg)] pb-20 pt-28 md:pt-32">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-[14px] text-[var(--romi-color-ink-muted)]">
                <li>
                  <Link href="/" className="hover:text-[var(--romi-color-primary)]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[var(--romi-color-ink)]" aria-current="page">
                  Accessibility Statement
                </li>
              </ol>
            </nav>

            <article className="max-w-[760px]">
              <h1
                className="text-[var(--romi-color-heading)]"
                style={{
                  fontFamily: "var(--romi-font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 5vw, 3.1rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                Accessibility Statement
              </h1>

              <p className="mt-5 text-[1.09rem] leading-relaxed text-[var(--romi-color-ink-muted)]">
                This accessibility statement details the organisation&apos;s approach to
                ensuring that our websites and applications are accessible to all
                individuals, including those with disabilities, and providing an
                experience for everyone which is perceivable, operable, understandable
                and robust.
              </p>

              <h2 className={H2}>Our Commitment to Accessibility</h2>
              <p className={P}>
                Romi is committed to making its website (romiadhd.com) and the Romi app
                (web, iOS and Android) accessible to everyone, including people with
                disabilities. Romi is designed for adults with ADHD, so a calm, clear
                and predictable experience is central to how we build it. We aim to meet
                the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.
              </p>

              <h2 className={H2}>What we comply with</h2>
              <p className={P}>We have taken the following steps to make Romi accessible:</p>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-[16px] leading-relaxed text-[var(--romi-color-ink-muted)] marker:text-[var(--romi-color-primary)]">
                {STEPS.map(([label, body]) => (
                  <li key={label}>
                    <strong className="font-semibold text-[var(--romi-color-ink)]">
                      {label}:
                    </strong>{" "}
                    {body}
                  </li>
                ))}
              </ul>

              <h2 className={H2}>Known issues</h2>
              <p className={P}>
                Our accessibility audit in October 2026 found no issues against WCAG 2.2
                level AA. Automated accessibility tests run on every change, and we will
                update this statement if we find anything that needs fixing.
              </p>

              <h2 className={H2}>Compliance status for Romi</h2>
              <p className={P}>Romi is fully compliant with WCAG 2.2 level AA.</p>

              <h2 className={H2}>User feedback and reporting issues</h2>
              <p className={P}>
                We value feedback from our users, including people who rely on assistive
                technologies. If you find an accessibility problem or have a suggestion,
                please email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className={A}>
                  {CONTACT_EMAIL}
                </a>
                . We aim to reply within 5 working days.
              </p>
              <p className={P}>
                Neuro Notion App Limited is dedicated to continuous improvement in
                accessibility. We test every change to the website and app, and we fix
                any accessibility problem we find as quickly as we can. Your feedback is
                invaluable to us as we strive to provide an inclusive online environment
                for all users.
              </p>

              <h2 className={H2}>Enforcement procedure</h2>
              <p className={P}>
                Accessibility regulations cover public sector mobile apps developed for
                use by the public. These regulations cover areas such as the public
                sector body using bespoke app choices of functionality, or branding.
                Mobile apps for specific defined groups like employees or students are
                not covered by the regulations.
              </p>
              <p className={P}>
                Please note that the Public Sector Bodies (Websites and Mobile
                Applications) (No. 2) Accessibility Regulations 2018 do not apply to
                Romi. However, we voluntarily commit to complying with accessibility
                regulations and ensuring the accessibility of our websites and
                applications.
              </p>
              <p className={P}>
                If you are not happy with how we respond to your feedback, you can
                contact the{" "}
                <a
                  href="https://www.equalityadvisoryservice.com/"
                  className={A}
                >
                  Equality Advisory and Support Service (EASS)
                </a>
                .
              </p>

              <h2 className={H2}>Preparation of this statement</h2>
              <p className={P}>
                This statement was prepared on 2 October 2026 and updated after an
                accessibility audit of the website and app in October 2026. It is
                reviewed at least once a year and after any significant change to the
                website or app.
              </p>
            </article>
          </Container>
        </main>

        <RomiClose />
      </div>
    </>
  );
}
