import { Fragment, useState, useRef } from "react";
import {
  ArrowRight,
  X,
  CalendarCheck,
  Pill,
  ListChecks,
  HeartPulse,
  HeartHandshake,
  ClipboardCheck,
  Activity,
  PoundSterling,
  Check,
  Rocket,
  Package,
  Heart,
  Shield,
  Star,
  Phone,
  Zap,
  Users,
  Clock,
  TrendingUp,
  Database,
} from "lucide-react";

import { RomiPage, RomiHeader, RomiLogos, RomiInAction, RomiMission, RomiClose, Container, Button, CurvedCard, Badge } from "../src/romi";
import { FaqItem } from "../src/romi/components/marketing/RomiFaqs";
import { CLINIC_DISCOVERY_URL } from "../src/romi/components/clinic/clinic-data";

const CDN = "https://NeuroNotionPullZonw.b-cdn.net";
const gbp = (n) => "£" + n.toLocaleString("en-GB");

// Layered-card band helpers: a band curves over the next; the next tucks under.
// Bands get DESCENDING z-index (z-[6] down to z-[1], all below the sticky header
// at z-50) so each curve paints on top of the band below it.
const CURVE = "relative rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:rounded-b-[64px]";
const TUCK = "-mt-12 md:-mt-16";

/*
 * Romi for ADHD Clinics.
 *
 * Narrative: Romi is the most affordable and effective form of post-diagnosis
 * support aside from medication. Multi-modal support that works alongside the
 * clinic's existing services, answers the incoming RTC requirements, and wins
 * referrals through better care + better value.
 *
 * Built on the Romi design system with the landing/corporate layered-card band
 * rhythm (alternating cream backgrounds, each band curving over the next).
 */

/* ---------- Multi-modal support pillars (with "provides" badges) ---------- */
const MODES = [
  { icon: Pill, by: "You provide", byTone: "mint", title: "Medication", desc: "The clinical foundation you already provide." },
  { icon: ListChecks, by: "Romi provides", byTone: "lilac", title: "Practical support", desc: "Planning, focus and follow-through, every day." },
  { icon: HeartPulse, by: "Romi provides", byTone: "lilac", title: "Emotional support", desc: "Confidence, calm and self-understanding, every day." },
];

/* ---------- RTC changes: new requirements + how Romi answers them ---------- */
const RTC_REQUIREMENTS = [
  { icon: ClipboardCheck, title: "Provide non-pharma support" },
  { icon: Activity, title: "Monitor patient outcomes" },
  { icon: PoundSterling, title: "With a constantly tightening budget" },
];
const RTC_ANSWERS = [
  { title: "A medically-backed digital tool", desc: "Clinician-built, ADHD-specific support your patients actually engage with." },
  { title: "We capture the data for you", desc: "Hard-to-collect outcome data on medication adherence, sleep, mood and clinical functioning." },
  { title: "The most affordable option", desc: "The lowest-cost form of non-pharma support, unlimited across all your patients." },
];

/* ---------- Clinical outcomes (live NTU trial) ---------- */
const CLINIC_OUTCOMES = [
  { value: "32%", scale: "mCASS" },
  { value: "18%", scale: "ASRS" },
];

/* ---------- What Romi is ---------- */
const WHAT_IS_ROMI = [
  { icon: ListChecks, color: "color-mix(in srgb, var(--romi-ocean), var(--romi-charcoal) 20%)", bg: "color-mix(in srgb, var(--romi-ocean) 16%, white)", title: "Stay organised", desc: "Patients brain-dump by voice, and Romi turns the chaos into a clear plan." },
  { icon: Rocket, color: "var(--romi-color-primary)", bg: "var(--romi-purple-pale)", title: "Get things done", desc: "Big tasks broken into small, doable steps, with gentle nudges to follow through." },
  { icon: HeartPulse, color: "var(--romi-mint-deep)", bg: "color-mix(in srgb, var(--romi-mint) 30%, white)", title: "Stay regulated", desc: "In-the-moment emotional support to stay calm and focused across the day." },
];

/* ---------- Pricing data (base prices in GBP) ---------- */
const TIERS = [
  { id: "solo", name: "Solo Practitioner", clinicians: "1", clinicianLabel: "Clinician", priceGBP: 100, annualSavingGBP: 200, annualPriceGBP: 1100 },
  { id: "small", name: "Small Practice", clinicians: "2 - 5", clinicianLabel: "Clinicians", priceGBP: 250, annualSavingGBP: 500, annualPriceGBP: 2750 },
  { id: "growing", name: "Growing Clinic", clinicians: "5 - 15", clinicianLabel: "Clinicians", priceGBP: 500, annualSavingGBP: 1000, annualPriceGBP: 5500, popular: true },
  { id: "established", name: "Established Clinic", clinicians: "15 - 40", clinicianLabel: "Clinicians", priceGBP: 1500, annualSavingGBP: 3000, annualPriceGBP: 16500 },
  { id: "enterprise", name: "Enterprise", clinicians: "40+", clinicianLabel: "Clinicians", priceGBP: 4000, annualSavingGBP: 8000, annualPriceGBP: 44000, topPriority: true },
];

