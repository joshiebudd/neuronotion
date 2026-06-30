import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";

/*
 * "How Romi helps" — scroll-locked cycler built on a rAF scroll driver.
 * Four steps, each a 2-column row: changing eyebrow + header + bullets on the
 * LEFT, the real app screen on the RIGHT (fixed side, never alternating). Text
 * and phone fade together on every step. Deep-cream band; curves down over the
 * light InAction section below.
 *
 * Colour-zoned per the app: Plan = blue, Regulate = mint, Understand = purple,
 * Learn = amber. Headlines stay charcoal; only the small accents carry colour.
 */

const helps = [
  {
    badge: "Plan and execute",
    title: "Get the chaos out of your head.",
    ebBg: "#DDEDF9",
    accent: "#459CDB",
    bullets: [
      "Dump your thoughts by voice. Romi captures everything.",
      "Tasks, events, moods, routines, notes... everything.",
      "Reminders that land exactly when you need them.",
    ],
    screenImg: "/romi/landing/demo/action.webp",
    screenAlt: "The Romi app action and planning screen",
  },
  {
    badge: "Find your calm",
    title: "Find calm when things get too much.",
    ebBg: "#C4F8F2",
    accent: "#19887C",
    bullets: [
      "Spot overwhelm before it spirals into burnout.",
      "Reset back to baseline within minutes (with ADHD-specific exercises).",
      "Learns what calms you, and gets better over time.",
    ],
    screenImg: "/romi/landing/demo/regulate.webp",
    screenAlt: "The Romi app regulate screen",
  },
  {
    badge: "Spot your patterns",
    title: "Understand your version of ADHD.",
    titleNode: (
      <>
        Understand your <span className="italic">version</span> of ADHD.
      </>
    ),
    ebBg: "#FAF5FF",
    accent: "#7E22CE",
    bullets: [
      "Uncover the patterns behind your good and hard days.",
      "Ask Romi anything and get insights into your past patterns.",
      "Builds a picture of what actually helps you and your ADHD.",
    ],
    screenImg: "/romi/landing/demo/understand.webp",
    screenAlt: "The Romi app understand-yourself screen",
  },
  {
    badge: "See your progress",
    title: "Visualise how far you've come.",
    ebBg: "#FEFCE8",
    accent: "#A16207",
    bullets: [
      "Watch small changes add up, week by week.",
      "Spot what's lifting your sleep, focus and mood.",
      "Monitor how the changes you make impact the rest of your life.",
    ],
    screenImg: "/romi/landing/demo/analytics.webp",
    screenAlt: "The Romi app analytics screen",
  },
];

/* ---------- Left text block ---------- */
function StepText({ step }) {
  return (
    <div className="max-w-[520px]">
      <span
        className="inline-flex items-center gap-2.5 rounded-[16px] py-2.5 pl-3 pr-5 text-[1.2rem] font-medium leading-tight [font-family:var(--romi-font-display)]"
        style={{ backgroundColor: step.ebBg, color: "var(--romi-color-ink)" }}
      >
        <img
          src="/romi/landing/badge-window-demo.svg"
          alt=""
          aria-hidden="true"
          className="h-7 w-7 shrink-0 rounded-full object-cover"
        />
        {step.badge}
      </span>
      <h3
        className="mt-5 text-[2.45rem] font-bold leading-[1.06] tracking-[-0.015em] text-[var(--romi-color-heading)] lg:text-[3.1rem]"
        style={{ fontFamily: "var(--romi-font-display)" }}
      >
        {step.titleNode ?? step.title}
      </h3>
      <ul className="mt-7 space-y-4">
        {step.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-[1.15rem] leading-relaxed text-[var(--romi-color-ink-muted)]">
            <span
              className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full"
              style={{ backgroundColor: "color-mix(in srgb, var(--romi-purple) 80%, transparent)" }}
            >
              <Check aria-hidden="true" className="h-4 w-4 text-white" />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-9">
        <Button as="a" href="#" onClick={(e) => e.preventDefault()} size="xl">
          Try Romi free
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

function Dots({ index, onSelect }) {
  return (
    <div className="flex items-center gap-3">
      {helps.map((item, i) => (
        <button
          key={item.title}
          type="button"
          aria-label={`Show ${item.title}`}
          onClick={() => onSelect(i)}
          className={cn(
            "h-2.5 rounded-full transition-all duration-300",
            i === index ? "w-7 bg-[var(--romi-color-primary)]" : "w-2.5 bg-[var(--romi-charcoal-40)] hover:bg-[var(--romi-charcoal-60)]"
          )}
        />
      ))}
    </div>
  );
}

function HelpsInner({ index, onSelect }) {
  const [displayed, setDisplayed] = useState(index);
  const stageRef = useRef(null);

  // Text + phone fade out, swap, fade back in together on every step.
  useEffect(() => {
    if (index === displayed) return;
    let cancelled = false;
    import("animejs").then(({ animate }) => {
      if (cancelled || !stageRef.current) return;
      animate(stageRef.current, {
        opacity: 0,
        translateY: 10,
        duration: 150,
        ease: "in(2)",
        onComplete: () => {
          if (cancelled) return;
          setDisplayed(index);
          requestAnimationFrame(() => {
            if (!stageRef.current) return;
            animate(stageRef.current, {
              opacity: [0, 1],
              translateY: [10, 0],
              duration: 220,
              ease: "out(3)",
            });
          });
        },
      });
    });
    return () => {
      cancelled = true;
    };
  }, [index, displayed]);

  const shown = helps[displayed];

  return (
    <Container className="w-full py-14 lg:py-0">
      <div
        ref={stageRef}
        className="mx-auto grid max-w-[940px] items-center gap-10 will-change-transform lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12"
      >
        {/* LEFT: eyebrow + header + bullets + CTA (changes per step) */}
        <StepText step={shown} />

        {/* RIGHT: the real app screen mockup (transparent bg), changes per step */}
        <img
          src={shown.screenImg}
          alt={shown.screenAlt}
          className="mx-auto block h-auto w-full max-w-[360px]"
        />
      </div>

      {/* Persistent progress indicator */}
      <div className="mt-10 flex justify-center">
        <Dots index={index} onSelect={onSelect} />
      </div>
    </Container>
  );
}

export function RomiHelps() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);

  const setActive = (i) => {
    indexRef.current = i;
    setIndex(i);
  };

  // rAF polling: reads native DOM rect every frame — immune to which element
  // is the scroll container (window vs html vs .romi-shell).
  useEffect(() => {
    if (window.innerWidth < 1024) return undefined;
    const track = trackRef.current;
    if (!track) return undefined;

    const last = helps.length - 1;
    let rafId;

    const tick = () => {
      const { top } = track.getBoundingClientRect();
      const scrolled = Math.max(0, -top);
      const total = track.offsetHeight - window.innerHeight;
      if (total > 0) {
        const progress = Math.min(1, scrolled / total);
        const i = Math.min(last, Math.round(progress * last));
        if (indexRef.current !== i) setActive(i);
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative z-10 bg-[var(--romi-beige-deep)] rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:rounded-b-[64px]">
      {/* Desktop: tall track so CSS sticky pins the inner panel while scrolling */}
      <div
        ref={trackRef}
        className="relative hidden lg:block"
        style={{ height: `${helps.length * 54}vh` }}
      >
        <div className="sticky top-0 flex h-[92vh] items-center">
          <HelpsInner index={index} onSelect={setActive} />
        </div>
      </div>

      {/* Mobile: dots drive it, no pin */}
      <div className="lg:hidden">
        <HelpsInner index={index} onSelect={setActive} />
      </div>
    </section>
  );
}
