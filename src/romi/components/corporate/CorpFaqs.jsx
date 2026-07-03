import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "../layout/Container";
import { FaqItem } from "../marketing/RomiFaqs";

/*
 * Corporate FAQs - same accordion + show more/less pattern as the landing
 * FAQs (FaqItem is shared). Questions are the ones corporates actually asked
 * in recent sales meetings (Kerri Betts, Tom Crawford, L-Spark, Westminster
 * Council, Leicester Tigers Foundation, BT, Open Partners, Tata), answered
 * in Josh's framing from those calls.
 */

const faqs = [
  {
    question: `Can we see what our employees tell Romi?`,
    answer: `No. Never. Conversations belong to the individual. You get an anonymised, aggregated dashboard showing usage and impact trends, so you can see it's working without ever seeing what anyone said. Employees see their own full analytics and control what's shared.`,
  },
  {
    question: `Our people already use ChatGPT. What's actually different?`,
    answer: `ChatGPT is general by design. Romi has a deep ADHD-specific knowledge base built with two of Europe's leading ADHD doctors sitting between the user and the AI, plus memory, calendar and task integrations, and clinically designed regulation exercises, all shaped by over 1,000 hours of interviews with real neurodivergent people. And pointing staff at ChatGPT doesn't tick the compliance box. Providing a tool actually built for different brains does.`,
  },
  {
    question: `What does rolling it out involve?`,
    answer: `Almost nothing. You get one link to drop into your existing wellbeing or employee-support hub. Anyone can sign up on desktop or mobile, no integration into your systems required, and most companies are fully live within a week. Training included.`,
  },
  {
    question: `Who gets a licence, and for how long?`,
    answer: `Everyone. One flat fee covers unlimited licences for all staff and their families, and once someone has it, it's theirs for as long as they work for you. Nobody has to disclose anything to get support, which matters, because the people you don't know about are often the ones who need it most.`,
  },
  {
    question: `Where does this fit with reasonable adjustments?`,
    answer: `Romi is a reasonable adjustment you can actually evidence. Awareness training and coaching are good, but they don't help someone execute day to day. Romi does, and it gives you something concrete to point to: support built specifically for how your neurodivergent employees' brains work.`,
  },
  {
    question: `We're in a regulated industry. What about sensitive data?`,
    answer: `Romi doesn't need access to your systems or any integration to be useful. People speak or type in their own words and can keep inputs as general as they like. Everything is encrypted, we're GDPR compliant and Cyber Essentials+ certified, and our NHS work means we've been through serious due diligence.`,
  },
  {
    question: `ADHD shows up differently in everyone. Will one tool fit our whole team?`,
    answer: `That's the design principle. Romi builds a profile from day one, learns each person's patterns and preferences, and adapts to their version of neurodivergence rather than a template. At its core it's an executive function assistant, so it helps people with ADHD, autism, dyslexia, anxiety and beyond. We designed it for the person who struggles the most, which is exactly why it works for everyone else.`,
  },
  {
    question: `How do we know it's working?`,
    answer: `You get monthly anonymised impact reports covering usage, output and wellbeing trends, backed by clinically recognised self-report measures tracked over time. We're also running trials with the NHS and ADHD UK to keep evidencing outcomes properly. For context: coaching shows little lasting effect after six weeks, and Romi does more in two weeks than a 12-week coaching block.`,
  },
  {
    question: `Is it clinically credible?`,
    answer: `Yes. Everything advisory in Romi is built under our Medical Director, one of Europe's leading adult ADHD experts, and the regulation exercises are clinician-built from scratch. There's a safety system that signposts people to additional care if they ever need it.`,
  },
  {
    question: `Will it work in an open-plan office? And for non-English speakers?`,
    answer: `Yes. Voice is the most personal way to use Romi, but there's a full text mode for quiet or shared spaces, so nobody has to announce their ADHD to the room. And for global teams, we can deploy multi-language support covering hundreds of languages.`,
  },
];

const VISIBLE = 4;

export function CorpFaqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const extraRef = useRef(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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
    <section className="bg-[var(--romi-color-bg)] pb-24 pt-6 md:pb-32 md:pt-8">
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
