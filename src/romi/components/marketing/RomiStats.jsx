import { useEffect, useRef, useState } from "react";
import { Badge } from "../ui/Badge";
import { Container } from "../layout/Container";

/*
 * "Built on science and experience" stats section.
 * Animated supported-count headline + six clinical stat tiles in a soft
 * surface card. Sits in the beige flow below RomiInAction.
 */

const SUPPORTED_COUNT = 15241;

const stats = [
  { value: "83%", label: "improved daily functioning" },
  { value: "62%", label: "more in control of life" },
  { value: "60%", label: "less overwhelmed" },
  { value: "36%", label: "improvement in task execution & organisation" },
  { value: "32%", label: "reduction in ADHD symptoms while using Romi" },
  { value: "33%", label: "increase in positive mood & regulation" },
];

function useCountOnVisible(end, durationMs = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let raf;
    let startedAt = null;
    let started = false;

    const tick = (now) => {
      if (startedAt === null) startedAt = now;
      const progress = Math.min(1, (now - startedAt) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            raf = requestAnimationFrame(tick);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [end, durationMs]);

  return [value, ref];
}

export function RomiStats() {
  const [count, countRef] = useCountOnVisible(SUPPORTED_COUNT);

  return (
    <section className="relative z-10 bg-[var(--romi-color-bg)] pb-24 pt-12 rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:pb-32 md:pt-14 md:rounded-b-[64px]">
      <Container>
        <div className="mb-10 flex justify-center">
          <Badge avatar="/romi/landing/badge-window-stats.svg">
            <span>Shaped by lived experience <span className="italic">and</span> science.</span>
          </Badge>
        </div>

        <h2
          ref={countRef}
          className="text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "clamp(1.8rem, 6vw, var(--romi-display-md))",
            lineHeight: "clamp(2.2rem, 7.3vw, var(--romi-line-display-md))",
          }}
        >
          <span className="text-[var(--romi-purple)]" style={{ fontSize: "1.12em", letterSpacing: "-0.03em" }}>
            {count.toLocaleString()}
          </span>{" "}
          <span>ADHDers already have Romi in their corner</span>
        </h2>

        <div className="mx-auto mt-14 grid max-w-[1040px] grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-10 md:gap-y-14">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div
                  className="font-bold text-[var(--romi-indigo)]"
                  style={{
                    fontFamily: "var(--romi-font-display)",
                    fontSize: "clamp(2.1rem, 7vw, var(--romi-display-lg))",
                    lineHeight: "clamp(2.6rem, 8.7vw, var(--romi-line-display-lg))",
                  }}
                >
                  {stat.value}
                </div>
                <p
                  className="mt-2 max-w-[230px] text-[var(--romi-color-ink-muted)]"
                  style={{
                    fontSize: "var(--romi-text-md)",
                    lineHeight: "var(--romi-line-md)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
