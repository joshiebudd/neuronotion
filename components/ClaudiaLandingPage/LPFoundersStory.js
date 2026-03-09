import React from 'react';
import { Badge } from '../ui/badge';

export const LPFoundersStory = () => {
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
            Built for ADHDers, by ADHDers
          </h2>
        </div>

        {/* Static Card - Always Open */}
        <div className="flex justify-center mb-6">
          <div className="w-fit max-w-4xl">
            <div className="bg-[#465e76] rounded-xl shadow-lg overflow-hidden">
              <div className="px-4 sm:px-5 py-6 sm:py-8">
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
    </section>
  );
};
