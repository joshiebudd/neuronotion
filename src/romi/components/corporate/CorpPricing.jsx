import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";
import { TIERS, PILOT_MAILTO, ENTERPRISE_MAILTO } from "./pricing-data";

/*
 * Pricing + trial. Light band. The proposition chips up top, then a team-size
 * dropdown that swaps a single tier card (anime.js pop on change). Enterprise
 * (5,000+) becomes a contact card. Every paid tier's CTA is the 1-month pilot.
 */

const proposition = [
  { title: "1-Month Pilot", desc: "Paid. One month to opt out." },
  { title: "Simple Setup", desc: "One click to access, training provided." },
  { title: "Unlimited Licences", desc: "Staff and their families." },
  { title: "£50/month", desc: "per 100 employees." },
  { title: "Impact Data", desc: "Reports on Romi's impact on output." },
  { title: "100% Flexible", desc: "Cancel anytime, 21 days' notice." },
];

const included = [
  "Unlimited licences for staff and their families",
  "Setup, training and onboarding included",
  "Anonymised impact reporting",
  "Cancel anytime, 21 days' notice",
];

export function CorpPricing() {
  const [tierIndex, setTierIndex] = useState(2); // Growth (250-1,000) by default
  const cardRef = useRef(null);
  const tier = TIERS[tierIndex];
  const isEnterprise = tier.monthly === null;

  // Pop the card on tier change.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    let cancelled = false;
    import("animejs").then(({ animate }) => {
      if (cancelled || !cardRef.current) return;
      animate(cardRef.current, {
        opacity: [0, 1],
        scale: [0.94, 1],
        translateY: [10, 0],
        duration: 380,
        ease: "out(3)",
      });
    });
    return () => {
      cancelled = true;
    };
  }, [tierIndex]);

  return (
    <section id="pricing" className="relative -mt-12 scroll-mt-24 bg-[var(--romi-color-bg)] pb-8 pt-24 md:-mt-16 md:pt-32">
      <Container>
        <div className="flex justify-center">
          <Badge avatar="/romi/characters/windows/02-mint.svg">The proposition</Badge>
        </div>

        <h2
          className="mx-auto mt-8 max-w-[720px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-md)",
            lineHeight: "var(--romi-line-display-md)",
          }}
        >
          Pricing that scales with your team.
        </h2>

        {/* Proposition chips */}
        <div className="mx-auto mt-12 grid max-w-[1040px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {proposition.map((chip) => (
            <CurvedCard key={chip.title} className="flex flex-col items-center px-3 py-4 text-center shadow-[var(--romi-shadow-xs)]">
              <span
                className="font-bold text-[var(--romi-color-primary)]"
                style={{ fontFamily: "var(--romi-font-display)", fontSize: "1rem" }}
              >
                {chip.title}
              </span>
              <span
                className="mt-1 text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-xs)", lineHeight: "var(--romi-line-xs)" }}
              >
                {chip.desc}
              </span>
            </CurvedCard>
          ))}
        </div>

        {/* Team-size picker */}
        <div className="mx-auto mt-14 flex max-w-[420px] flex-col items-center">
          <label
            htmlFor="corp-tier"
            className="font-bold text-[var(--romi-color-heading)]"
            style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.15rem" }}
          >
            How many people are in your team?
          </label>
          <div className="relative mt-4 w-full">
            <select
              id="corp-tier"
              value={tierIndex}
              onChange={(event) => setTierIndex(Number(event.target.value))}
              className="w-full cursor-pointer appearance-none rounded-[var(--romi-radius-button)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-5 py-3.5 pr-12 font-semibold text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-sm)] outline-none transition-colors hover:bg-[var(--romi-color-surface-muted)] focus-visible:ring-4 focus-visible:ring-[var(--romi-purple-40)]"
              style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.05rem" }}
            >
              {TIERS.map((t, i) => (
                <option key={t.name} value={i}>
                  {t.range} employees
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--romi-color-primary)]"
            />
          </div>
        </div>

        {/* The one tier card */}
        <div ref={cardRef} className="mx-auto mt-10 max-w-[480px] will-change-transform">
          <CurvedCard className="overflow-hidden p-0 shadow-[0_2px_4px_rgb(79_46_18_/_0.06),0_30px_56px_-18px_rgb(79_46_18_/_0.2)]">
            {/* Card head */}
            <div className="px-8 pb-7 pt-8 text-center" style={{ background: "var(--romi-color-section-alt)" }}>
              <span
                className="font-bold uppercase tracking-[0.08em] text-[var(--romi-color-primary)]"
                style={{ fontFamily: "var(--romi-font-body)", fontSize: "var(--romi-text-sm)" }}
              >
                {tier.name}
              </span>
              <p
                className="mt-1 text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
              >
                Recommended for teams of {tier.range}
              </p>

              {isEnterprise ? (
                <div
                  className="mt-4 font-bold text-[var(--romi-color-heading)]"
                  style={{ fontFamily: "var(--romi-font-display)", fontSize: "2.6rem", lineHeight: 1.1 }}
                >
                  Let&apos;s talk
                </div>
              ) : (
                <>
                  <div className="mt-4 flex items-baseline justify-center gap-1.5">
                    <span
                      className="font-bold text-[var(--romi-color-heading)]"
                      style={{ fontFamily: "var(--romi-font-display)", fontSize: "3.4rem", lineHeight: 1 }}
                    >
                      £{tier.monthly.toLocaleString("en-GB")}
                    </span>
                    <span className="font-semibold text-[var(--romi-color-ink-muted)]" style={{ fontSize: "1.1rem" }}>
                      /month
                    </span>
                  </div>
                  <p
                    className="mt-2 text-[var(--romi-color-ink-muted)]"
                    style={{ fontSize: "var(--romi-text-sm)", lineHeight: "var(--romi-line-sm)" }}
                  >
                    ≈ {tier.perEmployee} per employee per month, or £
                    {(tier.monthly * 10).toLocaleString("en-GB")} billed annually (2 months free)
                  </p>
                </>
              )}
            </div>

            {/* Card body */}
            <div className="px-8 pb-8 pt-6">
              {isEnterprise ? (
                <p
                  className="text-center text-[var(--romi-color-ink-muted)]"
                  style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
                >
                  For organisations of 5,000+ we put together custom pricing, rollout
                  support and reporting. Tell us about your team and we&apos;ll take it
                  from there.
                </p>
              ) : (
                <ul className="space-y-3.5">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[var(--romi-mint)]/60">
                        <Check aria-hidden="true" className="h-4 w-4 text-[var(--romi-mint-deep)]" />
                      </span>
                      <span
                        className="text-[var(--romi-color-ink)]"
                        style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <Button
                as="a"
                href={isEnterprise ? ENTERPRISE_MAILTO : PILOT_MAILTO}
                size="xl"
                className="mt-7 w-full text-[1.05rem]"
              >
                {isEnterprise ? "Contact us" : "Start your 1-month pilot"}
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Button>
            </div>
          </CurvedCard>
        </div>
      </Container>
    </section>
  );
}
