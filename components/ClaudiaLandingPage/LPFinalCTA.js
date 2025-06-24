import React from 'react';
import { Button } from '../ui/button';

export const LPFinalCTA = () => {
  const handleCTAClick = () => {
    window.open('https://buy.stripe.com/aEU9E41pL56efMA5kR', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-[#1e2a4a]">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white" style={{ fontWeight: 700 }}>
          Stop Fighting Your ADHD Brain.
          <br />
          <span className="text-[#30bcd9]">
            Start Working With It.
          </span>
        </h1>

        <p className="mb-6 sm:mb-8 text-lg sm:text-xl text-gray-300 px-4 lg:px-16 leading-relaxed" style={{ fontWeight: 400 }}>
          The <strong style={{ fontWeight: 700 }}>AI personal assistant built specifically for ADHD minds</strong>. 
          Transform your chaotic thoughts into organized action.
        </p>

        <div className="mb-6 sm:mb-8">
          <Button 
            className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-4 px-12 rounded-xl text-lg sm:text-xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_3s_ease-in-out_infinite]"
            style={{ fontWeight: 700 }}
            onClick={handleCTAClick}
          >
            Try Claudia Free
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400 mb-4" style={{ fontWeight: 400 }}>
            ✓ No credit card required
          </p>
          
          {/* Star Rating */}
          <div className="flex flex-col items-center space-y-1">
            <span className="text-2xl sm:text-3xl text-yellow-400">
              ⭐⭐⭐⭐⭐
            </span>
            <span className="text-sm sm:text-base text-gray-300" style={{ fontWeight: 400 }}>
              4.9/5 from other ADHDers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}; 