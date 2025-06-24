import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Check, XCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const LPTheDifference = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-18 lg:py-24 px-3 sm:px-4 bg-[#253550]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              What Makes Neuro Different
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            Why This Works When Everything Else Failed
          </h2>
        </div>

        <div ref={elementRef} className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-0">
          {/* Other Tools - Left Side with slide in from left */}
          <Card className={`border border-red-200 bg-red-50/10 h-full transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <XCircle className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                </div>
                <CardTitle className="text-red-400 text-base sm:text-lg" style={{ fontWeight: 700 }}>Other &quot;ADHD-Friendly&quot; Tools:</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>Built for neurotypicals, then adapted</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>Overwhelm you with features and options</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>Demand perfect input and maintenance</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>Treat ADHD like a problem to solve</p>
              </div>
            </CardContent>
          </Card>

          {/* Neuro's ADHD-First Design - Right Side with slide in from right */}
          <Card className={`border border-green-200 bg-green-50/10 h-full transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                </div>
                <CardTitle className="text-green-400 text-base sm:text-lg" style={{ fontWeight: 700 }}>Neuro&apos;s ADHD-First Design:</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>Engineered specifically for ADHD brains</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>Reduces friction to near-zero</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>Gets smarter the more chaotic your input</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>Celebrates how your mind actually works</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}; 