import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Check, Target, Users, Brain, CheckCircle, ChevronDown, ChevronUp, Timer } from 'lucide-react';
import { CgSandClock } from 'react-icons/cg';
import { track } from '@vercel/analytics';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const LPMainCTA = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const pricingTiers = [
    {
      name: "Free",
      price: 0,
      originalPrice: null,
      period: "",
      credits: "10 Claudia credits/month (~10 minutes)",
      bestFor: "Curious Users",
      features: [
        "Full unrestricted access. Except from Voice Agents",
        "10 Claudia credits/month (~10 minutes)"
      ]
    },
    {
      name: "Standard",
      price: 19,
      originalPrice: 29,
      period: "/month",
      credits: "60 Claudia credits/month (~1 hour of conversation)",
      bestFor: "Serious about making change",
      features: [
        "60 Claudia credits/month (~1 hour of conversation)",
        "Access to all agents"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: 34,
      originalPrice: 49,
      period: "/month",
      credits: "120 Claudia credits/month (~2 hours of conversation)",
      bestFor: "Self-improvement people",
      features: [
        "120 Claudia credits/month (~2 hours of conversation)",
        "Access to all agents"
      ]
    },
    {
      name: "Pro",
      price: 69,
      originalPrice: 99,
      period: "/month",
      credits: "240 Claudia credits/month (~4 hours of conversation)",
      bestFor: "Power users",
      features: [
        "240 Claudia credits/month (~4 hours of conversation)",
        "Access to all agents"
      ]
    }
  ];

  const handleCTAClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://app.neuro-notion.com';
    }
  };

  const handleTierCTAClick = (tierName) => {
    track(`Get Started ${tierName}`);
    if (typeof window !== 'undefined') {
      window.location.href = 'https://app.neuro-notion.com';
    }
  };

  const handleFAQClick = (index) => {
    const eventName = `FAQ ${index + 1}`;
    track(eventName);
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-[#1e2a4a] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              Start Your Free Trial
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            Choose Your <span className="text-[#30bcd9]">Claudia Plan</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0" style={{ fontWeight: 400 }}>
            Find the perfect plan to transform your ADHD chaos into organized productivity.
          </p>
        </div>

        <div 
          ref={headerRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-700 mb-16 sm:mb-24 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {pricingTiers.map((tier, index) => (
            <Card 
              key={tier.name} 
              className={`${
                tier.price === 0 
                  ? 'bg-gray-700/50 border border-gray-600' 
                  : 'bg-[#465e76] border-0'
              } shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 relative ${
                tier.popular ? 'border-2 border-[#30bcd9] transform scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#30bcd9] text-black font-bold py-1 px-3" style={{ fontWeight: 700 }}>
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 text-center h-full flex flex-col min-h-[550px]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#30bcd9] mb-3" style={{ fontWeight: 700 }}>
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    {tier.originalPrice && (
                      <div className="mb-2">
                        <span className="text-lg text-gray-400 line-through">
                          ${tier.originalPrice}{tier.period}
                        </span>
                      </div>
                    )}
                    <span className="text-4xl font-bold text-white" style={{ fontWeight: 700 }}>
                      {tier.price === 0 ? 'Free' : `$${tier.price}`}
                    </span>
                    {tier.period && (
                      <span className="text-lg text-gray-300">{tier.period}</span>
                    )}
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="space-y-4 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 text-left">
                          <CheckCircle className="h-5 w-5 text-[#30bcd9] flex-shrink-0 mt-0.5" />
                          <span className="text-white text-sm" style={{ fontWeight: 400 }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-[#30bcd9]/10 rounded-lg mb-8">
                      <div className="flex items-center gap-2 justify-center">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-white" style={{ fontWeight: 400 }}>
                          Best for: {tier.bestFor}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Button 
                      className={`w-full font-bold py-4 px-6 rounded-xl text-sm shadow-lg transform hover:scale-105 transition-all duration-300 mb-3 ${
                        tier.popular 
                          ? 'bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black hover:shadow-2xl hover:shadow-[#30bcd9]/20' 
                          : tier.price === 0
                          ? 'bg-gray-600 hover:bg-gray-500 text-white border border-gray-500'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      }`}
                      style={{ fontWeight: 700 }}
                      onClick={() => handleTierCTAClick(tier.name)}
                    >
                      Get Started
                    </Button>
                    
                    <div className="h-6 flex items-center justify-center">
                      {tier.price === 0 && (
                        <p className="text-xs text-gray-400" style={{ fontWeight: 400 }}>
                          <Check className="h-3 w-3 inline mr-1" />
                          No card required
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Contact Button */}
        <div className="text-center mb-16">
          <button 
            className="bg-gray-600/50 text-gray-400 font-bold py-3 px-8 rounded-xl text-sm cursor-not-allowed border border-gray-600"
            style={{ fontWeight: 700 }}
            disabled
          >
            Contact josh@neuro-notion.com for Enterprise pricing
          </button>
        </div>

        {/* What can you do with credits section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6" style={{ fontWeight: 700 }}>
              What can you do with credits?
            </h3>
            <div className="bg-[#253550] p-8 rounded-2xl">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-4 h-4 bg-[#30bcd9] rounded-full"></div>
                <span className="text-[#30bcd9] text-xl font-semibold">Pay for what you use</span>
                <div className="w-4 h-4 bg-[#30bcd9] rounded-full"></div>
                <span className="text-[#30bcd9] text-xl font-semibold">Scale up when you need more</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CgSandClock className="h-8 w-8 text-white flex-shrink-0" />
                <h4 className="text-xl font-bold text-white">
                  Speaking with Claudia for 1 minute uses 1 credit. Nothing else uses credits.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12" style={{ fontWeight: 700 }}>
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                question: "How do Claudia credits work?",
                answer: "Each credit represents one minute of voice conversation with Claudia. Credits reset monthly with your plan."
              },
              {
                question: "Can I upgrade or downgrade my plan anytime?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on the next billing period."
              },
              {
                question: "What if I run out of credits?",
                answer: "If you run out of credits, you can either upgrade to a higher plan or purchase additional credit packs. We'll notify you when you're running low."
              },
              {
                question: "Is Claudia free forever?",
                answer: "If you never use more than 10 credits per month, Claudia will be free forever!"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#253550] rounded-xl overflow-hidden">
                <button
                  onClick={() => handleFAQClick(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#2a3d57] transition-colors"
                >
                  <h4 className="text-lg font-bold text-[#30bcd9]">{faq.question}</h4>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[#30bcd9] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#30bcd9] flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6" style={{ fontWeight: 700 }}>
            Ready to make living with ADHD 10x easier?
          </h3>
          <Button 
            className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-4 px-12 rounded-xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            style={{ fontWeight: 700 }}
            onClick={() => { track('PricingPageCTA'); handleCTAClick(); }}
          >
            Get Started
          </Button>
          <p className="text-sm text-gray-400 mt-4" style={{ fontWeight: 400 }}>
            <Check className="h-3 w-3 inline mr-1" />
            No card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}; 