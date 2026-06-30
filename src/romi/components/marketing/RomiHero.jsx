import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

const awards = [
  { src: "/romi/landing/award-startup-awards-26.webp", alt: "Startup Awards 2026 award" },
  { src: "/romi/landing/award-tata-25.webp", alt: "Tata 2025 award" },
  { src: "/romi/landing/award-google-25.webp", alt: "Google 2025 award" },
  { src: "/romi/landing/award-tech-nation-25.webp", alt: "Tech Nation 2025 award" },
  { src: "/romi/landing/award-startup-awards-25.webp", alt: "Startup Awards 2025 award" },
];

export function RomiHero() {
  return (
    <section className="relative bg-[var(--romi-color-bg)] pb-12 pt-14 md:pb-16 md:pt-20">
      <Container style={{ "--romi-container": "1340px" }}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left">
            <h1 className="max-w-[680px] text-[clamp(2.9rem,5.4vw,5rem)] font-bold leading-[1.04] tracking-[-0.015em] text-[var(--romi-color-ink)]">
              Meet <span style={{ color: "var(--romi-purple)" }}>Romi</span>,
              <br />
              Your Personal ADHD Companion
            </h1>
            <p className="mx-auto mt-8 max-w-[540px] text-[clamp(1.15rem,1.5vw,1.4rem)] font-medium leading-[1.6] text-[var(--romi-color-ink-muted)] lg:mx-0">
              Life with ADHD is hard. Romi helps make it easier. Romi supports you to function
              better and feel better in daily life through simple voice conversations.
            </p>

            <div className="mx-auto mt-9 inline-flex flex-col items-center gap-4 lg:mx-0">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" onClick={(event) => event.preventDefault()} aria-label="Download on the App Store">
                  <Image
                    src="/romi/landing/store-app-store.webp"
                    alt="Download on the App Store"
                    width={196}
                    height={67}
                    className="h-[clamp(48px,5vw,58px)] w-auto transition-opacity hover:opacity-90"
                  />
                </a>
                <a href="#" onClick={(event) => event.preventDefault()} aria-label="Get it on Google Play">
                  <Image
                    src="/romi/landing/store-google-play.webp"
                    alt="Get it on Google Play"
                    width={196}
                    height={67}
                    className="h-[clamp(48px,5vw,58px)] w-auto transition-opacity hover:opacity-90"
                  />
                </a>
              </div>

              <Button
                as="a"
                href="#"
                onClick={(event) => event.preventDefault()}
                variant="tertiaryLilac"
                size="lg"
                className="border-0 px-2 text-[1.05rem]"
              >
                or try Romi on the web
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px]">
            {/* EXPERIMENT: Romi avatar SVG as the hero, really big.
                Revert: delete this <img> and uncomment the <Image> below (the new app-screens hero). */}
            <img
              src="/romi/landing/romi-avatar.svg"
              alt="Romi"
              className="mx-auto block aspect-square w-[85%]"
            />
            {/* <Image
              src="/romi/landing/landing-hero.webp"
              alt="Romi app screens showing brain dump, action planning, and regulation support"
              width={1280}
              height={1280}
              priority
              sizes="(min-width: 1024px) 48vw, 90vw"
              className="h-auto w-full"
            /> */}
          </div>
        </div>

      </Container>

      {/* Awards / social proof — full bleed across the screen, tightened gap */}
      <div className="mt-7 w-full px-[clamp(16px,5vw,72px)] md:mt-10">
        <div className="flex gap-6 overflow-x-auto pb-1 [scrollbar-width:none] md:grid md:grid-cols-5 md:items-center md:gap-12 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {awards.map((award) => (
            <div key={award.src} className="flex min-w-[148px] justify-center md:min-w-0">
              <Image
                src={award.src}
                alt={award.alt}
                width={210}
                height={210}
                sizes="(min-width: 768px) 19vw, 148px"
                className="h-auto w-[148px] md:w-full md:max-w-[240px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
