import React, { useState, useEffect } from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

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
      amount: "$60,000+ CAD Return",
      quote: "I made over $60,000 CAD in my first full year as a solopreneur",
      name: "Kristina",
      location: "Founder",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Accountable/Landing%20Page%20Assets/kristina.webp"
    },
    {
      amount: "$30K Contract", 
      quote: "I signed a $30K contract just by finally doing the work I'd been avoiding",
      name: "Max",
      location: "Founder",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Accountable/Landing%20Page%20Assets/max.webp"
    },
    {
      amount: "150% Attainment",
      quote: "In the past two months, I have achieved 150% attainment", 
      name: "Jose",
      location: "Sales Leader",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Accountable/Landing%20Page%20Assets/jose.jpg"
    },
    {
      amount: "1000% ROI. 30 days.",
      quote: "I collected $20k in invoices in my first month with Ian. The best investment I've ever made.",
      name: "Paulina",
      location: "Founder",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Accountable/Landing%20Page%20Assets/paulina.jpg"
    },
    {
      amount: "$70K MRR added in 5mos",
      quote: "Ian sliced through the noise and helped me execute like a pro. We added $70K MRR in 5 months, 10xing my investment.",
      name: "Jason",
      location: "Founder",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Accountable/Landing%20Page%20Assets/jason.jpg"
    },
    {
      amount: "$1MM+ Closed",
      quote: "Since I started working with Ian, I closed over $1mn+ putting me over 100% to goal!",
      name: "Andrew",
      location: "Sr. Director of Sales",
      avatar: "https://www.accountable.live/lovable-uploads/38e169a2-e4e6-4376-a0cd-89a92da27651.png"
    },
    {
      amount: "3x'd my income",
      quote: "I actually tripled my income from where it was prior to us working together.",
      name: "Max",
      location: "Founder",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Accountable/Landing%20Page%20Assets/max2.jpg"
    },
    {
      amount: "Life-changing stuff",
      quote: "Work with Ian if you want to change your life AND your business",
      name: "Joseph",
      location: "Founder",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Accountable/Landing%20Page%20Assets/Joseph.png"
    },
    {
      amount: "Rapid growth",
      quote: "I have way more leads converting now. My business has really taken off since we started working together",
      name: "Brenda",
      location: "Founder",
      avatar: "https://NeuroNotionPullZonw.b-cdn.net/Accountable/Landing%20Page%20Assets/brenda.jpg"
    }
  ];

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
            "Living with ADHD is 10x easier now."
          </h2>
        </div>

        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-[#2C3E50] border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 ${
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
                  "{testimonial.quote}"
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
            Real results from <span className="text-[#30bcd9]"><CountUpAnimation target={540} />+</span> Real ADHDers who regained control over their lives.
          </p>
        </div>

        <div className="text-center px-2 sm:px-0">
          <Button className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 w-full sm:w-auto" style={{ fontWeight: 700 }}>
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