import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  X,
  Frown,
  EyeOff,
  Banknote,
  Brain,
  Smile,
  Moon,
  FileText,
  Mic,
  HeartPulse,
  Zap,
  Search,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  CalendarCheck,
  Info,
  Lock,
  Check,
  Shield,
  Clock,
  Users,
  Phone,
  Star,
  Package,
  Heart,
} from "lucide-react";

import { RomiPage, RomiHeader, RomiLogos, RomiClose, Container, Button, CurvedCard, Badge } from "../src/romi";
import { FaqItem } from "../src/romi/components/marketing/RomiFaqs";
import { CLINIC_DISCOVERY_URL } from "../src/romi/components/clinic/clinic-data";
import { VideoPlayer } from "../components/VideoPlayer";
import { useCurrencyConversion } from "../hooks/useCurrencyConversion";

const CDN = "https://NeuroNotionPullZonw.b-cdn.net";

/*
 * Romi for ADHD Clinics — a straight RESKIN of the legacy /neuronotion-clinics
 * page + the /clinicpricing page, merged onto one page in the Romi design
 * system. Same copy, same layout, same functionality (founder-story modal,
 * advisor tooltips, outcome dashboard + £800 hover, monthly/annual pricing
 * table with live currency conversion, FAQ accordion, VSL). Only the skin
 * changes; product name Claudia -> Romi.
 */

/* ---------- Pricing data (base prices in GBP, ported verbatim) ---------- */
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
  { icon: TrendingUp, tone: "mint", title: "Your Price Never Goes Up", desc: "Your rate is locked in from day one. It does not get more expensive as you grow. If you sign up on the 5-15 tier and end up with 60 clinicians next month, you stay on your original price. We reward early adopters." },
  { icon: Users, tone: "indigo", title: "Unlimited Distribution, Unlimited Access", desc: "Distribute Romi to all patients across all pathways: Right to Choose, insurance, and private customers. Patients get unlimited access for as long as they want, so you can measure data on a patient for as long as you need to or are allowed to." },
  { icon: Clock, tone: "honey", title: "Less Than 1 Hour of Your Time", desc: "We handle everything. Our team works with yours to embed Romi into your workflows. Clinicians do not really need to get involved, but we can provide a simple training module if needed." },
  { icon: Star, tone: "purple", title: "Priority Access for Higher Tiers", desc: "With the new changes from the NHS, there is going to be a wave of clinics wanting to get involved. For the Established and Enterprise tiers, you get priority onboarding and a direct line to Josh (Founder) and Vlad (CTO). First movers get the best support." },
];

const KEY_TONES = {
  mint: { text: "var(--romi-mint-deep)", chip: "color-mix(in srgb, var(--romi-mint) 30%, white)" },
  indigo: { text: "var(--romi-indigo)", chip: "var(--romi-purple-pale)" },
  honey: { text: "color-mix(in srgb, var(--romi-honey), var(--romi-charcoal) 25%)", chip: "color-mix(in srgb, var(--romi-honey) 24%, white)" },
  purple: { text: "var(--romi-color-primary)", chip: "var(--romi-purple-pale)" },
};

