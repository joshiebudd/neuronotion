import { useState } from "react";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";

/*
 * The team, then the mission statement beneath it.
 * Light cream section; the deep Difference band above curves down into it.
 *
 * Founders = an expanding accordion. Click a card to make it active: it
 * widens to reveal a larger photo + the person's role and bio. Defaults to
 * the founder (Josh). Mobile collapses to one featured card + an avatar row.
 * The mission statement closes the section, sitting under the team.
 */

const founders = [
  {
    name: "Josh Budd",
    first: "Josh",
    role: "Founder & CEO",
    image: "/romi/team/josh.webp",
    bio: [
      "Diagnosed Severe ADHD",
      "Spent 8 years deeply learning about ADHD",
      "Poured everything I knew into Romi",
    ],
  },
  {
    name: "Vlad Bacila",
    first: "Vlad",
    role: "Co-Founder & CTO",
    image: "/romi/team/vlad.webp",
    bio: [
      "The technical brains behind Romi",
      "Neuro's resident Mad Scientist",
      "Huge personal experience w/ ADHD",
    ],
  },
  {
    name: "Dr James Kustow",
    first: "Dr James",
    role: "Clinical Lead",
    image: "/romi/team/james.webp",
    bio: [
      "Leading adult ADHD expert",
      "Director of The Grove",
      "#1 Best selling ADHD Author",
    ],
  },
  {
    name: "Dr Tony Lloyd",
    first: "Dr Tony",
    role: "Clinical Advisor",
    image: "/romi/team/tony.webp",
    bio: [
      "Leading adult ADHD educator",
      "Doctorate in ADHD care",
      "Ex-CEO of ADHD Foundation",
    ],
  },
];

function FounderName({ founder, className }) {
  return (
    <div className={className}>
      <h3
        className="font-bold text-[var(--romi-color-heading)]"
        style={{
          fontFamily: "var(--romi-font-display)",
          fontSize: "var(--romi-display-xs)",
          lineHeight: "var(--romi-line-display-xs)",
        }}
      >
        {founder.name}
      </h3>
      <p
        className="mt-1 font-semibold text-[var(--romi-color-primary)]"
        style={{
          fontFamily: "var(--romi-font-body)",
          fontSize: "var(--romi-text-sm)",
          lineHeight: "var(--romi-line-sm)",
        }}
      >
        {founder.role}
      </p>
    </div>
  );
}

function FounderBio({ founder, className }) {
  return (
    <ul
      className={cn("space-y-1.5 text-[var(--romi-color-ink-muted)]", className)}
      style={{
        fontFamily: "var(--romi-font-body)",
        fontSize: "var(--romi-text-sm)",
        lineHeight: "var(--romi-line-sm)",
      }}
    >
      {founder.bio.map((line) => (
        <li key={line} className="flex gap-2">
          <span aria-hidden="true" className="text-[var(--romi-color-primary)]">
            •
          </span>
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Desktop accordion ---------- */
function AccordionCard({ founder, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className="group relative h-full overflow-hidden text-left outline-none"
      style={{
        flexGrow: active ? 2.6 : 0.62,
        flexShrink: 1,
        flexBasis: 0,
        borderRadius: "var(--romi-radius-2xl)",
        transition: "flex-grow 500ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Photo */}
      <span
        className="absolute inset-x-0 top-0 block overflow-hidden"
        style={{ height: active ? "58%" : "100%" }}
      >
        <Image
          src={founder.image}
          alt={founder.name}
          fill
          sizes="(min-width: 1024px) 640px, 50vw"
          className={cn(
            "object-cover object-[center_5%] transition-transform duration-500",
            active ? "" : "scale-105 group-hover:scale-110"
          )}
        />
        {/* Inactive: soft scrim so the name pill stays readable on the photo */}
        {!active && (
          <span className="absolute inset-0 bg-[var(--romi-charcoal)]/30 transition-colors duration-300 group-hover:bg-[var(--romi-charcoal)]/15" />
        )}
      </span>

      {/* Inactive label — frosted pill on the photo, horizontal + readable */}
      {!active && (
        <span
          className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/25 bg-[var(--romi-charcoal)]/70 px-3.5 py-1.5 font-bold uppercase tracking-[0.1em] text-white shadow-[0_6px_18px_rgb(38_19_64_/_0.25)] backdrop-blur-md"
          style={{ fontFamily: "var(--romi-font-body)", fontSize: "var(--romi-text-xs)" }}
        >
          {founder.first}
        </span>
      )}

      {/* Active: white info panel */}
      {active && (
        <span
          className="absolute inset-x-0 bottom-0 flex flex-col justify-center border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-7 py-5"
          style={{ height: "42%", borderRadius: "0 0 var(--romi-radius-2xl) var(--romi-radius-2xl)" }}
        >
          <FounderName founder={founder} />
          <FounderBio founder={founder} className="mt-3" />
        </span>
      )}
    </button>
  );
}

/* ---------- Mobile featured + avatar row ---------- */
function MobileFounders({ founders: list, activeIndex, setActiveIndex }) {
  const active = list[activeIndex];
  return (
    <div className="md:hidden">
      <div
        className="mx-auto max-w-[360px] overflow-hidden border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)]"
        style={{
          borderRadius: "var(--romi-radius-2xl)",
          boxShadow: "var(--romi-shadow-xl)",
        }}
      >
        <span className="relative block w-full overflow-hidden" style={{ height: "260px" }}>
          <Image
            key={active.image}
            src={active.image}
            alt={active.name}
            fill
            sizes="360px"
            className="object-cover object-[center_5%]"
          />
        </span>
        <div className="px-6 py-6">
          <FounderName founder={active} />
          <FounderBio founder={active} className="mt-3" />
        </div>
      </div>

      <div className="mt-7 flex justify-center gap-4">
        {list.map((founder, i) => (
          <button
            key={founder.name}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${founder.name}`}
            aria-pressed={i === activeIndex}
            style={{ height: "64px", width: "64px" }}
            className={cn(
              "relative overflow-hidden rounded-full transition-all duration-200",
              i === activeIndex
                ? "ring-[3px] ring-[var(--romi-mint-deep)]"
                : "opacity-60 ring-1 ring-[var(--romi-color-border)]"
            )}
          >
            <Image src={founder.image} alt={founder.name} fill sizes="64px" className="object-cover object-[center_5%]" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function RomiMission() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative -mt-12 bg-[var(--romi-beige)] pb-24 pt-24 md:-mt-16 md:pb-32 md:pt-32">
      <Container>
        {/* Team */}
        <div className="flex flex-col items-center">
          <Badge>The people behind the mission</Badge>
        </div>

        {/* Desktop accordion */}
        <div className="mt-10 hidden gap-4 md:flex" style={{ height: "480px" }}>
          {founders.map((founder, i) => (
            <AccordionCard
              key={founder.name}
              founder={founder}
              active={i === activeIndex}
              onSelect={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="mt-10">
          <MobileFounders
            founders={founders}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {/* Mission statement — sits beneath the team */}
        <div className="mt-16 flex flex-col items-center text-center md:mt-20">
          <h2
            className="max-w-[920px] font-bold tracking-[-0.015em] text-[var(--romi-color-heading)]"
            style={{
              fontFamily: "var(--romi-font-display)",
              fontSize: "var(--romi-display-xl)",
              lineHeight: "var(--romi-line-display-xl)",
            }}
          >
            <span className="text-[var(--romi-purple)]">Our Mission:</span> To give
            people with ADHD an equal chance at thriving in life.
          </h2>
        </div>
      </Container>
    </section>
  );
}
