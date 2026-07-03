import { useEffect, useRef, useState } from "react";
import { Check, XCircle } from "lucide-react";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";

/*
 * Corporate comparison — unsupported vs supported, in the exact visual
 * language of the landing "This time is different" section (mint positive
 * card vs light charcoal-tint negative card, opposite slide-in on scroll),
 * followed by the "training is good, BUT..." bridge callout.
 */

const unsupportedPoints = [
  "50% of them want to leave",
  "22 days of productivity lost, per person, per year",
  "200% higher absenteeism",
  "Employment tribunal risk",
];

const supportedPoints = [
  "36% higher output",
  "60% less absenteeism",
  "87% less stress",
  "90% better retention, and lower turnover costs",
];

function ComparisonCard({ tone, icon: Icon, title, points, isVisible }) {
  const isPositive = tone === "positive";
  return (
    <CurvedCard
      className={cn(
        "flex h-full flex-col p-7 shadow-[0_20px_48px_-28px_rgb(38_19_64_/_0.28)] transition-all duration-700 md:p-9",
        isVisible
          ? "translate-x-0 opacity-100"
          : isPositive
            ? "translate-x-12 opacity-0"
            : "-translate-x-12 opacity-0"
      )}
      style={{
        borderColor: isPositive
          ? "color-mix(in srgb, var(--romi-mint-deep) 30%, transparent)"
          : "color-mix(in srgb, var(--romi-charcoal) 12%, transparent)",
        backgroundColor: isPositive
          ? "color-mix(in srgb, var(--romi-mint) 45%, white)"
          : "color-mix(in srgb, var(--romi-charcoal) 7%, white)",
      }}
    >
      <div className="mb-6 flex items-center gap-3">
        <span
          className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full"
          style={{ backgroundColor: isPositive ? "var(--romi-mint-deep)" : "var(--romi-charcoal)" }}
        >
          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
        <h3
          className="font-bold"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "1.25rem",
            color: isPositive ? "var(--romi-mint-deep)" : "var(--romi-charcoal)",
          }}
        >
          {title}
        </h3>
      </div>

      <ul className="space-y-4">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span
              className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
              style={{ backgroundColor: isPositive ? "var(--romi-mint-deep)" : "var(--romi-charcoal)" }}
            />
            <span className="text-[17px] leading-relaxed text-[var(--romi-color-ink)]">{point}</span>
          </li>
        ))}
      </ul>
    </CurvedCard>
  );
}

export function CorpComparison() {
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative -mt-12 bg-[var(--romi-beige-deep)] pb-6 pt-24 md:-mt-16 md:pb-8 md:pt-32">
      <Container>
        <h2
          className="mx-auto max-w-[760px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-md)",
            lineHeight: "var(--romi-line-display-md)",
          }}
        >
          What happens when you actually support them.
        </h2>

        <div ref={gridRef} className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <ComparisonCard
            tone="negative"
            icon={XCircle}
            title="When unsupported:"
            points={unsupportedPoints}
            isVisible={isVisible}
          />
          <ComparisonCard
            tone="positive"
            icon={Check}
            title="With Romi's support:"
            points={supportedPoints}
            isVisible={isVisible}
          />
        </div>

        {/* Bridge: training / adjustments are good, but... */}
        <CurvedCard className="mx-auto mt-10 max-w-[860px] border-0 bg-[var(--romi-purple-pale)] px-7 py-6 text-center md:px-10 md:py-7">
          <p
            className="font-semibold text-[var(--romi-color-ink)]"
            style={{ fontSize: "var(--romi-text-xl)", lineHeight: "var(--romi-line-xl)" }}
          >
            Awareness training is good. Reasonable adjustments are good. But none of
            it helps someone actually do better, day to day.{" "}
            <span style={{ color: "var(--romi-color-primary)" }}>That&apos;s what Romi is for.</span>
          </p>
        </CurvedCard>
      </Container>
    </section>
  );
}
