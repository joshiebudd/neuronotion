import { RomiAwards, RomiClose, RomiDifference, RomiFaqs, RomiHeader, RomiHero, RomiHelps, RomiInAction, RomiLogos, RomiMission, RomiPage, RomiPricing, RomiRebrandBanner, RomiStats, RomiStruggles, RomiTestimonials } from "../src/romi";

export default function RomiNewLandingPage() {
  return (
    <RomiPage
      title="Romi - Your Personal ADHD Companion"
      description="Romi is your personal ADHD companion. Honest, compassionate support that makes living with ADHD easier, walking alongside you at your pace."
      canonical="https://www.romiadhd.com/"
    >
      <RomiHeader />
      <RomiHero />
      <RomiLogos curve badge="Supported by" />
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
