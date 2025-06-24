import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const LPHowItWorks = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleCTAClick = () => {
    window.open('https://buy.stripe.com/aEU9E41pL56efMA5kR', '_blank');
  };

  return (
    <section className="py-12 sm:py-18 lg:py-24 bg-[#253550]">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-4 sm:mb-6">
              <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
                How it Works
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
              4 steps away from a productive you.
            </h2>
          </div>

          {/* Interactive Demo Placeholder */}
          <div 
            ref={elementRef} 
            className={`mb-10 sm:mb-16 lg:mb-20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] border-2 border-dashed border-[#30bcd9]/30 rounded-2xl h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center mx-2 sm:mx-0">
              <div className="text-center px-4">
                <div className="text-[#30bcd9] text-xl sm:text-2xl lg:text-3xl font-bold mb-4" style={{ fontWeight: 700 }}>
                  Interactive demo goes here.
                </div>
                <div className="text-white text-base sm:text-lg lg:text-xl" style={{ fontWeight: 400 }}>
                  Demo of brain dump claudia
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 sm:mt-16 lg:mt-20 px-2 sm:px-0">
            <div className="flex flex-col items-center space-y-4">
              <Button 
                className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-4 px-12 rounded-xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_3s_ease-in-out_infinite]"
                style={{ fontWeight: 700 }}
                onClick={handleCTAClick}
              >
                Try Claudia Free
              </Button>
              
              <p className="text-sm text-gray-400" style={{ fontWeight: 400 }}>
                ✓ No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 