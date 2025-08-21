import React, { useState, useEffect } from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { track } from '@vercel/analytics';

const CountUpAnimation = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          // Start the rapid count-up animation
          const increment = target / (duration / 30); // Faster updates for smoother animation
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              setHasAnimated(true);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { 
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Start animation a bit before the element is fully visible
      }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, target, duration, hasAnimated]);

  return <span ref={setElementRef}>{count}</span>;
};

export const LPADHDStruggles = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at middle position
  const [expandedCard, setExpandedCard] = useState(null); // For mobile tap-to-expand

  const strugglesItems = [
    {
      emoji: "🧠",
      title: "Your brain never stops racing",
      description: "Thoughts bounce everywhere, making it impossible to focus on what actually matters"
    },
    {
      emoji: "📱",
      title: "You've tried every app, system, and hack",
      description: "But they all demand too much setup, too many steps, or forget how ADHD brains actually work"
    },
    {
      emoji: "⚡",
      title: "You start strong, then crash",
      description: "Motivation comes in waves, but your to-do list keeps growing while energy disappears"
    },
    {
      emoji: "🔥",
      title: "You're always in crisis mode",
      description: "Reacting to the loudest urgency instead of making real progress on what you care about"
    },
    {
      emoji: "💭",
      title: "You have brilliant ideas that vanish",
      description: "By the time you find somewhere to write them down, they're gone"
    }
  ];

  const solutionsItems = [
    {
      emoji: "🎙️",
      title: "Voice-First, Always",
      description: "No typing. No menus. Just speak your thoughts and watch magic happen."
    },
    {
      emoji: "⚡",
      title: "Instant Organization",
      description: "\"Remind me to email Sarah after I finish the Johnson report and pick up groceries before 6pm\" → Claudia breaks this down, prioritizes it, and schedules it. Automatically."
    },
    {
      emoji: "🧠",
      title: "Built on science and experience",
      description: "Built on real neuroscience - reward loops, dopamine triggers, and motivation systems that actually work for ADHD brains."
    },
    {
      emoji: "🔗",
      title: "One App. Not Ten.",
      description: "Stop juggling 10 different apps and subscriptions. Claudia handles tasks, notes, reminders, goals, and routines all in one place."
    }
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= strugglesItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? strugglesItems.length - 1 : prevIndex - 1
    );
  };

  const handleCTAClick = () => {
    track('How we tackle this CTA');
    if (typeof window !== 'undefined') {
      window.location.href = 'https://app.neuro-notion.com';
    }
  };

  const renderCarousel = (items, currentIdx) => (
    <>
      {/* Mobile Cards View (visible on mobile only) */}
      <div className="block sm:hidden mb-6">
        <div className="space-y-3">
          {items.map((item, index) => (
            <Card 
              key={index} 
              className="bg-[#465e76] border border-gray-600 shadow-lg rounded-2xl animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-3">
                <div className="flex justify-center mb-2">
                  <div className="text-3xl">
                    {item.emoji}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#30bcd9] mb-1.5 text-center" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-xs text-white leading-relaxed text-center" style={{ fontWeight: 400 }}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Desktop 3D Carousel with Navigation (hidden on mobile) */}
      <div className="hidden sm:flex relative justify-center items-center mb-2" style={{ height: '400px', perspective: '1000px' }}>
        {/* Left Arrow */}
        <button
           onClick={() => goToPrevious()}
           className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#30bcd9] hover:bg-[#30bcd9]/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
         >
           <ChevronLeft className="h-6 w-6 text-black" />
         </button>

        {/* Carousel Container */}
        <div 
          className="relative" 
          style={{ 
            transformStyle: 'preserve-3d',
            height: '300px',
            width: '100%'
          }}
        >
          {items.map((item, index) => {
            const offset = index - currentIdx;
            const absOffset = Math.abs(offset);
            
            // Normalize offset for cyclical behavior
            let normalizedOffset = offset;
            if (offset > items.length / 2) {
              normalizedOffset = offset - items.length;
            } else if (offset < -items.length / 2) {
              normalizedOffset = offset + items.length;
            }
            
            const normalizedAbsOffset = Math.abs(normalizedOffset);
            
            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `
                    translate(-50%, -50%)
                    rotateY(${-15 * normalizedOffset}deg)
                    translateX(${-350 * normalizedOffset}px)
                    translateZ(${-100 * normalizedAbsOffset}px)
                  `,
                  zIndex: 10 - normalizedAbsOffset,
                  opacity: normalizedAbsOffset > 2 ? 0 : 1,
                  pointerEvents: normalizedAbsOffset > 2 ? 'none' : 'auto'
                }}
                onClick={() => goToSlide(index)}
              >
                <Card className="bg-[#465e76] border border-gray-600 shadow-lg rounded-2xl w-80 h-64 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <div className="flex justify-center mb-4">
                      <div className="text-4xl">
                        {item.emoji}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#30bcd9] mb-3" style={{ fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-white leading-relaxed flex-grow" style={{ fontWeight: 400 }}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => goToNext()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#30bcd9] hover:bg-[#30bcd9]/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 text-black" />
        </button>
      </div>

      {/* Radio button controls (hidden on mobile) */}
      <div className="hidden sm:flex justify-center space-x-3 mb-12 sm:mb-16 lg:mb-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIdx ? 'bg-[#30bcd9]' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </>
  );

  return (
    <section className="py-8 sm:py-12 lg:py-24 px-3 sm:px-4 bg-[#253550]">
      <div className="container mx-auto max-w-6xl">
        {/* Struggles Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-16">
          <div className="mb-3 sm:mb-4 lg:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              The ADHD Struggle
            </Badge>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            You&apos;re probably tired of the following...
          </h2>
        </div>

        {renderCarousel(strugglesItems, currentIndex)}

        {/* Solutions Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-16 mt-16 sm:mt-20 lg:mt-24">
          <div className="mb-3 sm:mb-4 lg:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              How We Tackle This
            </Badge>
          </div>
          

        </div>

        {/* Solutions Grid - Mobile with Quadrant Layout */}
        <div className="block sm:hidden relative max-w-sm mx-auto mb-8 px-2 h-64">
          {solutionsItems.map((item, index) => {
            const isExpanded = expandedCard === index;
            const defaultStyle = {
              top: index < 2 ? '0' : '50%',
              left: index % 2 === 0 ? '0' : '50%',
              width: '48%',
              height: '48%'
            };

            return (
              <div
                key={index}
                className={`absolute bg-[#465e76] border border-gray-600 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isExpanded ? '!top-0 !left-0 !w-full !h-full shadow-2xl shadow-[#30bcd9]/20 z-50' : ''
                }`}
                style={{
                  ...(!isExpanded ? defaultStyle : {}),
                  zIndex: isExpanded ? 50 : 10
                }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                {/* Default state - compact card */}
                <div className={`flex flex-col items-center justify-center h-full text-center p-2 transition-all duration-300 ${
                  isExpanded ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                }`}>
                  <div className="text-2xl mb-1">
                    {item.emoji}
                  </div>
                  <h3 className="text-[10px] font-bold text-[#30bcd9] leading-tight px-1" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                </div>

                {/* Expanded state - full content */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-center bg-[#465e76] border border-[#30bcd9]/50 rounded-xl transition-all duration-300 ${
                  isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}>
                  <button 
                    className="absolute top-3 right-3 text-white/60 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(null);
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="text-4xl mb-4">
                    {item.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-[#30bcd9] mb-3" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-white leading-relaxed" style={{ fontWeight: 400 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solutions Quadrant Grid - Desktop */}
        <div className="hidden sm:block relative max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0 h-48 sm:h-64">
          {solutionsItems.map((item, index) => {
            const defaultStyle = {
              top: index < 2 ? '0' : '50%',
              left: index % 2 === 0 ? '0' : '50%',
              width: '48%',
              height: '48%'
            };

            return (
              <div
                key={index}
                className="group absolute bg-[#465e76] border border-gray-600 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-[#30bcd9]/20 hover:!top-0 hover:!left-0 hover:!w-full hover:!h-full"
                style={{
                  ...defaultStyle,
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.zIndex = '50';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.zIndex = '10';
                }}
              >
                {/* Default state - compact card with just title and emoji */}
                <div className="flex flex-col items-center justify-center h-full text-center p-3 sm:p-4 transition-all duration-75 ease-out group-hover:opacity-0 group-hover:scale-75">
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 transition-all duration-75 ease-out group-hover:scale-50">
                    {item.emoji}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#30bcd9] leading-tight transition-all duration-75 ease-out group-hover:scale-50" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                </div>

                {/* Hover state - expanded card with full content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center items-center text-center opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 delay-100 bg-[#465e76] border border-[#30bcd9]/50 rounded-2xl">
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">
                    {item.emoji}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#30bcd9] mb-4 sm:mb-6" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white leading-relaxed max-w-md" style={{ fontWeight: 400 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center px-2 sm:px-0">
          <div className="flex flex-col items-center space-y-4">
            <Button 
              className="w-full sm:w-auto bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-4 px-8 sm:px-12 rounded-xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_3s_ease-in-out_infinite]"
              style={{ fontWeight: 700 }}
              onClick={handleCTAClick}
            >
              Try Claudia Free
            </Button>
            
            <p className="text-sm text-gray-400" style={{ fontWeight: 400 }}>
              ✓ No card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 