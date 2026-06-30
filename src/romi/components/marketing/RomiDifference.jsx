import { useEffect, useRef, useState } from "react";
import { Check, XCircle } from "lucide-react";
import { Badge } from "../ui/Badge";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";

/*
 * "Why Romi feels different" — ported from the legacy Claudia landing page and
 * refactored into the Romi design system. Light beige section, two contrasting
 * cards: Romi's ADHD-first design (mint / positive) vs other tools (coral /
 * negative). z-10 + rounded-b so the indigo Mission below curves up under it.
 * Copy is verbatim from the original ("Neuro's" -> "Romi's"); styling is new.
 *
 * Animation is ported verbatim from the legacy LPTheDifference: when the grid
 * scrolls into view the two cards slide in from opposite sides and fade up
 * (positive from the left, negative from the right) over 700ms.
 */

const romiPoints = [
  "Built for ADHD brains by ADHD brains",
  "Removes the friction that trips you up",
  "Learns about you over time",
  "Celebrates your brain exactly as it is",
];

const otherPoints = [
  "Built for neurotypicals, then adapted",
  "Overwhelm you with features and options",
  "Demand perfect input and maintenance",
  "Treat ADHD like a problem to solve",
];

function ComparisonCard({ tone, icon: Icon, title, points, isVisible }) {
  const isPositive = tone === "positive";
  return (
    <CurvedCard
      className={cn(
        "flex h-full flex-col p-7 transition-all duration-700 md:p-9",
        isVisible
          ? "translate-x-0 opacity-100"
          : isPositive
            ? "-translate-x-12 opacity-0"
            : "translate-x-12 opacity-0"
      )}
      style={{
        borderColor: isPositive ? "rgba(30,142,126,0.28)" : "rgba(255,123,123,0.24)",
        backgroundColor: isPositive ? "rgba(117,229,212,0.16)" : "rgba(255,123,123,0.07)",
      }}
    >
      <div className="mb-6 flex items-center gap-3">
        <span
          className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full"
          style={{ backgroundColor: isPositive ? "var(--romi-mint-deep)" : "#ff7b7b" }}
        >
          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
        <h3
          className="font-bold"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "1.25rem",
            color: isPositive ? "var(--romi-mint-deep)" : "#ff7b7b",
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
              style={{ backgroundColor: isPositive ? "var(--romi-mint-deep)" : "#ff7b7b" }}
            />
            <span className="text-[15px] leading-relaxed text-[var(--romi-color-ink)]">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </CurvedCard>
  );
}

export function RomiDifference() {
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
    <section className="relative z-10 bg-[var(--romi-beige-deep)] pb-24 pt-12 rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:pb-32 md:pt-14 md:rounded-b-[64px]">
      <Container>
        <div className="mb-9 flex justify-center">
          <Badge tone="dark">Why Romi feels different</Badge>
        </div>

        <h2
          className="mx-auto max-w-[760px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-md)",
            lineHeight: "var(--romi-line-display-md)",
          }}
        >
          Built with care, when nothing else is.
        </h2>

        <div ref={gridRef} className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <ComparisonCard
            tone="positive"
            icon={Check}
            title="Romi's ADHD-first design:"
            points={romiPoints}
            isVisible={isVisible}
          />
          <ComparisonCard
            tone="negative"
            icon={XCircle}
            title={'Other "ADHD-friendly" tools:'}
            points={otherPoints}
            isVisible={isVisible}
          />
        </div>
      </Container>
    </section>
  );
}
