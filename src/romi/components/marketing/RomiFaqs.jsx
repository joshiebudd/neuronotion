import { useRef, useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { Container } from "../layout/Container";

/*
 * FAQ accordion. Questions + answers are lifted from the live Neuro landing
 * page (<LPFAQs />) and re-skinned in the Romi design system: beige section,
 * Romi badge + display heading, soft white cards, token-driven type / colour /
 * radius / shadow. Product name updated Claudia -> Romi for the rebrand.
 *
 * Open/close height is animated with the grid-rows 0fr -> 1fr trick, so it
 * stays smooth without measuring DOM heights.
 */

const faqs = [
  {
    question: `What if I forget to use it?`,
    answer: `Forgetting is kind of the whole point of ADHD, so we planned for it. From day one, Romi is built to give you a far better chance of coming back than a typical app, because we designed it around the psychology of how people actually build habits with something digital. And if you still forget? You can have Romi call your phone for a five-minute check-in each morning.`,
  },
  {
    question: `I'm not good with technology. Is this complicated?`,
    answer: `Your grandmother could use this. If you can have a conversation, you can use Romi. Just speak your thoughts, and everything else happens automatically.`,
  },
  {
    question: `Will this actually stick, or will I abandon it like everything else?`,
    answer: `Honestly? There's no guarantee. But we've done everything in our power to build something that does. Romi isn't just another "ADHD-friendly" tool, it's ADHD-first. We spent years building it around how ADHD brains actually tick, not adapting something that was made for everyone else.`,
  },
  {
    question: `Does it learn about me over time?`,
    answer: `Yes. The more you use Romi, the better it understands your patterns, your language, and what actually helps you. It shapes itself around how you work, instead of expecting you to adapt to it.`,
  },
  {
    question: `My ADHD is different, and I have other conditions too. Will Romi get it?`,
    answer: `That's exactly what Romi is built for. ADHD doesn't define you, and no two people experience it the same way, so your preferences, your personality, and your good and hard days all still matter. Romi learns your specific patterns and adapts to your version of ADHD, not a one-size-fits-all template. And if you're navigating more than ADHD, you're in good company. Romi is shaped by over 1,000 hours of interviews with real people, many of whom also live with autism, OCD, dyslexia, PTSD, processing differences, anxiety and more. It's built for ADHD first, by brains that work in lots of different ways.`,
  },
  {
    question: `What does this integrate with?`,
    answer: `Right now, Romi connects to your calendars, with wearables and other task tools coming soon. The goal is simple: Romi fits into what you already use, with no extra work from you.`,
  },
  {
    question: `Will it nag me with endless reminders?`,
    answer: `Only as much as you want. When you first meet Romi, they'll ask how often you'd like to be nudged. Prefer not to decide? Romi can read the shape of your day and what matters most, and check in only when it'll actually help.`,
  },
  {
    question: `English isn't my first language. Can I use this?`,
    answer: `Right now, Romi is designed mainly for English speakers. Support for more languages is coming very soon.`,
  },
  {
    question: `Do I have to break tasks down myself?`,
    answer: `Nope, Romi's great at this. It spots when a task looks meaty and helps you break it into small, doable steps, based on how much energy you've got right then. If the first step still feels too big, just ask Romi to go smaller. It'll always help you turn a mountain into a molehill, so your energy goes on actually doing the thing, not planning it.`,
  },
];

export function FaqItem({ faq, open, onToggle }) {
  return (
    <div
      className="overflow-hidden border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)]"
      style={{
        borderRadius: "var(--romi-radius-2xl)",
        boxShadow: open ? "var(--romi-shadow-md)" : "var(--romi-shadow-sm)",
        transition: "box-shadow 220ms ease",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-5 px-7 py-6 text-left md:px-9 md:py-7"
      >
        <span
          className="font-semibold text-[var(--romi-color-ink)] transition-colors group-hover:text-[var(--romi-color-primary)]"
          style={{
            fontFamily: "var(--romi-font-body)",
            fontSize: "var(--romi-text-xl)",
            lineHeight: "var(--romi-line-xl)",
          }}
        >
          {faq.question}
        </span>
        <span
          aria-hidden="true"
          className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full text-[var(--romi-color-primary)] transition-colors group-hover:bg-[var(--romi-color-primary-soft)]"
          style={{ backgroundColor: open ? "var(--romi-color-primary-soft)" : "transparent" }}
        >
          <ChevronDown
            className="h-6 w-6"
            style={{
              transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </span>
      </button>

      {/* grid-rows 0fr -> 1fr animates open/close height without measuring DOM */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 320ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            className="px-7 pb-7 text-[var(--romi-color-ink-muted)] md:px-9 md:pb-8"
            style={{
              fontSize: "var(--romi-text-lg)",
              lineHeight: "var(--romi-line-lg)",
            }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const VISIBLE = 4;

export function RomiFaqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const extraRef = useRef(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Reveal the rest with a staggered anime.js fade-up.
  const showMore = () => {
    setExpanded(true);
    requestAnimationFrame(() => {
      if (!extraRef.current) return;
      import("animejs").then(({ animate, stagger }) => {
        animate(extraRef.current.children, {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 460,
          delay: stagger(80),
          ease: "out(3)",
        });
      });
    });
  };

  const showLess = () => {
    setExpanded(false);
    setOpenIndex(null);
  };

  return (
    <section className="bg-[var(--romi-color-bg)] pb-24 pt-4 md:pb-32 md:pt-6">
      <Container>
        <div className="mx-auto max-w-[900px]">
          <div className="space-y-5">
            {faqs.slice(0, VISIBLE).map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} open={openIndex === i} onToggle={() => toggle(i)} />
            ))}
          </div>

          {expanded && (
            <div ref={extraRef} className="mt-5 space-y-5">
              {faqs.slice(VISIBLE).map((faq, i) => {
                const idx = i + VISIBLE;
                return (
                  <div key={faq.question} className="opacity-0">
                    <FaqItem faq={faq} open={openIndex === idx} onToggle={() => toggle(idx)} />
                  </div>
                );
              })}
            </div>
          )}

          {faqs.length > VISIBLE && (
            <div className="mt-8 flex justify-center">
              {!expanded ? (
                <button
                  type="button"
                  onClick={showMore}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-6 py-3 text-[15px] font-semibold text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-sm)] transition-colors hover:bg-[var(--romi-color-primary-soft)] hover:text-[var(--romi-color-primary)]"
                >
                  Show more questions
                  <Plus aria-hidden="true" className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={showLess}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] px-6 py-3 text-[15px] font-semibold text-[var(--romi-color-ink)] shadow-[var(--romi-shadow-sm)] transition-colors hover:bg-[var(--romi-color-primary-soft)] hover:text-[var(--romi-color-primary)]"
                >
                  Show less
                  <Minus aria-hidden="true" className="h-5 w-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
