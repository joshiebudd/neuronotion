import { useState } from "react";
import { Users, TrendingDown, TrendingUp, PiggyBank } from "lucide-react";
import { Badge } from "../ui/Badge";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";
import { tierForHeadcount } from "./pricing-data";

/*
 * The business case, with a live calculator. Light band (Band 3) that tucks
 * under the comparison curve above. Assumptions: 1 in 5 employees are
 * neurodivergent; roughly £5,000 is lost per unsupported neurodivergent
 * employee each year (22 days lost productivity x avg £50k salary); Romi's
 * support recovers roughly half.
 */

const ND_RATE = 0.2;
const LOST_PER_ND = 5000;
const RECOVERED_PER_ND = 2500;

const gbp = (n) => "£" + Math.round(n).toLocaleString("en-GB");

// Icon chips are colour-coded: the loss reads cherry, the recovery reads mint.
const toneStyles = {
  neutral: { chip: "var(--romi-purple-pale)", icon: "var(--romi-color-primary)" },
  down: { chip: "color-mix(in srgb, var(--romi-cherry) 22%, white)", icon: "var(--romi-cherry)" },
  up: { chip: "color-mix(in srgb, var(--romi-mint) 42%, white)", icon: "var(--romi-mint-deep)" },
};

export function CorpFinances() {
  const [headcount, setHeadcount] = useState(250);

  const ndEmployees = Math.max(1, Math.round(headcount * ND_RATE));
  const lost = ndEmployees * LOST_PER_ND;
  const recovered = ndEmployees * RECOVERED_PER_ND;
  const tier = tierForHeadcount(headcount);
  const annualCost = tier.monthly ? tier.monthly * 12 : null;
  const multiple = annualCost ? Math.round(recovered / annualCost) : null;

  const outputs = [
    { icon: Users, value: `≈ ${ndEmployees.toLocaleString("en-GB")}`, label: "neurodivergent employees on your team", tone: "neutral" },
    { icon: TrendingDown, value: gbp(lost), label: "lost every year when they go unsupported", tone: "down" },
    { icon: TrendingUp, value: gbp(recovered), label: "of that recovered with Romi's support", tone: "up" },
    {
      icon: PiggyBank,
      value: multiple ? `${multiple}x` : "Custom",
      label: multiple ? "return on Romi's cost" : "pricing for teams this size, let's talk",
      tone: "neutral",
    },
  ];

  return (
    <section className="relative -mt-12 bg-[var(--romi-color-bg)] pb-16 pt-24 md:-mt-16 md:pb-20 md:pt-32">
      <Container>
        <div className="flex justify-center">
          <Badge character={{ body: 4, expression: "41-focused" }}>The business case, in numbers</Badge>
        </div>

        {/* Calculator */}
        <CurvedCard className="mx-auto mt-12 max-w-[1040px] p-7 shadow-[0_24px_56px_-32px_rgb(38_19_64_/_0.3)] md:p-12">
          <div className="flex flex-col items-center">
            <label
              htmlFor="corp-headcount"
              className="font-bold text-[var(--romi-color-heading)]"
              style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.35rem" }}
            >
              How many employees do you have?
            </label>
            <div
              className="mt-3 font-bold text-[var(--romi-color-primary)]"
              style={{ fontFamily: "var(--romi-font-display)", fontSize: "3.6rem", lineHeight: 1.02 }}
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
              className="mt-6 h-2.5 w-full max-w-[680px] cursor-pointer appearance-none rounded-full bg-[var(--romi-purple-pale)]"
              style={{ accentColor: "var(--romi-color-primary)" }}
            />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outputs.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <span
                  className="grid h-12 w-12 place-items-center rounded-full"
                  style={{ backgroundColor: toneStyles[item.tone].chip }}
                >
                  <item.icon aria-hidden="true" className="h-6 w-6" style={{ color: toneStyles[item.tone].icon }} />
                </span>
                <div
                  className="mt-3 font-bold text-[var(--romi-indigo)]"
                  style={{ fontFamily: "var(--romi-font-display)", fontSize: "2.05rem", lineHeight: 1.12 }}
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
            className="mx-auto mt-10 max-w-[680px] text-center text-[var(--romi-color-ink-soft)]"
            style={{ fontSize: "var(--romi-text-sm)", lineHeight: "var(--romi-line-sm)" }}
          >
            Based on 1 in 5 employees being neurodivergent, 22 days of lost
            productivity a year and an average £50k salary. Romi improves
            productivity at work by around 36%, recovering roughly half of those
            lost days.
          </p>
        </CurvedCard>
      </Container>
    </section>
  );
}
