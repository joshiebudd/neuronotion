import { RomiClose, RomiDifference, RomiFaqs, RomiHeader, RomiHero, RomiHelps, RomiInAction, RomiLogos, RomiMission, RomiPage, RomiRebrandBanner, RomiShowcase, RomiStats, RomiStruggles, RomiTestimonials } from "../src/romi";

export default function RomiNewLandingPage() {
  return (
    <RomiPage
      title="Romi"
      description="A calmer way to plan, remember, and move through the day."
    >
      <RomiHeader />
      <RomiHero />
      <RomiShowcase />
      <RomiStruggles />
      <RomiHelps />
      <RomiInAction />
      <RomiStats />
      <RomiTestimonials />
      <RomiDifference />
      <RomiMission />
      <RomiLogos />
      <RomiFaqs />
      <RomiClose />
      <RomiRebrandBanner />
    </RomiPage>
  );
}
