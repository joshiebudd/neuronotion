import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";

/*
 * "How Romi helps" — a scroll-pinned cycler driven by GSAP ScrollTrigger.
 * Four 2-column steps (eyebrow + header + bullets + CTA on the left, the real
 * app screen on the right). ScrollTrigger pins the panel and snaps between
 * steps; the text + phone cross-fade on every change. Deep-cream band that
 * curves down over the section below. Mobile: dots drive it, no pin.
 */

const helps = [
  {
    badge: "Plan and execute",
    title: "Get the chaos out of your head.",
    ebBg: "#DDEDF9",
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
        Understand <span className="italic">your version</span> of ADHD.
      </>
    ),
    ebBg: "#FAF5FF",
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
    bullets: [
      "Watch small changes add up, week by week.",
      "Spot what's lifting your sleep, focus and mood.",
      "Monitor how the changes you make impact the rest of your life.",
    ],
    screenImg: "/romi/landing/demo/analytics.webp",
    screenAlt: "The Romi app analytics screen",
  },
];

/* ---------- Left text block (standard steps) ---------- */
function StepText({ step }) {
  return (
    <div className="max-w-[520px] lg:max-w-[640px]">
      <span
        className="inline-flex items-center gap-2.5 rounded-[16px] py-2.5 pl-3 pr-5 text-[1.2rem] font-medium leading-tight [font-family:var(--romi-font-display)] lg:gap-3 lg:rounded-[18px] lg:py-3 lg:pl-3.5 lg:pr-6 lg:text-[1.4rem]"
        style={{ backgroundColor: step.ebBg, color: "var(--romi-color-ink)" }}
      >
        <img
          src="/romi/landing/badge-window-demo.svg"
          alt=""
          aria-hidden="true"
          className="h-7 w-7 shrink-0 rounded-full object-cover lg:h-9 lg:w-9"
        />
        {step.badge}
      </span>
      <h3
        className="mt-5 text-[2.45rem] font-bold leading-[1.06] tracking-[-0.015em] text-[var(--romi-color-heading)] lg:mt-6 lg:text-[3.9rem]"
        style={{ fontFamily: "var(--romi-font-display)" }}
      >
        {step.titleNode ?? step.title}
      </h3>
      <ul className="mt-7 space-y-4 lg:mt-9 lg:space-y-5">
        {step.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-[1.15rem] leading-relaxed text-[var(--romi-color-ink-muted)] lg:gap-4 lg:text-[1.35rem]">
            <span
              className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full lg:mt-1 lg:h-8 lg:w-8"
              style={{ backgroundColor: "color-mix(in srgb, var(--romi-purple) 80%, transparent)" }}
            >
              <Check aria-hidden="true" className="h-4 w-4 text-white lg:h-5 lg:w-5" />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-9 lg:mt-11">
        <Button as="a" href="https://app.romiadhd.com/?page=signup" size="xl" className="lg:px-10 lg:py-4 lg:text-[1.15rem]">
          Try Romi free
          <ArrowRight aria-hidden="true" className="h-5 w-5 lg:h-6 lg:w-6" />
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

  // Text + phone cross-fade on every step change.
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
      <div ref={stageRef} className="will-change-transform">
        <div className="mx-auto grid max-w-[940px] items-center gap-10 lg:max-w-[1320px] lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-20">
          <StepText step={shown} />
          <img
            src={shown.screenImg}
            alt={shown.screenAlt}
            className="mx-auto block h-auto w-full max-w-[360px] lg:w-auto lg:max-h-[calc(100vh_-_250px)] lg:max-w-[500px]"
          />
        </div>
      </div>

      {/* Persistent progress indicator */}
      <div className="mt-10 flex justify-center">
        <Dots index={index} onSelect={onSelect} />
      </div>
    </Container>
  );
}

export function RomiHelps() {
  const pinRef = useRef(null);
  const stRef = useRef(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);

  const setActive = (i) => {
    indexRef.current = i;
    setIndex(i);
  };

  // Desktop: GSAP ScrollTrigger pins the panel and snaps through the steps.
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return undefined;
    let cancelled = false;
    Promise.all([import("gsap"), import("gsap/dist/ScrollTrigger")])
      .then(([gsapMod, stMod]) => {
        if (cancelled || !pinRef.current) return;
        const gsap = gsapMod.gsap || gsapMod.default;
        const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
        gsap.registerPlugin(ScrollTrigger);
        const steps = helps.length;
        stRef.current = ScrollTrigger.create({
          trigger: pinRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * (steps - 1),
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: (value) => Math.round(value * (steps - 1)) / (steps - 1),
            duration: 0.3,
            delay: 0.02,
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const i = Math.min(steps - 1, Math.max(0, Math.round(self.progress * (steps - 1))));
            if (indexRef.current !== i) setActive(i);
          },
        });
        // Now that the pin exists (and the #team section sits at its final
        // position), honour a /rominewlanding#team deep-link that the native
        // hash jump can't handle because it fires before GSAP lays out.
        if (window.location.hash === "#team") {
          ScrollTrigger.refresh();
          requestAnimationFrame(() => {
            document.getElementById("team")?.scrollIntoView({ behavior: "auto" });
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      if (stRef.current) {
        stRef.current.kill();
        stRef.current = null;
      }
    };
  }, []);

  // Dot click: on desktop, scroll to that step (which drives the pin); on
  // mobile there is no pin, so just switch the panel.
  const goTo = (i) => {
    const st = stRef.current;
    if (st && typeof window !== "undefined" && window.innerWidth >= 1024) {
      const target = st.start + (i / (helps.length - 1)) * (st.end - st.start);
      window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      setActive(i);
    }
  };

  return (
    <section className="relative z-10 bg-[var(--romi-beige-deep)] rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:rounded-b-[64px]">
      {/* Desktop: GSAP-pinned demo */}
      <div className="hidden lg:block">
        <div ref={pinRef} className="flex h-screen items-center">
          <HelpsInner index={index} onSelect={goTo} />
        </div>
      </div>

      {/* Mobile: dots drive it, no pin */}
      <div className="lg:hidden">
        <HelpsInner index={index} onSelect={goTo} />
      </div>
    </section>
  );
}
