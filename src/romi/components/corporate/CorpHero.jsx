import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

/*
 * Corporate hero — same layout language as the landing RomiHero (2-col grid,
 * display type, light band) with the corporate pitch and the full hero
 * composition (vector poster) on the right. "Learn more" hands off to the
 * pricing section further down the page.
 */
export function CorpHero() {
  const scrollToPricing = (event) => {
    event.preventDefault();
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[var(--romi-color-bg)] pb-16 pt-14 md:pb-20 md:pt-20">
      <Container style={{ "--romi-container": "1340px" }}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left">
            <h1 className="max-w-[680px] text-[clamp(2rem,4.8vw,2.7rem)] font-bold leading-[1.06] tracking-[-0.015em] text-[var(--romi-color-ink)] md:text-[clamp(2.7rem,4.8vw,4.4rem)]">
              Happier, More Productive,{" "}
              <span style={{ color: "var(--romi-purple)" }}>Neurodiverse</span> Employees
            </h1>
            <p className="mx-auto mt-8 max-w-[540px] text-[clamp(1.15rem,1.5vw,1.4rem)] font-medium leading-[1.6] text-[var(--romi-color-ink-muted)] lg:mx-0">
              Romi is the clinically backed AI companion that helps neurodivergent
              people function better and feel better.
            </p>

            <div className="mt-9 flex justify-center lg:justify-start">
              <Button as="a" href="#pricing" onClick={scrollToPricing} size="xl" className="px-8 text-[1.05rem]">
                Learn more
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[940px] lg:scale-[1.06] lg:origin-center">
            <img
              src="/romi/landing/corp-hero.svg"
              alt="The Romi app supporting neurodivergent employees at work"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
