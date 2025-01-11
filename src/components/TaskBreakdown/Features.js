import { Brain, ListChecks, Sparkles, Clock, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "ADHD-Optimized",
    description: "Task breakdown patterns designed specifically for neurodivergent minds",
  },
  {
    icon: ListChecks,
    title: "Smart Breakdown",
    description: "AI-powered system that helps break complex tasks into manageable steps",
  },
  {
    icon: Sparkles,
    title: "Visual Progress",
    description: "Clear visual representation of your task progress and achievements",
  },
  {
    icon: Clock,
    title: "Time Estimation",
    description: "Realistic time estimates for each task component",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Share and collaborate on task breakdowns with team members",
  },
  {
    icon: Shield,
    title: "Structured Freedom",
    description: "Flexible system that provides structure without being rigid",
  },
];

export default function Features() {
  return (
    <section className="bg-lavender py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Features That Make Task Management Simple
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-navy mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
              <p className="text-navy/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 