import { RomiAwards, RomiClose, RomiDifference, RomiFaqs, RomiHeader, RomiHero, RomiHelps, RomiInAction, RomiMission, RomiPage, RomiRebrandBanner, RomiStats, RomiStruggles, RomiTestimonials } from "../src/romi";

export default function RomiNewLandingPage() {
  return (
    <RomiPage
      title="Romi"
      description="A calmer way to plan, remember, and move through the day."
    >
      <RomiHeader />
      <RomiHero />
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
      <RomiFaqs />
      <RomiClose />
      <RomiRebrandBanner />
    </RomiPage>
  );
}
