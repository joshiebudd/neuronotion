import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const LPFAQs = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "I've tried so many ADHD apps. How is this different?",
      answer: "Most apps are built for neurotypical brains and then \"adapted\" for ADHD. Neuro is built from the ground up based on ADHD neuroscience. Every interaction is designed to work with your brain, not against it."
    },
    {
      question: "What if I forget to use it?",
      answer: "That's exactly why we built it voice-first with smart nudging. Claudia learns your patterns and gently reminds you when you need her most - without being annoying."
    },
    {
      question: "I'm not good with technology. Is this complicated?",
      answer: "If you can have a conversation, you can use Claudia. Just speak your thoughts. Everything else happens automatically."
    },
    {
      question: "Will this actually stick, or will I abandon it like everything else?",
      answer: "Neuro is designed for ADHD consistency patterns. It gets easier the more you use it, not harder. Plus, it adapts when your routines change instead of breaking."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-18 lg:py-24 px-3 sm:px-4 bg-[#253550]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              Questions from Fellow ADHDers
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            You're Not Alone in Wondering...
          </h2>
        </div>

        <div 
          ref={elementRef}
          className={`space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#2C3E50] rounded-2xl border border-gray-600 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-[#34495E] transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base sm:text-lg font-bold text-white pr-4" style={{ fontWeight: 700 }}>
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-[#30bcd9] flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#30bcd9] flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed" style={{ fontWeight: 400 }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 