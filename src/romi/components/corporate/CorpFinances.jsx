import { useState } from "react";
import { Users, TrendingDown, TrendingUp, PiggyBank } from "lucide-react";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";
import { tierForHeadcount } from "./pricing-data";

/*
 * The business case, with a live calculator. Deep band, curves down over the
 * light awards band below. Assumptions (from the wireframe): 1 in 5 employees
 * are neurodivergent; roughly £5,000 is lost per unsupported neurodivergent
 * employee each year (22 days lost productivity x avg £50k salary); Romi's
 * support gives roughly £2,500 of that back.
 */

const ND_RATE = 0.2;
const LOST_PER_ND = 5000;
const RECOVERED_PER_ND = 2500;

const gbp = (n) => "£" + Math.round(n).toLocaleString("en-GB");

export function CorpFinances() {
  const [headcount, setHeadcount] = useState(250);

  const ndEmployees = Math.max(1, Math.round(headcount * ND_RATE));
  const lost = ndEmployees * LOST_PER_ND;
  const recovered = ndEmployees * RECOVERED_PER_ND;
  const tier = tierForHeadcount(headcount);
  const annualCost = tier.monthly ? tier.monthly * 12 : null;
  const multiple = annualCost ? Math.round(recovered / annualCost) : null;

  const outputs = [
    { icon: Users, value: `≈ ${ndEmployees.toLocaleString("en-GB")}`, label: "neurodivergent employees on your team" },
    { icon: TrendingDown, value: gbp(lost), label: "lost every year when they go unsupported" },
    { icon: TrendingUp, value: gbp(recovered), label: "of that recovered with Romi's support" },
    {
      icon: PiggyBank,
      value: multiple ? `${multiple}x` : "Custom",
      label: multiple
        ? `return on Romi's cost (${gbp(annualCost)}/year on the ${tier.name} tier)`
        : "pricing for teams this size, let's talk",
    },
  ];

  return (
    <section className="relative z-10 bg-[var(--romi-beige-deep)] pb-24 pt-14 rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:pb-32 md:pt-16 md:rounded-b-[64px]">
      <Container>
        <h2
          className="mx-auto max-w-[720px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-md)",
            lineHeight: "var(--romi-line-display-md)",
          }}
        >
          The business case, in numbers.
        </h2>

        {/* Calculator */}
        <CurvedCard className="mx-auto mt-12 max-w-[920px] p-7 shadow-[0_24px_56px_-32px_rgb(38_19_64_/_0.3)] md:p-10">
          <div className="flex flex-col items-center">
            <label
              htmlFor="corp-headcount"
              className="font-bold text-[var(--romi-color-heading)]"
              style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.25rem" }}
            >
              How many employees do you have?
            </label>
            <div
              className="mt-3 font-bold text-[var(--romi-color-primary)]"
              style={{ fontFamily: "var(--romi-font-display)", fontSize: "2.4rem", lineHeight: 1.1 }}
            >
              {headcount.toLocaleString("en-GB")}
              {headcount >= 5000 ? "+" : ""}
            </div>
            <input
              id="corp-headcount"
              type="range"
              min="50"
              max="5000"
              step="50"
              value={headcount}
              onChange={(event) => setHeadcount(Number(event.target.value))}
              className="mt-5 h-2 w-full max-w-[560px] cursor-pointer appearance-none rounded-full bg-[var(--romi-purple-pale)]"
              style={{ accentColor: "var(--romi-color-primary)" }}
            />
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outputs.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
                  <item.icon aria-hidden="true" className="h-5 w-5 text-[var(--romi-color-primary)]" />
                </span>
                <div
                  className="mt-3 font-bold text-[var(--romi-indigo)]"
                  style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.9rem", lineHeight: 1.15 }}
                >
                  {item.value}
                </div>
                <p
                  className="mt-1.5 max-w-[220px] text-[var(--romi-color-ink-muted)]"
                  style={{ fontSize: "var(--romi-text-sm)", lineHeight: "var(--romi-line-sm)" }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mx-auto mt-9 max-w-[640px] text-center text-[var(--romi-color-ink-soft)]"
            style={{ fontSize: "var(--romi-text-sm)", lineHeight: "var(--romi-line-sm)" }}
          >
            Based on 1 in 5 employees being neurodivergent, 22 days of lost
            productivity per year and an average £50k salary. Romi&apos;s support
            recovers roughly half.
          </p>
        </CurvedCard>

        {/* Competitive-edge banner */}
        <CurvedCard
          className="mx-auto mt-10 max-w-[860px] border-0 px-7 py-6 text-center md:px-10 md:py-7"
          style={{ backgroundColor: "color-mix(in srgb, var(--romi-mint) 30%, white)" }}
        >
          <p
            className="font-medium text-[var(--romi-color-ink)]"
            style={{ fontSize: "var(--romi-text-lg)", lineHeight: "var(--romi-line-lg)" }}
          >
            Cognitive diversity drives better decisions, and{" "}
            <span className="font-bold text-[var(--romi-mint-deep)]">77% of consumers</span> favour
            socially responsible brands. Supporting neurodivergent talent is a
            competitive edge, not an obligation.
          </p>
        </CurvedCard>
      </Container>
    </section>
  );
}
