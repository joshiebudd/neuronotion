import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ArrowRight, 
  Menu, 
  X,
  LineChart,     
  Banknote,      
  Hourglass,     
  Frown,         
  EyeOff,        
  ShieldCheck,   
  ScrollText,    
  Smile,         
  Zap,           
  Brain,         
  Layout,        
  Activity,      
  Lightbulb,     
  Database,
  Award,
  TrendingUp,
  Smartphone,
  Mic,
  BarChart3,
  Users,
  Info,
  CheckCircle2,
  CalendarCheck,
  Briefcase,
  HeartPulse,
  Search,
  Calendar
} from 'lucide-react';
import ClinicPageHeader from '../components/ClinicPageHeader';
import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { VideoPlayer } from '../components/VideoPlayer';
import { Toaster } from '../components/ui/toaster';

// --- Modal Component ---
const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-300">
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
          
          <h3 className="text-2xl font-bold text-white mb-4 font-poppins leading-tight">
            Learn more about White Labelling Claudia by Neuro for your clinic.
          </h3>
          
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Speak with the founder of Claudia to see how you can provide better patient outcomes, and make more money doing it.
          </p>
          
          <a 
            href="https://app.usemotion.com/meet/josh-budd/meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-xl py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
          >
            Book a Call
          </a>
          
          <p className="mt-4 text-xs text-slate-500">
            Let&apos;s explore how this might fit into your clinic
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ClinicPageHeader onLearnMoreClick={openModal} />
      <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#0EA5E9] selection:text-white font-lexend overflow-x-hidden">
      
      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600&family=Poppins:wght@400;500;600;700;800&display=swap');
        
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-lexend { font-family: 'Lexend Deca', sans-serif; }
        
        /* Custom Utilities */
        .glass-card { 
          background: rgba(30, 41, 59, 0.7); 
          backdrop-filter: blur(12px); 
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .dashboard-card {
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95));
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }
        
        .hero-glow {
          background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, rgba(15, 23, 42, 0) 70%);
        }

        /* Straight Line Strikethrough (Reverted) */
        .strikethrough-red {
          position: relative;
          display: inline-block;
        }
        .strikethrough-red::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 4px;
          background: #EF4444;
          transform: rotate(-3deg);
          opacity: 0.9;
        }
        
        /* Tooltip Styles */
        .tooltip-container:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0F172A; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
      `}</style>

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section */}
      <section className="pt-20 pb-20 lg:pt-32 lg:pb-32 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] hero-glow pointer-events-none -z-10"></div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 font-medium text-xs mb-8 animate-fade-in backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Limited pilot spots remaining. Starting Jan 2025.
          </div>
          
          <h1 className="font-poppins font-bold text-4xl md:text-6xl tracking-tight mb-8 leading-[1.15]">
            Post-Diagnosis ADHD Care is <br/>
            <span className="text-slate-500 strikethrough-red mr-4">Expensive</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">Profitable.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Give your ADHD patients better end-to-end support, and make way more money doing it by white labelling <a href="https://www.neuro-notion.com" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:text-[#0284C7] underline decoration-from-font underline-offset-4 transition-colors">Claudia by Neuro</a>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <button 
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Learn more
              <ArrowRight size={20} />
            </button>
            <a href="https://www.neuro-notion.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:bg-slate-800/50">
              What is Claudia by Neuro?
            </a>
          </div>

          {/* VSL Container */}
          <div className="relative max-w-3xl mx-auto">
            <VideoPlayer 
              videoUrl="https://NeuroNotionPullZonw.b-cdn.net/Enhance%20ADHD%20Patient%20Support%20for%20Clinics%20(1).mp4"
              title="Turn Support into Profit - Demo for Directors"
              autoPlay={false}
              muted={false}
              loop={false}
            />
            {/* Sound On Arrow - positioned just outside bottom-right of video */}
            <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-5 flex items-center space-x-2 bg-[#30bcd9] text-black px-3 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
              <svg 
                className="w-4 h-4 transform rotate-[225deg]" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold" style={{ fontWeight: 700 }}>Sound on!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof, Endorsements & NHS Badge */}
      <section className="py-12 border-y border-slate-800 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Clinic Endorsements */}
          <div className="mb-14 text-center">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-8">Endorsed by</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
               <div className="h-24 w-auto flex items-center justify-center p-2 px-4 hover:scale-105 transition-transform duration-300">
                  <img src="https://NeuroNotionPullZonw.b-cdn.net/evolvewebp.webp" alt="Evolve Psychology Clinic" className="h-full w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
               </div>
               <div className="h-24 w-auto flex items-center justify-center p-2 px-4 hover:scale-105 transition-transform duration-300">
                  <img src="https://NeuroNotionPullZonw.b-cdn.net/LPCwebp.webp" alt="Leicester Psychology Clinic" className="h-full w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
               </div>
               <div className="h-24 w-auto flex items-center justify-center p-2 px-4 hover:scale-105 transition-transform duration-300">
                  <img src="https://NeuroNotionPullZonw.b-cdn.net/innovateadhdwebp.webp" alt="Innovate ADHD" className="h-full w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
               </div>
            </div>
          </div>

          {/* Supported By (Affiliates) */}
          <div className="mb-14 text-center">
             <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-8">Supported by</p>
             <div className="flex flex-wrap justify-center items-start gap-12">
                <AffiliateProfile 
                  name="Dr Tony Lloyd" 
                  image="https://NeuroNotionPullZonw.b-cdn.net/tony.webp"
                />
                <AffiliateProfile 
                  name="Professor David Daley" 
                  image="https://NeuroNotionPullZonw.b-cdn.net/david%20(1).webp"
                />
                <AffiliateProfile 
                  name="Elaine Taylor Klaus" 
                  image="https://NeuroNotionPullZonw.b-cdn.net/elaine.webp"
                />
             </div>
          </div>

          {/* NHS Badge */}
          <div className="flex justify-center">
             <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#1E293B] border border-slate-700 shadow-xl hover:border-blue-500/50 transition-colors">
                <img src="https://NeuroNotionPullZonw.b-cdn.net/NHS.webp" alt="NHS" className="h-8 w-auto object-contain" />
                <span className="text-sm md:text-base font-medium text-slate-200 border-l border-slate-600 pl-4">
                  Ongoing work with HIN to gather real world clinical evidence through NHS
                </span>
             </div>
          </div>
        </div>
      </section>

      {/* The Problem (Missing a Big Trick) */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-8 leading-tight">
                Current Private ADHD services are <span className="text-red-400">missing a big trick.</span>
              </h2>
              
              <div className="space-y-8">
                <ProblemItem 
                  icon={<Frown className="text-red-400" size={24} />}
                  title="Great Diagnosis. Zero Support."
                  desc="You do the hard work. The patient leaves with only medication. 50% discontinue within 12 months and fall through the cracks."
                />
                <ProblemItem 
                   icon={<EyeOff className="text-purple-400" size={24} />}
                   title="Data Blindness"
                   desc="Contracts are decided by 'who knows who'. You are just saying 'pick me'. You need data that proves the positive outcomes of your service."
                />
                <ProblemItem 
                  icon={<Hourglass className="text-orange-400" size={24} />}
                  title="Clinicians are wasting time"
                  desc="Clinicians spend hours writing generic reports that rarely get read or actioned. They need an automated default that adapts to the individual."
                />
              </div>
            </div>
            
            <div className="relative">
              {/* Dashboard Snapshot Widget */}
              <div className="dashboard-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#0EA5E9] animate-pulse"></div>
                    <span className="text-lg font-bold text-white tracking-tight">Since referral:</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">EXAMPLE DATA</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <DashboardTile 
                    icon={<Smile className="text-emerald-400" size={20} />}
                    percentage="24%"
                    label="Improvement in Positive Mood"
                    color="emerald"
                  />
                  <DashboardTile 
                    icon={<Layout className="text-purple-400" size={20} />}
                    percentage="35%"
                    label="Improvement in Organization"
                    color="purple"
                  />
                  <DashboardTile 
                    icon={<Zap className="text-yellow-400" size={20} />}
                    percentage="32%"
                    label="Improvement in Productivity"
                    color="yellow"
                  />
                  <DashboardTile 
                    icon={<CheckCircle2 className="text-cyan-400" size={20} />}
                    percentage="32%"
                    label="Improvement in Routine Adherence"
                    color="cyan"
                  />
                </div>

                <div className="mt-8 text-center pt-6 border-t border-white/10 relative group tooltip-container">
                  <p className="text-slate-400 text-sm font-medium">
                    The &quot;Gap&quot; costs you <span className="text-red-400 border-b border-dashed border-red-400 cursor-help">£1,360/patient</span> in LTV.
                  </p>
                  
                  {/* Tooltip */}
                  <div className="tooltip-text invisible absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 bg-slate-900 border border-slate-700 text-slate-300 text-xs p-4 rounded-lg shadow-xl z-20 opacity-0 transition-all duration-300 pointer-events-none text-left leading-relaxed">
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                      <Info size={14} className="text-[#0EA5E9]" /> Calculation:
                    </div>
                    3 years worth of app revenue, £200 in wasted clinician time on support and follow ups, and the missed opportunity for each referral&apos;s outcome data to win new contracts.
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-slate-700 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - What Claudia Gives */}
      <section id="benefits" className="py-24 bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6 text-white">What Claudia by Neuro gives Private ADHD Clinics</h2>
            <p className="text-xl text-slate-400 font-light">
              We support your patients with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] font-medium font-bold">Class-A Pre and Post-diagnosis support</span> through our digital self management tool.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<LineChart size={32} className="text-cyan-400"/>}
              title="Rare Data"
              desc="Realtime data about patient outcomes and pre-diagnostics. Notoriously hard to get. We hand it to you."
            />
            <BenefitCard 
              icon={<ScrollText size={32} className="text-yellow-400"/>}
              title="Win Big Contracts"
              desc="Use our data to prove efficacy. Secure big contracts with NHS and Private Health that others can't touch."
            />
            <BenefitCard 
              icon={<Banknote size={32} className="text-emerald-400"/>}
              title="Unlock Repeating Revenue"
              desc="White labelling means you unlock repeated continuous revenue, allowing you to scale super fast."
            />
             <BenefitCard 
              icon={<Smile size={32} className="text-purple-400"/>}
              title="Better Patient Outcomes"
              desc="End-to-End Stability. Patients become organized and stay engaged. Outcomes improve, and they tell their friends."
            />
             <BenefitCard 
              icon={<Hourglass size={32} className="text-orange-400"/>}
              title="Slash Admin Time"
              desc="Encourage patients to do admin tasks better. Clinicians save time by focusing on actual diagnosis, not paperwork."
            />
             <BenefitCard 
              icon={<ShieldCheck size={32} className="text-pink-400"/>}
              title="Enhance Your Brand"
              desc="We embed into your system. You get better reviews, better reputation, and a superior end-to-end service."
            />
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="product" className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">The Product</div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-8">Engineered specifically for ADHD. So it actually works…</h2>
            
            {/* Video Player */}
            <div className="w-full max-w-4xl mx-auto aspect-[16/9] bg-slate-800/50 rounded-2xl border border-slate-700 mb-12 flex items-center justify-center relative overflow-hidden group shadow-2xl">
               <video 
                 controls
                 className="w-full h-full object-cover"
                 src="https://NeuroNotionPullZonw.b-cdn.net/Effortless%20ADHD%20Living.mp4"
               >
                 Your browser does not support the video tag.
               </video>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              color="text-purple-400"
              bg="bg-purple-400/10"
              icon={<Mic size={24} />}
              title="No Typing. Just Talk."
              desc="Patients speak. AI structures the chaos. Friction reduced to zero."
            />
            <FeatureCard 
              color="text-pink-400"
              bg="bg-pink-400/10"
              icon={<HeartPulse size={24} />}
              title="Built on ADHD brains"
              desc="Designed around real ADHD experiences, making it the first app that actually sticks for many."
            />
            <FeatureCard 
              color="text-orange-400"
              bg="bg-orange-400/10"
              icon={<Zap size={24} />}
              title="Actionable Steps"
              desc="AI breaks daunting projects like 'Clean house' into micro-steps, overcoming ADHD paralysis."
            />
            <FeatureCard 
              color="text-cyan-400"
              bg="bg-cyan-400/10"
              icon={<Brain size={24} />}
              title="Learns about you"
              desc="Claudia gets smarter over time, adapting her support to help you live a better life."
            />
            <FeatureCard 
              color="text-red-400"
              bg="bg-red-400/10"
              icon={<Search size={24} />}
              title="Identify patterns"
              desc="AI spots patterns in moods and energy, helping you understand what helps and what hinders."
            />
            <FeatureCard 
              color="text-emerald-400"
              bg="bg-emerald-400/10"
              icon={<Lightbulb size={24} />}
              title="Learn while doing"
              desc="Get bite-sized psychoeducation exactly when you need it. Learn by doing, not just reading."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-[#0F172A]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="bg-[#1E293B] p-12 rounded-2xl shadow-2xl border border-slate-700">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">Win Contracts with Better Data</h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed">
              Big shifts are coming. RTC &amp; Insurers are about to start asking for outcomes. Be the first to give them proof, not promises.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={openModal}
                className="w-full md:w-auto px-10 py-5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-xl rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:-translate-y-1"
              >
                Learn More
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

// Components
const AffiliateProfile = ({ name, image }) => (
  <div className="flex flex-col items-center gap-3 group">
    <div className="w-32 h-32 rounded-full border-2 border-slate-700 p-1 overflow-hidden relative group-hover:border-[#0EA5E9] transition-colors bg-slate-800 shadow-xl">
       <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
    </div>
    <span className="text-slate-300 font-medium text-base text-center max-w-[160px] group-hover:text-white transition-colors">{name}</span>
  </div>
);

const ProblemItem = ({ icon, title, desc }) => (
  <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-white text-lg mb-1 font-poppins">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const BenefitCard = ({ icon, title, desc }) => (
  <div className="glass-card p-8 rounded-2xl hover:border-slate-500 transition-all hover:scale-[1.02] group h-full">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-700">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 font-poppins text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc, color, bg }) => (
  <div className="glass-card p-6 h-full flex flex-col rounded-2xl hover:-translate-y-1 transition-transform duration-300">
    <div className={`w-12 h-12 ${bg} ${color} rounded-xl flex items-center justify-center mb-5`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2 font-poppins">{title}</h3>
    <p className="text-slate-400 leading-relaxed flex-grow">{desc}</p>
  </div>
);

const DashboardTile = ({ icon, percentage, label, color }) => {
  const colorMap = {
    emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    yellow: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  };

  return (
    <div className={`p-4 rounded-xl border ${colorMap[color]} bg-opacity-10 backdrop-blur-sm transition-all hover:scale-105 hover:bg-opacity-20 cursor-default`}>
      <div className="flex items-center justify-between mb-2">
        <div className={`p-2 rounded-lg ${colorMap[color]} bg-opacity-20`}>
          {icon}
        </div>
        <TrendingUp size={16} className={colorMap[color].split(' ')[0]} />
      </div>
      <div className={`text-2xl font-bold font-poppins mb-1 ${colorMap[color].split(' ')[0]}`}>
        +{percentage}
      </div>
      <div className="text-xs text-slate-300 font-medium leading-tight">
        {label}
      </div>
    </div>
  );
};

export default App;