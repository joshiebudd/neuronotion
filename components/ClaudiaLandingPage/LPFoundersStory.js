import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const LPFoundersStory = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 bg-[#253550]">
      <div className="container mx-auto max-w-4xl">
        
        {/* Always visible pill and title */}
        <div className="text-center mb-6">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              Founder&apos;s Story
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            Clinically built for ADHDers, by ADHDers
          </h2>
        </div>

        {/* Single Card with Expansion */}
        <div className="flex justify-center mb-6">
          <div className={`w-fit transition-all duration-300 ${isExpanded ? 'max-w-4xl' : 'max-w-fit'}`}>
            <div className="bg-[#465e76] rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl overflow-hidden">
              {/* Clickable Header */}
              <div 
                className="group cursor-pointer px-6 py-6 sm:px-8 sm:py-8 hover:bg-[#4a6280] transition-all duration-300"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#30bcd9] transition-colors duration-300 leading-tight whitespace-nowrap" style={{ fontWeight: 700 }}>
                      Read more about the founder&apos;s story
                    </h3>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-white/60 group-hover:text-[#30bcd9] transition-all duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-[#30bcd9] transition-all duration-300" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div 
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isExpanded ? '2000px' : '0',
                  opacity: isExpanded ? 1 : 0
                }}
              >
                <div className="px-4 sm:px-5 pb-3 sm:pb-4">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed" style={{ fontWeight: 400 }}>
                      Hi, I&apos;m Josh, and I&apos;m diagnosed severe combined ADHD. By age 11 I&apos;d been expelled from 13 schools and discarded as a &quot;problem child&quot;.
                    </p>
                    
                    <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed" style={{ fontWeight: 400 }}>
                      As an adult, I&apos;ve tried every productivity/life management system, app, and &quot;ADHD hack&quot; out there. Most were built by neurotypical minds for neurotypical brains. Some of those slapped an &quot;ADHD friendly&quot; label on there.
                    </p>
                    
                    {/* Josh's Photo */}
                    <div className="flex justify-center my-4">
                      <div className="relative">
                        <img
                          src="https://NeuroNotionPullZonw.b-cdn.net/Avatars/0046-DSCF5673%20(2).jpg"
                          alt="Josh - Founder of Claudia"
                          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl"
                        />
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed" style={{ fontWeight: 400 }}>
                      This just didn&apos;t work for my ADHD brain, so I spent two years building my own (in true ADHD fashion 😂). Something that actually understands how we think, process information, and get things done.
                    </p>
                    
                    <p className="text-base sm:text-lg text-gray-300 mb-0 leading-relaxed" style={{ fontWeight: 400 }}>
                      We are all unique, but there are some things that 95% of us with ADHD struggle with, Claudia tries to make managing those things 10x easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 