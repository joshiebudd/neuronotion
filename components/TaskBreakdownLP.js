'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Trophy, Zap, Clock, Smile, ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonials data
const testimonials = [
  {
    quote: "Oh this makes it so much easier to break things down"
  },
  {
    quote: "It takes everything into account. Considers my energy levels and supports me to actually DO it."
  },
  {
    quote: "This is mindblowing. It takes all the effort off my brain."
  }
];

// Features data
const features = [
  {
    title: 'Better',
    description: 'Outputs better than what you could produce on your own.',
    Icon: Trophy
  },
  {
    title: 'Faster',
    description: "Much faster than processing everything down and writing it down yourself.",
    Icon: Zap
  },
  {
    title: 'Easier',
    description: 'Takes all the effort off your brain. So you can focus on doing.',
    Icon: Smile
  }
];

const TaskBreakdownLP = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-[#28305D]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#28305D]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <a href="https://www.neuro-notion.com" className="flex items-center gap-2">
                <img
                  src="https://NeuroNotionPullZonw.b-cdn.net/Logos/Lines%20and%20bubbles%20for%20dark%20background.svg"
                  alt="Neuro Notion Logo"
                  className="w-8 h-8"
                />
                <span className="font-pop font-bold text-xl text-white">Neuro Notion</span>
              </a>
            </div>
            <nav className="flex items-center">
              <button className="bg-[#3DBADB] text-white px-4 py-2 font-prim font-bold rounded-xl shadow-gray-900 shadow-md hover:shadow-gray-900 hover:shadow-sm hover:bg-[#3DBADB]/90">
                See Claudia in Action
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#28305D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pop font-bold text-white leading-tight mb-6">
                Meet <span className="text-sec">Claudia</span>👋
                  <br />
                  <br />
                  The new way to break stuff down <br /><span className="text-[#3DBADB]">with ADHD</span>.
                </h1>
                <p className="text-xl text-white/90 font-pop max-w-2xl mb-12">
                  Finally, it&apos;s 10x easier to get started and actually follow through with the big stuff. All done through a simple conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <div className="flex flex-col items-center sm:items-start">
                    <a 
                      href="https://app.neuro-notion.com"
                      className="bg-[#3DBADB] text-white px-8 py-3 font-prim font-bold rounded-xl shadow-gray-900 shadow-md hover:shadow-gray-900 hover:shadow-sm hover:bg-[#3DBADB]/90"
                    >
                      Try Free Now
                    </a>
                    <p className="text-white/70 text-sm mt-2 font-pop">No credit card required</p>
                  </div>
                  <div className="flex items-start">
                    <a 
                      href="https://www.youtube.com/watch?v=KNxgRQb0edI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-300 text-gray-700 px-8 py-3 font-prim font-bold rounded-xl shadow-gray-400 shadow-sm hover:bg-gray-400 hover:text-gray-800 hover:shadow-gray-600 hover:shadow-sm"
                    >
                      Watch Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src="https://NeuroNotionPullZonw.b-cdn.net/Simple%20demo.jpeg"
                  alt="Task Management Dashboard"
                  className="rounded-2xl shadow-2xl w-[120%] max-w-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#28305D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-pop font-bold text-center text-white mb-8">
              Breaking down tasks with ADHD just got...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-[#2E376A] p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
                  <div className="w-12 h-12 bg-[#3DBADB]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <feature.Icon className="w-6 h-6 text-[#3DBADB]" />
                  </div>
                  <h3 className="text-xl font-prim font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 font-prim">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-[#28305D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="px-4 py-12 text-center">
                        <blockquote className="text-3xl font-prim font-medium text-white max-w-4xl mx-auto">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-[#3DBADB]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-[#3DBADB]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
            
            {/* Added CTA Button */}
            <div className="mt-8 text-center">
              <div className="inline-flex flex-col items-center">
                <a 
                  href="https://app.neuro-notion.com"
                  className="bg-[#3DBADB] text-white px-8 py-3 font-prim font-bold rounded-xl shadow-gray-900 shadow-md hover:shadow-gray-900 hover:shadow-sm hover:bg-[#3DBADB]/90"
                >
                  Try Free Now
                </a>
                <p className="text-white/70 text-sm mt-2 font-pop">No credit card required</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2E376A] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <a href="https://www.neuro-notion.com" className="flex items-center gap-2">
                <img
                  src="https://NeuroNotionPullZonw.b-cdn.net/Logos/Lines%20and%20bubbles%20for%20dark%20background.svg"
                  alt="Neuro Notion Logo"
                  className="w-8 h-8"
                />
                <span className="font-pop font-bold text-xl text-white">Neuro Notion</span>
              </a>
              <div className="flex items-center gap-4 text-white/70 font-prim">
                <a href="#" className="hover:text-[#3DBADB]">Privacy Policy</a>
                <a href="#" className="hover:text-[#3DBADB]">Cookies Policy</a>
              </div>
            </div>
            <div className="mt-4 text-center text-white/70 font-prim">
              Neuro Notion 2024 © All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default TaskBreakdownLP;