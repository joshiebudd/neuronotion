import { ArrowRight } from "lucide-react";
import { RomiRating } from "../ui/RomiRating";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";
import { cn } from "../../lib/cn";
import { RomiTestimonialsCarousel } from "./RomiTestimonialsCarousel";

/*
 * Testimonials — ported from the legacy Claudia landing page and refactored
 * into the Romi design system. Deep-cream band (the light Stats above curves
 * down into it, and it runs flush into the Difference section below). Nine
 * white cards in a smooth Embla carousel (3 visible), then a CTA + app rating.
 * Copy is verbatim from the original (one "Claudia" -> "Romi" swap).
 */

export const testimonials = [
  {
    headline: "Finally Found Peace",
    quote:
      "It helps me sort out all the junk in my brain to sort, prioritize, and understand every part of your brain and life. LOVE IT!",
    name: "Ramona",
    role: "Social Worker",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/ramona.jpg",
  },
  {
    headline: "No More Fighting My Brain",
    quote:
      "I've given up on countless ADHD tools that never worked for me. This one finally understands how my brain actually works.",
    name: "Ryan",
    role: "Student",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/Ryan.webp",
  },
  {
    headline: "Structure I Always Needed",
    quote:
      "It has the structure that I need and struggle coming up with myself. This helps me keep on track with my tasks, projects and goals.",
    name: "Amy",
    role: "Teacher",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/amy.jpg",
  },
  {
    headline: "Perfect Amount of Function",
    quote:
      "Usually new tools overwhelm me with too many functions. This has just the right amount.",
    name: "Matt",
    role: "Software Developer",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/Matt.png",
  },
  {
    headline: "Lightning Fast Capture",
    quote:
      "I can get stuff out of my brain within seconds. I save time and energy, and remember better too.",
    name: "Ayush",
    role: "UI Designer",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/ayush.webp",
  },
  {
    headline: "Stays With Me Through Change",
    quote:
      "Just moved to a new state and started a new job - this made it so easy to stay on top of everything I need to do and not fall into chaos.",
    name: "Parker",
    role: "Sales Rep",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/parker.webp",
  },
  {
    headline: "Finally Productive",
    quote:
      "I've always been productive, but for the first time in my life, I actually feel good most of the time. I feel in control.",
    name: "Michelle",
    role: "Marketing Manager",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/michelle.jpg",
  },
  {
    headline: "Game Changer",
    quote:
      "The past 5 years of my life have been chaos. Then I found Romi and within a few weeks, everything felt 10x calmer.",
    name: "Liv",
    role: "User",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/tanya.jpg",
  },
  {
    headline: "Stress-Free Organization",
    quote:
      "I've never been so organized, self reflective, and stress-free in my whole life. Where has this been hiding!?",
    name: "Lisa",
    role: "Project Manager",
    avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/michelle2.jpg",
  },
];

export function TestimonialCard({ item }) {
  return (
    <CurvedCard
      className={cn(
        "flex h-full flex-col items-center bg-[var(--romi-color-surface)] p-6 text-center sm:p-7",
        "shadow-[0_18px_40px_-24px_rgb(38_19_64_/_0.22)]"
      )}
    >
      <div
        className="font-bold text-[var(--romi-color-heading)]"
        style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.2rem" }}
      >
        {item.headline}
      </div>
      <p className="mt-4 flex-grow text-[15px] italic leading-relaxed text-[var(--romi-charcoal-80)]">
        &quot;{item.quote}&quot;
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-[var(--romi-mint)]">
          <img src={item.avatar} alt={item.name} className="h-full w-full object-cover" />
        </span>
        <span className="text-left">
          <span className="block text-[15px] font-bold text-[var(--romi-color-ink)]">{item.name}</span>
          <span className="block text-[13px] text-[var(--romi-color-ink-muted)]">{item.role}</span>
        </span>
      </div>
    </CurvedCard>
  );
}

export function RomiTestimonials({
  curve = false,
  ctaLabel = "Get Romi in your corner",
  ctaHref = "https://app.romiadhd.com/signup",
}) {
  const onCtaClick = (event) => {
    if (ctaHref.startsWith("#")) {
      event.preventDefault();
      document.querySelector(ctaHref)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={cn(
        "relative -mt-12 bg-[var(--romi-beige-deep)] pb-14 pt-24 md:-mt-16 md:pb-20 md:pt-32",
        curve &&
          "z-10 rounded-b-[40px] pb-24 shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:rounded-b-[64px] md:pb-32"
      )}
    >
      <Container>
        <div className="mb-9 flex justify-center">
          <Badge tone="dark" character={{ body: 8, expression: "01-laughing" }}>Don&apos;t just take it from us...</Badge>
        </div>

        <h2
          className="mx-auto max-w-[820px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-md)",
            lineHeight: "var(--romi-line-display-md)",
          }}
        >
          Loved by beautifully chaotic brains 💜
        </h2>

        <div className="mt-14">
          <RomiTestimonialsCarousel />
        </div>

        <div className="mt-14 flex flex-col items-center gap-6">
          <Button as="a" href={ctaHref} onClick={onCtaClick} size="xl">
            {ctaLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>

          <RomiRating />
        </div>
      </Container>
    </section>
  );
}