/* Clinic FAQs (static). Pricing FAQs are built in-component (they use currency). */
const CLINIC_FAQS = [
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
    question: "Can we evidence intervention adherence (medication, coaching, strategies)?",
    answer:
      "Absolutely. Because our platform passively collects thousands of data points over several months of patient engagement, we can map longitudinal trends that show exactly what kind of impact other interventions are having. Whether it's medication titration, CBT sessions, or coaching, you get clear before/after comparisons that demonstrate intervention efficacy to commissioners and insurers.",
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
          Learn more about White Labelling Romi for your clinic.
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
            to see how you can provide better patient outcomes, and make more money doing it.
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

/* ---------- Advisor profile (tap/hover tooltip) ---------- */
function AffiliateProfile({ name, image, link, isLarge = false, bio = [], role = null, tooltipSide = "center" }) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setActive(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
    };
  }, []);

  const handleClick = (e) => {
    if (!active) {
      e.preventDefault();
      setActive(true);
    }
  };

  const tooltipPos =
    tooltipSide === "left"
      ? "left-0 sm:left-1/2 sm:-translate-x-1/2"
      : tooltipSide === "right"
        ? "right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2"
        : "left-1/2 -translate-x-1/2";

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex cursor-pointer flex-col items-center gap-1 sm:gap-3"
      onClick={handleClick}
    >
      <div
        className={`${isLarge ? "h-20 w-20 sm:h-40 sm:w-40" : "h-16 w-16 sm:h-32 sm:w-32"} relative overflow-hidden rounded-full border-2 bg-white p-1 shadow-[var(--romi-shadow-lg)] transition-all ${
          active ? "border-[var(--romi-purple)]" : "border-[var(--romi-color-border)] group-hover:border-[var(--romi-purple)]"
        }`}
      >
        <img src={image} alt={name} className="h-full w-full rounded-full object-cover" />
      </div>
      <div className="flex flex-col items-center gap-0.5 sm:gap-1">
        <span
          className={`max-w-[80px] text-center text-[10px] font-semibold leading-tight transition-colors sm:max-w-[160px] sm:text-base ${
            active ? "text-[var(--romi-color-ink)]" : "text-[var(--romi-color-ink)] group-hover:text-[var(--romi-color-primary)]"
          }`}
          style={{ fontFamily: "var(--romi-font-display)" }}
        >
          {name}
        </span>
        {role && <span className="text-center text-[9px] font-medium leading-tight text-[var(--romi-color-primary)] sm:text-xs">{role}</span>}
      </div>

      <div
        className={`absolute bottom-full mb-3 ${tooltipPos} pointer-events-none z-20 w-[190px] transition-all duration-300 sm:w-[280px] ${
          active ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
        }`}
      >
        <CurvedCard className="p-3 shadow-[var(--romi-shadow-xl)] sm:p-4">
          <ul className="space-y-1.5">
            {bio.map((item) => (
              <li key={item} className="flex items-start text-left text-[10px] leading-snug text-[var(--romi-color-ink-muted)] sm:text-xs">
                <span className="mr-1.5 flex-shrink-0 text-[var(--romi-color-primary)]">•</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </CurvedCard>
      </div>
    </a>
  );
}

/* ---------- Market-insight problem row ---------- */
function ProblemItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 rounded-[var(--romi-radius-lg)] p-4 transition-colors hover:bg-[var(--romi-color-surface-muted)]">
      <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-[var(--romi-radius-md)] bg-[var(--romi-purple-pale)]">{icon}</div>
      <div>
        <h3 className="mb-1 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.125rem" }}>
          {title}
        </h3>
        <p className="text-[var(--romi-color-ink-muted)]" style={{ lineHeight: "var(--romi-line-md)" }}>{desc}</p>
      </div>
    </div>
  );
}

/* ---------- Dashboard tile ---------- */
const TILE_TONES = {
  indigo: { text: "var(--romi-indigo)", chip: "color-mix(in srgb, var(--romi-indigo) 14%, white)" },
  mint: { text: "var(--romi-mint-deep)", chip: "color-mix(in srgb, var(--romi-mint) 34%, white)" },
  honey: { text: "color-mix(in srgb, var(--romi-honey), var(--romi-charcoal) 30%)", chip: "color-mix(in srgb, var(--romi-honey) 30%, white)" },
  ocean: { text: "color-mix(in srgb, var(--romi-ocean), var(--romi-charcoal) 20%)", chip: "color-mix(in srgb, var(--romi-ocean) 24%, white)" },
};

function DashboardTile({ icon, percentage, label, tone }) {
  const t = TILE_TONES[tone];
  return (
    <div className="rounded-[var(--romi-radius-lg)] border p-4 transition-transform hover:scale-105" style={{ backgroundColor: t.chip, borderColor: "color-mix(in srgb, " + t.text + " 22%, transparent)" }}>
      <div className="mb-2 flex items-center justify-between">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/70">{icon}</div>
        <TrendingUp size={16} style={{ color: t.text }} />
      </div>
      <div className="mb-1 font-bold" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.5rem", color: t.text }}>
        +{percentage}
      </div>
      <div className="text-xs font-medium leading-tight text-[var(--romi-color-ink-muted)]">{label}</div>
    </div>
  );
}

