import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { ClickTooltip } from "../ui/ClickTooltip";

export function RomiHero() {
  return (
    // Logos now live in their own standalone <RomiLogos curve> section on the
    // page (identical to the corporate page), so the hero is flat + no curve.
    <section className="relative bg-[var(--romi-color-bg)] pb-12 pt-14 md:pb-16 md:pt-20">
      <Container style={{ "--romi-container": "1340px" }}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left">
            <h1 className="max-w-[680px] text-[clamp(2.05rem,5.4vw,2.9rem)] font-bold leading-[1.04] tracking-[-0.015em] text-[var(--romi-color-ink)] md:text-[clamp(2.9rem,5.4vw,5rem)]">
              Meet <span style={{ color: "var(--romi-purple)" }}>Romi</span>,
              <br />
              Your Personal ADHD Companion
            </h1>
            <p className="mx-auto mt-8 max-w-[540px] text-[clamp(1.15rem,1.5vw,1.4rem)] font-medium leading-[1.6] text-[var(--romi-color-ink-muted)] lg:mx-0">
              Life with ADHD is hard. Romi helps make it easier. Romi supports you to function
              better and feel well, at work and at home, through simple voice conversations.
            </p>

            <div className="mx-auto mt-9 inline-flex flex-col items-center gap-4 lg:mx-0">
              <div className="flex flex-wrap justify-center gap-4">
                <ClickTooltip label="Temporarily disabled due to rebranding.">
                  <Image
                    src="/romi/landing/store-app-store.webp"
                    alt="Download on the App Store"
                    width={196}
                    height={67}
                    className="h-[clamp(48px,5vw,58px)] w-auto"
                  />
                </ClickTooltip>
                <ClickTooltip label="Temporarily disabled due to rebranding.">
                  <Image
                    src="/romi/landing/store-google-play.webp"
                    alt="Get it on Google Play"
                    width={196}
                    height={67}
                    className="h-[clamp(48px,5vw,58px)] w-auto"
                  />
                </ClickTooltip>
              </div>

              <Button
                as="a"
                href="https://app.romiadhd.com/?page=signup"
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
            {/* The original baked Romi avatar, really big. For the live-composed
                variant (12 bodies x 45 expressions x 11 windows) swap in
                <RomiCharacter expression="07-delighted" body={1} window="mint" />
                from src/romi/character. Or uncomment the <Image> below (the
                app-screens hero). */}
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
    </section>
  );
}
