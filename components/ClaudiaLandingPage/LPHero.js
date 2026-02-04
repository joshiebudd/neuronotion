    import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { VideoPlayer } from '../VideoPlayer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { track } from '@vercel/analytics';

export const LPHero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleCTAClick = () => {
    track('Hero CTA');
    if (typeof window !== 'undefined') {
      window.location.href = 'https://app.neuro-notion.com';
    }
  };

  return (
    <section className="pt-24 sm:pt-20 lg:pt-24 pb-0 px-3 sm:px-4 bg-[#1e2a4a]">
      <div className="container mx-auto max-w-[1400px]">
        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Content - 50% */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-white mb-3 sm:mb-4 leading-normal sm:leading-tight" style={{ fontWeight: 700 }}>
              The ADHD Companion
              <br className="sm:hidden" />
              {' '}
              <br />
              <span className="text-[#30bcd9]">That <span className="italic">actually</span> works.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0" style={{ fontWeight: 400 }}>
              Claudia truly understands how your ADHD brain works. Speak your thoughts (however messy) and she&apos;ll work through it with you, so you can feel in control for the first time.
            </p>
            
            <div className="flex flex-col items-center lg:items-start space-y-3 sm:space-y-4">
              <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-2 sm:space-y-0 lg:space-x-6">
                <Button 
                  className="w-full sm:w-auto bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-4 px-8 sm:px-12 rounded-xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_3s_ease-in-out_infinite]"
                  style={{ fontWeight: 700 }}
                  onClick={handleCTAClick}
                >
                  Try Claudia Free
                </Button>
                <p className="text-sm text-gray-400 lg:hidden" style={{ fontWeight: 400 }}>
                  ✓ No card required
                </p>
                
                {/* Star Ratings Section - Inline with button */}
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-lg text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-300" style={{ fontWeight: 400 }}>4.9/5 from other ADHDers.</span>
                </div>
              </div>
              
              <p className="hidden lg:block text-sm text-gray-400" style={{ fontWeight: 400 }}>
                ✓ No card required
              </p>
              <div className="mt-3">
                <img 
                  src="https://NeuroNotionPullZonw.b-cdn.net/Untitled%20design%20(64).png" 
                  alt="Trusted badges"
                  loading="lazy"
                  className="w-36 sm:w-44 md:w-52 h-auto object-contain mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Image - 50% */}
          <div className="mt-6 sm:mt-4 lg:mt-0">
            <img 
              src="https://NeuroNotionPullZonw.b-cdn.net/ClaudiaOfficialupdatedshadowedmockup%20webp.webp" 
              alt="Claudia AI Personal Assistant Demo"
              className="w-full h-auto rounded-lg transform scale-[1.1] hover:scale-[1.12] transition-transform duration-300 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 