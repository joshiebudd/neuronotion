import { useState } from "react";
import {
  Ban,
  Building2,
  Clock,
  Cpu,
  Database,
  Download,
  Eye,
  Hand,
  Key,
  Lock,
  Package,
  Pencil,
  Share2,
  ShieldCheck,
  Stethoscope,
  Trash2,
  User,
} from "lucide-react";
import {
  Container,
  CurvedCard,
  RomiClose,
  RomiHeader,
  RomiPage,
} from "../src/romi";
import { cn } from "../src/romi/lib/cn";

/*
 * Data Journey Map - the public page prospects' security, IT and compliance
 * teams are sent to. Rebuilt Aug 2026 onto the Romi design system (was a
 * standalone dark-mode page with inline styles and the old Neuro Notion logo).
 *
 * Banding follows corporates.js - alternating light / deep cream, each band's
 * last section curving over the next:
 *   1 light: hero + audience toggle + controller statement   (curves)
 *   2 deep:  the six journey stages                          (curves)
 *   3 light: third-party processors + rights + certs + footer
 *
 * The audience toggle (individual / clinic / employer) drives the controller
 * relationship, the legal basis for health data, and which processors are in
 * scope - employer and clinic deployments never touch marketing email,
 * referrals or consumer payments.
 */

const CURVE =
  "relative z-10 rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:rounded-b-[64px]";
const TUCK = "relative -mt-12 pt-24 md:-mt-16 md:pt-32";

const AUDIENCES = [
  { id: "individual", label: "Individual", icon: User },
  { id: "clinic", label: "Clinic patient", icon: Stethoscope },
  { id: "employer", label: "Employee", icon: Building2 },
];

const CONTROLLER = {
  individual: {
    title: "We are the data controller, and you stay in control.",
    body: "Neuro Notion App Limited is the data controller for your personal data. You sign up directly, you consent explicitly, and you can export or erase everything at any time.",
    basis: "Art. 6(1)(b) contractual necessity + Art. 9(2)(a) explicit consent",
  },
  clinic: {
    title: "Your clinic is the data controller. We are the processor.",
    body: "Where Romi is provided through a healthcare provider, that provider is the data controller and Neuro Notion App Limited acts as processor under a written Article 28 agreement. Aggregate outcome reporting goes back to the clinic; individual conversations do not.",
    basis: "Art. 6(1)(b) contractual necessity + Art. 9(2)(h) healthcare provision",
  },
  employer: {
    title: "Your employer never becomes the controller of your data.",
    body: "Neuro Notion App Limited is the data controller for your personal data, not your employer. Employers receive anonymised, aggregated reporting only, subject to minimum cohort sizes. No individual conversations, moods, tasks or usage data are ever visible to them.",
    basis: "Art. 6(1)(b) contractual necessity + Art. 9(2)(a) explicit consent",
  },
};

