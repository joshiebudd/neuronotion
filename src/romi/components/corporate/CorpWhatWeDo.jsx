import { Mic, Compass, ListChecks, Rocket, HeartHandshake } from "lucide-react";
import { Badge } from "../ui/Badge";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";

/*
 * "What we do" — badge + one semi-bold statement + five capability cards.
 * Light band, curves down over the deep team band below. Card content from
 * the wireframe ("What Romi does"); redesigned into the Romi card language
 * (CurvedCard, purple-pale icon chips, display titles).
 */

const capabilities = [
  {
    icon: Mic,
    title: "Provides Support",
    desc: "A voice-activated AI companion for neurodivergent people.",
  },
  {
    icon: Compass,
    title: "Get Started",
    desc: "Talks things through and turns them into a clear, doable plan.",
  },
  {
    icon: ListChecks,
    title: "Get Organised",
    desc: "Sets priorities and breaks big projects into clear steps.",
  },
  {
    icon: Rocket,
    title: "Get Delivering",
    desc: "Reminders and nudges to execute, and get back on track.",
  },
  {
    icon: HeartHandshake,
    title: "Get Happy",
    desc: "Emotional support, so they feel happier and calmer at work.",
  },
];

export function CorpWhatWeDo() {
  return (
    <section className="relative z-10 bg-[var(--romi-color-bg)] pb-24 pt-12 rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:pb-32 md:pt-14 md:rounded-b-[64px]">
      <Container>
        <div className="flex justify-center">
          <Badge avatar="/romi/characters/windows/02-mint.svg">What we do</Badge>
        </div>

        <p
          className="mx-auto mt-8 max-w-[720px] text-center font-semibold text-[var(--romi-color-heading)]"
          style={{ fontSize: "var(--romi-display-xs)", lineHeight: "var(--romi-line-display-xs)", fontFamily: "var(--romi-font-body)" }}
        >
          The most cost-effective, scalable form of support for neurodivergent
          professionals.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((cap) => (
            <CurvedCard
              key={cap.title}
              className="flex flex-col p-6 shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.25)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
                <cap.icon aria-hidden="true" className="h-5 w-5 text-[var(--romi-color-primary)]" />
              </span>
              <h3
                className="mt-4 font-bold text-[var(--romi-color-heading)]"
                style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.15rem" }}
              >
                {cap.title}
              </h3>
              <p
                className="mt-2 text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-sm)", lineHeight: "var(--romi-line-sm)" }}
              >
                {cap.desc}
              </p>
            </CurvedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
