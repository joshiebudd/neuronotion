import { cn } from "../lib/utils";

const Feature = ({ title, description, icon, className }) => {
  return (
    <div className={cn("relative flex flex-col h-full p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center", className)}>
      <div className="mb-6 mx-auto p-3 w-fit rounded-md bg-[#30bcd9]/20 text-[#30bcd9]">
        {icon}
      </div>
      <h3 className="text-2xl font-medium mb-4 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 px-4 container mx-auto bg-[#1e2a4a]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Use Claudia?</h2>
        <p className="max-w-2xl mx-auto text-white/80 text-base md:text-lg">
          Our AI life management platform is specifically designed for ADHD brains, reducing cognitive load 
          and helping you build an organized life with minimal effort.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Feature
          title="Brain-Friendly"
          description="Works with your ADHD brain, not against it. No more fighting your neurology."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 15L10 12M10 12L7 9M10 12H4M4 19H15C17.7614 19 20 16.7614 20 14C20 11.2386 17.7614 9 15 9H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        
        <Feature
          title="Friction-Free"
          description="Just speak your thoughts. No complex systems to learn or maintain."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        
        <Feature
          title="Zero Overwhelm"
          description="Claudia handles the mental load of organizing so you don&apos;t have to."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 9.5C9 10.0523 8.55228 10.5 8 10.5C7.44772 10.5 7 10.0523 7 9.5C7 8.94772 7.44772 8.5 8 8.5C8.55228 8.5 9 8.94772 9 9.5Z" fill="currentColor"/>
              <path d="M17 9.5C17 10.0523 16.5523 10.5 16 10.5C15.4477 10.5 15 10.0523 15 9.5C15 8.94772 15.4477 8.5 16 8.5C16.5523 8.5 17 8.94772 17 9.5Z" fill="currentColor"/>
            </svg>
          }
        />
      </div>
    </section>
  );
};

export default FeatureSection; 