const STAGES = [
  {
    id: "collection",
    title: "Collection",
    icon: Download,
    summary: "Data enters the system",
    elements: [
      { name: "Email address", retention: "Account lifetime" },
      { name: "Display name", retention: "Account lifetime" },
      {
        name: "Clinic reference number",
        retention: "Account lifetime",
        only: "clinic",
      },
      { name: "Device information", retention: "24 months" },
      { name: "IP address", retention: "Anonymised" },
    ],
    safeguards: [
      "TLS 1.2+ in transit",
      "Explicit consent captured at sign-up",
      "Data minimisation by default",
    ],
  },
  {
    id: "processing",
    title: "Processing",
    icon: Cpu,
    summary: "Transformation and use",
    elements: [
      { name: "Tasks and routines", retention: "Active account" },
      { name: "Journal entries", retention: "Active account" },
      { name: "Mood check-ins", retention: "Active account" },
      { name: "Voice transcriptions", retention: "Transient" },
      { name: "Progress metrics", retention: "Active account" },
    ],
    safeguards: [
      "AES-256 at rest",
      "Row-level security",
      "Never used to train AI models",
    ],
  },
  {
    id: "storage",
    title: "Storage",
    icon: Database,
    summary: "Secure persistence",
    elements: [
      { name: "Primary database", retention: "UK/EEA (Supabase)" },
      { name: "Encrypted backups", retention: "UK/EEA" },
      { name: "Anonymised analytics", retention: "PostHog" },
    ],
    safeguards: [
      "SOC 2 Type II certified infrastructure",
      "Automated encrypted backups",
      "Least-privilege production access",
    ],
  },
  {
    id: "sharing",
    title: "Sharing",
    icon: Share2,
    summary: "Controlled processor access",
    elements: [
      { name: "Processor access", retention: "Article 28 agreements" },
      {
        name: "Aggregate clinical reporting",
        retention: "To your clinic only",
        only: "clinic",
      },
      {
        name: "Aggregate workforce reporting",
        retention: "Anonymised, minimum cohort size",
        only: "employer",
      },
      { name: "Health data", retention: "Never sold, rented or traded" },
    ],
    safeguards: [
      "UK IDTA / Addendum and SCCs on all transfers",
      "No data monetisation, ever",
      "No sharing with insurers or advertisers",
    ],
  },
  {
    id: "retention",
    title: "Retention",
    icon: Clock,
    summary: "Time-limited storage",
    elements: [
      { name: "Active account data", retention: "Life of the account" },
      { name: "Technical logs", retention: "24 months" },
      { name: "Billing records", retention: "As required by law" },
    ],
    safeguards: [
      "Storage limitation under Art. 5(1)(e)",
      "Retention reviewed annually",
      "Backups expire on a rolling schedule",
    ],
  },
  {
    id: "deletion",
    title: "Deletion",
    icon: Trash2,
    summary: "Secure destruction",
    elements: [
      { name: "Account deletion", retention: "Self-service, in app" },
      { name: "Processor propagation", retention: "Across all processors" },
      { name: "Backup purge", retention: "On the next backup cycle" },
    ],
    safeguards: [
      "Right to erasure under Art. 17",
      "Confirmation issued on completion",
      "No shadow copies retained",
    ],
  },
];

// `audiences` omitted means the processor is in scope for every deployment.
const PROCESSORS = [
  {
    name: "Supabase",
    role: "Primary database and authentication",
    location: "UK/EEA",
    safeguards: "SOC 2 Type II, AES-256 at rest",
  },
  {
    name: "Google Cloud",
    role: "Cloud infrastructure and identity",
    location: "EU/UK",
    safeguards: "ISO 27001, SOC 2",
  },
  {
    name: "Vercel",
    role: "Web application hosting",
    location: "USA/EU",
    safeguards: "SOC 2 Type II, SCCs",
  },
  {
    name: "Cloudflare",
    role: "CDN, DDoS and edge security",
    location: "USA/EU",
    safeguards: "ISO 27001, SOC 2",
  },
  {
    name: "OpenAI",
    role: "Language model (API)",
    location: "USA",
    safeguards: "No training on API data, SCCs",
  },
  {
    name: "Anthropic",
    role: "Language model (API)",
    location: "USA",
    safeguards: "No training on API data, SCCs",
  },
  {
    name: "Vapi",
    role: "Voice call orchestration",
    location: "Transient",
    safeguards: "Ephemeral processing, no audio storage",
  },
  {
    name: "Deepgram",
    role: "Speech-to-text",
    location: "USA",
    safeguards: "SOC 2 Type II, SCCs",
  },
  {
    name: "ElevenLabs",
    role: "Voice synthesis",
    location: "USA/EU",
    safeguards: "GDPR, SCCs",
  },
  {
    name: "Mem0",
    role: "AI memory layer",
    location: "USA",
    safeguards: "GDPR, SCCs",
  },
  {
    name: "PostHog",
    role: "Product analytics",
    location: "USA/EU",
    safeguards: "Anonymised events only",
  },
  {
    name: "Crisp",
    role: "Support chat",
    location: "EU",
    safeguards: "GDPR, encrypted in transit",
  },
  {
    name: "Firebase",
    role: "Push notifications",
    location: "USA/EU",
    safeguards: "Google DPA",
  },
  {
    name: "Resend",
    role: "Transactional email",
    location: "EU (Ireland)",
    safeguards: "GDPR, TLS",
  },
  {
    name: "Stripe",
    role: "Payments",
    location: "USA",
    safeguards: "PCI DSS Level 1",
    audiences: ["individual"],
  },
  {
    name: "Moosend",
    role: "Marketing email",
    location: "EU",
    safeguards: "GDPR, consent-based",
    audiences: ["individual"],
  },
  {
    name: "Rewardful",
    role: "Referral tracking",
    location: "USA",
    safeguards: "No personal data shared",
    audiences: ["individual"],
  },
];

