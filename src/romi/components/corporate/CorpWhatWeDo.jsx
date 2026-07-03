import { Mic, Compass, ListChecks, Rocket, HeartHandshake } from "lucide-react";
import { Badge } from "../ui/Badge";
import { CurvedCard } from "../ui/CurvedCard";
import { Container } from "../layout/Container";

/*
 * "What we do" — badge + one big statement + a "Romi helps you:" lead-in +
 * five capability cards. Light band, closes Band 3 and curves down over the
 * deep team band below.
 */

const capabilities = [
  {
    icon: Mic,
    title: "Provide Support",
    desc: "An AI companion for neurodivergent people.",
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
  // anime.js hover: the card lifts + settles and its icon pops with a little tilt.
  const onHover = (up) => (event) => {
    const card = event.currentTarget;
    const icon = card.querySelector("[data-icon]");
    import("animejs").then(({ animate }) => {
      animate(card, { translateY: up ? -10 : 0, scale: up ? 1.035 : 1, duration: 340, ease: "out(3)" });
      if (icon) animate(icon, { scale: up ? 1.18 : 1, rotate: up ? -8 : 0, duration: 360, ease: "out(4)" });
    });
  };

  return (
    <section className="relative -mt-12 bg-[var(--romi-color-bg)] pb-16 pt-24 md:-mt-16 md:pb-20 md:pt-32">
      <Container style={{ "--romi-container": "1280px" }}>
        <div className="flex justify-center">
          <Badge character={{ body: 5, expression: "07-delighted" }}>What we do</Badge>
        </div>

        <h2
          className="mx-auto mt-8 max-w-[880px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-md)",
            lineHeight: "var(--romi-line-display-md)",
          }}
        >
          The most cost-effective, scalable form of support for neurodivergent
          professionals.
        </h2>

        <p
          className="mt-10 text-center font-semibold text-[var(--romi-color-primary)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-xs)",
            lineHeight: "var(--romi-line-display-xs)",
          }}
        >
          Romi helps you:
        </p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((cap) => (
            <CurvedCard
              key={cap.title}
              onMouseEnter={onHover(true)}
              onMouseLeave={onHover(false)}
              className="flex flex-col p-7 shadow-[0_18px_40px_-28px_rgb(38_19_64_/_0.25)] will-change-transform"
            >
              <span data-icon className="grid h-14 w-14 place-items-center rounded-full bg-[var(--romi-purple-pale)]">
                <cap.icon aria-hidden="true" className="h-6 w-6 text-[var(--romi-color-primary)]" />
              </span>
              <h3
                className="mt-5 font-bold text-[var(--romi-color-heading)]"
                style={{ fontFamily: "var(--romi-font-display)", fontSize: "1.3rem" }}
              >
                {cap.title}
              </h3>
              <p
                className="mt-2.5 text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
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
