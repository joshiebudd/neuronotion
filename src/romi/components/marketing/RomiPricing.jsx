import { ArrowRight, Check } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";

/*
 * Consumer pricing for the main landing. One plan (Romi Plus), lifted from the
 * live site's pricing: a 7-day free trial, then £19/month, no card required.
 * Same card language as the corporate pricing section. Light band; sits between
 * the awards strip and the FAQs.
 */

const SIGNUP_URL = "https://app.romiadhd.com/?page=signup";

const features = [
  "Unlimited conversations with Romi",
  "Unrestricted access to all AI functionality",
  "AI Scheduling",
  "AI Project Prioritisation",
  "AI Task Breakdown",
  "AI Journaling",
  "Automatic Mood Detection",
  "Deep AI Analytics",
  "Routines and Protocols",
  "and more!",
];

export function RomiPricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-[var(--romi-color-bg)] pb-16 pt-12 md:pb-20 md:pt-14">
      <Container>
        <div className="flex justify-center">
          <Badge character={{ body: 11, expression: "07-delighted" }}>Pricing</Badge>
        </div>

        <h2
          className="mx-auto mt-8 max-w-[720px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-md)",
            lineHeight: "var(--romi-line-display-md)",
          }}
        >
          Simple, transparent pricing.
        </h2>

        <p
          className="mx-auto mt-5 max-w-[560px] text-center text-[var(--romi-color-ink-muted)]"
          style={{ fontSize: "var(--romi-text-lg)", lineHeight: "var(--romi-line-lg)" }}
        >
          One plan. Everything included. No limits.
        </p>

        <div className="mx-auto mt-10 max-w-[460px]">
          <CurvedCard className="p-8 shadow-[0_2px_4px_rgb(79_46_18_/_0.06),0_30px_56px_-18px_rgb(79_46_18_/_0.2)] md:p-9">
            <div className="flex justify-center">
              <Badge
                tone="dark"
                dot={false}
                className="!py-2 !pl-5 !text-[0.95rem] font-bold uppercase tracking-[0.06em]"
                style={{ color: "var(--romi-color-primary)" }}
              >
                Romi Plus
              </Badge>
            </div>

            <div className="mt-6 text-center">
              <div className="flex items-baseline justify-center gap-1.5">
                <span
                  className="font-bold text-[var(--romi-color-heading)]"
                  style={{ fontFamily: "var(--romi-font-display)", fontSize: "3.6rem", lineHeight: 1 }}
                >
                  £19
                </span>
                <span className="font-semibold text-[var(--romi-color-ink-muted)]" style={{ fontSize: "1.15rem" }}>
                  /month
                </span>
              </div>
              <p
                className="mt-3 text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
              >
                7-day free trial. No card required.
              </p>
            </div>

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

            <Button as="a" href={SIGNUP_URL} size="xl" className="mt-8 w-full text-[1.05rem]">
              Start your free trial
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Button>
          </CurvedCard>
        </div>
      </Container>
    </section>
  );
}
