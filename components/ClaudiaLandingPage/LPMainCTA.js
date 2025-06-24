import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Check, Target, Users, Brain } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const LPMainCTA = () => {
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation();

  const features = [
    "Complete ADHD Productivity OS",
    "Weekly group coaching calls",
    "Private community access",
    "Proven planning templates",
    "Email & chat support",
    "30-day money-back guarantee"
  ];

  const leftSideFeatures = [
    {
      icon: Target,
      title: "Start your transformation today",
      description: "Get immediate access to our complete ADHD productivity system with a 30-day free trial. No card needed."
    },
    {
      icon: Users,
      title: "Join a thriving community of ADHD entrepreneurs",
      description: "Connect with like-minded business owners who understand your challenges and celebrate your wins."
    },
    {
      icon: Brain,
      title: "ADHD-specific tools that actually work",
      description: "Every system, template, and strategy is designed specifically for how the ADHD brain operates - no generic advice here."
    }
  ];

  const ctaIcons = [
    { icon: Check, text: "No card needed" },
    { icon: Check, text: "30-day money-back guarantee" },
    { icon: Check, text: "Cancel anytime" }
  ];

  const handleCTAClick = () => {
    window.open('https://buy.stripe.com/aEU9E41pL56efMA5kR', '_blank');
  };

  return (
    <section className="py-12 sm:py-18 lg:py-24 px-3 sm:px-4 bg-[#1e2a4a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              Start Your Free Trial
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            Ready to Stop <span className="text-[#30bcd9]">Spinning Your Wheels?</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0" style={{ fontWeight: 400 }}>
            Join thousands of ADHD entrepreneurs who are finally breaking through to consistent growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - Features */}
          <div 
            ref={leftRef}
            className={`space-y-6 sm:space-y-8 transition-all duration-700 px-2 sm:px-0 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {leftSideFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4">
                                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#30bcd9]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="h-5 sm:h-6 w-5 sm:w-6 text-[#30bcd9]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2" style={{ fontWeight: 700 }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Pricing Card */}
          <div 
            ref={rightRef}
            className={`lg:sticky lg:top-8 transition-all duration-700 px-2 sm:px-0 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <Card className="bg-[#2C3E50] border border-gray-600 shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#30bcd9] mb-2" style={{ fontWeight: 700 }}>
                    ADHD Productivity OS
                  </h3>
                  <p className="text-white text-sm sm:text-base" style={{ fontWeight: 400 }}>
                    Complete productivity system for ADHD entrepreneurs
                  </p>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="text-xs sm:text-sm text-gray-300 mb-2" style={{ fontWeight: 400 }}>
                    30-day free trial, then
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1" style={{ fontWeight: 700 }}>
                    $95<span className="text-base sm:text-lg text-gray-300">/month</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#30bcd9]" style={{ fontWeight: 400 }}>
                    Cancel anytime
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-[#30bcd9] font-bold mb-3 sm:mb-4 text-left text-sm sm:text-base" style={{ fontWeight: 700 }}>
                    What's included:
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 sm:gap-3 text-left">
                                              <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#30bcd9]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-[#30bcd9]" />
                        </div>
                        <span className="text-white text-xs sm:text-sm" style={{ fontWeight: 400 }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}; 