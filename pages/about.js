import Head from "next/head";
import Link from "next/link";
import { RomiHeader, RomiClose, RomiMission, Container, Badge } from "../src/romi";

const SITE = "https://www.romiadhd.com";
const CANONICAL = `${SITE}/about`;
const TITLE = "About Romi: Built by People Who Have ADHD | Romi";
const DESCRIPTION =
  "Romi was built by Josh Budd, diagnosed with ADHD at 10, and a team of clinicians and ADHDers. The story behind the app, and the people who make it.";

/*
 * /about — the E-E-A-T page.
 *
 * ADHD advice is YMYL ("your money or your life"), so Google holds it to a higher
 * bar and wants a real, identifiable, credible human behind it. This page carries
 * Josh's lived experience (the Experience half of E-E-A-T, and the half AI-written
 * competitor content cannot fake), plus Person and Organization schema.
 *
 * The team section reuses <RomiMission /> unchanged from the homepage, at Josh's
 * request. The founder story sits above it. Deliberately no commercial detail:
 * no revenue, no funding, no ARR. Josh was explicit about that.
 *
 * /team 308-redirects here (next.config.js).
 */

const STORY = [
  {
    age: "Age 10",
    title: "Diagnosed, and none the wiser",
    body: "I was diagnosed with ADHD at 10. Being diagnosed and understanding what it meant turned out to be two completely different things, and for years I only had the first one.",
  },
  {
    age: "School",
    title: "The problem child",
    body: "I was kicked out of more than ten schools. Nobody around me had the language for what was happening, so I got the one that was available: difficult, disruptive, the problem child. That becomes your identity when you hear it often enough, and I started living up to it and hanging around with the wrong crowd.",
  },
  {
    age: "Age 15",
    title: "Deciding to actually find out",
    body: "At 15 I decided I wanted to know what ADHD really was, and what it was actually doing to me. Not the assembly-hall version. The real thing.",
  },
  {
    age: "The obsession",
    title: "Reading everything, testing it on myself",
    body: "I became obsessed with it. I read the science and then used myself as the experiment, changing one thing at a time and watching what happened. The changes were drastic. Not because I had found a trick, but because for the first time I was working with my brain instead of against it.",
  },
  {
    age: "After 10+ years",
    title: "Coming off medication",
    body: "Eventually I came off medication after more than ten years on it. That was only possible because by then I had built the scaffolding around my life to hold the things it used to hold. Medication is not a failure and coming off it is not a victory. It just stopped being the thing I needed.",
  },
  {
    age: "University",
    title: "Building the thing I wished I'd had",
    body: "At university I built systems for myself, first as simple Notion templates. I shared them with friends, and it turned out plenty of other people needed the same scaffolding I did and had no idea where to start. That is the whole reason Romi exists. I had eight years and an obsession to work this out. Most people get neither.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      url: CANONICAL,
      isPartOf: { "@type": "WebSite", name: "Romi ADHD", url: SITE },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/about#josh`,
      name: "Josh Budd",
      jobTitle: "Founder & CEO",
      description:
        "Founder of Romi. Diagnosed with ADHD at 10 and has spent over eight years studying ADHD and building support systems for it.",
      image: `${SITE}/romi/team/josh.webp`,
      url: CANONICAL,
      sameAs: ["https://www.linkedin.com/in/joshua-budd/"],
      knowsAbout: [
        "ADHD",
        "Adult ADHD",
        "Executive function",
        "Neurodiversity",
        "ADHD productivity systems",
      ],
      worksFor: { "@type": "Organization", name: "Romi", url: SITE },
    },
    {
      "@type": "Organization",
      name: "Romi",
      legalName: "Neuro Notion App Limited",
      url: SITE,
      logo: `${SITE}/android-chrome-512x512.png`,
      founder: { "@id": `${SITE}/about#josh` },
      description:
        "Romi is a personal ADHD companion, built by people with ADHD alongside clinical experts in adult ADHD.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About", item: CANONICAL },
      ],
    },
  ],
};

export default function AboutPage() {
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

        <main className="bg-[var(--romi-color-bg)] pt-28 md:pt-32">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-[14px] text-[var(--romi-color-ink-muted)]">
                <li>
                  <Link href="/" className="hover:text-[var(--romi-color-primary)]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[var(--romi-color-ink)]">About</li>
              </ol>
            </nav>

            <div className="max-w-[760px]">
              <Badge character={{ body: 2, expression: "16-cheerful" }}>Our story</Badge>

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
                Romi was built by people who have ADHD
              </h1>

              <p className="mt-5 text-[1.09rem] leading-relaxed text-[var(--romi-color-ink-muted)]">
                Not researched from the outside. Lived, for a long time, before any of
                this was a company. Here is where it started.
              </p>
            </div>

            {/* Founder story */}
            <section className="mt-14 max-w-[820px]">
              <h2 className="text-[1.6rem] font-bold tracking-[-0.015em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]">
                Josh&apos;s story
              </h2>

              <ol className="mt-8 space-y-8">
                {STORY.map((step) => (
                  <li
                    key={step.title}
                    className="relative border-l-2 border-[var(--romi-color-border)] pl-6"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[var(--romi-color-primary)]"
                    />
                    <p className="text-[13px] font-bold uppercase tracking-[0.07em] text-[var(--romi-color-primary)]">
                      {step.age}
                    </p>
                    <h3 className="mt-1.5 text-[1.15rem] font-bold text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="mt-10 text-[16px] leading-relaxed text-[var(--romi-color-ink-muted)]">
                That is the reason Romi is built the way it is: to be the scaffolding,
                so that understanding your own brain is not a decade-long research
                project you have to run alone.{" "}
                <Link
                  href="/blog/my-adhd-journey-story"
                  className="font-semibold text-[var(--romi-color-primary)] hover:underline"
                >
                  The longer version of the story is here
                </Link>
                .
              </p>
            </section>
          </Container>

          {/* Team + mission, reused unchanged from the homepage */}
          <RomiMission badge="The team behind the mission" />

          {/* Guides */}
          <Container>
            <section className="pb-20">
              <h2 className="text-[1.35rem] font-bold tracking-[-0.01em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]">
                What we write about
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  ["Understanding ADHD in Adults", "/understanding-adhd"],
                  ["ADHD Productivity, Focus and Getting Things Done", "/adhd-productivity"],
                  ["ADHD, Emotions and Emotional Regulation", "/adhd-emotional-regulation"],
                  ["ADHD at Work", "/adhd-at-work"],
                  ["ADHD Daily Life: Sleep, Routines and Habits", "/adhd-daily-life"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-full border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-5 py-2.5 text-[14.5px] font-semibold text-[var(--romi-color-ink)] transition-colors hover:border-[var(--romi-color-primary)] hover:text-[var(--romi-color-primary)]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </section>
          </Container>
        </main>

        <RomiClose />
      </div>
    </>
  );
}
