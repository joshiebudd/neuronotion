import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { track } from "@vercel/analytics";
import OldClaudiaHeader from '../components/OldClaudiaHeader';
import ResultDisplay from '../components/ResultDisplay';
import FeatureSection from '../components/FeatureSection';
import ScrollReveal from '../components/ScrollReveal';
import WaitlistModal from '../components/WaitlistModal';
import { VideoPlayer } from '../components/VideoPlayer';
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";

const MOCK_TASKS = [
  {
    id: '1',
    title: 'Morning routine setup',
    description: 'Create a structured morning routine that works with your ADHD brain.',
    subtasks: [
      {
        id: '1-1',
        title: 'Identify energy patterns',
        description: 'Track when you have the most energy and focus during mornings.',
      },
      {
        id: '1-2',
        title: 'Build consistent cues',
        description: 'Create environmental triggers that signal your brain it\'s time to start the day.',
        subtasks: [
          {
            id: '1-2-1',
            title: 'Morning light exposure',
            description: 'Open curtains or use a sunrise alarm to regulate circadian rhythm.',
          },
          {
            id: '1-2-2',
            title: 'Create a morning playlist',
            description: 'Design a specific soundtrack that energizes your morning routine.',
          }
        ]
      },
      {
        id: '1-3',
        title: 'Visual routine map',
        description: 'Create visual cues and reminders for each step of your morning routine.',
      }
    ]
  },
  {
    id: '2',
    title: 'Task prioritization strategy',
    description: 'Develop a system to identify what actually needs your attention today.',
    subtasks: [
      {
        id: '2-1',
        title: 'Energy-based sorting',
        description: 'Group tasks by the mental/physical energy they require, not just importance.',
      },
      {
        id: '2-2',
        title: 'Time blocking with buffers',
        description: 'Create realistic time blocks with built-in transition periods between activities.',
      }
    ]
  },
  {
    id: '3',
    title: 'Environment optimization',
    description: 'Adjust your physical spaces to reduce ADHD friction and support focus.',
    subtasks: [
      {
        id: '3-1',
        title: 'Designated activity zones',
        description: 'Create specific areas for different types of activities to reduce context-switching.',
      },
      {
        id: '3-2',
        title: 'Distraction audit',
        description: 'Identify and minimize visual, auditory, and digital distractions in each space.',
      }
    ]
  }
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCountAnimation = () => {
    let startCount = 0;
    const endCount = 467;
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = duration / frameDuration;
    const increment = endCount / totalFrames;

    let currentFrame = 0;
    const counter = setInterval(() => {
      currentFrame++;
      const currentCount = Math.min(Math.floor(startCount + (increment * currentFrame)), endCount);
      setCount(currentCount);

      if (currentCount >= endCount) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  };

  const handleDemoClick = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTasks(MOCK_TASKS);
      setIsLoading(false);
    }, 1500);
  };

  const openModal = () => {
    track("Claudia_Join_Waitlist");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('josh@neuro-notion.com');
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-[#1e2a4a]">
      <Head>
        <title>Neuro - AI ADHD Personal Assistant</title>
        <meta name="description" content="The world's first AI Personal Assistant for Adults with ADHD. You speak, Claudia Organizes. Simple." />
      </Head>
      
      <OldClaudiaHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#1e2a4a]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal delay={100}>
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-white/10 border border-white/20 text-white/80">
                Life Management for ADHD Brains
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Your AI Life Assistant for ADHD Management
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Claudia by Neuro is like Jarvis from Iron Man, but designed specifically for ADHD brains. Speak your thoughts, and let our AI organize your life so you can focus on what matters.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div>
                <div className="flex justify-center mb-8">
                  <img 
                    src="https://NeuroNotionPullZonw.b-cdn.net/Claudia%20-%20Static%20Demo.png" 
                    alt="Neuro App Interface" 
                    className="rounded-lg w-full max-w-[520px] md:max-w-[110%] h-auto"
                  />
                </div>
                <div className="flex flex-col items-center mt-8 space-y-4">
                  <p className="text-xl md:text-3xl text-white/90 text-center px-2">
                    Join the <span ref={counterRef} className="text-[#30bcd9] font-semibold">{count}</span><span className="text-[#30bcd9] font-semibold">+</span> other ADHDers waiting for access
                  </p>
                  <button 
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg text-base font-medium bg-[#30bcd9] text-white shadow-lg hover:bg-[#2aa3c7] transition-colors"
                    onClick={openModal}
                  >
                    Join the waitlist
                  </button>
                </div>
              </div>
            </ScrollReveal>
            
            <ResultDisplay tasks={tasks} isLoading={isLoading} />
          </div>
        </div>
      </section>
      
      <ScrollReveal>
        <FeatureSection />
      </ScrollReveal>
      
      {/* How It Works Section */}
      <ScrollReveal>
        <section id="how-it-works" className="py-16 px-4 bg-[#1e2a4a]">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Like Jarvis, but for your ADHD brain</h2>
              <p className="max-w-2xl mx-auto text-white/80 mb-10 text-base md:text-lg">
                Our ADHD life management system is designed to be frictionless and effective.
              </p>
              <div className="max-w-3xl mx-auto mb-12">
                <VideoPlayer 
                  videoUrl="https://NeuroNotionPullZonw.b-cdn.net/Claudia%20Demo%20v4.mp4"
                  title="Claudia Demo"
                />
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <ScrollReveal delay={100}>
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-[#30bcd9] text-white flex items-center justify-center mb-4 font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">Speak Your Thoughts</h3>
                    <p className="text-sm text-white/70">
                      Just talk to Claudia about whatever&apos;s on your mind - tasks, events, ideas, or concerns.
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-[#30bcd9] text-white flex items-center justify-center mb-4 font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">Claudia Organizes</h3>
                    <p className="text-sm text-white/70">
                      Our AI asks clarifying questions and then sorts everything into the right systems.
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={300}>
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-[#30bcd9] text-white flex items-center justify-center mb-4 font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">Timely Reminders</h3>
                    <p className="text-sm text-white/70">
                      Claudia tells you what you need to know, exactly when you need to know it.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      {/* About Section - Built by ADHDers for ADHDers */}
      <ScrollReveal>
        <section id="about" className="py-16 px-4 bg-[#1e2a4a]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built by ADHDers for ADHDers</h2>
                <p className="text-base md:text-lg mb-6 text-white/80">
                  I built Neuro because I know the struggle firsthand. After years of being misunderstood and left without support, I transformed my own experience into a mission: empower newly diagnosed adults with a scientifically-backed, voice-first platform that cuts through chaos.
                </p>
                <p className="text-base md:text-lg text-white/80">
                  This isn&apos;t just a tool—it&apos;s our shared lifeline to a clearer, more productive life. Claudia by Neuro represents everything I wish I had when first navigating life with ADHD.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-[300px]">
                  <img 
                    src="https://NeuroNotionPullZonw.b-cdn.net/dogcropped.PNG"
                    alt="Founder of Neuro" 
                    className="rounded-2xl w-full h-auto object-cover shadow-lg border border-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-16 px-4 bg-[#1e2a4a]">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Manage ADHD More Effectively?</h2>
              <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Stop letting ADHD dictate your life. Let Claudia handle the organizational heavy lifting so you can focus on living.
              </p>
              <button 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg text-base font-medium bg-[#30bcd9] text-white shadow-lg hover:bg-[#2aa3c7] transition-colors"
                onClick={openModal}
              >
                Join the waitlist
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      {/* Hidden Text */}
      <div className="py-2 bg-[#1e2a4a]">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://neuro-deploy.vercel.app/" 
            className="text-[#1e2a4a] no-underline"
            style={{ textDecoration: 'none' }}
          >
            Visit claudia.
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <ScrollReveal>
        <footer className="py-8 border-t border-white/10 bg-[#1e2a4a]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm text-white/60">
                  © {new Date().getFullYear()} Neuro Notion App Limited. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://theblogspace.notion.site/Neuro-Notion-Cookies-Policy-c8fde8f3024a4a0389b888d0ec107e5b?pvs=4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/60 hover:text-white/80 transition-colors"
                >
                  Cookies
                </a>
                <a 
                  href="https://neuro-deploy.vercel.app/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/60 hover:text-white/80 transition-colors"
                >
                  Privacy
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="text-sm text-white/60 hover:text-white/80 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </footer>
      </ScrollReveal>
      
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
      <Toaster />
    </div>
  );
};

export { default } from './claudianewlp';