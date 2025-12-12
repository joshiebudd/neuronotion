import React, { useState } from 'react';
import { 
  ArrowRight, 
  X,
  LineChart,     
  Banknote,      
  Hourglass,     
  ShieldCheck,   
  ScrollText,    
  Smile,         
  Zap,           
  Brain,         
  Layout,        
  Lightbulb,     
  TrendingUp,
  Mic,
  CheckCircle2,
  CalendarCheck,
  Search,
  Lock,
  AlertTriangle,
  FileX,
  Ban,
  Info,
  Menu
} from 'lucide-react';

import ClinicPageHeader from '../components/ClinicPageHeader';
import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { VideoPlayer } from '../components/VideoPlayer';
import { Toaster } from '../components/ui/toaster';

// --- Inline Components (formerly external) ---

// --- Feature Components ---

const InsightItem = ({ icon, title, desc }) => (
  <div className="flex gap-5 p-5 rounded-2xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700 group">
    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-white text-lg mb-2 font-poppins">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I have to plug this into my other systems?",
      answer: "No deep integrations required. We don't replace your EHR or require complex technical setup. We simply provide you with clean CSV or Excel exports mapped to your specific reporting needs, including MHSDS-style structures where relevant. You get the data you need in formats that work with your existing workflows."
    },
    {
      question: "What outcomes do you track for ADHD pathways?",
      answer: "Our data collection framework aligns with the Mental Health Services Data Set (MHSDS), making it straightforward to feed into your existing reporting structures. We track affect measures like anxiety levels, executive function indicators including emotional regulation and planning/organizing capabilities, and behavioral markers such as use of habitual stress management techniques. All structured for clinical relevance."
    },
    {
      question: "Can we evidence intervention adherence?",
      answer: "Absolutely. Because our platform passively collects thousands of data points over several months of patient engagement, we can map longitudinal trends that show exactly what kind of impact other interventions are having. Whether it's medication titration, CBT sessions, or coaching—you get clear before/after comparisons that demonstrate intervention efficacy to commissioners and insurers."
    },
    {
      question: "How quickly can we get started?",
      answer: "Most clinics are live within 2 weeks. We handle the white-labelling setup, provide staff training materials, and give you templated patient onboarding flows. There's no IT project required on your end—just a decision to start offering better post-diagnosis support."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-500"
        >
          <button 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left"
          >
            <span className="font-poppins font-semibold text-white text-lg pr-4">{faq.question}</span>
            <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              <svg 
                className="w-4 h-4 text-[#0EA5E9]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AffiliateProfile = ({ name, image, link, isLarge = false, bio = [] }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group relative cursor-pointer">
    <div className={`${isLarge ? 'w-40 h-40' : 'w-32 h-32'} rounded-full border-2 border-slate-700 p-1 overflow-hidden relative group-hover:border-[#0EA5E9] transition-all bg-slate-800 shadow-xl group-hover:shadow-[#0EA5E9]/20`}>
       <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
    </div>
    <div className="text-center">
      <span className="block text-white font-bold text-lg mb-1 group-hover:text-[#0EA5E9] transition-colors">{name}</span>
      <span className="text-slate-400 text-sm font-medium">Advisor</span>
    </div>
    
    {/* Hover Modal */}
    <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-[280px] bg-slate-800 border border-slate-600 rounded-xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 shadow-2xl pointer-events-none transform translate-y-2 group-hover:translate-y-0">
       <ul className="space-y-2">
         {bio.map((item, index) => (
           <li key={index} className="text-xs text-slate-300 flex items-start text-left leading-snug">
              <span className="text-[#0EA5E9] mr-2 flex-shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
           </li>
         ))}
       </ul>
       <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 border-r border-b border-slate-600 transform rotate-45"></div>
    </div>
  </a>
);