const RIGHTS = [
  { right: "Access", article: "Art. 15", icon: Eye },
  { right: "Rectification", article: "Art. 16", icon: Pencil },
  { right: "Erasure", article: "Art. 17", icon: Trash2 },
  { right: "Restriction", article: "Art. 18", icon: Hand },
  { right: "Portability", article: "Art. 20", icon: Package },
  { right: "Object", article: "Art. 21", icon: Ban },
  { right: "Withdraw consent", article: "Art. 7(3)", icon: Key },
];

const CERTIFICATIONS = [
  "Cyber Essentials Plus",
  "UK GDPR",
  "EU GDPR",
  "ICO registered",
  "DTAC compliant",
  "DSPT: Standards Met",
  "UK/EEA data residency",
];

const HEADING_STYLE = {
  fontFamily: "var(--romi-font-display)",
  fontSize: "clamp(1.8rem, 6vw, var(--romi-display-md))",
  lineHeight: "clamp(2.2rem, 7.3vw, var(--romi-line-display-md))",
};

const BODY_STYLE = {
  fontSize: "var(--romi-text-sm)",
  lineHeight: "var(--romi-line-sm)",
};

function AudienceToggle({ audience, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Choose how you use Romi"
      className="mx-auto inline-flex items-center rounded-full bg-[var(--romi-color-surface-muted)] p-1"
    >
      {AUDIENCES.map((option) => {
        const active = audience === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.id)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors [font-family:var(--romi-font-display)] md:px-5",
              active
                ? "bg-white text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-xs)]"
                : "text-[var(--romi-color-ink-muted)] hover:text-[var(--romi-color-ink)]"
            )}
          >
            <option.icon aria-hidden="true" className="h-4 w-4" />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function StageCard({ stage, audience }) {
  const elements = stage.elements.filter(
    (element) => !element.only || element.only === audience
  );

  return (
    <CurvedCard className="flex h-full flex-col p-6 shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.22)]">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
          <stage.icon
            aria-hidden="true"
            className="h-5 w-5 text-[var(--romi-indigo)]"
          />
        </span>
        <div>
          <h3
            className="font-bold text-[var(--romi-color-heading)]"
            style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.15rem" }}
          >
            {stage.title}
          </h3>
          <p className="text-[0.8rem] text-[var(--romi-color-ink-soft)]">
            {stage.summary}
          </p>
        </div>
      </div>

      <ul className="mt-5 space-y-2">
        {elements.map((element) => (
          <li
            key={element.name}
            className="flex items-baseline justify-between gap-3 border-b border-[var(--romi-color-border)] pb-2 last:border-0"
          >
            <span
              className="font-medium text-[var(--romi-color-ink)]"
              style={BODY_STYLE}
            >
              {element.name}
            </span>
            <span className="shrink-0 text-right text-[0.75rem] text-[var(--romi-color-ink-soft)]">
              {element.retention}
            </span>
          </li>
        ))}
      </ul>

      <ul className="mt-auto space-y-1.5 pt-5">
        {stage.safeguards.map((safeguard) => (
          <li
            key={safeguard}
            className="flex items-start gap-2 text-[0.8rem] text-[var(--romi-color-ink-muted)]"
          >
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--romi-mint-deep)]"
            />
            {safeguard}
          </li>
        ))}
      </ul>
    </CurvedCard>
  );
}

