import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Input Your Task",
    description: "Start by entering your main task or project goal",
    image: "/task-input.png"
  },
  {
    title: "AI Breakdown",
    description: "Our AI analyzes and breaks down your task into manageable steps",
    image: "/ai-breakdown.png"
  },
  {
    title: "Customize & Adjust",
    description: "Modify the breakdown to match your specific needs and preferences",
    image: "/customize.png"
  },
  {
    title: "Track & Complete",
    description: "Follow your progress and celebrate each completed step",
    image: "/track-complete.png"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          How Task Breakdown Works
        </h2>
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 animate-fadeIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-navy mb-4">{step.title}</h3>
                <p className="text-lg text-navy/80 mb-6">{step.description}</p>
                <Button size="lg" className="bg-navy hover:bg-navy/90 text-white">
                  Try it Now <ArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="md:w-1/2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 