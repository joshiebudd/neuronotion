import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { VideoPlayer } from '../VideoPlayer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const LPHero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleCTAClick = () => {
    window.open('https://buy.stripe.com/aEU9E41pL56efMA5kR', '_blank');
  };

  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-4 bg-[#1e2a4a]">
      <div className="container mx-auto max-w-[1400px]">
        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Content - 50% */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontWeight: 700 }}>
              The AI Personal Assistant
              <br className="hidden sm:block" />
              <span className="text-[#30bcd9]">Engineered for ADHD</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0" style={{ fontWeight: 400 }}>
              Claudia is the personal assistant you&apos;ve never had... that gets your ADHD brain. Voice your chaotic thoughts. Watch them transform into organized action. Feel in control for the first time.
            </p>
            
                        <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                <Button 
                  className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-4 px-12 rounded-xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_3s_ease-in-out_infinite]"
                  style={{ fontWeight: 700 }}
                  onClick={handleCTAClick}
                >
                  Try Claudia Free
                </Button>
                
                {/* Star Ratings Section - Inline with button */}
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-lg text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-300" style={{ fontWeight: 400 }}>4.9/5 from other ADHDers.</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-400" style={{ fontWeight: 400 }}>
                ✓ No credit card required
              </p>
            </div>
          </div>

          {/* Right Image - 50% */}
          <div className="mt-6 sm:mt-4 lg:mt-0">
            <img 
              src="https://NeuroNotionPullZonw.b-cdn.net/Claudia%20-%20Static%20Demo%20cropped.png" 
              alt="Claudia AI Personal Assistant Demo"
              className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 