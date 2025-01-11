import Head from 'next/head';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { Activity, Brain, Clock, Music, Users, Target, ChevronLeft, ChevronRight, Trophy, Zap, Smile, Sparkles, ListChecks, Bot, BatteryMedium } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const TaskBreakdownLP = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const members = [
    {
      name: "Sarah K.",
      role: "Product Designer",
      image: "/member1.jpg",
      description: "Oh this makes it so much easier to break things down. Claudia helps me break down complex design projects into manageable pieces."
    },
    {
      name: "Marcus R.",
      role: "Software Engineer",
      image: "/member2.jpg",
      description: "It takes everything into account. Considers my energy levels and supports me to actually DO it. Having Claudia help me break down tasks is like having a supportive friend."
    },
    {
      name: "Elena T.",
      role: "Content Creator",
      image: "/member3.jpg",
      description: "This is mindblowing. It takes all the effort off my brain. As someone with ADHD, starting big projects used to paralyze me, but not anymore!"
    },
    {
      name: "David M.",
      role: "Business Analyst",
      image: "/member4.jpg",
      description: "Claudia is the perfect companion for my ADHD brain. She helps me structure my work in a way that actually makes sense to me."
    }
  ];

  return (
    <div className="min-h-screen bg-[#28305D]">
      <Head>
        <title>Claudia | by Neuro Notion</title>
        <meta name="description" content="Join our ADHD support community and harness your ADHD superpower" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#28305D]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <a href="https://www.neuro-notion.com" className="flex items-center gap-2">
                <img
                  src="https://NeuroNotionPullZonw.b-cdn.net/Logos/Lines%20and%20bubbles%20for%20dark%20background.svg"
                  alt="Neuro Notion Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span className="font-pop font-bold text-lg sm:text-xl text-white">Neuro Notion</span>
              </a>
            </div>
            <nav className="flex items-center gap-3 sm:gap-6">
              <button className="hidden md:block text-white/90 hover:text-white font-prim bg-white/10 px-4 py-2 rounded-xl">
                Watch Demo
              </button>
              <a 
                href="https://app.neuro-notion.com"
                className="bg-[#3DBADB] text-white px-3 sm:px-4 py-2 font-prim text-sm sm:text-base font-bold rounded-xl shadow-gray-900 shadow-md hover:shadow-gray-900 shadow-sm hover:bg-[#3DBADB]/90"
              >
                Try Claudia Free
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-pop font-bold text-white mb-4 sm:mb-6">
              Overwhelmed by ADHD?<br />
              <span className="text-[#3DBADB]">Meet Claudia</span> 👋
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-pop mb-6 sm:mb-8 px-2">
              Finally, it&apos;s 10x easier to get started and actually follow through with the big stuff. <br className="hidden sm:block" />
              All done through a simple conversation.
            </p>
            <div className="flex flex-col items-center">
              <a 
                href="https://app.neuro-notion.com"
                className="bg-[#3DBADB] text-white px-6 sm:px-8 py-3 font-prim font-bold rounded-xl hover:bg-[#3DBADB]/90 text-sm sm:text-base"
              >
                TRY FREE NOW
              </a>
              <p className="text-white/70 text-xs sm:text-sm mt-2 font-pop">No credit card required</p>
            </div>
          </div>

          {/* Task Management Preview */}
          <div className="max-w-5xl mx-auto">
            <img
              src="https://NeuroNotionPullZonw.b-cdn.net/Untitled%20design%20(48).png"
              alt="Task Management Dashboard"
              className="rounded-2xl w-full"
            />
          </div>

          {/* Quote */}
          <div className="text-center text-white/60 italic">
            &ldquo;Claudia is mindblowing. She takes all the effort off my brain and helps me actually DO things.&rdquo;
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-[#2E376A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-pop font-bold text-center text-white mb-8 sm:mb-16">
            Breaking down tasks with ADHD just got...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-[#28305D] p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3DBADB]/20 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#3DBADB]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3DBADB] mb-3 sm:mb-4">Better</h3>
              <p className="text-white/80 text-sm sm:text-base">Outputs better than what you could produce on your own.</p>
            </div>
            <div className="bg-[#28305D] p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3DBADB]/20 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#3DBADB]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3DBADB] mb-3 sm:mb-4">Faster</h3>
              <p className="text-white/80 text-sm sm:text-base">Much faster than processing everything down and writing it down yourself.</p>
            </div>
            <div className="bg-[#28305D] p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3DBADB]/20 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-[#3DBADB]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3DBADB] mb-3 sm:mb-4">Easier</h3>
              <p className="text-white/80 text-sm sm:text-base">Takes all the effort off your brain. So you can focus on doing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-12 sm:py-20 bg-[#2E376A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-pop font-bold text-center text-white mb-8 sm:mb-16">What Our Community Says</h2>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 sm:mb-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-[#3DBADB]">5000+</div>
              <div className="text-[10px] sm:text-sm text-white/60">Active ADHDers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl mb-2">🧠</div>
              <div className="text-[10px] sm:text-sm text-white/60">ADHD-Optimized<br />Breakdowns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-[#3DBADB]">97%</div>
              <div className="text-[10px] sm:text-sm text-white/60">Report easier task<br />management</div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {members.map((member, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="px-4 py-8 sm:py-12 text-center">
                      <blockquote className="text-xl sm:text-3xl font-prim font-medium text-white max-w-4xl mx-auto">
                        &ldquo;{member.description}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-1 sm:p-2 text-white hover:text-[#3DBADB]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-1 sm:p-2 text-white hover:text-[#3DBADB]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://app.neuro-notion.com"
              className="bg-[#3DBADB] text-white px-6 sm:px-8 py-2 sm:py-3 font-prim font-bold rounded-xl shadow-gray-900 shadow-md hover:shadow-gray-900 hover:shadow-sm hover:bg-[#3DBADB]/90"
            >
              TRY FREE NOW
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-20 bg-[#1E2445]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-pop font-bold text-center text-white mb-8 sm:mb-16">How Claudia Helps You</h2>
          <div className="space-y-12 sm:space-y-24 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-1 flex justify-center">
                <div className="bg-[#FF6B6B]/10 p-4 sm:p-6 rounded-xl">
                  <BatteryMedium className="w-24 h-24 sm:w-48 sm:h-48 text-[#FF6B6B]" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3DBADB] mb-3 sm:mb-4">Understands Your Energy</h3>
                <p className="text-white/80 text-sm sm:text-base">Claudia adapts task breakdowns based on your current energy levels, ensuring you&apos;re not overwhelmed when you&apos;re low and maximizing productivity when you&apos;re high.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-1 order-1 sm:order-2 flex justify-center">
                <div className="bg-[#FFD93D]/10 p-4 sm:p-6 rounded-xl">
                  <Bot className="w-24 h-24 sm:w-48 sm:h-48 text-[#FFD93D]" />
                </div>
              </div>
              <div className="flex-1 order-2 sm:order-1 text-center sm:text-right">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3DBADB] mb-3 sm:mb-4">Supportive Guidance</h3>
                <p className="text-white/80 text-sm sm:text-base">Get encouraging, ADHD-friendly guidance that helps you stay motivated and focused. Claudia&apos;s there to cheer you on every step of the way.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-1 flex justify-center">
                <div className="bg-[#4ECDC4]/10 p-4 sm:p-6 rounded-xl">
                  <Brain className="w-24 h-24 sm:w-48 sm:h-48 text-[#4ECDC4]" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3DBADB] mb-3 sm:mb-4">Smart Task Breakdown</h3>
                <p className="text-white/80 text-sm sm:text-base">Watch as Claudia transforms overwhelming projects into clear, manageable steps. No more getting stuck in analysis paralysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Ways Section */}
      <section className="py-12 sm:py-20 bg-[#2E376A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-pop font-bold text-center text-white mb-4">
              Easiest Way To<br />Manage Your ADHD
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-12">
              <div className="bg-[#28305D]/50 p-6 rounded-xl text-center">
                <h3 className="text-[#3DBADB] font-bold mb-2 text-lg">AI-Powered Assistant</h3>
                <p className="text-white/80 text-sm">Claudia breaks down overwhelming tasks into manageable steps</p>
              </div>
              
              <div className="bg-[#28305D]/50 p-6 rounded-xl text-center">
                <h3 className="text-[#3DBADB] font-bold mb-2 text-lg">Energy Aware</h3>
                <p className="text-white/80 text-sm">Matches your energy levels for optimal productivity</p>
              </div>
              
              <div className="bg-[#28305D]/50 p-6 rounded-xl text-center">
                <h3 className="text-[#3DBADB] font-bold mb-2 text-lg">Personalized Support</h3>
                <p className="text-white/80 text-sm">Provides encouragement and guidance every step of the way</p>
              </div>
              
              <div className="bg-[#28305D]/50 p-6 rounded-xl text-center">
                <h3 className="text-[#3DBADB] font-bold mb-2 text-lg">Effortless Management</h3>
                <p className="text-white/80 text-sm">Makes task management fun and easy for your ADHD brain</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://app.neuro-notion.com"
                className="bg-[#3DBADB] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-prim font-bold rounded-xl shadow-gray-900 shadow-md hover:shadow-gray-900 hover:shadow-sm hover:bg-[#3DBADB]/90"
              >
                TRY FREE NOW
              </a>
              <p className="text-white/50 text-xs mt-4">Join thousands of ADHDers already using Claudia</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 bg-[#28305D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-pop font-bold text-center text-white mb-8 sm:mb-12">We&apos;re Sure You Have Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {[
              {
                question: "How does the task breakdown system work?",
                answer: "Our system uses AI to analyze your tasks and break them down into smaller, manageable steps. It considers ADHD-specific challenges and provides a structured yet flexible approach to task management."
              },
              {
                question: "Will this really work for me?",
                answer: "Yes! Claudia is designed to adapt to your specific needs and working style. Whatever you tell her about your challenges, preferences, or energy levels, she'll consider it all to create a personalized approach that works for you. There's no one-size-fits-all here - it's completely customized to how your brain works best."
              },
              {
                question: "What can I break down here?",
                answer: "Anything that feels overwhelming! From daily tasks like organizing your workspace or planning your week, to major projects like writing a thesis or planning a wedding. Whether it's small tasks that pile up or big projects that feel impossible to start, Claudia helps break them into manageable, ADHD-friendly steps."
              },
              {
                question: "How does it store my data?",
                answer: "We take your privacy extremely seriously. All your personal data is protected behind enterprise-grade encryption walls, making it inaccessible even to our own team. We will NEVER sell your data to third parties - your information stays completely private and secure with us."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#2E376A] rounded-xl">
                <button
                  className="w-full text-left font-prim font-semibold text-base sm:text-lg text-white flex justify-between items-center p-4 sm:p-6"
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-[#3DBADB] text-xl sm:text-2xl transition-transform duration-300 flex-shrink-0" style={{ transform: activeQuestion === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ 
                    maxHeight: activeQuestion === index ? '500px' : '0',
                    opacity: activeQuestion === index ? 1 : 0
                  }}
                >
                  <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-white/80">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Club Section */}
      <section className="py-12 sm:py-20 bg-[#2E376A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-pop font-bold text-white mb-6 sm:mb-8">Revolutionise Task Breakdown for ADHD</h2>
          <div className="inline-flex flex-col items-center">
            <a 
              href="https://app.neuro-notion.com"
              className="bg-[#3DBADB] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-prim font-bold rounded-xl shadow-gray-900 shadow-md hover:shadow-gray-900 hover:shadow-sm hover:bg-[#3DBADB]/90"
            >
              GET STARTED
            </a>
            <p className="text-white/70 text-xs sm:text-sm mt-2 font-pop">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E376A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <img
                src="https://NeuroNotionPullZonw.b-cdn.net/Logos/Lines%20and%20bubbles%20for%20dark%20background.svg"
                alt="Neuro Notion Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="font-pop font-bold text-lg sm:text-xl text-white">Neuro Notion</span>
            </div>
            <div className="flex gap-4 sm:gap-8 text-sm sm:text-base">
              <a href="https://theblogspace.notion.site/Privacy-Policy-156c9c3da37d8095a0e4eb14fc93ed9e" className="text-white/70 hover:text-white">Privacy Policy</a>
              <a href="https://theblogspace.notion.site/Neuro-Notion-Cookies-Policy-c8fde8f3024a4a0389b888d0ec107e5b" className="text-white/70 hover:text-white">Cookies Policy</a>
            </div>
            <div className="text-white/70 text-sm sm:text-base text-center md:text-left">
              Neuro Notion 2024 © All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TaskBreakdownLP; 