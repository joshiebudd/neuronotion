import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { openBooking } from "../ui/BookingModal";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";
import { TIERS, perEmployee } from "./pricing-data";

/*
 * Pricing. Light band (Band 5), tucks under the testimonials curve. A
 * team-size selector (custom design-system dropdown, not a native <select>)
 * reveals one clean price card with a monthly / annual toggle. Tier name sits
 * in a badge; the flat fee is reframed as an "as little as Xp per employee"
 * anchor. Everything that's included is a tick (pilot, white label and the
 * rest). Enterprise drops the price for a "Contact us" and adds its extras.
 */

const included = [
  "Unlimited licences for all staff and their families",
  "Paid 1-month pilot",
  "Setup, training and onboarding included",
  "Monthly anonymised impact reporting",
  "White label available",
  "No integration with your systems required",
  "Multi-language support for global teams",
];

const enterpriseExtras = [
  "A dedicated success manager",
  "Bespoke rollout and priority support",
];

/* ---------- Custom design-system dropdown (Untitled-UI menu style) ---------- */
function TierSelect({ tiers, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 rounded-lg bg-white px-4 py-3 text-left transition-shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--romi-purple-40)]"
        style={{
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05), 0px 0px 0px 1px #EDE6DC inset",
          fontFamily: "var(--romi-font-display)",
        }}
      >
        <span className="text-[15px] font-medium text-[#404040]">{tiers[value].range} employees</span>
        <ChevronDown className={cn("h-4 w-4 text-[#A3A3A3] transition-transform duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-lg bg-white py-1 shadow-[0_16px_32px_-10px_rgba(38,19,64,0.22)]"
          style={{ outline: "1px solid #F9E8D2" }}
        >
          {tiers.map((t, i) => (
            <li key={t.name} role="option" aria-selected={i === value} className="px-1.5 py-0.5">
              <button
                type="button"
                onClick={() => {
                  onChange(i);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-left transition-colors hover:bg-[#FAF7F1]"
                style={{ fontFamily: "var(--romi-font-display)" }}
              >
                <span className="text-[15px] font-medium text-[#404040]">{t.range} employees</span>
                {i === value && <Check className="h-4 w-4 text-[var(--romi-color-primary)]" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Monthly / annual toggle ---------- */
function BillingToggle({ billing, onChange }) {
  return (
    <div className="mx-auto inline-flex items-center rounded-full bg-[var(--romi-color-surface-muted)] p-1">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={cn(
          "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors [font-family:var(--romi-font-display)]",
          billing === "monthly" ? "bg-white text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-xs)]" : "text-[var(--romi-color-ink-muted)]"
        )}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange("annual")}
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors [font-family:var(--romi-font-display)]",
          billing === "annual" ? "bg-white text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-xs)]" : "text-[var(--romi-color-ink-muted)]"
        )}
      >
        Annual
        <span className="rounded-full bg-[color-mix(in_srgb,var(--romi-mint)_45%,white)] px-2 py-0.5 text-[11px] font-bold text-[var(--romi-mint-deep)]">
          2 months free
        </span>
      </button>
    </div>
  );
}

export function CorpPricing() {
  const [tierIndex, setTierIndex] = useState(2); // Growth (250 to 1,000) by default
  const [billing, setBilling] = useState("monthly");
  const cardRef = useRef(null);
  const priceRef = useRef(null);
  const tier = TIERS[tierIndex];
  const isEnterprise = tier.monthly === null;
  const isAnnual = billing === "annual";
  const annual = tier.monthly ? tier.monthly * 10 : null;
  const features = isEnterprise ? [...included, ...enterpriseExtras] : included;

  // Pop the whole card on tier change only.
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
        scale: [0.96, 1],
        translateY: [10, 0],
        duration: 360,
        ease: "out(3)",
      });
    });
    return () => {
      cancelled = true;
    };
  }, [tierIndex]);

  // Monthly/annual toggle animates ONLY the price block, so the card doesn't
  // re-pop underneath the button the user just clicked.
  const firstPrice = useRef(true);
  useEffect(() => {
    if (firstPrice.current) {
      firstPrice.current = false;
      return;
    }
    let cancelled = false;
    import("animejs").then(({ animate }) => {
      if (cancelled || !priceRef.current) return;
      animate(priceRef.current, {
        opacity: [0.4, 1],
        translateY: [6, 0],
        duration: 240,
        ease: "out(3)",
      });
    });
    return () => {
      cancelled = true;
    };
  }, [billing]);

  return (
    <section id="pricing" className="relative scroll-mt-24 bg-[var(--romi-color-bg)] pb-8 pt-8 md:pt-12">
      <Container>
        <div className="flex justify-center">
          <Badge character={{ body: 10, expression: "20-winking" }}>Pricing</Badge>
        </div>

        <h2
          className="mx-auto mt-8 max-w-[720px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "clamp(1.8rem, 6vw, var(--romi-display-md))",
            lineHeight: "clamp(2.2rem, 7.3vw, var(--romi-line-display-md))",
          }}
        >
          Pricing that scales with your team.
        </h2>

        <p
          className="mx-auto mt-5 max-w-[620px] text-center text-[var(--romi-color-ink-muted)]"
          style={{ fontSize: "var(--romi-text-lg)", lineHeight: "var(--romi-line-lg)" }}
        >
          One unsupported neurodivergent employee costs you around{" "}
          <span className="font-semibold text-[var(--romi-color-ink)]">£5,000 a year</span>. Romi covers
          your whole workforce for a fraction of that.
        </p>

        {/* Team-size selector */}
        <div className="mx-auto mt-12 flex max-w-[400px] flex-col items-center">
          <span
            className="font-bold text-[var(--romi-color-heading)]"
            style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.1rem" }}
          >
            How many people are in your team?
          </span>
          <div className="mt-4 w-full">
            <TierSelect tiers={TIERS} value={tierIndex} onChange={setTierIndex} />
          </div>
        </div>

        {/* The one tier card */}
        <div ref={cardRef} className="mx-auto mt-10 max-w-[480px] will-change-transform">
          <CurvedCard className="p-8 shadow-[0_2px_4px_rgb(79_46_18_/_0.06),0_30px_56px_-18px_rgb(79_46_18_/_0.2)] md:p-9">
            <div className="flex justify-center">
              <Badge
                tone="dark"
                dot={false}
                className="!py-2 !pl-5 !text-[0.95rem] font-bold uppercase tracking-[0.06em]"
                style={{ color: "var(--romi-color-primary)" }}
              >
                {tier.name}
              </Badge>
            </div>

            {isEnterprise ? (
              <div className="mt-6 text-center">
                <div
                  className="font-bold text-[var(--romi-color-heading)]"
                  style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(2.1rem, 7vw, 2.8rem)", lineHeight: 1.05 }}
                >
                  Let&apos;s talk
                </div>
                <p
                  className="mt-2.5 text-[var(--romi-color-ink-muted)]"
                  style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
                >
                  Custom pricing for teams of 5,000+.
                </p>
              </div>
            ) : (
              <div className="mt-6 flex flex-col items-center text-center">
                <BillingToggle billing={billing} onChange={setBilling} />

                <div ref={priceRef} className="flex w-full flex-col items-center will-change-transform">
                  <div className="mt-6 flex items-baseline justify-center gap-1.5">
                    <span
                      className="font-bold text-[var(--romi-color-heading)]"
                      style={{ fontFamily: "var(--romi-font-display)", fontSize: "clamp(2.5rem, 8vw, 3.6rem)", lineHeight: 1 }}
                    >
                      £{(isAnnual ? annual : tier.monthly).toLocaleString("en-GB")}
                    </span>
                    <span className="font-semibold text-[var(--romi-color-ink-muted)]" style={{ fontSize: "1.15rem" }}>
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </div>
                  <p
                    className="mt-3 text-[var(--romi-color-ink-muted)]"
                    style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
                  >
                    As little as{" "}
                    <span className="font-bold text-[var(--romi-color-ink)]">{perEmployee(tier)}</span> per
                    employee, per month.
                  </p>
                  <p className="mt-1.5 text-[var(--romi-color-ink-soft)]" style={{ fontSize: "var(--romi-text-sm)" }}>
                    {isAnnual
                      ? `That's £${Math.round(annual / 12).toLocaleString("en-GB")} a month, billed annually.`
                      : `or £${annual.toLocaleString("en-GB")} a year (2 months free).`}
                  </p>
                </div>
              </div>
            )}

            <ul className="mt-8 space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--romi-mint)_55%,white)]">
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

            <Button
              type="button"
              onClick={() => openBooking()}
              size="xl"
              className="mt-8 w-full text-[1.05rem]"
            >
              {isEnterprise ? "Contact us" : "Start your 1-month pilot"}
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Button>
          </CurvedCard>
        </div>
      </Container>
    </section>
  );
}