const COMPARISON_FEATURES = [
  { label: "Unlimited patient distribution", solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: "All pathways (RTC, insurance, private)", solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: "Unlimited patient access (no time limits)", solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: "Fully handled onboarding", solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: "Clinician training module (optional)", solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: "Patient monitoring", solo: false, small: false, growing: true, established: true, enterprise: true },
  { label: "Packaged data reports", solo: false, small: false, growing: true, established: true, enterprise: true },
  { label: "Priority support", solo: false, small: false, growing: true, established: true, enterprise: true },
  { label: "White labelling", solo: false, small: false, growing: false, established: true, enterprise: true },
  { label: "Direct line to Founder and CTO", solo: false, small: false, growing: false, established: true, enterprise: true },
  { label: "Top priority onboarding", solo: false, small: false, growing: false, established: false, enterprise: true },
];

const PRICING_BANNERS = [
  { icon: Package, iconColor: "var(--romi-color-primary)", title: "One Price, Unlimited Distribution", desc: "One flat fee covers unlimited patients across all pathways. No per-patient charges, no hidden costs, no surprises." },
  { icon: Heart, iconColor: "var(--romi-mint-deep)", title: "Two for the Price of One", desc: "Non-pharma support and patient outcome monitoring all packaged into one. Two tools for the price of one." },
  { icon: Shield, iconColor: "color-mix(in srgb, var(--romi-honey), var(--romi-charcoal) 25%)", title: "Low Risk. Pilot Pricing.", desc: "Month 1 is a paid pilot. Not happy with results or data after that month? Opt out. You only pay for the one month." },
];

const HOW_IT_WORKS = [
  { step: "1", title: "Book a Call", desc: "Speak with Josh to understand your clinic needs and choose the right tier.", icon: Phone },
  { step: "2", title: "We Set Everything Up", desc: "Our team works with yours to embed Romi. We handle the technical side completely.", icon: Zap },
  { step: "3", title: "Paid Pilot Month", desc: "Your first month is a paid pilot. If you are not happy with the results or data, opt out.", icon: Shield },
  { step: "4", title: "Distribute to Patients", desc: "Unlimited distribution to all patients across RTC, insurance, and private pathways.", icon: Users },
];

const KEY_DETAILS = [
  { icon: TrendingUp, tone: "mint", title: "Price locked forever", desc: "Your day-one rate never rises, however much you grow." },
  { icon: Users, tone: "indigo", title: "Unlimited access", desc: "Every patient, every pathway, for as long as you need." },
  { icon: Clock, tone: "honey", title: "Under an hour of setup", desc: "We handle it all. Clinicians barely lift a finger." },
  { icon: Star, tone: "purple", title: "First movers get priority", desc: "Top tiers get priority onboarding and a direct line to the founders." },
];

const KEY_TONES = {
  mint: { text: "var(--romi-mint-deep)", chip: "color-mix(in srgb, var(--romi-mint) 30%, white)" },
  indigo: { text: "var(--romi-indigo)", chip: "var(--romi-purple-pale)" },
  honey: { text: "color-mix(in srgb, var(--romi-honey), var(--romi-charcoal) 25%)", chip: "color-mix(in srgb, var(--romi-honey) 24%, white)" },
  purple: { text: "var(--romi-color-primary)", chip: "var(--romi-purple-pale)" },
};

const CLINIC_FAQS = [
  {
    question: "How does Romi work alongside the coaching or therapy we already offer?",
    answer:
      "Romi sits alongside your existing services, it doesn't replace them. Think of it as a daily layer of support between appointments. If you already offer coaching or CBT, Romi complements it and keeps patients engaged in between, so you add value without losing any of that revenue.",
  },
  {
    question: "Do I have to plug this into my other systems?",
    answer:
      "No deep integrations required. We don't replace your EHR or require complex technical setup. We simply provide you with clean CSV or Excel exports mapped to your specific reporting needs, including MHSDS-style structures where relevant. You get the data you need in formats that work with your existing workflows but the setup is completely minimal.",
  },
  {
    question: "What outcomes do you track for ADHD pathways?",
    answer:
      "We track the outcome data that matters: ASRS symptoms, emotional regulation, executive function, sleep hygiene, medication adherence, and daily functioning. Our framework aligns with the Mental Health Services Data Set (MHSDS), making it easy to feed into your existing reporting structures.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most clinics are live within 2 weeks. We handle the white-labelling setup, provide staff training materials, and give you templated patient onboarding flows. There's no IT project required on your end, just a decision to start offering better post-diagnosis support.",
  },
  {
    question: "Is Romi DTAC compliant?",
    answer:
      "We are actively working with support from MindTech and our clinical team to move towards full DTAC (Digital Technology Assessment Criteria) compliance. This is a core part of our roadmap and something we take very seriously as we scale across NHS and private clinic pathways.",
  },
];

