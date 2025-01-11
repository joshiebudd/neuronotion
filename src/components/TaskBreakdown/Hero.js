import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-mint min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 animate-fadeIn">
          Break Down Tasks, Build Up Success
        </h1>
        <p className="text-xl md:text-2xl text-navy/80 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Transform complex tasks into manageable steps with our ADHD-friendly task breakdown system
        </p>
        <Button
          size="lg"
          className="bg-navy hover:bg-navy/90 text-white px-8 py-6 text-lg animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          Get Started <ArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="mt-20 w-full max-w-4xl mx-auto">
        <img
          src="/task-breakdown-demo.png"
          alt="Task Breakdown Interface"
          className="w-full rounded-lg shadow-xl animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        />
      </div>
    </section>
  );
} 