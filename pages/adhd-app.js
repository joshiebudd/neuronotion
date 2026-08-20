import {
  AppHero,
  RomiAwards,
  RomiClose,
  RomiDifference,
  RomiFaqs,
  RomiHeader,
  RomiHelps,
  RomiInAction,
  RomiLogos,
  RomiMission,
  RomiPage,
  RomiPricing,
  RomiRebrandBanner,
  RomiStats,
  RomiStruggles,
  RomiTestimonials,
} from "../src/romi";
import { Container } from "../src/romi/components/layout/Container";

/*
 * Commercial page targeting "adhd app" (250/mo UK, KD3) as the head term,
 * per Josh's brief: reuse the homepage assets and sections exactly as they
 * are, only change the copy where it needs to target a different query.
 * Only the hero is forked (AppHero); everything below it is the same
 * component, same props, same order as the homepage. The one addition is
 * a short answer-first paragraph naming what makes Romi different from a
 * typical ADHD app, which also covers the "adhd app for adults" and
 * AI-for-ADHD phrasings in body copy rather than the H1, per the 19 Aug
 * keyword research (AI Chief of Staff repo,
 * assets/seo/keyword-research/FINDINGS-2026-08-19.md): "adhd app" carries
 * the volume today, the AI cluster is small but growing, "companion" as a
 * search term is dead.
 */
export default function AdhdAppPage() {
  return (
    <RomiPage
      title="Romi - The ADHD App for Adults | Built to Actually Stick"
      description="Romi is an AI-powered ADHD app for adults, built around how your brain works. Talk instead of tapping, and get support that actually adapts to you."
      canonical="https://www.romiadhd.com/adhd-app"
    >
      <RomiHeader />
      <AppHero />
      <RomiLogos curve badge="Supported by" />

      <section className="bg-[var(--romi-color-bg)] pb-10 pt-2 md:pb-14">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-[var(--romi-color-ink)]">
              What Makes Romi Different From Other ADHD Apps?
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-[1.09rem] leading-relaxed text-[var(--romi-color-ink-muted)]">
              Most ADHD apps for adults ask you to plan, log and tick things off, which is exactly the kind of admin ADHD brains struggle with most. Romi works the other way round: you talk, Romi listens, and the planning happens for you. Think of it as an AI ADHD assistant that adapts to your patterns, not a chatbot bolted onto a to-do list.
            </p>
          </div>
        </Container>
      </section>

      <RomiStruggles />
      <RomiHelps />
      <RomiInAction />
      <RomiStats />
      <RomiTestimonials />
      <RomiDifference />
      <RomiMission />
      <section className="bg-[var(--romi-beige)] pb-10 pt-12 md:pb-12 md:pt-14">
        <RomiAwards />
      </section>
      <RomiPricing />
      <RomiFaqs />
      <RomiClose />
      <RomiRebrandBanner />
    </RomiPage>
  );
}
