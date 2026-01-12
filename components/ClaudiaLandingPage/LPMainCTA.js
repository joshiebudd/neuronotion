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
      name: "Claudia Plus",
      price: 19,
      originalPrice: null,
      period: "/month",
      bestFor: "Everyone ready to transform their ADHD experience",
      features: [
        "Unlimited conversations with Claudia",
        "Unrestricted access to all AI functionality",
        "AI Scheduling",
        "AI Project Prioritization",
        "AI Task Breakdown",
        "AI Journaling",
        "Automatic Mood Detection",
        "Deep AI Analytics",
        "Routines and Protocols",
        "and more!"
      ],
      popular: true
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
              Start Your 7-Day Free Trial
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            Simple, Transparent <span className="text-[#30bcd9]">Pricing</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0" style={{ fontWeight: 400 }}>
            One plan. Everything included. No limits. Transform your ADHD chaos into organized productivity.
          </p>
        </div>

        <div 
          ref={headerRef}
          className={`flex justify-center transition-all duration-700 mb-16 sm:mb-24 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {pricingTiers.map((tier, index) => (
            <Card 
              key={tier.name} 
              className="bg-[#465e76] border-2 border-[#30bcd9] shadow-2xl rounded-2xl hover:shadow-2xl transition-all duration-300 relative transform scale-105 max-w-md w-full"
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#30bcd9] text-black font-bold py-1 px-3" style={{ fontWeight: 700 }}>
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#30bcd9] mb-3" style={{ fontWeight: 700 }}>
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white" style={{ fontWeight: 700 }}>
                      ${tier.price}
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
                  </div>

                  <div>
                    <Button 
                      className="w-full bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black hover:shadow-2xl hover:shadow-[#30bcd9]/20 font-bold py-4 px-6 rounded-xl text-sm shadow-lg transform hover:scale-105 transition-all duration-300 mb-3"
                      style={{ fontWeight: 700 }}
                      onClick={() => handleTierCTAClick(tier.name)}
                    >
                      Start Free Trial
                    </Button>
                    
                    <div className="h-6 flex items-center justify-center">
                      <p className="text-xs text-gray-400" style={{ fontWeight: 400 }}>
                        <Check className="h-3 w-3 inline mr-1" />
                        No card required
                      </p>
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

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12" style={{ fontWeight: 700 }}>
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                question: "What's included in the subscription?",
                answer: "Everything! You get unlimited access to all features, including all agents and voice conversations. No limits, no restrictions."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes! You can cancel your subscription at any time. No questions asked, no cancellation fees."
              },
              {
                question: "How does the free trial work?",
                answer: "Start your 7-day free trial with full access to all features. No credit card required. After the trial, continue for just $19/month."
              },
              {
                question: "Do I need a credit card for the free trial?",
                answer: "Nope! Start your free trial without entering any payment information. You'll only need to add payment details if you decide to continue after the trial."
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
            Start Free Trial
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