const PRICING_FAQS = [
  { question: "What happens during the paid pilot month?", answer: "Month 1 is a paid pilot. You pay for that month as normal, and we get everything set up and running. If at the end of that month you are not happy with the results or data, you can opt out. You only pay for the one month. The remaining 12 months of the contract only kick in if you choose to continue." },
  { question: 'What does "price-locked" actually mean?', answer: `It means the price you sign up at is the price you keep, regardless of how much you grow. If you sign up on the 5-15 clinician tier at ${gbp(1000)}/month and you scale to 60 clinicians, your price stays at ${gbp(1000)}/month. We do not penalise growth.` },
  { question: "How does the annual prepay discount work?", answer: `If you pay the full annual subscription up front, we discount two months off the annual price. So your first 60 days are essentially free. For example, the Growing Clinic tier at ${gbp(1000)}/month would be ${gbp(11000)} for the year instead of ${gbp(13000)}.` },
  { question: "Is there a limit on how many patients can use Romi?", answer: "No. Every tier includes unlimited patient distribution across all pathways: Right to Choose, insurance, and private customers. Patients also get unlimited access for as long as they want." },
  { question: "How does this compare to the consumer price?", answer: `The consumer price for Romi is ${gbp(15)}/month per user. With clinic pricing, you get unlimited distribution to all patients for a flat monthly fee. Even on the Solo Practitioner tier at ${gbp(100)}/month, the savings are significant compared to individual patient subscriptions.` },
];

const ALL_FAQS = [...CLINIC_FAQS, ...PRICING_FAQS];

/* ---------- Founder story (hover card inside the booking modal) ---------- */
function FounderStory() {
  return (
    <div className="absolute bottom-full left-1/2 z-[120] mb-3 w-[300px] max-w-[85vw] -translate-x-1/2 pointer-events-none">
      <CurvedCard className="p-5 text-left shadow-[var(--romi-shadow-xl)]">
        <h4 className="mb-3 text-center font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.05rem" }}>
          Read more about the founder&apos;s story
        </h4>
        <div className="space-y-3 text-[var(--romi-color-ink-muted)]" style={{ fontSize: "var(--romi-text-sm)", lineHeight: "var(--romi-line-sm)" }}>
          <p>Hi, I&apos;m Josh, and I&apos;m diagnosed severe combined ADHD. By age 11 I&apos;d been expelled from 13 schools and discarded as a &quot;problem child&quot;.</p>
          <div className="flex justify-center py-1">
            <img
              src={`${CDN}/Pitchshot.jpg`}
              alt="Josh Budd"
              className="h-20 w-20 rounded-full border-2 border-[var(--romi-purple)] object-cover"
              onError={(e) => {
                e.target.src = "https://ui-avatars.com/api/?name=Josh+Budd&background=BF96FF&color=fff";
              }}
            />
          </div>
          <p>As an adult, I&apos;ve tried every productivity/life management system, app, and &quot;ADHD hack&quot; out there. Most were built by neurotypical minds for neurotypical brains. Some of those slapped an &quot;ADHD friendly&quot; label on there.</p>
          <p>This just didn&apos;t work for my ADHD brain, so I spent two years building my own (in true ADHD fashion 😂). Something that actually understands how we think, process information, and get things done.</p>
          <p className="mt-3 border-t border-[var(--romi-color-border)] pt-3 text-xs italic text-[var(--romi-color-ink-soft)]">
            We are all unique, but there are some things that 95% of us with ADHD struggle with, Romi tries to make managing those things 10x easier.
          </p>
        </div>
      </CurvedCard>
    </div>
  );
}

/* ---------- Booking modal (Learn more) ---------- */
function ClinicBookingModal({ isOpen, onClose }) {
  const [showFounderStory, setShowFounderStory] = useState(false);
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(38, 19, 64, 0.55)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      <CurvedCard className="relative w-full max-w-lg overflow-visible p-8 text-center shadow-[var(--romi-shadow-xl)]" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-[var(--romi-color-ink-muted)] transition-colors hover:bg-[var(--romi-color-surface-muted)] hover:text-[var(--romi-color-ink)]"
        >
          <X size={22} />
        </button>

        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
          <CalendarCheck size={30} className="text-[var(--romi-color-primary)]" />
        </div>

        <h3 className="mb-4 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.5rem", lineHeight: 1.2 }}>
          Learn more about bringing Romi to your clinic.
        </h3>

        <div className="relative mb-8 inline-block">
          <p className="text-[var(--romi-color-ink-muted)]" style={{ fontSize: "var(--romi-text-lg)", lineHeight: "var(--romi-line-lg)" }}>
            Speak with the{" "}
            <button
              type="button"
              onMouseEnter={() => setShowFounderStory(true)}
              onMouseLeave={() => setShowFounderStory(false)}
              className="relative cursor-pointer font-bold text-[var(--romi-color-primary)] underline decoration-2 underline-offset-4 transition-colors hover:text-[var(--romi-color-primary-strong)]"
            >
              founder of Romi
              {showFounderStory && <FounderStory />}
            </button>{" "}
            to see how you can provide better patient outcomes and become the clinic patients recommend.
          </p>
        </div>

        <Button as="a" href={CLINIC_DISCOVERY_URL} target="_blank" rel="noopener noreferrer" size="xxl" className="w-full text-lg">
          Book a Call
        </Button>

        <p className="mt-4 text-xs text-[var(--romi-color-ink-soft)]">Let&apos;s explore how this might fit into your clinic</p>
      </CurvedCard>
    </div>
  );
}

