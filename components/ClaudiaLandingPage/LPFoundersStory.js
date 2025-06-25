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
              Founder&apos;s Story
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
          <div className="bg-[#465e76] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontWeight: 400 }}>
                Hi, I&apos;m Josh, and I&apos;m diagnosed severe combined ADHD. By age 11 I&apos;d been expelled from 13 schools and discarded as a &quot;problem child&quot;.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontWeight: 400 }}>
                As an adult, I&apos;ve tried every productivity/life management system, app, and &quot;ADHD hack&quot; out there. Most were built by neurotypical minds for neurotypical brains. Some of those slapped an &quot;ADHD friendly&quot; label on there.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed" style={{ fontWeight: 400 }}>
                This just didn&apos;t work for my ADHD brain, so I spent two years building my own (in true ADHD fashion 😂). Something that actually understands how we think, process information, and get things done.
              </p>
              
              <div className="bg-[#30bcd9]/10 border-l-4 border-[#30bcd9] p-4 sm:p-6 rounded-r-lg mb-6">
                <p className="text-base sm:text-lg text-white italic mb-0" style={{ fontWeight: 400 }}>
                  &quot;Claudia isn&apos;t just another AI assistant or ChatGPT wrapper. She&apos;s designed from the ground up to work with ADHD brains, not against them. Every feature, every interaction, every response is crafted to reduce friction and let you lean into your natural strengths.&quot;
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-300 mb-0 leading-relaxed" style={{ fontWeight: 400 }}>
                We are all unique, but there are some things that 95% of us with ADHD struggle with, Claudia tries to make managing those things 10x easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 