import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { STORE_LINKS } from "../../lib/store-links";

/*
 * Hero for /adhd-app. A copy fork of RomiHero, not a variant: same layout,
 * same character art, same store badges and CTA, only the headline and
 * subheading differ. Targets "adhd app" (250/mo UK, KD3) instead of the
 * homepage's "companion" framing, which has zero measurable search volume.
 * See assets/seo/keyword-research/FINDINGS-2026-08-19.md in the AI Chief of
 * Staff repo for the numbers behind the wording choices here.
 */
export function AppHero() {
  return (
    <section className="relative bg-[var(--romi-color-bg)] pb-12 pt-14 md:pb-16 md:pt-20">
      <Container style={{ "--romi-container": "1340px" }}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left">
            <h1 className="max-w-[680px] text-[clamp(2.05rem,5.4vw,2.9rem)] font-bold leading-[1.04] tracking-[-0.015em] text-[var(--romi-color-ink)] md:text-[clamp(2.9rem,5.4vw,5rem)]">
              Meet <span style={{ color: "var(--romi-purple)" }}>Romi</span>,
              <br />
              The ADHD App for Adults That Actually Sticks
            </h1>
            <p className="mx-auto mt-8 max-w-[540px] text-[clamp(1.15rem,1.5vw,1.4rem)] font-medium leading-[1.6] text-[var(--romi-color-ink-muted)] lg:mx-0">
              Most ADHD apps are just a prettier to-do list. Romi is an AI-powered ADHD app you actually talk to, built around how your brain works so support shows up as a conversation, not another list to abandon.
            </p>

            <div className="mx-auto mt-9 inline-flex flex-col items-center gap-4 lg:mx-0">
              <div className="flex flex-wrap justify-center gap-4">
                {STORE_LINKS.map((store) => (
                  <a
                    key={store.label}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={store.alt}
                    className="inline-block transition-transform hover:scale-[1.03]"
                  >
                    <Image
                      src={store.src}
                      alt={store.alt}
                      width={196}
                      height={67}
                      className="h-[clamp(48px,5vw,58px)] w-auto"
                    />
                  </a>
                ))}
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
            <img
              src="/romi/landing/romi-avatar.svg"
              alt="Romi"
              className="mx-auto block aspect-square w-[85%]"
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
