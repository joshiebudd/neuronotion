import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    question: "I've tried so many ADHD apps. How is this different?",
    answer:
      'Most apps are built for neurotypical brains and then "adapted" for ADHD. Neuro is built from the ground up based on ADHD neuroscience. Every interaction is designed to work with your brain, not against it.',
  },
  {
    question: "What if I forget to use it?",
    answer:
      "That's exactly why we built it voice-first with smart nudging. Romi learns your patterns and gently reminds you when you need her most - without being annoying.",
  },
  {
    question: "I'm not good with technology. Is this complicated?",
    answer:
      "If you can have a conversation, you can use Romi. Just speak your thoughts. Everything else happens automatically.",
  },
  {
    question: "Will this actually stick, or will I abandon it like everything else?",
    answer:
      "Romi is designed for ADHD consistency patterns. It gets easier the more you use it, not harder. Plus, it adapts when your routines change instead of breaking.",
  },
];

function FaqItem({ faq, open, onToggle }) {
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

export function RomiFaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[var(--romi-color-bg)] pb-24 pt-4 md:pb-32 md:pt-6">
      <Container>
        <div className="mx-auto max-w-[900px]">
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
