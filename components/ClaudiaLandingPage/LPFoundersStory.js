import React from 'react';
import { Badge } from '../ui/badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const LPFoundersStory = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 sm:py-18 lg:py-24 px-3 sm:px-4 bg-[#253550]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              Founder's Story
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            Built for ADHDers, by ADHDers
          </h2>
        </div>

        <div 
          ref={elementRef}
          className={`transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-[#2C3E50] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontWeight: 400 }}>
                Hi, I'm [Founder Name], and I've lived with ADHD my entire life. Like you, I've tried every productivity system, app, and "life hack" out there. Most were built by neurotypical minds for neurotypical brains.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontWeight: 400 }}>
                After years of struggling with traditional productivity methods that just didn't work for my ADHD brain, I decided to build something different. Something that actually understands how we think, process information, and get things done.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontWeight: 400 }}>
                Claudia isn't just another AI assistant. She's designed from the ground up to work with ADHD brains, not against them. Every feature, every interaction, every response is crafted to reduce friction and amplify your natural strengths.
              </p>
              
              <div className="bg-[#30bcd9]/10 border-l-4 border-[#30bcd9] p-4 sm:p-6 rounded-r-lg mb-6">
                <p className="text-base sm:text-lg text-white italic mb-0" style={{ fontWeight: 400 }}>
                  "We're not trying to fix you. We're building tools that celebrate how your mind actually works."
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-300 mb-0 leading-relaxed" style={{ fontWeight: 400 }}>
                Today, over 540+ ADHDers use Claudia to transform their chaotic thoughts into organized action. We're not just building a product – we're building a community of people who understand that ADHD isn't a limitation, it's a superpower that just needs the right tools to shine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 