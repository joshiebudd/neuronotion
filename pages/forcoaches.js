import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { 
  ArrowRight, 
  X,
  CheckCircle2,
  CalendarCheck,
  Brain,
  Zap,
  TrendingUp,
  Users,
  Star,
  Shield,
  BarChart3,
  Heart,
  Sparkles,
  ListChecks,
  RefreshCw,
  Activity,
  BookOpen,
  Palette
} from 'lucide-react';

import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { Toaster } from '../components/ui/toaster';

// --- Coach Page Header ---
const CoachPageHeader = ({ onGetStartedClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-3 px-4 sm:py-4 sm:px-6 overflow-x-hidden ${
        scrolled
          ? "bg-[#1e2a4a]/90 backdrop-blur-md shadow-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto w-full">
        <a href="https://www.neuro-notion.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <img
            src="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png"
            alt="Neuro Logo"
            className="h-7 sm:h-8 w-auto"
          />
          <span className="hidden sm:inline text-xl font-semibold tracking-tight text-white">Claudia by Neuro</span>
          <span className="sm:hidden text-lg font-semibold tracking-tight text-white">Neuro</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#pricing"
            className="text-slate-300 hover:text-white font-medium py-1.5 px-3 sm:px-4 rounded-xl text-[11px] sm:text-sm transition-colors duration-200 whitespace-nowrap"
          >
            Pricing
          </a>
          <button
            className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-1.5 px-3 sm:px-4 rounded-xl text-[11px] sm:text-sm transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            style={{ fontWeight: 700 }}
            onClick={onGetStartedClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

// --- Moosend Form Modal ---
const MoosendFormModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isCoach, setIsCoach] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/coach-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: name, email, isCoach }),
      });

      if (!response.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email josh@neuro-notion.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setSubmitted(false);
    setError('');
    setName('');
    setEmail('');
    setIsCoach(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-visible relative animate-in zoom-in-95 duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <CheckCircle2 size={28} className="text-emerald-400" />
            </div>
            <h3 className="mb-3 font-poppins text-2xl font-bold text-white">Thanks! We have your details.</h3>
            <p className="mx-auto max-w-md leading-relaxed text-slate-300">A member of the team will be in touch within one business day.</p>
          </div>
        ) : (
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-[#0EA5E9]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-poppins">Get started with Claudia for Coaches</h3>
              <p className="text-slate-400 text-sm">Fill in your details and we will get you set up.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-[#38BDF8] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-[#38BDF8] focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-3 py-2">
                <button
                  type="button"
                  onClick={() => setIsCoach(!isCoach)}
                  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${isCoach ? 'bg-[#0EA5E9] border-[#0EA5E9]' : 'border-slate-600 bg-transparent'}`}
                >
                  {isCoach && <CheckCircle2 size={14} className="text-white" />}
                </button>
                <span className="text-slate-300 text-sm">Yes, I am a coach</span>
              </div>

              {error && <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-xl py-3.5 font-semibold text-white transition-colors ${isSubmitting ? 'cursor-not-allowed bg-[#0EA5E9]/70' : 'bg-[#0EA5E9] hover:bg-[#0284C7]'}`}
              >
                {isSubmitting ? 'Sending...' : 'Get Started'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main CTA Modal (two options) ---
const CTAModal = ({ isOpen, onClose, onOpenForm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-visible relative animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CalendarCheck size={32} className="text-[#0EA5E9]" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 font-poppins leading-tight">
            Get Claudia for your ADHD coaching practice
          </h3>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Choose how you would like to get started.
          </p>
          
          <div className="space-y-4">
            <a 
              href="https://app.usemotion.com/meet/josh-budd/meeting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
            >
              Talk to the Founder
            </a>
            
            <button
              onClick={() => {
                onClose();
                onOpenForm();
              }}
              className="block w-full bg-transparent border-2 border-slate-600 hover:border-[#0EA5E9] text-white font-bold text-lg py-4 rounded-xl transition-all hover:-translate-y-1"
            >
              Send us your details
            </button>
          </div>
          
          <p className="mt-5 text-xs text-slate-500">
            We will get back to you within one business day.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Interactive Function Better / Feel Better Section ---
const InteractiveCards = () => {
  const [activeCard, setActiveCard] = useState(null); // 'function' | 'feel' | null
  const [hoveredItem, setHoveredItem] = useState(null);

  const functionItems = [
    {
      id: 'capture',
      icon: <Brain size={24} className="text-cyan-400" />,
      title: 'Capture chaotic thoughts and plan your day',
      desc: 'Your ADHD clients can voice-dump everything in their head. Claudia captures it all and builds a realistic plan for their day, so nothing gets lost and nothing feels overwhelming.'
    },
    {
      id: 'breakdown',
      icon: <ListChecks size={24} className="text-emerald-400" />,
      title: 'Break down tasks in the moment',
      desc: 'When your client is staring at a task and cannot start, Claudia breaks it into micro-steps right there and then. The same approach you would use in a session, available instantly.'
    },
    {
      id: 'routines',
      icon: <RefreshCw size={24} className="text-purple-400" />,
      title: 'Get support sticking to ADHD-friendly routines',
      desc: 'Routines are hard for ADHD brains. Claudia provides gentle accountability and helps your clients follow through on the structures you build together in sessions.'
    }
  ];

  const feelItems = [
    {
      id: 'regulation',
      icon: <Activity size={24} className="text-pink-400" />,
      title: 'State-based regulation exercises',
      desc: 'As your ADHD client talks to Claudia, she detects when they are dysregulated and offers grounding and regulation exercises in the moment, right inside the app.'
    },
    {
      id: 'mood',
      icon: <BarChart3 size={24} className="text-orange-400" />,
      title: 'Automatic mood logging',
      desc: 'As your client converses with Claudia throughout the week, she tracks their mood patterns automatically. You can review this together in your next coaching session.'
    },
    {
      id: 'mantras',
      icon: <BookOpen size={24} className="text-yellow-400" />,
      title: 'Coaching mantras and session learnings reinforced',
      desc: 'The breakthroughs from your sessions do not get forgotten. Claudia reminds your ADHD clients of their mantras, reframes, and key learnings exactly when they need to hear them.'
    }
  ];

  const handleCardClick = (card) => {
    if (activeCard === card) {
      setActiveCard(null);
      setHoveredItem(null);
    } else {
      setActiveCard(card);
      setHoveredItem(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Two main cards */}
      <div className={`flex flex-col sm:flex-row items-stretch justify-center gap-6 transition-all duration-500 ease-out ${activeCard ? 'mb-8' : ''}`}>
        
        {/* Function Better Card */}
        <div
          onClick={() => handleCardClick('function')}
          className={`cursor-pointer rounded-2xl border p-8 transition-all duration-500 ease-out transform ${
            activeCard === 'function'
              ? 'bg-[#1E293B] border-cyan-500/50 shadow-lg shadow-cyan-500/10 scale-105 sm:mx-auto w-full sm:max-w-md'
              : activeCard === 'feel'
              ? 'opacity-0 scale-95 absolute pointer-events-none'
              : 'bg-[#1E293B] border-slate-700 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1 flex-1'
          }`}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Zap size={32} className="text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white font-poppins mb-2">Function Better</h3>
            <p className="text-slate-400 text-sm">Help your ADHD clients get things done between sessions</p>
            {!activeCard && (
              <p className="text-cyan-400 text-xs mt-4 font-medium">Click to explore</p>
            )}
            {activeCard === 'function' && (
              <p className="text-cyan-400 text-xs mt-4 font-medium">Click to collapse</p>
            )}
          </div>
        </div>

        {/* Feel Better Card */}
        <div
          onClick={() => handleCardClick('feel')}
          className={`cursor-pointer rounded-2xl border p-8 transition-all duration-500 ease-out transform ${
            activeCard === 'feel'
              ? 'bg-[#1E293B] border-pink-500/50 shadow-lg shadow-pink-500/10 scale-105 sm:mx-auto w-full sm:max-w-md'
              : activeCard === 'function'
              ? 'opacity-0 scale-95 absolute pointer-events-none'
              : 'bg-[#1E293B] border-slate-700 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/5 hover:-translate-y-1 flex-1'
          }`}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Heart size={32} className="text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white font-poppins mb-2">Feel Better</h3>
            <p className="text-slate-400 text-sm">Help your ADHD clients regulate and stay grounded</p>
            {!activeCard && (
              <p className="text-pink-400 text-xs mt-4 font-medium">Click to explore</p>
            )}
            {activeCard === 'feel' && (
              <p className="text-pink-400 text-xs mt-4 font-medium">Click to collapse</p>
            )}
          </div>
        </div>
      </div>

      {/* Expanded items */}
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-500 ease-out ${activeCard ? 'opacity-100 translate-y-0 max-h-[800px]' : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'}`}>
        {(activeCard === 'function' ? functionItems : feelItems).map((item, idx) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`bg-slate-800/50 border border-slate-700 rounded-xl p-5 transition-all duration-300 ease-out cursor-default ${
              hoveredItem === item.id ? 'border-slate-500 shadow-lg scale-[1.02] bg-slate-800/80' : ''
            }`}
            style={{ 
              transitionDelay: `${idx * 100}ms`,
              opacity: activeCard ? 1 : 0,
              transform: activeCard ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h4 className="text-white font-semibold text-sm font-poppins">{item.title}</h4>
            </div>
            <div className={`transition-all duration-300 ease-out overflow-hidden ${hoveredItem === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
            {hoveredItem !== item.id && (
              <p className="text-slate-500 text-xs mt-1">Hover to read more</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Page Component ---
const ForCoaches = () => {
  const [isCtaModalOpen, setIsCtaModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openCtaModal = () => setIsCtaModalOpen(true);
  const closeCtaModal = () => setIsCtaModalOpen(false);
  const openFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);

  return (
    <>
      <Head>
        <title>Claudia by Neuro - For ADHD Coaches</title>
        <meta name="description" content="Give your ADHD coaching clients 24/7 support between sessions. Claudia by Neuro helps your clients implement what you teach, when you are not available." />
      </Head>

      <CoachPageHeader onGetStartedClick={openCtaModal} />
      
      <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#0EA5E9] selection:text-white font-lexend overflow-x-hidden">
      
      {/* Font Imports & Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600&family=Poppins:wght@400;500;600;700;800&display=swap');
        
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-lexend { font-family: 'Lexend Deca', sans-serif; }
        
        .glass-card { 
          background: rgba(30, 41, 59, 0.7); 
          backdrop-filter: blur(12px); 
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .hero-glow {
          background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, rgba(15, 23, 42, 0) 70%);
        }
      `}</style>

      <CTAModal isOpen={isCtaModalOpen} onClose={closeCtaModal} onOpenForm={openFormModal} />
      <MoosendFormModal isOpen={isFormModalOpen} onClose={closeFormModal} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] hero-glow pointer-events-none -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 font-medium text-xs mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Built specifically for ADHD coaches
          </div>
          
          <h1 className="font-poppins font-bold text-4xl md:text-6xl tracking-tight mb-8 leading-[1.15]">
            Give Your ADHD Clients Support<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">Between Every Session</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Your ADHD clients leave sessions motivated. Then real life hits. They get overwhelmed, they spiral, and the cycle continues before your next session. Claudia gives them someone to talk to when you are not available.
          </p>

          {/* Hero Image - same as main page */}
          <div className="flex justify-center mb-10">
            <img 
              src="https://NeuroNotionPullZonw.b-cdn.net/Desktopandmobilemockupfinal.webp" 
              alt="Claudia ADHD App Interface" 
              className="rounded-lg w-full max-w-[520px] md:max-w-[680px] h-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button 
              onClick={openCtaModal}
              className="w-full sm:w-auto px-8 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Get Started
              <ArrowRight size={20} />
            </button>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:bg-slate-800/50">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-[#0B1120] border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">The Gap</div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
            ADHD coaching sessions are powerful.<br/>But the gap between them is where progress goes to die.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Your ADHD clients leave sessions with clarity and motivation. Then they get overwhelmed, they forget the plan, they spiral, and the cycle continues. By the time they see you again, you are starting from scratch.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700">
              <Brain className="text-red-400 mb-4" size={28} />
              <h3 className="text-white font-bold mb-2 font-poppins">The overwhelm hits</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Your ADHD client wakes up with a racing mind. They need help breaking something down right now. You are not available. They spiral.</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700">
              <RefreshCw className="text-orange-400 mb-4" size={28} />
              <h3 className="text-white font-bold mb-2 font-poppins">The implementation gap</h3>
              <p className="text-slate-400 text-sm leading-relaxed">They know what to do. They just cannot get started without support in the moment. The plan stays a plan, and the cycle continues.</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700">
              <TrendingUp className="text-yellow-400 mb-4" size={28} />
              <h3 className="text-white font-bold mb-2 font-poppins">Slow progress</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Without daily reinforcement, your ADHD clients take months to build habits that could take weeks with the right support system between sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section with Interactive Cards */}
      <section id="how-it-works" className="py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">The Solution</div>
            <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6 text-white">A 24/7 ADHD support system between sessions</h2>
            <p className="text-xl text-slate-400 font-light">
              Claudia is not here to replace ADHD coaches. She is here to help your ADHD clients implement what you teach, and get support when you cannot provide it.
            </p>
          </div>

          <InteractiveCards />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-[#0B1120] border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">Coach Dashboard</div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">Track your ADHD clients&apos; progress between sessions</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              See how each individual client is doing over time. Track engagement, mood patterns, and even see progress on clinical measures like mCASS. Walk into every session fully informed.
            </p>
          </div>

          {/* Analytics Screenshot */}
          <div className="relative max-w-4xl mx-auto">
            <img 
              src="https://NeuroNotionPullZonw.b-cdn.net/ADHD%20Coaching%20analytics%20dashboard.webp"
              alt="ADHD Coaching Analytics Dashboard - Track client progress over time"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why Coaches Love It Section */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">Competitive Edge</div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">Differentiate yourself in a saturated ADHD coaching market</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              The ADHD coaching market is crowded. Claudia gives you an unfair advantage that makes your coaching more effective, your reviews better, and your referrals stronger.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1E293B] p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all">
              <Star className="text-yellow-400 mb-5" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">Better reviews</h3>
              <p className="text-slate-400 leading-relaxed">When your ADHD clients get results faster because they have support between sessions, they leave better reviews. Better reviews mean more clients finding you.</p>
            </div>
            <div className="bg-[#1E293B] p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all">
              <Users className="text-emerald-400 mb-5" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">More referrals</h3>
              <p className="text-slate-400 leading-relaxed">ADHD clients who see real progress tell their friends. Claudia accelerates that progress, which accelerates your word-of-mouth growth.</p>
            </div>
            <div className="bg-[#1E293B] p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all">
              <TrendingUp className="text-cyan-400 mb-5" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">10x return on investment</h3>
              <p className="text-slate-400 leading-relaxed">At just £50 a month, one extra client from better reviews pays for Claudia many times over. The ROI is not even close.</p>
            </div>
            <div className="bg-[#1E293B] p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all">
              <Shield className="text-purple-400 mb-5" size={32} />
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">Stand out from every other ADHD coach</h3>
              <p className="text-slate-400 leading-relaxed">Most coaches offer sessions. You offer sessions plus a complete ADHD support system. That is a fundamentally different proposition to potential clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* White Label Section */}
      <section className="py-16 bg-[#0B1120] border-y border-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-[#1E293B] p-8 md:p-10 rounded-2xl border border-slate-700">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Palette size={28} className="text-purple-400" />
            </div>
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">Want your own branding on it?</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-6">
              White label Claudia with your own brand. Give your ADHD clients a seamless experience that feels like an extension of your coaching practice, not a third-party tool.
            </p>
            <button 
              onClick={openCtaModal}
              className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 hover:text-white rounded-xl font-semibold transition-all"
            >
              Ask us about white labelling
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">Simple Pricing</div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">One plan. Unlimited ADHD clients.</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            No tiers. No per-client fees. Just one flat monthly price that gives you and all your ADHD clients full access.
          </p>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto bg-[#1E293B] rounded-2xl border border-slate-700 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]"></div>
            
            <div className="mb-6">
              <h3 className="font-poppins font-bold text-2xl text-white mb-2">Claudia for ADHD Coaches</h3>
              <p className="text-slate-400 text-sm">Everything you need to support your ADHD clients between sessions</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-white font-poppins">£50</span>
                <span className="text-slate-400 text-lg">/month</span>
              </div>
            </div>

            <ul className="space-y-4 text-left mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Unlimited ADHD client access</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Full Pro plan features for everyone</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Use it yourself as well</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Coach analytics dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Unlimited distribution to clients</span>
              </li>
            </ul>

            <button 
              onClick={openCtaModal}
              className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#0B1120] border-t border-slate-800 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="bg-[#1E293B] p-12 rounded-2xl shadow-2xl border border-slate-700">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">Your ADHD coaching is already great. Now make it unstoppable.</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              You do incredible work in your sessions. Claudia makes sure that work does not disappear the moment your client walks out the door. Together, you and Claudia give your ADHD clients something no other coach can offer: support that never sleeps.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={openCtaModal}
                className="w-full md:w-auto px-10 py-5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-xl rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:-translate-y-1"
              >
                Get Started
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
      <LPFooter />
      <Toaster />
    </>
  );
};

export default ForCoaches;
