import { Container } from "../layout/Container";

/*
 * The bridge line that closes the stats band: awareness training and
 * adjustments are good, but only Romi helps day to day. Deep band, carries the
 * curve down into Band 3. The old unsupported-vs-supported cards moved up into
 * CorpStats' stat circles, so this section is now just the closing statement.
 */
export function CorpComparison() {
  return (
    <section className="relative z-10 bg-[var(--romi-beige-deep)] pb-24 pt-2 rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:pb-32 md:pt-4 md:rounded-b-[64px]">
      <Container>
        <p
          className="mx-auto max-w-[820px] text-center font-semibold text-[var(--romi-color-ink)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "clamp(1.3rem, 5vw, var(--romi-display-xs))",
            lineHeight: "clamp(1.75rem, 6.6vw, var(--romi-line-display-xs))",
          }}
        >
          Awareness training is good. Reasonable adjustments are good. But none of it
          actually helps someone do better, day to day.{" "}
          <span className="text-[var(--romi-color-primary)]">That&apos;s what Romi is for.</span>
        </p>
      </Container>
    </section>
  );
}
