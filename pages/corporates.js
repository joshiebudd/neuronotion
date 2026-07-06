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
  RomiInAction,
  RomiLogos,
  RomiMission,
  RomiPage,
  RomiTestimonials,
} from "../src/romi";
import { PILOT_MAILTO } from "../src/romi/components/corporate/pricing-data";

/*
 * Romi for Work - the corporate page. Alternating light / deep cream bands,
 * each band's last section curving (rounded-b + shadow) over the next.
 *
 *   1 light: hero + logos                        (logos curves)
 *   2 deep:  stats + comparison bridge           (comparison curves)
 *   3 light: what-we-do + demo video             (video curves)
 *   4 deep:  team+mission + awards + testimonials (testimonials curves)
 *   5 light: business case + pricing + security + FAQs + footer
 */
export default function RomiForCorporatesPage() {
  return (
    <RomiPage
      title="Romi for Work - Support for Neurodivergent Employees"
      description="Happier, more productive, neurodiverse employees. Romi is the clinically backed AI companion that helps neurodivergent people function better and feel better."
      canonical="https://www.romiadhd.com/corporates"
    >
      <RomiHeader />

      {/* Band 1 - light */}
      <CorpHero />
      <RomiLogos curve badge="Supported by" />

      {/* Band 2 - deep */}
      <CorpStats />
      <CorpComparison />

      {/* Band 3 - light */}
      <CorpWhatWeDo />
      {/* Demo video - own instance so a separate corporate video can be dropped in
          later (swap posterDesktop / srcDesktop). Same player as the landing. */}
      <RomiInAction
        badgeLabel="See Romi in action"
        badgeCharacter={{ body: 6, expression: "17-blissful" }}
        sectionClassName="relative z-10 bg-[var(--romi-color-bg)] pt-8 pb-24 rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:pt-10 md:pb-32 md:rounded-b-[64px]"
      />

      {/* Band 4 - deep */}
      <RomiMission
        tone="deep"
        corporate
        badge="Built by the world's leading neurodivergent experts"
      />
      <section className="bg-[var(--romi-beige-deep)] pb-16 pt-2 md:pb-20">
        <RomiAwards />
      </section>
      <RomiTestimonials curve ctaLabel="Bring Romi to your team" ctaHref="#pricing" />

      {/* Band 5 - light */}
      <CorpFinances />
      <CorpPricing />
      <CorpSecurity />
      <CorpFaqs />
      <RomiClose
        titleLine1="Being neurodivergent is hard."
        titleLine2="Don't leave your staff to battle it alone."
        titleNoWrap={false}
        line1NoWrap
        titleClamp="clamp(1.9rem, 4vw, 3rem)"
        subtitle="Being neurodivergent at work is hard. With Romi, your people don't have to face it alone."
        footerTagline="The personal companion for neurodivergent minds."
        ctaLabel="Book your 1-month pilot"
        ctaHref={PILOT_MAILTO}
      />
    </RomiPage>
  );
}
