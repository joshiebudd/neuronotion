import React, { useState, useEffect } from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { track } from '@vercel/analytics';

const CountUpAnimation = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export const LPTestimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const testimonials = [
    {
      amount: "Finally Found Peace",
      quote: "It helps me sort out all the junk in my brain to sort, prioritize, and understand every part of your brain and life. LOVE IT!",
      name: "Ramona",
      location: "Social Worker",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/ramona.jpg"
    },
    {
      amount: "No More Fighting My Brain", 
      quote: "I've given up on countless ADHD tools that never worked for me. This one finally understands how my brain actually works.",
      name: "Ryan",
      location: "Student",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/Ryan.webp"
    },
    {
      amount: "Structure I Always Needed",
      quote: "It has the structure that I need and struggle coming up with myself. This helps me keep on track with my tasks, projects and goals.", 
      name: "Amy",
      location: "Teacher",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/amy.jpg"
    },
    {
      amount: "Perfect Amount of Function",
      quote: "Usually new tools overwhelm me with too many functions. This has just the right amount.",
      name: "Matt",
      location: "Software Developer",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Matt.png"
    },
    {
      amount: "Lightning Fast Capture",
      quote: "I can get stuff out of my brain within seconds. I save time and energy, and remember better too.",
      name: "Ayush",
      location: "UI Designer",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/ayush.webp"
    },
    {
      amount: "Stays With Me Through Change",
      quote: "Just moved to a new state and started a new job - this made it so easy to stay on top of everything I need to do and not fall into chaos.",
      name: "Parker",
      location: "Sales Rep",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/parker.webp"
    },
    {
      amount: "Finally Productive",
      quote: "I've always been productive, but for the first time in my life, I actually feel good most of the time. I feel in control.",
      name: "Michelle",
      location: "Marketing Manager",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/michelle.jpg"
    },
    {
      amount: "Game Changer",
      quote: "The past 5 years of my life have been chaos. Then I found Claudia and within a few weeks, everything felt 10x calmer.",
      name: "Liv",
      location: "User",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/tanya.jpg"
    },
    {
      amount: "Stress-Free Organization",
      quote: "I've never been so organized, self reflective, and stress-free in my whole life. Where has this been hiding!?",
      name: "Lisa",
      location: "Project Manager",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/michelle2.jpg"
    }
  ];

  const handleStartResultsClick = () => {
    track('Testimonials CTA');
    if (typeof window !== 'undefined') {
      window.location.href = 'https://app.neuro-notion.com';
    }
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-3 sm:px-4 bg-[#1e2a4a]" data-section="testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              The Results
            </Badge>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            &quot;Living with ADHD is 10x easier now.&quot;
          </h2>
        </div>

        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-[#465e76] border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center flex flex-col items-center justify-center h-full">
                <div className="text-lg sm:text-xl font-bold text-[#30bcd9] mb-4 sm:mb-6 text-center" style={{ fontWeight: 700 }}>
                  {testimonial.amount}
                </div>
                <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 italic leading-relaxed text-center flex-grow flex items-center" style={{ fontWeight: 400 }}>
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#30bcd9] rounded-full flex items-center justify-center overflow-hidden">
                    {testimonial.avatar ? (
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-xs sm:text-sm font-bold" style={{ fontWeight: 700 }}>{testimonial.name[0]}</span>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-semibold text-white" style={{ fontWeight: 700 }}>{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-300" style={{ fontWeight: 400 }}>{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xl sm:text-2xl italic font-medium text-white px-2 sm:px-0" style={{ fontWeight: 400 }}>
            Real results from <span className="text-[#30bcd9]"><CountUpAnimation target={1026} />+</span> Real ADHDers who regained control over their lives.
          </p>
        </div>

        <div className="text-center px-2 sm:px-0">
          <Button onClick={handleStartResultsClick} className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 w-full sm:w-auto" style={{ fontWeight: 700 }}>
            Start creating your own results
          </Button>
          <div className="text-center mt-3 sm:mt-4">
            <p className="text-sm sm:text-base text-gray-300" style={{ fontWeight: 400 }}>
              ✓ Try for free • ✓ NO card needed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 