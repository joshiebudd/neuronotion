import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";

/*
 * Corporate stats — the "cost of doing nothing" narrative. One lead stat
 * (1 in 5), then two "box of people" panels: a cherry "When unsupported" box
 * and a mint "With Romi's support" box, each holding four big stat circles.
 * Every figure links out to its source (pulled from the one-pager). Deep band
 * (Band 2), tucks under the logo-carousel curve; the slim bridge section below
 * carries the curve into Band 3.
 */

const CHERRY_DEEP = "color-mix(in srgb, var(--romi-cherry), var(--romi-charcoal) 15%)";
const CHERRY_INK = "color-mix(in srgb, var(--romi-cherry), var(--romi-charcoal) 28%)";

// Source links, taken from the Romi corporate one-pager.
const SRC = {
  cost: "https://www.adhdcentre.co.uk/the-hidden-costs-of-ignoring-neurodiversity-in-the-workplace/",
  tribunal: "https://leglobal.law/2024/05/24/uk-disability-discrimination-compensation/",
  cipd: "https://www.cipd.org/uk/knowledge/guides/neurodiversity-work/",
  research: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9346305/",
  wef: "https://www.weforum.org/stories/2023/05/neurodiversity-employers-workers-jobs/",
  wellbeing: "https://www.thebraincharity.org.uk/inclusive-wellbeing/",
};

const unsupported = [
  { value: "22 days", label: "lost productivity per year, per employee", href: SRC.cost },
  { value: "#1", label: "commonly cited condition at employment tribunals", href: SRC.tribunal },
  { value: "50%", label: "actively want to leave", href: SRC.wef },
  { value: "200%", label: "more absent than neurotypical employees", href: SRC.research },
];

const supported = [
  { value: "+36%", label: "higher output than neurotypical employees", href: SRC.cipd },
  { value: "+90%", label: "better retention", href: SRC.wef },
  { value: "-60%", label: "less absenteeism", href: SRC.research },
  { value: "-87%", label: "less stress", href: SRC.wellbeing },
];

// Number sits inside the circle; the fuller description sits below it, so longer
// labels stay readable. The whole thing links out to the figure's source.
function StatCircle({ value, label, href, numColor }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center text-center">
      <span className="grid aspect-square w-full max-w-[128px] place-items-center rounded-full border border-[var(--romi-color-border)] bg-white shadow-[0_10px_24px_-16px_rgb(38_19_64_/_0.3)] transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_18px_32px_-16px_rgb(38_19_64_/_0.42)]">
        <span
          className="font-bold leading-none"
          style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.5rem,4.4vw,2rem)", color: numColor }}
        >
          {value}
        </span>
      </span>
      <span className="mt-3 max-w-[150px] leading-snug text-[var(--romi-color-ink-muted)]" style={{ fontSize: "var(--romi-text-sm)" }}>
        {label}
      </span>
    </a>
  );
}

export function CorpStats() {
  return (
    <section className="relative -mt-12 bg-[var(--romi-beige-deep)] pb-4 pt-24 md:-mt-16 md:pb-6 md:pt-32">
      <Container>
        <h2
          className="mx-auto max-w-[900px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "clamp(1.8rem, 6vw, var(--romi-display-md))",
            lineHeight: "clamp(2.2rem, 7.3vw, var(--romi-line-display-md))",
          }}
        >
          Neurodivergent people can make or break a company&apos;s performance.
        </h2>

        {/* Stat 1 — one purple line, held to a single line on wide screens */}
        <p
          className="mx-auto mt-9 max-w-[900px] text-center font-bold text-[var(--romi-color-primary)] xl:whitespace-nowrap"
          style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.3rem, 2.8vw, 1.85rem)", lineHeight: 1.15 }}
        >
          1 in 5 of your people are neurodivergent.
        </p>

        {/* Two boxes of people, each figure a link to its source */}
        <div className="mx-auto mt-12 grid max-w-[1000px] gap-6 md:grid-cols-2 md:gap-8">
          {/* When unsupported — the cost */}
          <CurvedCard
            className="flex flex-col p-6 md:p-8"
            style={{
              backgroundColor: "color-mix(in srgb, var(--romi-cherry) 12%, white)",
              borderColor: "color-mix(in srgb, var(--romi-cherry) 32%, transparent)",
            }}
          >
            <span
              className="mx-auto rounded-full px-4 py-1.5 text-sm font-bold"
              style={{
                backgroundColor: "color-mix(in srgb, var(--romi-cherry) 22%, white)",
                color: CHERRY_INK,
                fontFamily: "var(--romi-font-display)",
              }}
            >
              When unsupported
            </span>
            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6">
              {unsupported.map((s) => (
                <StatCircle key={s.value} {...s} numColor={CHERRY_DEEP} />
              ))}
            </div>
          </CurvedCard>

          {/* With Romi's support — the upside */}
          <CurvedCard
            className="flex flex-col p-6 md:p-8"
            style={{
              backgroundColor: "color-mix(in srgb, var(--romi-mint) 22%, white)",
              borderColor: "color-mix(in srgb, var(--romi-mint-deep) 30%, transparent)",
            }}
          >
            <span
              className="mx-auto rounded-full px-4 py-1.5 text-sm font-bold text-[var(--romi-mint-deep)]"
              style={{
                backgroundColor: "color-mix(in srgb, var(--romi-mint) 45%, white)",
                fontFamily: "var(--romi-font-display)",
              }}
            >
              With Romi&apos;s support
            </span>
            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6">
              {supported.map((s) => (
                <StatCircle key={s.value} {...s} numColor="var(--romi-mint-deep)" />
              ))}
            </div>
          </CurvedCard>
        </div>

      </Container>
    </section>
  );
}
