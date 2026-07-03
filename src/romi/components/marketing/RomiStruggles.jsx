import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";

/*
 * "We get it" section.
 *  - Centred badge at the top.
 *  - Left: title + supporting copy.
 *  - Right: a cluster of organic blobs (Romi logo language) that behave like
 *    atoms under pressure: they drift slowly, bounce off an invisible round
 *    wall and off each other (elastic), and expand on hover / tap. Hovering
 *    freezes just that one blob so its detail stays readable; the rest keep
 *    floating around it. anime.js handles the entrance.
 *  - Closes with a down-arrow hand-off into "How Romi helps".
 *
 * Deep-cream band (the light Hero above curves down into it).
 */

// Organic blobs — Romi logo language. Two brand tones (purple + mint), each a
// soft 3D sphere: a radial highlight up top-left, a colour-matched float
// shadow, and a gentle white sheen overlay. Charcoal labels. Every blob carries
// its own slightly-irregular border-radius, so no two are identical.
const BLOBS = {
  purple: {
    bg: "radial-gradient(circle at 30% 24%, #ddc7ff 0%, #c29eff 46%, #a87cf0 100%)",
    text: "var(--romi-color-ink)",
    detail: "var(--romi-charcoal-60)",
    shadow: "0 16px 34px -12px rgba(140, 99, 234, 0.55)",
    shadowActive: "0 24px 46px -14px rgba(140, 99, 234, 0.6)",
  },
  mint: {
    bg: "radial-gradient(circle at 30% 24%, #bdf7ef 0%, #72e3d2 46%, #36c9b3 100%)",
    text: "var(--romi-color-ink)",
    detail: "var(--romi-charcoal-60)",
    shadow: "0 16px 34px -12px rgba(48, 196, 176, 0.55)",
    shadowActive: "0 24px 46px -14px rgba(48, 196, 176, 0.6)",
  },
};

const struggles = [
  { label: "Your thoughts are racing", detail: "100 thoughts and no off switch.", cx: 50, cy: 22, d: 28, tone: "purple", radius: "49% 51% 55% 45% / 53% 47% 53% 47%" },
  { label: "You feel out of control", detail: "You are constantly scraping by, wondering how everyone else does it.", cx: 78, cy: 34, d: 28, tone: "mint", radius: "54% 46% 47% 53% / 48% 54% 46% 52%" },
  { label: "Everything feels urgent", detail: "It feels impossible to choose where to focus.", cx: 74, cy: 72, d: 26, tone: "purple", radius: "47% 53% 52% 48% / 56% 45% 55% 44%" },
  { label: "You start strong, then crash", detail: "Your brain only focuses when things feel new, or pressure is extreme.", cx: 46, cy: 80, d: 28, tone: "mint", radius: "52% 48% 50% 50% / 46% 54% 46% 54%" },
  { label: "You've tried every app, system, and hack", detail: "Other apps aren't truly built for ADHD brains.", cx: 22, cy: 66, d: 26, tone: "purple", radius: "50% 50% 57% 43% / 54% 49% 51% 46%" },
  { label: "You lose brilliant ideas", detail: "By the time you find somewhere to write them down, they're gone.", cx: 26, cy: 32, d: 28, tone: "mint", radius: "53% 47% 48% 52% / 50% 56% 44% 50%" },
];

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reducedMotion;
}