/* ---------- Product feature card ---------- */
function FeatureCard({ icon, title, desc, iconColor, iconBg }) {
  return (
    <CurvedCard className="flex h-full flex-col p-6 shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.25)] transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-[var(--romi-radius-md)]" style={{ backgroundColor: iconBg, color: iconColor }}>
        {icon}
      </div>
      <h3 className="mb-2 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.125rem" }}>
        {title}
      </h3>
      <p className="flex-grow text-[var(--romi-color-ink-muted)]" style={{ lineHeight: "var(--romi-line-md)" }}>{desc}</p>
    </CurvedCard>
  );
}

/* ================================ PAGE ================================ */
export default function RomiForClinicsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAnnual, setShowAnnual] = useState(false);
  const { currencySymbol, isLoading, currencyCode } = useCurrencyConversion();
  const [gbpToLocalRate, setGbpToLocalRate] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Live GBP -> local currency conversion (ported from the pricing page).
  useEffect(() => {
    if (isLoading || currencyCode === "GBP") return;
    let cancelled = false;
    async function fetchGbpRate() {
      try {
        const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=GBP&symbols=${currencyCode}`, { signal: AbortSignal.timeout(5000) });
        if (!response.ok) throw new Error("Failed to fetch GBP rate");
        const data = await response.json();
        const rate = data.rates?.[currencyCode];
        if (rate && !cancelled) setGbpToLocalRate(rate);
      } catch {
        if (!cancelled) setGbpToLocalRate(null);
      }
    }
    fetchGbpRate();
    return () => {
      cancelled = true;
    };
  }, [isLoading, currencyCode]);

  const formatClinicPrice = (gbpPrice) => {
    if (currencyCode === "GBP" || gbpToLocalRate === null) return `£${gbpPrice.toLocaleString()}`;
    const converted = Math.ceil(gbpPrice * gbpToLocalRate);
    return `${currencySymbol}${converted.toLocaleString()}`;
  };

  // Pricing FAQs use currency, so they're built here and merged with the clinic FAQs.
  const pricingFaqs = [
    { question: "What happens during the paid pilot month?", answer: "Month 1 is a paid pilot. You pay for that month as normal, and we get everything set up and running. If at the end of that month you are not happy with the results or data, you can opt out. You only pay for the one month. The remaining 12 months of the contract only kick in if you choose to continue." },
    { question: 'What does "price-locked" actually mean?', answer: `It means the price you sign up at is the price you keep, regardless of how much you grow. If you sign up on the 5-15 clinician tier at ${formatClinicPrice(1000)}/month and you scale to 60 clinicians, your price stays at ${formatClinicPrice(1000)}/month. We do not penalise growth.` },
    { question: "How does the annual prepay discount work?", answer: `If you pay the full annual subscription up front, we discount two months off the annual price. So your first 60 days are essentially free. For example, the Growing Clinic tier at ${formatClinicPrice(1000)}/month would be ${formatClinicPrice(11000)} for the year instead of ${formatClinicPrice(13000)}.` },
    { question: "How much work is required from our team?", answer: "Less than an hour. We handle everything on the technical side. We work with your team to embed Romi into your workflows. Clinicians do not really need to get involved at all, but we can provide a simple training module if needed." },
    { question: "Is there a limit on how many patients can use Romi?", answer: "No. Every tier includes unlimited patient distribution across all pathways: Right to Choose, insurance, and private customers. Patients also get unlimited access for as long as they want." },
    { question: "What kind of support do we get?", answer: "All tiers get email support. The Growing Clinic tier and above get priority support. Established Clinic and Enterprise tiers get a direct line to Josh (Founder) and Vlad (CTO). Higher tiers get priority onboarding and faster response times." },
    { question: "How does this compare to the consumer price?", answer: `The consumer price for Romi is ${formatClinicPrice(15)}/month per user. With clinic pricing, you get unlimited distribution to all patients for a flat monthly fee. Even on the Solo Practitioner tier at ${formatClinicPrice(100)}/month, the savings are significant compared to individual patient subscriptions.` },
  ];
  const allFaqs = [...CLINIC_FAQS, ...pricingFaqs];

  return (
    <RomiPage
      title="Romi for ADHD Clinics - Automated Patient Outcomes and Data"
      description="Romi captures what happens after patients get diagnosed, automatically. Outcome data on sleep, regulation, mood, medication adherence and daily functioning, packaged into reports you can use to win NHS and insurance contracts."
      canonical="https://www.romiadhd.com/romiforclinics"
    >
      <RomiHeader />
      <ClinicBookingModal isOpen={isModalOpen} onClose={closeModal} />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-[var(--romi-color-bg)] px-6 pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--romi-color-border)] bg-white px-4 py-2 text-xs font-semibold text-[var(--romi-color-ink-muted)] shadow-[var(--romi-shadow-xs)]" style={{ fontFamily: "var(--romi-font-display)" }}>
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-[var(--romi-cherry)]" />
            Limited pilot spots remaining. Starting April 2026.
          </div>

          <h1 className="mb-6 text-3xl font-bold leading-[1.12] tracking-tight text-[var(--romi-color-ink)] sm:mb-8 sm:text-4xl md:text-6xl" style={{ fontFamily: "var(--romi-font-display)" }}>
            Patient Outcome Data is{" "}
            <span className="hidden sm:inline"><br /></span>
            <span className="mr-3 text-[var(--romi-color-ink-soft)] line-through decoration-[var(--romi-cherry)] decoration-[4px]">Unavailable</span>
            <span style={{ backgroundImage: "var(--romi-gradient-purple-indigo)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Collected Automatically</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base font-medium leading-relaxed text-[var(--romi-color-ink-muted)] sm:mb-12 sm:text-lg md:text-xl">
            Romi captures what happens after patients get diagnosed, automatically. Data on sleep, regulation, mood, medication
            adherence, daily functioning - all packaged neatly into outcome reports you can use to win big NHS and Insurance contracts.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-16 sm:flex-row sm:gap-5">
            <Button type="button" onClick={openModal} size="xxl" className="w-full text-lg sm:w-auto">
              Learn more
              <ArrowRight size={20} />
            </Button>
            <Button as="a" href="/" variant="secondary" size="xxl" className="w-full text-lg sm:w-auto">
              What is Romi?
            </Button>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <VideoPlayer videoUrl={`${CDN}/How%20Claudia%20by%20Neuro%20Works.mp4`} title="Turn Support into Profit - Demo for Directors" />
            <div className="absolute -bottom-3 -right-2 flex animate-pulse items-center space-x-2 rounded-full bg-[var(--romi-mint)] px-3 py-2 text-[var(--romi-charcoal)] shadow-lg sm:-bottom-5 sm:-right-5">
              <svg className="h-4 w-4 rotate-[225deg]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold">Sound on!</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Social proof, advisors & NHS ---------- */}
      <section className="border-y border-[var(--romi-color-border)] bg-[var(--romi-beige-deep)] py-12">
        <Container>
          <div className="mb-8 sm:mb-14">
            <RomiLogos bare badge="Supported by" />
          </div>

          <div className="mb-8 text-center sm:mb-14">
            <div className="mb-5 flex justify-center sm:mb-8">
              <Badge tone="dark" character={{ body: 4, expression: "41-focused" }}>Advised by</Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:flex sm:items-end sm:justify-center sm:gap-12">
              <AffiliateProfile name="Dr. Tony Lloyd" image={`${CDN}/tony.webp`} link="https://www.linkedin.com/in/tony-l-ba67301/" role="Clinical Advisor" tooltipSide="left" bio={["&#35;1 ADHD Doctor in England", "Ex-CEO of ADHD Foundation", "Advisor to NHS, government & ADHD bodies."]} />
              <AffiliateProfile name="Dr. James Kustow" image={`${CDN}/jameskustow.webp`} link="https://www.thegrovepractice.com/profle/dr-james-kustow/" isLarge role="Clinical Lead" bio={["Medical Director @ The Grove Practice", "Founding member and former chair of UKAAN", "Lead trainer for UK clinicians", "Author of How to thrive with Adult ADHD"]} />
              <AffiliateProfile name="Prof. David Daley" image={`${CDN}/david%20(1).webp`} link="https://www.researchgate.net/profile/David-Daley-7" role="Clinical Advisor" tooltipSide="right" bio={["Expert in digital ADHD interventions", "Leading ADHD academic in Europe.", "Principal investigator on major ADHD trials."]} />
            </div>
          </div>

          <div className="flex justify-center">
            <CurvedCard className="inline-flex flex-col items-center gap-2 px-5 py-3 text-center sm:flex-row sm:gap-4 sm:rounded-full sm:px-8 sm:py-4 sm:text-left">
              <img src={`${CDN}/NHS.webp`} alt="NHS" className="h-7 w-auto object-contain sm:h-8" />
              <span className="text-xs font-medium text-[var(--romi-color-ink)] sm:border-l sm:border-[var(--romi-color-border)] sm:pl-4 sm:text-sm md:text-base">
                Trusted by various NHS Trusts to support adults with ADHD
              </span>
            </CurvedCard>
          </div>
        </Container>
      </section>

      {/* ---------- Market insight ---------- */}
      <section className="relative bg-[var(--romi-color-bg)] py-16 md:py-24">
        <Container style={{ "--romi-container": "1280px" }}>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="mb-6 font-bold leading-tight text-[var(--romi-color-heading)] sm:mb-8" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.6rem, 5vw, 2.25rem)" }}>
                The Era of &quot;Diagnose &amp; Discharge&quot; is Ending
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-[var(--romi-color-ink-muted)]">
                Right now you diagnose → prescribe → hope for the best.
                <br />
                <br />
                As of April 2026, NHS contracts are tighter. They want proof of non-pharma support and real data on patient outcomes as
                well. We provide both of those. At a fraction of the cost of anyone else.
              </p>
              <div className="space-y-6">
                <ProblemItem icon={<Frown className="text-[var(--romi-cherry)]" size={24} />} title="Patient Silence" desc="ADHD patients forget to report back. You&apos;re left guessing." />
                <ProblemItem icon={<EyeOff className="text-[var(--romi-indigo)]" size={24} />} title="No Outcome Data" desc="Commissioners and insurers are asking for evidence in 2026. You need data." />
                <ProblemItem icon={<Banknote className="text-[var(--romi-mint-deep)]" size={24} />} title="CBT too expensive" desc="Tight contract budgets mean support has to be affordable. CBT or coaching is not." />
              </div>
            </div>

            <div className="relative">
              <CurvedCard className="p-6 shadow-[0_30px_60px_-30px_rgb(38_19_64_/_0.35)] md:p-8">
                <div className="mb-6 flex items-center justify-between border-b border-[var(--romi-color-border)] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-[var(--romi-mint-deep)]" />
                    <span className="font-bold tracking-tight text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.125rem" }}>Since referral:</span>
                  </div>
                  <span className="rounded bg-[var(--romi-color-surface-muted)] px-2 py-1 text-xs font-medium text-[var(--romi-color-ink-soft)]">EXAMPLE DATA</span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <DashboardTile icon={<FileText size={20} style={{ color: "var(--romi-indigo)" }} />} percentage="35%" label="Improvement in ASRS symptoms" tone="indigo" />
                  <DashboardTile icon={<Smile size={20} style={{ color: "var(--romi-mint-deep)" }} />} percentage="24%" label="Improvement in Emotional Regulation" tone="mint" />
                  <DashboardTile icon={<Brain size={20} style={{ color: "color-mix(in srgb, var(--romi-honey), var(--romi-charcoal) 30%)" }} />} percentage="32%" label="Improvement in Executive Function" tone="honey" />
                  <DashboardTile icon={<Moon size={20} style={{ color: "color-mix(in srgb, var(--romi-ocean), var(--romi-charcoal) 20%)" }} />} percentage="32%" label="Improvement in Sleep hygiene" tone="ocean" />
                </div>

                <div className="group relative mt-8 border-t border-[var(--romi-color-border)] pt-6 text-center">
                  <p className="text-lg font-medium text-[var(--romi-color-ink)]">
                    Without this data, you&apos;re losing{" "}
                    <span className="cursor-help border-b-2 border-dashed border-[var(--romi-cherry)] font-bold text-[var(--romi-cherry)]">£800/patient</span>
                  </p>
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-[85vw] max-w-[288px] -translate-x-1/2 text-left opacity-0 transition-all duration-300 group-hover:opacity-100 sm:w-72">
                    <CurvedCard className="p-4 text-xs leading-relaxed text-[var(--romi-color-ink-muted)] shadow-[var(--romi-shadow-xl)]">
                      <div className="mb-2 flex items-center gap-2 font-semibold text-[var(--romi-color-ink)]">
                        <Info size={14} className="text-[var(--romi-color-primary)]" /> Why £800?
                      </div>
                      Each patient&apos;s data can be used to prove positive patient outcomes and thus, be granted an additional patient&apos;s diagnosis.
                    </CurvedCard>
                  </div>
                </div>
              </CurvedCard>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-[var(--romi-color-ink)]">
                <Lock size={13} className="text-[var(--romi-indigo)]" />
                <span>Fully GDPR compliant. All patient data is encrypted and aggregated.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- What if ---------- */}
      <section className="border-y border-[var(--romi-color-border)] bg-[var(--romi-beige-deep)] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-bold text-[var(--romi-color-heading)] sm:mb-8" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.4rem, 4.5vw, 1.875rem)" }}>
            What if you could:
          </h2>
          <div className="grid gap-6 text-left sm:grid-cols-2">
            {[
              "Actually support patients after diagnosis without adding clinical hours",
              "See exactly how positive your support is on their sleep, mood, daily functioning, adherence",
              "Generate Outcome Reports automatically, ready for commissioners and insurers",
              "And unlock a recurring revenue model doing ALL of that",
            ].map((item) => (
              <CurvedCard key={item} className="flex gap-4 p-6">
                <div className="h-fit rounded-lg bg-[color-mix(in_srgb,var(--romi-mint)_30%,white)] p-2">
                  <CheckCircle2 className="text-[var(--romi-mint-deep)]" size={20} />
                </div>
                <p className="text-[var(--romi-color-ink)]">{item}</p>
              </CurvedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- The Automated Patient Retention & Outcome Platform ---------- */}
      <section id="benefits" className="relative bg-[var(--romi-color-bg)] py-10 md:py-24">
        <Container style={{ "--romi-container": "1280px" }}>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
            <h2 className="mb-4 font-bold text-[var(--romi-color-heading)] sm:mb-6" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.7rem, 5.5vw, 3rem)" }}>
              The Automated Patient Retention &amp; Outcome Platform
            </h2>
            <p className="text-xl font-medium text-[var(--romi-color-ink-muted)]">
              Romi isn&apos;t just an app. It&apos;s a white-label infrastructure that turns post-diagnosis support from a cost center into a revenue generator.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 1, title: "Improves patient outcomes", desc: "End-to-end support that helps patients improve self-management and regulation." },
              { n: 2, title: "Captures the realtime data", desc: "Automatically collects patient outcomes and intervention adherence data." },
              { n: 3, title: "Packages and reports it", desc: "Generates outcome reports ready for commissioners and insurers." },
              { n: 4, title: "Grows your revenue in 2 ways", desc: "Unlock recurring revenue while winning bigger contracts with proven outcomes." },
            ].map((step) => (
              <CurvedCard key={step.n} className="flex h-full flex-col items-center p-5 text-center shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.25)] transition-transform hover:scale-[1.02] sm:p-8">
                <div className="mb-6 grid h-20 w-20 place-items-center rounded-full text-white shadow-[var(--romi-shadow-md)]" style={{ backgroundImage: "var(--romi-gradient-purple-indigo)", fontFamily: "var(--romi-font-display)", fontSize: "1.875rem", fontWeight: 700 }}>
                  {step.n}
                </div>
                <h3 className="mb-3 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.25rem" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--romi-color-ink-muted)]">{step.desc}</p>
              </CurvedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Product features ---------- */}
      <section id="product" className="bg-[var(--romi-beige-deep)] py-10 md:py-24">
        <Container style={{ "--romi-container": "1280px" }}>
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-4 flex justify-center">
              <Badge tone="dark" character={{ body: 8, expression: "16-cheerful" }}>The Product</Badge>
            </div>
            <h2 className="font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.6rem, 5vw, 2.25rem)" }}>
              Engineered specifically for ADHD. So it actually works…
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard iconColor="var(--romi-indigo)" iconBg="var(--romi-purple-pale)" icon={<Mic size={24} />} title="No Typing. Just Talk." desc="Patients speak. AI structures the chaos. Friction reduced to zero." />
            <FeatureCard iconColor="var(--romi-rhubarb)" iconBg="color-mix(in srgb, var(--romi-rhubarb) 18%, white)" icon={<HeartPulse size={24} />} title="Built on ADHD brains" desc="Designed around real ADHD experiences, making it the first app that actually sticks for many." />
            <FeatureCard iconColor="color-mix(in srgb, var(--romi-honey), var(--romi-charcoal) 25%)" iconBg="color-mix(in srgb, var(--romi-honey) 22%, white)" icon={<Zap size={24} />} title="Actionable Steps" desc="AI breaks daunting projects like &apos;Clean house&apos; into micro-steps, overcoming ADHD paralysis." />
            <FeatureCard iconColor="color-mix(in srgb, var(--romi-ocean), var(--romi-charcoal) 20%)" iconBg="color-mix(in srgb, var(--romi-ocean) 18%, white)" icon={<Brain size={24} />} title="Learns about you" desc="Romi gets smarter over time, adapting its support to help you live a better life." />
            <FeatureCard iconColor="var(--romi-cherry)" iconBg="color-mix(in srgb, var(--romi-cherry) 15%, white)" icon={<Search size={24} />} title="Identify patterns" desc="AI spots patterns in moods and energy, helping you understand what helps and what hinders." />
            <FeatureCard iconColor="var(--romi-mint-deep)" iconBg="color-mix(in srgb, var(--romi-mint) 30%, white)" icon={<Lightbulb size={24} />} title="Learn while doing" desc="Get bite-sized psychoeducation exactly when you need it. Learn by doing, not just reading." />
          </div>
        </Container>
      </section>

      {/* ================= PRICING (reskinned from /clinicpricing) ================= */}
      <section id="pricing" className="scroll-mt-24 bg-[var(--romi-color-bg)] pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <Badge character={{ body: 10, expression: "20-winking" }}>Clinic Pricing</Badge>
          </div>
          <h2 className="mb-4 font-bold text-[var(--romi-color-heading)] sm:mb-6" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.8rem, 6vw, 3rem)" }}>
            Simple, Transparent <span className="text-[var(--romi-purple)]">Pricing</span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-[var(--romi-color-ink-muted)] sm:text-lg">
            Tiered by team size. Locked in at your rate. Less than the annual cost of one hire.
          </p>

          {/* Monthly / Annual toggle */}
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
                          <span className={`text-2xl font-bold text-[var(--romi-indigo)] transition-opacity duration-300 sm:text-3xl ${isLoading ? "opacity-0" : "opacity-100"}`} style={{ fontFamily: "var(--romi-font-display)" }}>
                            {formatClinicPrice(displayPriceGBP)}
                          </span>
                          <span className="text-xs text-[var(--romi-color-ink-muted)]">/mo</span>
                        </div>
                        {showAnnual ? (
                          <p className={`mt-1 text-[10px] font-bold text-[var(--romi-mint-deep)] transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                            {formatClinicPrice(tier.annualPriceGBP)}/yr (save {formatClinicPrice(tier.annualSavingGBP)})
                          </p>
                        ) : (
                          <p className={`mt-1 text-[10px] text-[var(--romi-color-ink-soft)] transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                            {formatClinicPrice(tier.priceGBP * 13)} over 13 months
                          </p>
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

        {/* Cost savings callout */}
        <Container className="pb-12 sm:pb-16" style={{ "--romi-container": "900px" }}>
          <CurvedCard className="p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-4">
              <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--romi-mint)_30%,white)]">
                <TrendingUp className="h-5 w-5 text-[var(--romi-mint-deep)]" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.25rem" }}>The Cost Savings Are Enormous</h3>
                <p className="text-sm leading-relaxed text-[var(--romi-color-ink-muted)]">
                  The consumer price for Romi is <span className="font-bold text-[var(--romi-color-ink)]">{formatClinicPrice(15)}/month per user</span>. Even on the Solo Practitioner tier at {formatClinicPrice(100)}/month, you are distributing unlimited access to every single patient across all your pathways. That is a fraction of what it would cost if each patient subscribed individually.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: formatClinicPrice(15), label: "Consumer price per patient/month", color: "var(--romi-indigo)" },
                { value: "Unlimited", label: "Patients included at every tier", color: "var(--romi-mint-deep)" },
                { value: "<1 clinician", label: "Less than the annual cost of one hire", color: "color-mix(in srgb, var(--romi-honey), var(--romi-charcoal) 25%)" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-[var(--romi-color-surface-muted)] p-4 text-center">
                  <p className="font-bold" style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.5rem", color: s.color }}>{s.value}</p>
                  <p className="mt-1 text-xs text-[var(--romi-color-ink-muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </CurvedCard>
        </Container>

        {/* Annual prepay callout */}
        <Container className="pb-12 sm:pb-16" style={{ "--romi-container": "900px" }}>
          <div className="relative overflow-hidden rounded-[var(--romi-radius-2xl)] border border-[var(--romi-purple-40)] bg-[var(--romi-gradient-band)] p-6 text-center sm:p-8">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg bg-[var(--romi-mint-deep)] px-4 py-1 text-xs font-bold text-white">Save 2 Months</span>
            <h3 className="mb-3 mt-6 font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.25rem, 4vw, 1.5rem)" }}>Pay Annually and Get 2 Months Free</h3>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-[var(--romi-color-ink-muted)]">
              If you pay the full annual subscription up front, we discount two months off the annual price. That means your first 60 days are essentially free. Toggle to &quot;Annual&quot; above to see the discounted rates.
            </p>
            <button
              type="button"
              onClick={() => setShowAnnual(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--romi-mint-deep)]/30 bg-[color-mix(in_srgb,var(--romi-mint)_30%,white)] px-6 py-2.5 text-sm font-bold text-[var(--romi-mint-deep)] transition-all hover:bg-[color-mix(in_srgb,var(--romi-mint)_45%,white)]"
            >
              <Check className="h-4 w-4" />
              {showAnnual ? "Annual pricing active" : "Switch to annual pricing"}
            </button>
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
        <Container className="pb-6 sm:pb-10" style={{ "--romi-container": "900px" }}>
          <div className="space-y-4">
            {KEY_DETAILS.map((d) => {
              const tone = KEY_TONES[d.tone];
              return (
                <CurvedCard key={d.title} className="flex items-start gap-4 p-5">
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl" style={{ backgroundColor: tone.chip }}>
                    <d.icon className="h-5 w-5" style={{ color: tone.text }} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)" }}>{d.title}</h4>
                    <p className="text-xs leading-relaxed text-[var(--romi-color-ink-muted)]">{d.desc}</p>
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

      {/* ---------- FAQ (clinic + pricing, merged) ---------- */}
      <section className="bg-[var(--romi-beige-deep)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-4 flex justify-center">
              <Badge tone="dark" character={{ body: 2, expression: "01-laughing" }}>FAQs</Badge>
            </div>
            <h2 className="font-bold text-[var(--romi-color-heading)]" style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(1.6rem, 5vw, 2.25rem)" }}>
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {allFaqs.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Close (Win Contracts CTA + footer) ---------- */}
      <RomiClose
        titleLine1="Win Contracts with"
        titleLine2="Better Data"
        titleNoWrap={false}
        line1NoWrap
        titleClamp="clamp(1.9rem, 4vw, 3rem)"
        subtitle="RTC and insurers want better patient support and proof of outcomes. Be the first to give them this proof, not promises."
        footerTagline="The personal companion for neurodivergent minds."
        ctaLabel="Learn More"
        bookCta
        bookUrl={CLINIC_DISCOVERY_URL}
      />
    </RomiPage>
  );
}