/* ---------- Section heading helper ---------- */
function SectionHeading({ children, className }) {
  return (
    <h2
      className={className}
      style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.7rem, 5.5vw, 2.6rem)", lineHeight: 1.1 }}
    >
      {children}
    </h2>
  );
}

/* ================================ PAGE ================================ */
export default function RomiForClinicsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAnnual, setShowAnnual] = useState(false);
  const [rtcChoice, setRtcChoice] = useState(null); // null | "yes" | "no"
  const rtcRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const chooseYes = () => {
    setRtcChoice("yes");
    requestAnimationFrame(() => {
      if (!rtcRef.current) return;
      import("animejs").then(({ animate, stagger }) => {
        animate(rtcRef.current.querySelectorAll("[data-rtc-item]"), {
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 460,
          delay: stagger(55),
          ease: "out(3)",
        });
      });
    });
  };

  const chooseNo = () => {
    setRtcChoice("no");
    setTimeout(() => {
      document.getElementById("outcomes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 700);
  };

  return (
    <RomiPage
      title="Romi for ADHD Clinics - Affordable, Effective Post-Diagnosis Support"
      description="Romi is the most affordable and effective form of post-diagnosis ADHD support aside from medication. Multi-modal support that works alongside your clinic, captures outcome data, and helps you win referrals."
      canonical="https://www.romiadhd.com/romiforclinics"
    >
      <RomiHeader />
      <ClinicBookingModal isOpen={isModalOpen} onClose={closeModal} />

      {/* ============ BAND 1 (light) — Hero + demo placeholder ============ */}
      <section className="overflow-hidden bg-[var(--romi-color-bg)] px-6 pb-10 pt-16 md:pb-12 md:pt-20">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--romi-color-border)] bg-white px-4 py-2 text-xs font-semibold text-[var(--romi-color-ink-muted)] shadow-[var(--romi-shadow-xs)]" style={{ fontFamily: "var(--romi-font-display)" }}>
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-[var(--romi-cherry)]" />
            Limited pilot spots remaining. Starting August 2026.
          </div>

          <h1 className="mb-6 text-3xl font-bold leading-[1.12] tracking-tight text-[var(--romi-color-ink)] sm:mb-8 sm:text-4xl md:text-6xl" style={{ fontFamily: "var(--romi-font-display)" }}>
            <span style={{ color: "var(--romi-purple)" }}>Affordable</span>, <span style={{ color: "var(--romi-purple)" }}>Effective</span>,
            <br className="hidden sm:block" /> Post-Diagnosis ADHD Support
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base font-medium leading-relaxed text-[var(--romi-color-ink-muted)] sm:mb-12 sm:text-lg md:text-xl">
            The multi-modal support proven to help ADHD patients thrive, for a fraction of the cost of coaching or CBT. And it works
            right alongside the care your clinic already provides.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <Button type="button" onClick={openModal} size="xxl" className="w-full text-lg sm:w-auto">
              Learn more
              <ArrowRight size={20} />
            </Button>
            <Button as="a" href="/" variant="secondary" size="xxl" className="w-full text-lg sm:w-auto">
              What is Romi?
            </Button>
          </div>
        </div>
      </section>

      {/* Demo — the same under-construction placeholder used on the landing page. Closes band 1. */}
      <RomiInAction sectionClassName={`${CURVE} z-[6] bg-[var(--romi-color-bg)] pt-6 pb-24 md:pt-8 md:pb-32`} />

      {/* ============ BAND 2 (deep) — Supported by + Why it works ============ */}
      <section className={`${TUCK} ${CURVE} z-[5] bg-[var(--romi-beige-deep)] pt-24 pb-20 md:pt-32 md:pb-28`}>
        {/* Supported-by carousel (full-bleed) + NHS */}
        <RomiLogos bare badge="Supported by" />
        <Container className="mt-9 flex justify-center md:mt-10">
          <CurvedCard className="inline-flex flex-col items-center gap-2 px-5 py-3 text-center sm:flex-row sm:gap-4 sm:rounded-full sm:px-8 sm:py-4 sm:text-left">
            <img src={`${CDN}/NHS.webp`} alt="NHS" className="h-7 w-auto object-contain sm:h-8" />
            <span className="text-xs font-medium text-[var(--romi-color-ink)] sm:border-l sm:border-[var(--romi-color-border)] sm:pl-4 sm:text-sm md:text-base">
              Trusted by various NHS Trusts to support adults with ADHD
            </span>
          </CurvedCard>
        </Container>

        {/* Why it works */}
        <Container className="mt-20 md:mt-28" style={{ "--romi-container": "1100px" }}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Badge tone="dark" character={{ body: 5, expression: "07-delighted" }}>Why it works</Badge>
            </div>
            <SectionHeading className="mb-6 font-bold text-[var(--romi-color-heading)]">Medication works better with support around it.</SectionHeading>
            <p className="text-lg leading-relaxed text-[var(--romi-color-ink-muted)]">
              The evidence is clear: people with ADHD function far better when their support is multi-modal, medication paired with
              practical and emotional support. The catch is that usually means expensive coaching or CBT. Romi delivers that support
              layer for a fraction of the cost.
            </p>
          </div>

          {/* Medication + Practical + Emotional */}
          <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row md:items-stretch md:gap-2">
            {MODES.map((m, i) => (
              <Fragment key={m.title}>
                <div className="flex flex-1 flex-col items-center">
                  <span
                    className="mb-3 rounded-full px-3.5 py-1.5 text-xs font-bold"
                    style={{
                      fontFamily: "var(--romi-font-display)",
                      backgroundColor: m.byTone === "mint" ? "color-mix(in srgb, var(--romi-mint) 32%, white)" : "var(--romi-purple-pale)",
                      color: m.byTone === "mint" ? "var(--romi-mint-deep)" : "var(--romi-color-primary)",
                    }}
                  >
                    {m.by}
                  </span>
                  <CurvedCard className="flex w-full flex-1 flex-col items-center p-7 text-center shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.25)]">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
                      <m.icon aria-hidden="true" className="h-6 w-6 text-[var(--romi-color-primary)]" />
                    </span>
                    <h3 className="mt-5 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.2rem" }}>{m.title}</h3>
                    <p className="mt-2.5 text-[var(--romi-color-ink-muted)]" style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}>{m.desc}</p>
                  </CurvedCard>
                </div>
                {i < MODES.length - 1 && (
                  <div className="flex shrink-0 flex-col items-center">
                    {/* invisible spacer matching the badge height so the + centres on the card */}
                    <span aria-hidden="true" className="mb-3 hidden px-3.5 py-1.5 text-xs md:invisible md:block">+</span>
                    <div className="flex items-center py-1 md:flex-1 md:py-0">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg font-bold text-[var(--romi-color-primary)] shadow-[var(--romi-shadow-sm)]">+</span>
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Works alongside coaching (one line) */}
          <div className="mx-auto mt-8 flex max-w-[860px] items-center justify-center gap-3 rounded-full border px-6 py-3 text-center" style={{ backgroundColor: "color-mix(in srgb, var(--romi-mint) 14%, white)", borderColor: "color-mix(in srgb, var(--romi-mint-deep) 25%, transparent)" }}>
            <HeartHandshake aria-hidden="true" className="hidden h-5 w-5 flex-shrink-0 text-[var(--romi-mint-deep)] sm:block" />
            <p className="text-[var(--romi-color-ink)]" style={{ fontSize: "var(--romi-text-md)" }}>
              <span className="font-bold">Already offer coaching or therapy?</span> Romi works really well alongside human support like coaching.
            </p>
          </div>
        </Container>
      </section>

      {/* ============ BAND 3 (light) — RTC changes (gated) + Outcomes ============ */}
      <section className={`${TUCK} ${CURVE} z-[4] bg-[var(--romi-color-bg)] pt-24 pb-20 md:pt-32 md:pb-28`}>
        <Container style={{ "--romi-container": "1180px" }}>
          {rtcChoice !== "yes" ? (
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex justify-center">
                <Badge character={{ body: 4, expression: "41-focused" }}>RTC changes</Badge>
              </div>
              <h2 className="mb-8 font-bold text-[var(--romi-color-heading)] md:whitespace-nowrap" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.6rem, 5vw, 2.4rem)", lineHeight: 1.1 }}>
                Are you a Right to Choose provider?
              </h2>
              {rtcChoice === null ? (
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <Button type="button" onClick={chooseYes} variant="secondary" size="xxl" className="w-full px-12 sm:w-auto">Yes</Button>
                  <Button type="button" onClick={chooseNo} variant="secondary" size="xxl" className="w-full px-12 sm:w-auto">No</Button>
                </div>
              ) : (
                <p className="romi-fade-up text-lg font-medium text-[var(--romi-color-ink-muted)]">There is a big opportunity for you here... keep reading.</p>
              )}
            </div>
          ) : (
            <div ref={rtcRef}>
              <div data-rtc-item className="mx-auto max-w-3xl text-center opacity-0">
                <div className="mb-5 flex justify-center">
                  <Badge character={{ body: 4, expression: "41-focused" }}>RTC changes</Badge>
                </div>
                <SectionHeading className="mb-5 font-bold text-[var(--romi-color-heading)]">The era of diagnose and discharge is ending.</SectionHeading>
                <p className="text-lg leading-relaxed text-[var(--romi-color-ink-muted)]">
                  Right to Choose providers used to just diagnose and discharge. Not anymore. Soon you&apos;ll be required to do more, and prove it.
                </p>
              </div>

              {/* New requirements */}
              <p data-rtc-item className="mt-14 text-center text-sm font-bold uppercase tracking-[0.12em] text-[var(--romi-color-ink-soft)] opacity-0" style={{ fontFamily: "var(--romi-font-display)" }}>
                New Right to Choose requirements:
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {RTC_REQUIREMENTS.map((r) => (
                  <CurvedCard key={r.title} data-rtc-item className="flex flex-col items-center p-6 text-center opacity-0">
                    <span className="grid h-12 w-12 place-items-center rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--romi-cherry) 15%, white)" }}>
                      <r.icon aria-hidden="true" className="h-6 w-6" style={{ color: "color-mix(in srgb, var(--romi-cherry), var(--romi-charcoal) 28%)" }} />
                    </span>
                    <h3 className="mt-4 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.1rem" }}>{r.title}</h3>
                  </CurvedCard>
                ))}
              </div>

              {/* Romi answers every one */}
              <p data-rtc-item className="mt-14 text-center font-bold text-[var(--romi-color-primary)] opacity-0" style={{ fontFamily: "var(--romi-font-display)", fontSize: "var(--romi-display-xs)", lineHeight: "var(--romi-line-display-xs)" }}>
                Romi answers every one.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {RTC_ANSWERS.map((a) => (
                  <CurvedCard
                    key={a.title}
                    data-rtc-item
                    className="flex flex-col items-center p-6 text-center opacity-0"
                    style={{ backgroundColor: "color-mix(in srgb, var(--romi-mint) 12%, white)", borderColor: "color-mix(in srgb, var(--romi-mint-deep) 24%, transparent)" }}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--romi-mint-deep)]">
                      <Check aria-hidden="true" className="h-5 w-5 text-white" strokeWidth={3} />
                    </span>
                    <h4 className="mt-4 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.1rem" }}>{a.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--romi-color-ink-muted)]">{a.desc}</p>
                  </CurvedCard>
                ))}
              </div>
            </div>
          )}
        </Container>

        {/* Outcomes */}
        <Container id="outcomes" className="mt-24 scroll-mt-24 md:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Badge character={{ body: 8, expression: "16-cheerful" }}>Proven outcomes</Badge>
            </div>
            <SectionHeading className="mb-4 font-bold text-[var(--romi-color-heading)]">Support your patients will actually feel.</SectionHeading>
            <p className="text-lg leading-relaxed text-[var(--romi-color-ink-muted)]">
              Clinically measured improvements on validated ADHD scales, in just two weeks.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[820px] gap-5 sm:grid-cols-2">
            {CLINIC_OUTCOMES.map((o) => (
              <CurvedCard key={o.scale} className="flex flex-col items-center p-8 text-center shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.25)] md:p-10">
                <span
                  className="mb-5 rounded-full px-4 py-1.5 text-xs font-bold"
                  style={{ fontFamily: "var(--romi-font-display)", backgroundColor: "color-mix(in srgb, var(--romi-mint) 32%, white)", color: "var(--romi-mint-deep)" }}
                >
                  in 2 weeks
                </span>
                <div className="font-bold text-[var(--romi-indigo)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(3rem, 12vw, 5rem)", lineHeight: 1 }}>
                  {o.value}
                </div>
                <p className="mt-3 font-semibold text-[var(--romi-color-ink)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.15rem" }}>
                  improvement in {o.scale}
                </p>
              </CurvedCard>
            ))}
          </div>

          {/* Trial disclaimer */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="flex h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[var(--romi-mint-deep)]" />
            <p className="text-sm text-[var(--romi-color-ink-soft)]">Live trial in progress with Nottingham Trent University.</p>
          </div>
        </Container>
      </section>

      {/* ============ BAND 4 (deep) — What is Romi + Bigger picture ============ */}
      <section className={`${TUCK} ${CURVE} z-[3] bg-[var(--romi-beige-deep)] pt-24 pb-20 md:pt-32 md:pb-28`}>
        {/* What is Romi */}
        <Container style={{ "--romi-container": "1160px" }}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Badge tone="dark" character={{ body: 10, expression: "20-winking" }}>What is Romi?</Badge>
            </div>
            <SectionHeading className="mb-6 font-bold text-[var(--romi-color-heading)]">A clinically-backed AI companion for ADHD.</SectionHeading>
            <p className="text-lg leading-relaxed text-[var(--romi-color-ink-muted)]">
              Romi is an app that gives your patients a clinically-backed, AI-powered personal companion, designed to help adults with
              ADHD function better and feel better.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {WHAT_IS_ROMI.map((f) => (
              <CurvedCard key={f.title} className="flex h-full flex-col p-7 shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.25)]">
                <span className="grid h-12 w-12 place-items-center rounded-[var(--romi-radius-md)]" style={{ backgroundColor: f.bg, color: f.color }}>
                  <f.icon aria-hidden="true" size={24} />
                </span>
                <h3 className="mt-5 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.2rem" }}>{f.title}</h3>
                <p className="mt-2.5 text-[var(--romi-color-ink-muted)]" style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}>{f.desc}</p>
              </CurvedCard>
            ))}
          </div>

          {/* Collecting data in the background */}
          <CurvedCard
            className="mt-5 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center md:p-7"
            style={{ backgroundColor: "color-mix(in srgb, var(--romi-indigo) 7%, white)", borderColor: "color-mix(in srgb, var(--romi-indigo) 20%, transparent)" }}
          >
            <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
              <Database aria-hidden="true" className="h-6 w-6 text-[var(--romi-indigo)]" />
            </span>
            <p className="text-[var(--romi-color-ink)]" style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}>
              <span className="font-bold">And all the while, in the background.</span> Every time a patient uses Romi, we&apos;re quietly
              collecting outcome data on them, thousands of data points building a clear picture of how they&apos;re doing, ready for
              your clinicians to see.
            </p>
          </CurvedCard>
        </Container>

        {/* Bigger picture */}
        <Container className="mt-24 md:mt-32" style={{ "--romi-container": "1000px" }}>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading className="mb-6 font-bold text-[var(--romi-color-heading)]">Referrals go to the clinic that does it better.</SectionHeading>
            <p className="text-lg leading-relaxed text-[var(--romi-color-ink-muted)]">
              As Right to Choose opens up, market share is up for grabs, and the clinics that win aren&apos;t the cheapest. They&apos;re
              the ones that visibly offer better care and better value.
            </p>
          </div>

          <CurvedCard className="mx-auto mt-10 max-w-[720px] p-8 text-center shadow-[0_24px_56px_-32px_rgb(38_19_64_/_0.3)] md:p-10">
            <p className="font-semibold text-[var(--romi-color-ink)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)", lineHeight: 1.3 }}>
              &ldquo;Where did you get your ADHD diagnosis?&rdquo;
            </p>
            <p className="mt-4 text-[var(--romi-color-ink-muted)]" style={{ fontSize: "var(--romi-text-lg)", lineHeight: "var(--romi-line-lg)" }}>
              You want the answer to be your clinic, followed by <span className="font-semibold text-[var(--romi-color-primary)]">&ldquo;and it was brilliant.&rdquo;</span>
            </p>
          </CurvedCard>
        </Container>
      </section>

      {/* ============ BAND 5 (light) — Team + Pricing ============ */}
      <RomiMission tone="light" />

      <section id="pricing" className={`${CURVE} z-[2] scroll-mt-24 bg-[var(--romi-color-bg)] pb-10 pt-4 md:pb-16 md:pt-6`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <Badge character={{ body: 6, expression: "17-blissful" }}>Clinic Pricing</Badge>
          </div>
          <SectionHeading className="mb-4 font-bold text-[var(--romi-color-heading)] sm:mb-6">
            The most <span className="text-[var(--romi-purple)]">affordable</span> non-pharma support.
          </SectionHeading>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-[var(--romi-color-ink-muted)] sm:text-lg">
            Tiered by team size. Locked in at your rate. Less than the annual cost of one hire.
          </p>

          <div className="relative mb-4 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!showAnnual ? "text-[var(--romi-color-ink)]" : "text-[var(--romi-color-ink-soft)]"}`}>Monthly</span>
            <button
              type="button"
              onClick={() => setShowAnnual(!showAnnual)}
              className={`relative h-7 w-14 flex-shrink-0 rounded-full transition-colors duration-300 ${showAnnual ? "bg-[var(--romi-color-primary)]" : "bg-[var(--romi-charcoal-40)]"}`}
              aria-label="Toggle annual pricing"
            >
              <div className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${showAnnual ? "translate-x-7" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-medium transition-colors ${showAnnual ? "text-[var(--romi-color-ink)]" : "text-[var(--romi-color-ink-soft)]"}`}>Annual</span>
            <div className="absolute left-[calc(50%+105px)] top-1/2 -translate-y-1/2">
              {showAnnual && (
                <span className="inline-block animate-pulse whitespace-nowrap rounded-full bg-[color-mix(in_srgb,var(--romi-mint)_35%,white)] px-2.5 py-1 text-xs font-bold text-[var(--romi-mint-deep)]">
                  Save 2 months
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Callout banners */}
        <Container className="pb-8 pt-8 sm:pb-12" style={{ "--romi-container": "1120px" }}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {PRICING_BANNERS.map((b) => (
              <CurvedCard key={b.title} className="p-5 text-center">
                <b.icon className="mx-auto mb-2 h-6 w-6" style={{ color: b.iconColor }} />
                <p className="mb-1 text-sm font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)" }}>{b.title}</p>
                <p className="text-xs leading-relaxed text-[var(--romi-color-ink-muted)]">{b.desc}</p>
              </CurvedCard>
            ))}
          </div>
        </Container>

        {/* Pricing comparison table */}
        <Container className="pb-12 sm:pb-16" style={{ "--romi-container": "1120px" }}>
          <div className="overflow-x-auto rounded-[var(--romi-radius-2xl)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)]">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[var(--romi-purple-pale)]">
                  <th className="w-[220px] p-5" />
                  {TIERS.map((tier) => {
                    const displayPriceGBP = showAnnual ? Math.round(tier.annualPriceGBP / 12) : tier.priceGBP;
                    return (
                      <th key={tier.id} className="relative p-5 text-center align-top">
                        {tier.popular && (
                          <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-b-lg px-2.5 py-0.5 text-[10px] font-bold text-white" style={{ backgroundImage: "var(--romi-gradient-purple-indigo)" }}>
                            Most Popular
                          </span>
                        )}
                        {tier.topPriority && (
                          <span className="absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-b-lg bg-[var(--romi-indigo)] px-2.5 py-0.5 text-[10px] font-bold text-white">
                            <Star className="h-2.5 w-2.5" /> Top Priority
                          </span>
                        )}
                        <p className="mb-0.5 mt-2 text-[10px] font-bold uppercase tracking-widest text-[var(--romi-color-primary)]">{tier.clinicians} {tier.clinicianLabel}</p>
                        <p className="mb-2 text-sm font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)" }}>{tier.name}</p>
                        <div>
                          <span className="text-2xl font-bold text-[var(--romi-indigo)] sm:text-3xl" style={{ fontFamily: "var(--romi-font-display)" }}>{gbp(displayPriceGBP)}</span>
                          <span className="text-xs text-[var(--romi-color-ink-muted)]">/mo</span>
                        </div>
                        {showAnnual ? (
                          <p className="mt-1 text-[10px] font-bold text-[var(--romi-mint-deep)]">{gbp(tier.annualPriceGBP)}/yr (save {gbp(tier.annualSavingGBP)})</p>
                        ) : (
                          <p className="mt-1 text-[10px] text-[var(--romi-color-ink-soft)]">{gbp(tier.priceGBP * 13)} over 13 months</p>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={row.label} className={`border-t border-[var(--romi-color-border)] ${i % 2 === 0 ? "bg-[var(--romi-beige)]" : "bg-white"}`}>
                    <td className="p-4 pl-5 text-sm font-medium text-[var(--romi-color-ink)]">{row.label}</td>
                    {["solo", "small", "growing", "established", "enterprise"].map((tierId) => (
                      <td key={tierId} className="p-4 text-center">
                        {row[tierId] ? (
                          <Check className="mx-auto h-6 w-6 text-[var(--romi-color-primary)]" strokeWidth={3} />
                        ) : (
                          <span className="text-xl text-[var(--romi-color-ink-soft)]">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t-2 border-[var(--romi-purple-40)] bg-[var(--romi-purple-pale)]">
                  <td colSpan={6} className="p-5 text-center">
                    <Button type="button" onClick={openModal} size="lg" className="px-10">Book a Call</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>

        {/* How it works */}
        <Container className="pb-12 sm:pb-16" style={{ "--romi-container": "900px" }}>
          <h2 className="mb-3 text-center font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.5rem, 5vw, 1.875rem)" }}>
            How It <span className="text-[var(--romi-purple)]">Works</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-[var(--romi-color-ink-muted)]">We handle everything. Literally less than an hour of work on your end.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item) => (
              <CurvedCard key={item.step} className="relative p-5">
                <div className="absolute -left-2 -top-2 grid h-7 w-7 place-items-center rounded-full text-white" style={{ backgroundImage: "var(--romi-gradient-purple-indigo)" }}>
                  <span className="text-xs font-bold">{item.step}</span>
                </div>
                <item.icon className="mb-3 mt-2 h-6 w-6 text-[var(--romi-color-primary)]" />
                <h4 className="mb-2 text-sm font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed text-[var(--romi-color-ink-muted)]">{item.desc}</p>
              </CurvedCard>
            ))}
          </div>
        </Container>

        {/* Key details */}
        <Container className="pb-4 sm:pb-6" style={{ "--romi-container": "980px" }}>
          <div className="grid gap-4 sm:grid-cols-2">
            {KEY_DETAILS.map((d) => {
              const tone = KEY_TONES[d.tone];
              return (
                <CurvedCard key={d.title} className="flex items-center gap-4 p-5">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl" style={{ backgroundColor: tone.chip }}>
                    <d.icon className="h-5 w-5" style={{ color: tone.text }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1rem" }}>{d.title}</h4>
                    <p className="mt-0.5 text-sm leading-snug text-[var(--romi-color-ink-muted)]">{d.desc}</p>
                  </div>
                </CurvedCard>
              );
            })}
          </div>
          <p className="mt-8 text-center text-xs text-[var(--romi-color-ink-soft)]">
            13-month contract with a paid pilot month. Your price is locked in forever.
          </p>
        </Container>
      </section>

      {/* ============ BAND 6 (deep) — FAQ ============ */}
      <section className={`${TUCK} ${CURVE} z-[1] bg-[var(--romi-beige-deep)] pt-24 pb-24 md:pt-32 md:pb-32`}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-4 flex justify-center">
              <Badge tone="dark" character={{ body: 3, expression: "03-loving" }}>FAQs</Badge>
            </div>
            <SectionHeading className="font-bold text-[var(--romi-color-heading)]">Common Questions</SectionHeading>
          </div>
          <div className="space-y-4">
            {ALL_FAQS.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ Close (CTA + footer) ============ */}
      <RomiClose
        titleLine1="Become the clinic"
        titleLine2="patients recommend"
        titleNoWrap={false}
        line1NoWrap
        titleClamp="clamp(1.9rem, 4vw, 3rem)"
        subtitle="Better care, better value, and the differentiation that wins you referrals. Bring Romi to your clinic."
        footerTagline="The personal companion for neurodivergent minds."
        ctaLabel="Book a call"
        bookCta
        bookUrl={CLINIC_DISCOVERY_URL}
      />
    </RomiPage>
  );
}
