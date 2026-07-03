import { ShieldCheck, Lock, HeartPulse } from "lucide-react";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";

/*
 * Privacy & data banner - "Our commitment to safety and security".
 * Three pillars (Privacy / Security / Safety) plus the certification pills
 * from the footer, sized up. Sits between pricing and the corporate FAQs.
 */

const pillars = [
  {
    icon: ShieldCheck,
    title: "Privacy",
    desc: "Privacy by design. Employers never see individual conversations. You get anonymised impact reporting, nothing more.",
  },
  {
    icon: Lock,
    title: "Security",
    desc: "Every conversation is encrypted, with strict controls to prevent unauthorised access to your team's data.",
  },
  {
    icon: HeartPulse,
    title: "Safety",
    desc: "Built with leading ADHD clinicians, with a safety system that signposts people to additional care if they ever need it.",
  },
];

const certifications = ["Cyber Essentials+", "GDPR", "SOC II"];

export function CorpSecurity() {
  return (
    <section className="bg-[var(--romi-color-bg)] pb-16 pt-14 md:pb-20 md:pt-16">
      <Container>
        <h2
          className="mx-auto max-w-[640px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-sm)",
            lineHeight: "var(--romi-line-display-sm)",
          }}
        >
          Our commitment to safety and security.
        </h2>

        <div className="mx-auto mt-12 grid max-w-[1040px] gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <CurvedCard
              key={pillar.title}
              className="flex flex-col items-center p-7 text-center shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.22)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
                <pillar.icon aria-hidden="true" className="h-7 w-7 text-[var(--romi-indigo)]" />
              </span>
              <h3
                className="mt-4 font-bold text-[var(--romi-color-heading)]"
                style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.25rem" }}
              >
                {pillar.title}
              </h3>
              <p
                className="mt-2.5 text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-sm)", lineHeight: "var(--romi-line-sm)" }}
              >
                {pillar.desc}
              </p>
            </CurvedCard>
          ))}
        </div>

        {/* Certification pills - footer style, sized up */}
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="flex items-center gap-2.5 rounded-full border border-[var(--romi-charcoal)]/15 bg-[var(--romi-color-surface)] px-6 py-3 text-base font-semibold text-[var(--romi-color-ink-muted)] shadow-[var(--romi-shadow-xs)]"
            >
              <Lock aria-hidden="true" className="h-5 w-5 text-[var(--romi-indigo)]" />
              {cert}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