const BenefitCard = ({ icon, title, desc }) => (
  <div className="glass-card p-8 rounded-2xl hover:border-slate-500 transition-all hover:scale-[1.02] group h-full flex flex-col">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-700">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 font-poppins text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm flex-grow">{desc}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc, color, bg }) => (
  <div className="glass-card p-6 h-full flex flex-col rounded-2xl hover:-translate-y-1 transition-transform duration-300 group hover:border-slate-600">
    <div className={`w-12 h-12 ${bg} ${color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2 font-poppins">{title}</h3>
    <p className="text-slate-400 leading-relaxed flex-grow text-sm">{desc}</p>
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
    <div className={`p-4 rounded-xl border ${colorMap[color]} bg-opacity-10 backdrop-blur-sm transition-all hover:scale-105 hover:bg-opacity-20 cursor-default h-full flex flex-col justify-between`}>
      <div className="flex items-center justify-between mb-2">
        <div className={`p-2 rounded-lg ${colorMap[color]} bg-opacity-20`}>
          {icon}
        </div>
        <TrendingUp size={16} className={colorMap[color].split(' ')[0]} />
      </div>
      <div>
        <div className={`text-2xl font-bold font-poppins mb-1 ${colorMap[color].split(' ')[0]}`}>
          +{percentage}
        </div>
        <div className="text-xs text-slate-300 font-medium leading-tight">
          {label}
        </div>
      </div>
    </div>
  );
};

// --- Founder Story Modal ---
const FounderStory = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-md mx-4 z-50 animate-in zoom-in-95 duration-200">
      <div className="bg-[#1E293B] border border-slate-700 rounded-xl shadow-2xl p-6 text-left relative">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1E293B] border-t border-l border-slate-700 rotate-45"></div>
        <button onClick={onClose} className="absolute top-2 right-2 text-slate-400 hover:text-white"><X size={16} /></button>
        
        <h4 className="text-white font-bold text-lg mb-4 text-center">Read more about the founder&apos;s story</h4>
        
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            Hi, I&apos;m Josh, and I&apos;m diagnosed severe combined ADHD. By age 11 I&apos;d been expelled from 13 schools and discarded as a &quot;problem child&quot;.
          </p>
          <div className="flex justify-center py-2">
            <img 
               src="https://NeuroNotionPullZonw.b-cdn.net/Pitchshot.jpg" 
               alt="Josh Budd" 
               className="w-20 h-20 rounded-full object-cover border-2 border-[#0EA5E9]" 
               onError={(e) => {
                 e.target.src = "https://ui-avatars.com/api/?name=Josh+Budd&background=0EA5E9&color=fff";
               }}
            />
          </div>
          <p>
            As an adult, I&apos;ve tried every productivity/life management system, app, and &quot;ADHD hack&quot; out there. Most were built by neurotypical minds for neurotypical brains. Some of those slapped an &quot;ADHD friendly&quot; label on there.
          </p>
          <p>
            This just didn&apos;t work for my ADHD brain, so I spent two years building my own (in true ADHD fashion 😂). Something that actually understands how we think, process information, and get things done.
          </p>
          <p className="border-t border-slate-700 pt-3 mt-3 italic text-slate-400 text-xs">
            We are all unique, but there are some things that 95% of us with ADHD struggle with, Claudia tries to make managing those things 10x easier.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Modal Component ---
const BookingModal = ({ isOpen, onClose }) => {
  const [showFounderStory, setShowFounderStory] = useState(false);

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
          
          <h3 className="text-2xl font-bold text-white mb-4 font-poppins leading-tight">
            Learn more about White Labelling Claudia by Neuro for your clinic.
          </h3>
          
          <div className="relative inline-block mb-8">
            <p className="text-slate-400 text-lg leading-relaxed">
              Speak with the{" "}
              <button 
                onMouseEnter={() => setShowFounderStory(true)}
                onMouseLeave={() => setShowFounderStory(false)}
                className="text-white font-bold underline decoration-[#0EA5E9] underline-offset-4 decoration-2 cursor-pointer hover:text-[#0EA5E9] transition-colors relative"
              >
                founder of Claudia
                {showFounderStory && <FounderStory isOpen={true} onClose={() => setShowFounderStory(false)} />}
              </button>
              {" "}to see how you can provide better patient outcomes, and make more money doing it.
            </p>
          </div>
          
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

// --- Main App Component ---
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ClinicPageHeader onLearnMoreClick={openModal} />
      <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#0EA5E9] selection:text-white font-lexend overflow-x-hidden">
      
      {/* Font Imports & Styles */}
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

        /* Straight Line Strikethrough */
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

      {/* Hero Section - The Hook (Market Insight) */}
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
            Secure Contracts and Revenue with the Only <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">Outcome-Data Platform for ADHD</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            The market is shifting from access to outcomes. Don&apos;t fly blind. Automate patient support, capture clinical-grade data, and unlock <span className="text-red-400 font-bold">£1300/patient</span> in retained revenue.
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
            />
            {/* Sound On Arrow */}
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

      {/* Social Proof Section */}
      <section className="py-12 border-y border-slate-800 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-8">Endorsed by</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
               <a href="https://leicesterpsychologyclinic.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 w-40 hover:opacity-100 opacity-70 transition-all">
                   <div className="h-20 w-full flex items-center justify-center p-2">
                     <img src="https://NeuroNotionPullZonw.b-cdn.net/LPCwebp.webp" alt="Leicester Psychology Clinic" className="max-h-full max-w-full object-contain brightness-0 invert" />
                   </div>
                   <span className="text-xs font-medium text-slate-400 group-hover:text-[#0EA5E9] transition-colors text-center">Leicester Psychology Clinic</span>
               </a>
               <a href="https://evolvepsychology.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 w-40 hover:opacity-100 opacity-70 transition-all">
                   <div className="h-20 w-full flex items-center justify-center p-2">
                     <img src="https://NeuroNotionPullZonw.b-cdn.net/evolvewebp.webp" alt="Evolve Psychology Clinic" className="max-h-full max-w-full object-contain brightness-0 invert" />
                   </div>
                   <span className="text-xs font-medium text-slate-400 group-hover:text-[#0EA5E9] transition-colors text-center">Evolve Psychology</span>
               </a>
               <a href="https://innovateadhd.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 w-40 hover:opacity-100 opacity-70 transition-all">
                   <div className="h-20 w-full flex items-center justify-center p-2">
                     <img src="https://NeuroNotionPullZonw.b-cdn.net/innovateadhdwebp.webp" alt="Innovate ADHD" className="max-h-full max-w-full object-contain brightness-0 invert" />
                   </div>
                   <span className="text-xs font-medium text-slate-400 group-hover:text-[#0EA5E9] transition-colors text-center">Innovate ADHD</span>
               </a>
            </div>
          </div>

          <div className="mb-14 text-center">
             <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-8">Advised by</p>
             <div className="flex flex-wrap justify-center items-end gap-12">
                <AffiliateProfile 
                  name="Dr. James Kustow" 
                  image="https://NeuroNotionPullZonw.b-cdn.net/jameskustow.webp"
                  link="https://www.thegrovepractice.com/profle/dr-james-kustow/"
                  bio={["Medical Director @ The Grove Practice", "Founding member and former chair of UKAAN", "Lead trainer for UK clinicians"]}
                />
                <AffiliateProfile 
                  name="Dr. Tony Lloyd" 
                  image="https://NeuroNotionPullZonw.b-cdn.net/tony.webp"
                  link="https://www.linkedin.com/in/tony-l-ba67301/"
                  isLarge={true}
                  bio={["#1 ADHD Doctor in England", "Ex-CEO of ADHD Foundation", "Advisor to NHS, government & ADHD bodies."]}
                />
                <AffiliateProfile 
                  name="Prof. David Daley" 
                  image="https://NeuroNotionPullZonw.b-cdn.net/david%20(1).webp"
                  link="https://www.researchgate.net/profile/David-Daley-7"
                  bio={["Expert in digital ADHD interventions", "Leading ADHD academic in Europe.", "Principal investigator on major ADHD trials."]}
                />
             </div>
          </div>

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

      {/* The Insight - De-positioning the Status Quo */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">Market Insight</div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                The Era of &quot;Diagnose & Discharge&quot; <br/>is <span className="text-red-400">Ending.</span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Insurers and the NHS are tightening scrutiny. They no longer just pay for diagnosis; they demand proof of long-term patient stability. Most clinics are operating in a <strong>&quot;data-blind&quot;</strong> spot that puts future contracts at risk.
              </p>

              <div className="space-y-6">
                <InsightItem 
                  icon={<FileX className="text-red-400" size={24} />}
                  title="The Diagnose & Discharge Trap"
                  desc="High patient churn, zero outcome data, and you leave significant revenue on the table."
                />
                <InsightItem 
                   icon={<Ban className="text-orange-400" size={24} />}
                   title="The Manual Follow-up Trap"
                   desc="Expensive clinician hours spent on admin. Generates generic reports that don't prove efficacy to payers."
                />
                <InsightItem 
                  icon={<AlertTriangle className="text-yellow-400" size={24} />}
                  title="The Generic App Trap"
                  desc="Patients don't stick with them, and you own none of the data. Zero brand value for you."
                />
              </div>
            </div>
            
            <div className="relative">
              {/* Dashboard Snapshot Widget */}
              <div className="dashboard-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#0EA5E9] animate-pulse"></div>
                    <span className="text-lg font-bold text-white tracking-tight">Contract-Winning Data:</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">LIVE DASHBOARD</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <DashboardTile 
                    icon={<Smile className="text-emerald-400" size={20} />}
                    percentage="24%"
                    label="Increase in Emotional Regulation"
                    color="emerald"
                  />
                  <DashboardTile 
                    icon={<Layout className="text-purple-400" size={20} />}
                    percentage="35%"
                    label="Increase in Organization"
                    color="purple"
                  />
                  <DashboardTile 
                    icon={<Brain className="text-yellow-400" size={20} />}
                    percentage="32%"
                    label="Increase in Executive Function"
                    color="yellow"
                  />
                  <DashboardTile 
                    icon={<CheckCircle2 className="text-cyan-400" size={20} />}
                    percentage="32%"
                    label="Increase in Routine Adherence"
                    color="cyan"
                  />
                </div>

                <div className="mt-8 text-center pt-6 border-t border-white/10 relative group tooltip-container">
                  <p className="text-slate-300 text-lg font-medium">
                    Data blindness costs you <span className="text-red-400 font-bold border-b-2 border-dashed border-red-400 cursor-help">£1,360/patient</span>.
                  </p>
                  
                  {/* Tooltip */}
                  <div className="tooltip-text invisible absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 bg-slate-900 border border-slate-700 text-slate-300 text-xs p-4 rounded-lg shadow-xl z-20 opacity-0 transition-all duration-300 pointer-events-none text-left leading-relaxed">
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                      <Info size={14} className="text-[#0EA5E9]" /> Calculation:
                    </div>
                    3 years of retained app revenue + £200 in wasted clinician admin time + the missed opportunity cost of lost contracts due to lack of evidence.
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-slate-700 transform rotate-45"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-white font-bold text-sm">
                <Lock size={12} className="text-white" />
                <span>Fully GDPR compliant. All patient data is encrypted.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Perfect World - Bridge Section */}
      <section className="py-16 bg-[#0B1120] border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-8">In a perfect world, you would have a solution that:</h2>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left">
             <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 flex gap-4">
                <div className="bg-emerald-500/10 p-2 h-fit rounded-lg"><CheckCircle2 className="text-emerald-400" size={20}/></div>
                <p className="text-slate-300">Requires <strong>zero admin time</strong> from your clinicians.</p>
             </div>
             <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 flex gap-4">
                <div className="bg-emerald-500/10 p-2 h-fit rounded-lg"><CheckCircle2 className="text-emerald-400" size={20}/></div>
                <p className="text-slate-300">Provides clinical-grade support that <strong>patients actually stick with</strong>.</p>
             </div>
             <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 flex gap-4">
                <div className="bg-emerald-500/10 p-2 h-fit rounded-lg"><CheckCircle2 className="text-emerald-400" size={20}/></div>
                <p className="text-slate-300">Automatically generates the <strong>rigorous outcome data</strong> needed to win contracts.</p>
             </div>
             <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 flex gap-4">
                <div className="bg-emerald-500/10 p-2 h-fit rounded-lg"><CheckCircle2 className="text-emerald-400" size={20}/></div>
                <p className="text-slate-300">Adds a <strong>new profit line</strong> to every patient pathway.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Product Solution - Renamed Category */}
      <section id="benefits" className="py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6 text-white">The Automated Patient Retention & Outcome Platform</h2>
            <p className="text-xl text-slate-400 font-light">
              Claudia by Neuro isn&apos;t just an app. It&apos;s a white-label infrastructure that turns post-diagnosis support from a <span className="text-red-400 font-medium">cost center</span> into a <span className="text-emerald-400 font-medium font-bold">revenue generator</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<LineChart size={32} className="text-cyan-400"/>}
              title="Secure Contract Data"
              desc="Realtime data about patient outcomes. Differentiate your bid for NHS/Private contracts with evidence competitors can't produce."
            />
            <BenefitCard 
              icon={<Banknote size={32} className="text-emerald-400"/>}
              title="Monetize Support"
              desc="Transform a cost center into £1,300/patient in recurring revenue via white-labelled subscription models."
            />
            <BenefitCard 
              icon={<ShieldCheck size={32} className="text-pink-400"/>}
              title="Brand Equity"
              desc="We embed into your system. Patients see *your* brand providing superior end-to-end service, boosting referrals."
            />
             <BenefitCard 
              icon={<ScrollText size={32} className="text-yellow-400"/>}
              title="Clinical-Grade Adherence"
              desc="High patient engagement generates the continuous stream of data you need to prove efficacy to insurers."
            />
             <BenefitCard 
              icon={<Hourglass size={32} className="text-orange-400"/>}
              title="Zero Clinician Admin"
              desc="Encourage patients to do admin tasks better. Clinicians save time by focusing on actual diagnosis, not paperwork."
            />
             <BenefitCard 
              icon={<Smile size={32} className="text-purple-400"/>}
              title="Better Outcomes"
              desc="End-to-End patient support. Your patients improve self-management and regulation. Intervention outcomes improve too."
            />
          </div>
        </div>
      </section>

      {/* Product Features - Reframed for Business Value */}
      <section id="product" className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">The Engine</div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-8">Engineered for ADHD Brains. Built for Clinical Data.</h2>
            
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
              title="Frictionless Input"
              desc="Patients speak, AI structures the data. Low friction means high adherence, ensuring your data stream never dries up."
            />
            <FeatureCard 
              color="text-pink-400"
              bg="bg-pink-400/10"
              icon={<Brain size={24} />}
              title="Built for Neurodiversity"
              desc="Designed around real ADHD experiences. This isn't a generic tool; it's a retention engine that keeps patients engaged."
            />
            <FeatureCard 
              color="text-orange-400"
              bg="bg-orange-400/10"
              icon={<Zap size={24} />}
              title="Actionable Micro-Steps"
              desc="AI breaks daunting projects into micro-steps. Patients succeed more often, reporting better outcomes for your clinic."
            />
            <FeatureCard 
              color="text-cyan-400"
              bg="bg-cyan-400/10"
              icon={<TrendingUp size={24} />}
              title="Longitudinal Tracking"
              desc="Claudia tracks progress over time, giving you the long-term efficacy data that insurers are demanding."
            />
            <FeatureCard 
              color="text-red-400"
              bg="bg-red-400/10"
              icon={<Search size={24} />}
              title="Pattern Recognition"
              desc="AI spots patterns in moods and energy, helping patients self-regulate and reducing crisis calls to your clinic."
            />
            <FeatureCard 
              color="text-emerald-400"
              bg="bg-emerald-400/10"
              icon={<Lightbulb size={24} />}
              title="Psychoeducation"
              desc="Bite-sized education exactly when needed. Reduces the burden on your clinicians to explain basics repeatedly."
            />
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">FAQs</div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white">Common Questions</h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-[#0F172A]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="bg-[#1E293B] p-12 rounded-2xl shadow-2xl border border-slate-700">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">Win Contracts with Better Data</h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed">
              Big shifts are coming. RTC & Insurers are about to start asking for outcomes. Be the first to give them proof, not promises.
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

export default App;