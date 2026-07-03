import {
  CorpComparison,
  CorpFaqs,
  CorpFinances,
  CorpHero,
  CorpPricing,
  CorpSecurity,
  CorpStats,
  CorpWhatWeDo,
  RomiAwards,
  RomiClose,
  RomiHeader,
  RomiLogos,
  RomiMission,
  RomiPage,
  RomiTestimonials,
} from "../src/romi";

/*
 * Romi for Work - the corporate page. Same design system, tokens and band
 * rhythm as the main landing: sections pair up on alternating light / deep
 * cream bands, each band curving down (rounded-b + shadow) over the next.
 *
 * Bands:
 *   light: hero + logos + stats          (stats curves)
 *   deep:  comparison + finances         (finances curves)
 *   light: awards + what-we-do           (what-we-do curves)
 *   deep:  team + testimonials           (testimonials curves)
 *   light: pricing + security + FAQs + footer
 */
export default function RomiForCorporatesPage() {
  return (
    <RomiPage
      title="Romi for Work"
      description="Happier, more productive, neurodiverse employees. Romi is the clinically backed AI companion that helps neurodivergent people function better and feel better."
    >
      <RomiHeader />

      {/* Band 1 - light */}
      <CorpHero />
      <RomiLogos />
      <CorpStats />

      {/* Band 2 - deep */}
      <CorpComparison />
      <CorpFinances />

      {/* Band 3 - light */}
      <section className="relative -mt-12 bg-[var(--romi-color-bg)] pb-10 pt-24 md:-mt-16 md:pb-12 md:pt-28">
        <RomiAwards />
      </section>
      <CorpWhatWeDo />

      {/* Band 4 - deep */}
      <RomiMission tone="deep" badge="Built by the world's leading neurodivergent experts" />
      <RomiTestimonials curve />

      {/* Band 5 - light */}
      <CorpPricing />
      <CorpSecurity />
      <CorpFaqs />
      <RomiClose
        titleLine1="Being neurodivergent is hard."
        titleLine2="Don't leave your staff to battle it alone."
        titleNoWrap={false}
      />
    </RomiPage>
  );
}
