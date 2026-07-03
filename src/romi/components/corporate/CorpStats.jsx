import { Container } from "../layout/Container";

/*
 * Corporate stats band — the emphatic statement + three big numbers.
 * Same visual language as the landing RomiStats (display heading, indigo
 * stat numerals, light band that curves down over the deep band below).
 */

const stats = [
  {
    value: "1 in 5",
    label: "of your workforce is neurodivergent. Less than half of them disclose it.",
  },
  {
    value: "22 days",
    label: "of productivity lost per unsupported neurodivergent employee, every year.",
  },
  {
    value: "50%",
    label: "of unsupported neurodivergent employees are thinking about leaving.",
  },
];

export function CorpStats() {
  return (
    <section className="relative z-10 bg-[var(--romi-color-bg)] pb-24 pt-16 rounded-b-[40px] shadow-[0_28px_50px_-20px_rgb(79_46_18_/_0.16)] md:pb-32 md:pt-20 md:rounded-b-[64px]">
      <Container>
        <h2
          className="mx-auto max-w-[860px] text-center font-bold tracking-[-0.01em] text-[var(--romi-color-heading)]"
          style={{
            fontFamily: "var(--romi-font-display)",
            fontSize: "var(--romi-display-md)",
            lineHeight: "var(--romi-line-display-md)",
          }}
        >
          Neurodivergent people can make or break a company&apos;s performance.
        </h2>

        <div className="mx-auto mt-14 grid max-w-[1040px] gap-y-12 sm:grid-cols-3 md:gap-x-10">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center">
              <div
                className="font-bold text-[var(--romi-indigo)]"
                style={{
                  fontFamily: "var(--romi-font-display)",
                  fontSize: "var(--romi-display-lg)",
                  lineHeight: "var(--romi-line-display-lg)",
                }}
              >
                {stat.value}
              </div>
              <p
                className="mt-2 max-w-[260px] text-[var(--romi-color-ink-muted)]"
                style={{ fontSize: "var(--romi-text-md)", lineHeight: "var(--romi-line-md)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
