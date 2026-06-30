import Image from "next/image";
import { Badge } from "../ui/Badge";
import { Container } from "../layout/Container";

/*
 * Product showcase — sits right below the fold. The avatar owns the hero now,
 * so this is where the real app screens live: brain dump, today's tasks,
 * routines, and regulate. Same light-cream band as the hero above (they read
 * as one continuous top region), then curves down into the deep-cream
 * "We get it" section below.
 */
export function RomiShowcase() {
  return (
    <section className="relative z-10 rounded-b-[40px] bg-[var(--romi-color-bg)] pb-16 pt-10 shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:rounded-b-[64px] md:pb-20 md:pt-14">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex justify-center">
            <Badge avatar="/romi/landing/badge-window-1.svg">See Romi in action</Badge>
          </div>
          <h2
            className="mt-6 text-[clamp(2rem,3.4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[var(--romi-color-heading)] [font-family:var(--romi-font-display)]"
          >
            Your whole day, out of your head.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[clamp(1.1rem,1.4vw,1.3rem)] font-medium leading-[1.6] text-[var(--romi-color-ink-muted)]">
            Brain-dump by voice and Romi sorts the noise into tasks, routines, and
            gentle nudges. One calm home for all of it.
          </p>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-[900px] md:mt-12">
          <Image
            src="/romi/landing/landing-hero.webp"
            alt="Romi app screens: brain dump, today's tasks, routines, and regulate"
            width={1280}
            height={1280}
            sizes="(min-width: 1024px) 900px, 92vw"
            className="h-auto w-full"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