export default function DataJourneyMapPage() {
  const [audience, setAudience] = useState("individual");
  const controller = CONTROLLER[audience];
  const processors = PROCESSORS.filter(
    (processor) => !processor.audiences || processor.audiences.includes(audience)
  );

  return (
    <RomiPage
      title="Data Journey Map - Romi"
      description="Exactly what data Romi collects, where it is stored, who processes it and how it is deleted. Written for security, IT and compliance teams."
      canonical="https://www.romiadhd.com/datajourneymap"
    >
      <RomiHeader />

      {/* Band 1 - light: hero, audience toggle, controller statement */}
      <section
        className={cn("bg-[var(--romi-color-bg)] pb-16 pt-14 md:pb-20 md:pt-20", CURVE)}
      >
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="romi-kicker">Transparency</p>
            <h1 className="mt-4 text-[clamp(2rem,4.8vw,2.7rem)] font-bold leading-[1.06] tracking-[-0.015em] text-[var(--romi-color-ink)] md:text-[clamp(2.4rem,4.8vw,3.4rem)]">
              Your data journey,{" "}
              <span style={{ color: "var(--romi-purple)" }}>end to end</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] leading-[1.6] text-[var(--romi-color-ink-muted)] md:text-[1.15rem]">
              Every piece of data Romi collects, where it lives, who processes
              it and how it is destroyed. No jargon, nothing hidden.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <AudienceToggle audience={audience} onChange={setAudience} />
          </div>

          <CurvedCard className="mx-auto mt-8 max-w-[860px] p-7 text-center shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.22)]">
            <h2
              className="font-bold text-[var(--romi-color-heading)]"
              style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.3rem" }}
            >
              {controller.title}
            </h2>
            <p
              className="mx-auto mt-3 max-w-[640px] text-[var(--romi-color-ink-muted)]"
              style={BODY_STYLE}
            >
              {controller.body}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--romi-purple-pale)] px-4 py-2 text-[0.8rem] font-semibold text-[var(--romi-indigo)]">
              <Lock aria-hidden="true" className="h-3.5 w-3.5" />
              {controller.basis}
            </p>
          </CurvedCard>
        </Container>
      </section>

      {/* Band 2 - deep: the six stages */}
      <section
        className={cn(
          "bg-[var(--romi-beige-deep)] pb-16 md:pb-20",
          TUCK,
          CURVE
        )}
      >
        <Container style={{ "--romi-container": "1280px" }}>
          <h2
            className="mx-auto max-w-[900px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
            style={HEADING_STYLE}
          >
            The six stages of your data.
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-center text-[var(--romi-color-ink-muted)]">
            What is held at each stage, how long for, and what protects it.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STAGES.map((stage) => (
              <StageCard key={stage.id} stage={stage} audience={audience} />
            ))}
          </div>
        </Container>
      </section>

      {/* Band 3 - light: processors, rights, certifications, contact */}
      <section
        className={cn("bg-[var(--romi-color-bg)] pb-16 md:pb-20", TUCK)}
      >
        <Container>
          <h2
            className="mx-auto max-w-[900px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
            style={HEADING_STYLE}
          >
            Every third party, named.
          </h2>
          <p className="mx-auto mt-4 max-w-[660px] text-center text-[var(--romi-color-ink-muted)]">
            Each of these operates under an Article 28 data processing
            agreement. International transfers are safeguarded by the UK IDTA
            or Addendum and Standard Contractual Clauses.
          </p>

          <div className="mx-auto mt-10 max-w-[1000px] overflow-x-auto">
            <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-[var(--romi-radius-md)] border border-[var(--romi-purple-40)] bg-[var(--romi-color-surface)] text-left">
              <thead>
                <tr>
                  {["Processor", "Role", "Location", "Safeguards"].map((head) => (
                    <th
                      key={head}
                      className="bg-[var(--romi-purple-pale)] px-4 py-3 text-[0.85rem] font-bold text-[var(--romi-color-ink)] [font-family:var(--romi-font-display)]"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {processors.map((processor) => (
                  <tr key={processor.name}>
                    <td className="border-t border-[color-mix(in_srgb,var(--romi-purple-40)_55%,transparent)] px-4 py-3 text-[0.9rem] font-semibold text-[var(--romi-color-ink)]">
                      {processor.name}
                    </td>
                    <td className="border-t border-[color-mix(in_srgb,var(--romi-purple-40)_55%,transparent)] px-4 py-3 text-[0.875rem] text-[var(--romi-color-ink-muted)]">
                      {processor.role}
                    </td>
                    <td className="border-t border-[color-mix(in_srgb,var(--romi-purple-40)_55%,transparent)] px-4 py-3 text-[0.875rem] text-[var(--romi-color-ink-muted)]">
                      {processor.location}
                    </td>
                    <td className="border-t border-[color-mix(in_srgb,var(--romi-purple-40)_55%,transparent)] px-4 py-3 text-[0.875rem] text-[var(--romi-color-ink-muted)]">
                      {processor.safeguards}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {audience !== "individual" && (
            <p className="mx-auto mt-4 max-w-[1000px] text-[0.85rem] text-[var(--romi-color-ink-soft)]">
              Marketing email, referral tracking and consumer payment
              processing are not used on{" "}
              {audience === "clinic" ? "clinic" : "employer"} deployments, so
              those processors are out of scope here.
            </p>
          )}

          <div className="mx-auto mt-8 flex max-w-[1000px] items-center justify-center gap-3 rounded-[var(--romi-radius-lg)] border border-[var(--romi-mint-40)] bg-[color-mix(in_srgb,var(--romi-mint)_12%,white)] px-6 py-4 text-center">
            <Ban
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-[var(--romi-mint-deep)]"
            />
            <p className="font-semibold text-[var(--romi-color-ink)]">
              We never sell, rent or trade your personal data. To anyone. Ever.
            </p>
          </div>

          {/* Rights */}
          <h2
            className="mx-auto mt-20 max-w-[900px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
            style={HEADING_STYLE}
          >
            Your rights, always.
          </h2>
          <ul className="mx-auto mt-10 grid max-w-[1000px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {RIGHTS.map((item) => (
              <li key={item.right}>
                <CurvedCard className="flex h-full flex-col items-center p-5 text-center shadow-[var(--romi-shadow-xs)]">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
                    <item.icon
                      aria-hidden="true"
                      className="h-4 w-4 text-[var(--romi-indigo)]"
                    />
                  </span>
                  <span
                    className="mt-3 font-bold text-[var(--romi-color-heading)]"
                    style={{ fontFamily: "var(--romi-font-display)", fontSize: "0.98rem" }}
                  >
                    {item.right}
                  </span>
                  <span className="mt-1 text-[0.75rem] text-[var(--romi-color-ink-soft)]">
                    {item.article}
                  </span>
                </CurvedCard>
              </li>
            ))}
          </ul>

          {/* Certifications */}
          <ul className="mx-auto mt-14 flex max-w-[1000px] flex-wrap justify-center gap-3">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-2.5 rounded-full border border-[var(--romi-charcoal)]/15 bg-[var(--romi-color-surface)] px-5 py-2.5 text-[0.95rem] font-semibold text-[var(--romi-color-ink-muted)] shadow-[var(--romi-shadow-xs)]"
              >
                <Lock
                  aria-hidden="true"
                  className="h-4 w-4 text-[var(--romi-indigo)]"
                />
                {cert}
              </li>
            ))}
          </ul>

          {/* Contact + entity details */}
          <div className="mx-auto mt-12 max-w-[860px] text-center">
            <p className="text-[var(--romi-color-ink)]">
              <strong className="font-semibold">Data Protection Officer:</strong>{" "}
              <a
                href="mailto:vlad@romiadhd.com"
                className="text-[var(--romi-indigo)] underline"
              >
                vlad@romiadhd.com
              </a>
            </p>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-[var(--romi-color-ink-soft)]">
              Neuro Notion App Limited &middot; Company No. 15345630 &middot; 124
              City Road, London, England, EC1V 2NX
              <br />
              Supervisory authority: Information Commissioner&rsquo;s Office
              (ICO) &middot; Last updated: 12 August 2026
            </p>
          </div>
        </Container>
      </section>

      <RomiClose
        titleLine1="Questions about how we handle data?"
        titleLine2="Ask us anything."
        titleNoWrap={false}
        line1NoWrap={false}
        titleClamp="clamp(1.9rem, 4vw, 3rem)"
        subtitle="We will complete your security questionnaire, share our DPA and get you what your team needs."
        footerTagline="The personal companion for neurodivergent minds."
        ctaLabel="Talk to us"
        ctaHref="mailto:josh@romiadhd.com"
      />
    </RomiPage>
  );
}
