import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the task breakdown system work?",
    answer: "Our system uses AI to analyze your tasks and break them down into smaller, manageable steps. It considers ADHD-specific challenges and provides a structured yet flexible approach to task management.",
  },
  {
    question: "Can I customize the task breakdowns?",
    answer: "Absolutely! While our AI provides initial suggestions, you have full control to modify, add, or remove steps to match your working style and preferences.",
  },
  {
    question: "Is this suitable for team projects?",
    answer: "Yes! Our system supports collaborative task breakdown, allowing team members to work together on complex projects while maintaining clear individual responsibilities.",
  },
  {
    question: "How does time estimation work?",
    answer: "We use smart algorithms to suggest realistic time estimates for each task component, learning from your past completions to become more accurate over time.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-navy text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-navy/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 