export function RomiStruggles() {
  const cellRef = useRef(null);
  const elRefs = useRef([]);
  const bodies = useRef([]);
  const rafRef = useRef(null);
  const activeRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const reducedMotion = useReducedMotion();

  const setActive = (index) => {
    activeRef.current = index;
    setActiveIndex(index);
  };

  // Physics: walls + pairwise elastic collisions inside the circular cell.
  useEffect(() => {
    const cell = cellRef.current;
    if (!cell) return undefined;

    let size = 0;
    let radius = 0;
    const rand = (min, max) => min + Math.random() * (max - min);

    const render = () => {
      bodies.current.forEach((b, i) => {
        const el = elRefs.current[i];
        if (el) el.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0)`;
      });
    };

    const setup = () => {
      const rect = cell.getBoundingClientRect();
      size = rect.width;
      radius = size / 2;
      bodies.current = struggles.map((item) => {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(0.55, 0.95) * (size / 480);
        return {
          x: (item.cx / 100) * size,
          y: (item.cy / 100) * size,
          r: ((item.d / 100) * size) / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };
      });
      // Nudge any starting position back inside the wall.
      bodies.current.forEach((b) => {
        const dx = b.x - radius;
        const dy = b.y - radius;
        const dist = Math.hypot(dx, dy) || 1;
        const max = radius - b.r;
        if (dist > max) {
          b.x = radius + (dx / dist) * max;
          b.y = radius + (dy / dist) * max;
        }
      });
      render();
    };

    const step = () => {
      if (!reducedMotion) {
        const list = bodies.current;
        const active = activeRef.current;
        const lo = 0.35 * (size / 480);
        const hi = 1.2 * (size / 480);

        // Integrate + wall-bounce every free bubble. The hovered bubble is
        // frozen in place; the rest keep drifting around it.
        for (let i = 0; i < list.length; i += 1) {
          if (i === active) continue;
          const b = list[i];
          b.x += b.vx;
          b.y += b.vy;

          const dx = b.x - radius;
          const dy = b.y - radius;
          const dist = Math.hypot(dx, dy) || 1;
          const max = radius - b.r;
          if (dist > max) {
            const nx = dx / dist;
            const ny = dy / dist;
            b.x = radius + nx * max;
            b.y = radius + ny * max;
            const dot = b.vx * nx + b.vy * ny;
            b.vx -= 2 * dot * nx;
            b.vy -= 2 * dot * ny;
          }
        }

        // Pairwise collisions. A frozen (active) bubble acts as an immovable
        // obstacle: only the other bubble is pushed clear and reflects off it.
        for (let i = 0; i < list.length; i += 1) {
          for (let j = i + 1; j < list.length; j += 1) {
            const a = list[i];
            const c = list[j];
            const dx = c.x - a.x;
            const dy = c.y - a.y;
            const dist = Math.hypot(dx, dy) || 1;
            const min = a.r + c.r;
            if (dist >= min) continue;

            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = min - dist;

            if (i === active) {
              c.x += nx * overlap;
              c.y += ny * overlap;
              const vn = c.vx * nx + c.vy * ny;
              if (vn < 0) {
                c.vx -= 2 * vn * nx;
                c.vy -= 2 * vn * ny;
              }
            } else if (j === active) {
              a.x -= nx * overlap;
              a.y -= ny * overlap;
              const vn = a.vx * nx + a.vy * ny;
              if (vn > 0) {
                a.vx -= 2 * vn * nx;
                a.vy -= 2 * vn * ny;
              }
            } else {
              const half = overlap / 2;
              a.x -= nx * half;
              a.y -= ny * half;
              c.x += nx * half;
              c.y += ny * half;
              const vn = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
              if (vn < 0) {
                a.vx += vn * nx;
                a.vy += vn * ny;
                c.vx -= vn * nx;
                c.vy -= vn * ny;
              }
            }
          }
        }

        // Keep the free bubbles lively: clamp speed so none stall or run away.
        for (let i = 0; i < list.length; i += 1) {
          if (i === active) continue;
          const b = list[i];
          const sp = Math.hypot(b.vx, b.vy) || 1;
          const k = sp < lo ? lo / sp : sp > hi ? hi / sp : 1;
          if (k !== 1) {
            b.vx *= k;
            b.vy *= k;
          }
        }

        render();
      }
      rafRef.current = requestAnimationFrame(step);
    };

    setup();
    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(cell);
    rafRef.current = requestAnimationFrame(step);

    return () => {
      resizeObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  // Entrance: staggered fade-in (opacity only, so it never fights the physics transform).
  useEffect(() => {
    let cancelled = false;
    import("animejs").then(({ animate, stagger }) => {
      if (cancelled) return;
      const els = elRefs.current.filter(Boolean);
      if (reducedMotion) {
        els.forEach((el) => (el.style.opacity = "1"));
        return;
      }
      animate(els, { opacity: [0, 1], duration: 620, delay: stagger(70), ease: "out(2)" });
    });
    return () => {
      cancelled = true;
    };
  }, [reducedMotion]);

  return (
    <section className="relative -mt-12 overflow-hidden bg-[var(--romi-beige-deep)] pb-0 pt-24 md:-mt-16 md:pb-0 md:pt-32">
      <Container>
        <div className="mb-12 flex justify-center md:mb-14">
          <Badge tone="dark" avatar="/romi/landing/badge-window-struggles.svg">We know the feeling</Badge>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: title + copy */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-[2.25rem] font-bold leading-[1.08] tracking-[-0.01em] text-[var(--romi-color-heading)] sm:text-5xl">
              ADHD can be exhausting.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-[var(--romi-color-ink-muted)]">
              You feel like you have to work twice as hard as everyone else to
              achieve the same thing. Simply keeping your life together takes up
              90% of your energy. Which doesn&apos;t leave you much left over.
            </p>
          </div>

          {/* Right: floating blobs (Romi logo language) */}
          <div ref={cellRef} className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-[var(--romi-color-border)] bg-[var(--romi-beige)] shadow-[0_30px_60px_-30px_rgb(38_19_64_/_0.12)]"
            />
            {struggles.map((item, index) => {
              const isActive = activeIndex === index;
              const blob = BLOBS[item.tone];
              return (
                <div
                  key={item.label}
                  ref={(node) => {
                    elRefs.current[index] = node;
                  }}
                  className="absolute left-0 top-0 opacity-0 will-change-transform"
                  style={{ width: `${item.d}%`, height: `${item.d}%` }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(index)}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive(isActive ? null : index)}
                    aria-expanded={isActive}
                    style={{
                      background: blob.bg,
                      borderRadius: item.radius,
                      boxShadow: isActive ? blob.shadowActive : blob.shadow,
                    }}
                    className={cn(
                      "relative grid h-full w-full place-items-center overflow-hidden p-3 text-center transition-[transform,box-shadow] duration-300 ease-out",
                      "focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--romi-purple)]/50",
                      isActive ? "z-20 scale-[1.3]" : "scale-100 hover:scale-[1.05]"
                    )}
                  >
                    {/* Soft white sheen, top-left, for the balloon highlight */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(58% 48% at 32% 24%, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0) 62%)",
                      }}
                    />
                    {/* Title (default) fades out and the body fades in to fill
                        the bubble on hover / tap - so it never crams both at once. */}
                    <span
                      className={cn(
                        "absolute inset-0 flex items-center justify-center p-[14%] text-center font-bold leading-tight tracking-[-0.01em] transition-opacity duration-200",
                        "text-[0.82rem] sm:text-[0.98rem]",
                        isActive ? "opacity-0" : "opacity-100"
                      )}
                      style={{ fontFamily: "var(--romi-font-display)", color: blob.text }}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "absolute inset-0 flex items-center justify-center p-[13%] text-center font-medium leading-snug transition-opacity duration-200",
                        "text-[0.68rem] sm:text-[0.82rem]",
                        isActive ? "opacity-100" : "pointer-events-none opacity-0"
                      )}
                      style={{ color: blob.text }}
                    >
                      {item.detail}
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Circle rim sits ON TOP of the blobs (z-30). Its band-coloured ring
                covers any blob that expands past the wall, so every bubble stays
                visually contained within the circle. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-30 rounded-full border border-[var(--romi-color-border)]"
              style={{ boxShadow: "0 0 0 34px var(--romi-beige-deep)" }}
            />
          </div>
        </div>

        {/* Hand-off into "How Romi helps" */}
        <div className="mt-8 flex flex-col items-center gap-3 text-center md:mt-9">
          <ArrowDown aria-hidden="true" strokeWidth={2.25} className="h-7 w-7 text-[var(--romi-purple)]" />
          <p className="text-[1.2rem] font-semibold text-[var(--romi-color-heading)]">
            Romi was built to help make it lighter.
          </p>
        </div>
      </Container>
    </section>
  );
}
