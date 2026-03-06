import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  ArrowRight,
  X,
  TrendingDown,
  Clock,
  BrainCircuit,
  ShieldCheck,
  Smile,
  Zap,
  Brain,
  Lightbulb,
  TrendingUp,
  Mic,
  Users,
  CheckCircle2,
  CalendarCheck,
  Briefcase,
  HeartPulse,
  Search,
  Lock,
  BarChart3,
  Building2,
  UserCheck,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Send
} from 'lucide-react';

import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { Toaster } from '../components/ui/toaster';
import { cn } from '../lib/utils';

// --- Corporate Header ---
const CorporateHeader = ({ onEnquireClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-3 px-4 sm:py-4 sm:px-6 overflow-x-hidden",
        scrolled
          ? "bg-[#1e2a4a]/90 backdrop-blur-md shadow-sm border-b border-white/10"
          : "bg-transparent"
      )}
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

        <div className="flex items-center gap-3">
          <a
            href="https://www.neuro-notion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-sm text-slate-300 hover:text-white transition-colors"
          >
            What is Claudia?
          </a>
          <button
            className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-1.5 px-3 sm:px-4 rounded-xl text-[11px] sm:text-sm shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 whitespace-nowrap"
            style={{ fontWeight: 700 }}
            onClick={onEnquireClick}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
};

// --- Enquiry Modal ---
const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    companySize: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/corporate-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send enquiry');
      }

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at josh@neuro-notion.com');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-visible relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => { onClose(); setSubmitted(false); }}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Thank you for your interest</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              We will be in touch within 24 hours to discuss how Claudia can support your workforce.
            </p>
          </div>
        ) : (
          <div className="p-8">
            <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 size={32} className="text-[#0EA5E9]" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-poppins leading-tight text-center">
              Enquire about Claudia for your organisation
            </h3>
            <p className="text-slate-400 text-center mb-6">
              Speak with our team to explore how Claudia can support your neurodiverse employees.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Company *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Job Title *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Company Size *</label>
                <select
                  required
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                  value={formData.companySize}
                  onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                >
                  <option value="">Select company size</option>
                  <option value="0-100">0 - 100 employees</option>
                  <option value="100-250">100 - 250 employees</option>
                  <option value="250-500">250 - 500 employees</option>
                  <option value="500-1000">500 - 1,000 employees</option>
                  <option value="1000-5000">1,000 - 5,000 employees</option>
                  <option value="5000+">5,000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Message (optional)</label>
                <textarea
                  rows={3}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors resize-none"
                  placeholder="Tell us about your organisation's needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm text-center">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-lg py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <Send size={18} />
                {submitting ? 'Sending...' : 'Get in Touch'}
              </button>
              <p className="text-xs text-slate-500 text-center">
                No commitment required. We will respond within one business day.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Logo Carousel (from homepage) ---
const SupportedByCarousel = () => {
  const logos = [
    { id: 1, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/1.webp', alt: 'Supported by logo 1' },
    { id: 2, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/2.webp', alt: 'Supported by logo 2' },
    { id: 7, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/7.webp', alt: 'Supported by logo 7' },
    { id: 6, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/6.webp', alt: 'Supported by logo 6' },
    { id: 11, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/11.webp', alt: 'Supported by logo 11' },
    { id: 10, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/10.webp', alt: 'Supported by logo 10' },
    { id: 4, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/4.webp', alt: 'Supported by logo 4' },
    { id: 5, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/5.webp', alt: 'Supported by logo 5' },
    { id: 8, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/8.webp', alt: 'Supported by logo 8' },
    { id: 3, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/3.webp', alt: 'Supported by logo 3' },
    { id: 9, src: 'https://NeuroNotionPullZonw.b-cdn.net/SupportedByLogos/9.webp', alt: 'Supported by logo 9' },
    { id: 12, src: 'https://NeuroNotionPullZonw.b-cdn.net/11LabsLogowebp.webp', alt: '11Labs' },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll-corp">
        {logos.map((logo) => (
          <div key={`first-${logo.id}`} className="flex-shrink-0 mx-3 sm:mx-6 md:mx-8 lg:mx-10">
            <img src={logo.src} alt={logo.alt} className="h-6 sm:h-10 md:h-14 lg:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
        {logos.map((logo) => (
          <div key={`second-${logo.id}`} className="flex-shrink-0 mx-3 sm:mx-6 md:mx-8 lg:mx-10">
            <img src={logo.src} alt={logo.alt} className="h-6 sm:h-10 md:h-14 lg:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Page Component ---
const ForCorporate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <CorporateHeader onEnquireClick={openModal} />
      <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#0EA5E9] selection:text-white font-lexend overflow-x-hidden">

      <Head>
        <title>Claudia for Enterprise | Neuro Notion</title>
        <meta name="description" content="Support your neurodiverse employees with Claudia, the ADHD-first productivity and wellbeing tool. Reduce absenteeism, improve performance, and demonstrate genuine neuroinclusion." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
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

        .stat-glow-cyan { box-shadow: 0 0 40px rgba(14, 165, 233, 0.15); }
        .stat-glow-purple { box-shadow: 0 0 40px rgba(99, 102, 241, 0.15); }
        .stat-glow-emerald { box-shadow: 0 0 40px rgba(16, 185, 129, 0.15); }

        @keyframes scroll-corp {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-corp {
          animation: scroll-corp 30s linear infinite;
        }
        .animate-scroll-corp:hover {
          animation-play-state: paused;
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0F172A; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
      `}</style>

      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] hero-glow pointer-events-none -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 font-medium text-xs mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Now accepting pilot partners for Q3 2026
          </div>

          <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-6xl tracking-tight mb-6 sm:mb-8 leading-[1.15]">
            Healthier, Happier{' '}
            <span className="hidden sm:inline"><br/></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">Neurodiverse Employees</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Claudia is an ADHD-first productivity and wellbeing tool that helps your neurodiverse employees stay organised, reduce overwhelm, and perform more consistently. Low admin burden. No heavy integration. Real outcomes.
          </p>

          {/* Product Mockup Image */}
          <div className="mb-8 sm:mb-10 max-w-3xl mx-auto">
            <img
              src="https://NeuroNotionPullZonw.b-cdn.net/Desktopandmobilemockupfinal.webp"
              alt="Claudia AI Personal Assistant - Desktop and Mobile"
              className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-10">
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Enquire Now
              <ArrowRight size={20} />
            </button>
            <a href="https://www.neuro-notion.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
              What is Claudia by Neuro?
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-emerald-400" />
              <span>Fully Anonymised Reporting</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck size={16} className="text-emerald-400" />
              <span>No Diagnosis Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOCIAL PROOF: Supported By + NHS + Advisors */}
      {/* ============================================ */}
      <section className="py-10 sm:py-14 border-y border-slate-800 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Supported By Carousel */}
          <div className="mb-10 sm:mb-14 text-center">
            <div className="inline-block px-4 py-1.5 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-5 sm:mb-8">Supported by</div>
            <SupportedByCarousel />
          </div>

          {/* Clinical Advisors */}
          <div className="mb-8 sm:mb-14 text-center">
            <div className="inline-block px-4 py-1.5 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-5 sm:mb-8">Advised by leading ADHD clinicians</div>
            <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-center sm:items-end sm:gap-12">
              <AffiliateProfile
                name="Dr. Tony Lloyd"
                image="https://NeuroNotionPullZonw.b-cdn.net/tony.webp"
                link="https://www.linkedin.com/in/tony-l-ba67301/"
                role="Clinical Advisor"
                tooltipSide="left"
                bio={[
                  "&#35;1 ADHD Doctor in England",
                  "Ex-CEO of ADHD Foundation",
                  "Advisor to NHS, government & ADHD bodies."
                ]}
              />
              <AffiliateProfile
                name="Dr. James Kustow"
                image="https://NeuroNotionPullZonw.b-cdn.net/jameskustow.webp"
                link="https://www.thegrovepractice.com/profle/dr-james-kustow/"
                isLarge={true}
                role="Clinical Lead"
                bio={[
                  "Medical Director @ The Grove Practice",
                  "Founding member and former chair of UKAAN",
                  "Lead trainer for UK clinicians",
                  "Author of How to thrive with Adult ADHD"
                ]}
              />
              <AffiliateProfile
                name="Prof. David Daley"
                image="https://NeuroNotionPullZonw.b-cdn.net/david%20(1).webp"
                link="https://www.researchgate.net/profile/David-Daley-7"
                role="Clinical Advisor"
                tooltipSide="right"
                bio={[
                  "Expert in digital ADHD interventions",
                  "Leading ADHD academic in Europe.",
                  "Principal investigator on major ADHD trials."
                ]}
              />
            </div>
          </div>

          {/* NHS + Clinic Endorsements */}
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-full bg-[#1E293B] border border-slate-700 shadow-xl hover:border-blue-500/50 transition-colors text-center sm:text-left">
              <img src="https://NeuroNotionPullZonw.b-cdn.net/NHS.webp" alt="NHS" className="h-7 sm:h-8 w-auto object-contain" />
              <span className="text-xs sm:text-sm md:text-base font-medium text-slate-200 sm:border-l sm:border-slate-600 sm:pl-4">
                Ongoing work with HIN to gather real world clinical evidence through NHS
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <img src="https://NeuroNotionPullZonw.b-cdn.net/LPCwebp.webp" alt="Leicester Psychology Clinic" className="h-6 w-auto object-contain brightness-0 invert opacity-60" />
                <span className="hidden sm:inline text-xs">Leicester Psychology Clinic</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <img src="https://NeuroNotionPullZonw.b-cdn.net/evolvewebp.webp" alt="Evolve Psychology" className="h-6 w-auto object-contain brightness-0 invert opacity-60" />
                <span className="hidden sm:inline text-xs">Evolve Psychology</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <img src="https://NeuroNotionPullZonw.b-cdn.net/innovateadhdwebp.webp" alt="Innovate ADHD" className="h-6 w-auto object-contain brightness-0 invert opacity-60" />
                <span className="hidden sm:inline text-xs">Innovate ADHD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE COST OF DOING NOTHING */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full font-medium text-xs mb-4">The Cost of Doing Nothing</div>
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-6 sm:mb-8 leading-tight">
                Your Neurodiverse Employees Are Struggling in Silence
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                ADHD affects 5 to 8% of the adult workforce. In knowledge-work sectors like recruitment, creative agencies, and tech, that figure rises to 15 to 21%. Without the right support, these employees lose productivity, disengage, and eventually leave.
              </p>

              <div className="bg-amber-500/5 border border-amber-500/15 rounded-lg px-4 py-3 mb-8">
                <p className="text-amber-300/90 text-sm leading-relaxed">
                  <span className="font-semibold">Worth noting:</span> The majority of ADHD in the workforce is either undisclosed (due to stigma and fear of judgement) or undiagnosed entirely. The real number of affected employees is almost certainly higher than reported prevalence suggests.
                </p>
              </div>

              <div className="space-y-6">
                <ProblemItem
                  icon={<TrendingDown className="text-red-400" size={24} />}
                  title="35 Lost Days Per Year"
                  desc="Unsupported neurodivergent employees lose an estimated 35 days of work performance annually."
                />
                <ProblemItem
                  icon={<Clock className="text-orange-400" size={24} />}
                  title="2x More Likely to Be Absent"
                  desc="Employees with unsupported ADHD are twice as likely to take unplanned absences."
                />
                <ProblemItem
                  icon={<HeartPulse className="text-purple-400" size={24} />}
                  title="2x Higher Mental Health Risk"
                  desc="Without support, neurodivergent employees are twice as likely to experience workplace mental health issues."
                />
              </div>
              <p className="mt-6 text-xs text-slate-500 italic">Sources: Kessler et al., 2005; de Graaf et al., 2008; Canela et al., 2024</p>
            </div>

            {/* Impact Dashboard */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                    <span className="text-lg font-bold text-white tracking-tight">The Hidden Cost</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">PER 1,000 EMPLOYEES</span>
                </div>

                <div className="space-y-4">
                  <CostItem label="Lost productivity (35 days x ~50 ADHD employees)" value="Significant" color="red" />
                  <CostItem label="Increased absenteeism costs" value="Significant" color="orange" />
                  <CostItem label="Higher turnover and recruitment costs" value="Significant" color="yellow" />
                  <CostItem label="Reduced team morale and engagement" value="Significant" color="purple" />
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-3xl sm:text-4xl font-bold text-red-400 font-poppins">~£4,000</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-1">Estimated lost productivity per affected employee, per year</p>
                  <p className="text-slate-500 text-xs italic mb-3">Kessler et al., 2009; de Graaf et al., 2008</p>
                  <p className="text-red-400 font-bold text-sm">For 1,000 employees, that could exceed £200,000 annually in hidden costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE CASE FOR ACTING - STAT CARDS */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-[#0B1120] border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium text-xs mb-4">The Case for Acting</div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              With the Right Support, Everything Changes
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Research shows that when neurodivergent employees receive appropriate support, the impact on output, organisation, and wellbeing is substantial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="36%"
              label="Higher Output"
              desc="Measurable improvement in day-to-day work performance and task completion"
              color="purple"
            />
            <StatCard
              value="60%"
              label="Less Absenteeism"
              desc="Significant reduction in unplanned absences and lost workdays"
              color="cyan"
            />
            <StatCard
              value="87%"
              label="Reduced Stress"
              desc="Employees report feeling calmer, more organised, and more in control"
              color="emerald"
            />
            <StatCard
              value="18%"
              label="Higher Job Satisfaction"
              desc="Improved motivation, loyalty, and day-to-day engagement"
              color="cyan"
            />
          </div>
          <p className="mt-8 text-xs text-slate-500 italic text-center">Sources: Hodgkins et al., 2011; Theeboom et al., 2014; Sedgwick et al., 2025; Canela et al., 2024</p>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT IF SECTION */}
      {/* ============================================ */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-white mb-6 sm:mb-8">What if your organisation could:</h2>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 flex gap-4">
              <div className="bg-emerald-500/10 p-2 h-fit rounded-lg"><CheckCircle2 className="text-emerald-400" size={20}/></div>
              <p className="text-slate-300">Provide meaningful, practical support for neurodiverse employees without adding HR burden</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 flex gap-4">
              <div className="bg-emerald-500/10 p-2 h-fit rounded-lg"><CheckCircle2 className="text-emerald-400" size={20}/></div>
              <p className="text-slate-300">Reduce absenteeism and improve day-to-day performance across your workforce</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 flex gap-4">
              <div className="bg-emerald-500/10 p-2 h-fit rounded-lg"><CheckCircle2 className="text-emerald-400" size={20}/></div>
              <p className="text-slate-300">Demonstrate genuine neuroinclusion that goes beyond awareness days and policy documents</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-xl border border-slate-700 flex gap-4">
              <div className="bg-emerald-500/10 p-2 h-fit rounded-lg"><CheckCircle2 className="text-emerald-400" size={20}/></div>
              <p className="text-slate-300">Get aggregate wellbeing insights without compromising individual employee privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS - 4 STEPS */}
      {/* ============================================ */}
      <section id="how-it-works" className="py-10 md:py-24 bg-[#0B1120] border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">How It Works</div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6 text-white">Low Admin. High Impact. Real Outcomes.</h2>
            <p className="text-xl text-slate-400 font-light">
              Claudia is not another corporate wellness checkbox. It is a purpose-built companion for ADHD minds that delivers measurable improvements in productivity, organisation, and wellbeing, with minimal effort from your People team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-5 sm:p-8 rounded-2xl hover:border-slate-500 transition-all hover:scale-[1.02] group h-full flex flex-col items-center text-center">
              <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] flex items-center justify-center border-4 border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-3xl font-poppins">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-poppins text-white">We onboard your team</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Guided setup for HR. Employees sign up independently. No IT project required.</p>
            </div>

            <div className="glass-card p-5 sm:p-8 rounded-2xl hover:border-slate-500 transition-all hover:scale-[1.02] group h-full flex flex-col items-center text-center">
              <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] flex items-center justify-center border-4 border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-3xl font-poppins">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-poppins text-white">Employees use Claudia daily</h3>
              <p className="text-slate-400 leading-relaxed text-sm">A personal ADHD companion that helps with organisation, focus, and emotional regulation. No diagnosis needed.</p>
            </div>

            <div className="glass-card p-5 sm:p-8 rounded-2xl hover:border-slate-500 transition-all hover:scale-[1.02] group h-full flex flex-col items-center text-center">
              <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] flex items-center justify-center border-4 border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-3xl font-poppins">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-poppins text-white">We measure what matters</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Improvements in output, organisation, focus, and wellbeing tracked automatically through self-reported metrics.</p>
            </div>

            <div className="glass-card p-5 sm:p-8 rounded-2xl hover:border-slate-500 transition-all hover:scale-[1.02] group h-full flex flex-col items-center text-center">
              <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] flex items-center justify-center border-4 border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-3xl font-poppins">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-poppins text-white">You get aggregate insights</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Anonymised, aggregate reporting on productivity gains, organisational improvements, and wellbeing outcomes that proves ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PRODUCT FEATURES */}
      {/* ============================================ */}
      <section id="product" className="py-10 md:py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">What Your Employees Get</div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">Engineered Specifically for ADHD. So It Actually Works.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Built by people with ADHD, for people with ADHD. Claudia is the first tool many users say actually sticks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              color="text-purple-400"
              bg="bg-purple-400/10"
              icon={<Mic size={24} />}
              title="No Typing. Just Talk."
              desc="Employees speak their thoughts. AI structures the chaos into actionable tasks and plans. Zero friction."
            />
            <FeatureCard
              color="text-pink-400"
              bg="bg-pink-400/10"
              icon={<HeartPulse size={24} />}
              title="Built on ADHD Brains"
              desc="Designed around real ADHD experiences, not a neurotypical tool with an ADHD label slapped on."
            />
            <FeatureCard
              color="text-orange-400"
              bg="bg-orange-400/10"
              icon={<Zap size={24} />}
              title="Breaks Down Overwhelm"
              desc="AI breaks daunting tasks into micro-steps, overcoming the paralysis that costs your employees hours every week."
            />
            <FeatureCard
              color="text-cyan-400"
              bg="bg-cyan-400/10"
              icon={<Brain size={24} />}
              title="Learns and Adapts"
              desc="Claudia gets smarter over time, adapting support to each individual's patterns, energy, and needs."
            />
            <FeatureCard
              color="text-red-400"
              bg="bg-red-400/10"
              icon={<Search size={24} />}
              title="Identifies Patterns"
              desc="AI spots patterns in moods and energy, helping employees understand what helps and what hinders their performance."
            />
            <FeatureCard
              color="text-emerald-400"
              bg="bg-emerald-400/10"
              icon={<Lightbulb size={24} />}
              title="Learn While Doing"
              desc="Bite-sized psychoeducation delivered exactly when it is needed. Employees learn by doing, not just reading."
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CLAUDIA - EMPLOYER BENEFITS */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-[#0B1120] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">Why Claudia for Your Organisation</div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Practical Neuroinclusive Support That Does Not Add Manager Burden
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              icon={<Briefcase className="text-cyan-400" size={28} />}
              title="Zero Admin Overhead"
              desc="No complex rollout, no IT dependency, no heavy procurement process. Your People team can have this live in weeks, not months."
            />
            <BenefitCard
              icon={<ShieldCheck className="text-emerald-400" size={28} />}
              title="No Diagnosis Required"
              desc="Employees do not need a formal ADHD diagnosis to benefit. Anyone who struggles with executive function, organisation, or overwhelm can use Claudia."
            />
            <BenefitCard
              icon={<BarChart3 className="text-purple-400" size={28} />}
              title="Aggregate, Anonymised Reporting"
              desc="See the impact across your workforce without compromising individual privacy. Usage data that proves ROI, not vanity metrics."
            />
            <BenefitCard
              icon={<Users className="text-orange-400" size={28} />}
              title="Genuine Neuroinclusion"
              desc="Go beyond awareness training and policy documents. Claudia is a tangible benefit that employees actually use and value."
            />
            <BenefitCard
              icon={<Smile className="text-yellow-400" size={28} />}
              title="Happier, More Productive Employees"
              desc="Supported employees report higher job satisfaction, better daily output, lower stress, and stronger loyalty to their employer."
            />
            <BenefitCard
              icon={<TrendingUp className="text-red-400" size={28} />}
              title="Measurable Performance Gains"
              desc="Improved output, better organisation, reduced absenteeism, and more consistent performance across your workforce. Real outcomes, not promises."
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PILOT STRUCTURE */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">Getting Started</div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">Start with a Low-Risk Pilot</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We believe in proving value before asking for commitment. Every engagement starts with a structured 3-month pilot so you can see the impact firsthand.
            </p>
          </div>

          <div className="bg-[#1E293B] rounded-2xl border border-slate-700 p-6 sm:p-10 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-poppins font-bold text-lg text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center"><Sparkles size={16} className="text-[#0EA5E9]" /></div>
                  What is included
                </h3>
                <ul className="space-y-3">
                  {[
                    "3-month structured pilot period",
                    "Guided onboarding for HR and employees",
                    "Full access to Claudia for your pilot cohort",
                    "Aggregate, anonymised reporting dashboard",
                    "End-of-pilot review with usage and outcome summary",
                    "Dedicated support from our team throughout"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center"><BarChart3 size={16} className="text-[#0EA5E9]" /></div>
                  What we measure
                </h3>
                <ul className="space-y-3">
                  {[
                    "Self-reported output and productivity improvement",
                    "Self-reported organisation and task management improvement",
                    "Self-reported focus and time management improvement",
                    "Self-reported stress reduction and wellbeing change",
                    "Engagement, active usage rates, and retention",
                    "Qualitative feedback and testimonials"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-600 pt-6 text-center">
              <p className="text-slate-400 mb-4">Pricing is based on company size and is discussed during our initial conversation.</p>
              <button
                onClick={openModal}
                className="px-8 py-3.5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:-translate-y-1 mx-auto"
              >
                Enquire About Pricing
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TARGET INDUSTRIES */}
      {/* ============================================ */}
      <section className="py-16 md:py-20 bg-[#0B1120] border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">Built for Knowledge Work</div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">Industries Where ADHD Support Matters Most</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Knowledge-work environments where planning, time management, and organisation matter daily. These sectors also carry some of the highest rates of neurodivergent professionals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard
              icon={<Users size={24} />}
              title="Recruitment & Sales"
              stat="15-20%"
              desc="neurodivergent employees"
            />
            <IndustryCard
              icon={<Sparkles size={24} />}
              title="Creative & Media Agencies"
              stat="21%"
              desc="neurodivergent employees"
            />
            <IndustryCard
              icon={<BrainCircuit size={24} />}
              title="Tech & SaaS"
              stat="15-20%"
              desc="neurodivergent employees"
            />
            <IndustryCard
              icon={<Briefcase size={24} />}
              title="Marketing & PR"
              stat="18%"
              desc="neurodivergent employees"
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full font-medium text-xs mb-4">FAQs</div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white">Questions from People Leaders</h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-[#0B1120] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-[#0B1120]"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="bg-[#1E293B] p-6 sm:p-12 rounded-2xl shadow-2xl border border-slate-700">
            <h2 className="font-poppins font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
              Support Your People. See the Results.
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-slate-400 mb-7 sm:mb-10 leading-relaxed">
              With the right scaffolding, neurodivergent employees have an equal chance at being happy and successful. Let us show you how.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={openModal}
                className="w-full md:w-auto px-7 sm:px-10 py-4 sm:py-5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-lg sm:text-xl rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:-translate-y-1"
              >
                Enquire Now
                <ArrowRight size={24} />
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              No commitment. We will respond within one business day.
            </p>
          </div>
        </div>
      </section>
    </div>
      <LPFooter />
      <Toaster />
    </>
  );
};

// ============================================
// SUB-COMPONENTS
// ============================================

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do employees need an ADHD diagnosis to use Claudia?",
      answer: "No. Claudia is designed for anyone who struggles with executive function, organisation, or overwhelm. Many people experience these challenges without a formal diagnosis, and Claudia supports them all. This means you do not need to identify or label employees to offer this benefit."
    },
    {
      question: "What data do you share with employers?",
      answer: "All employer reporting is aggregate and fully anonymised. You will see overall engagement rates, usage trends, and cohort-level wellbeing improvements. We never share individual employee data, activity, or personal information with employers. Employee privacy is non-negotiable."
    },
    {
      question: "How much admin does this create for our HR team?",
      answer: "Very little. We handle the onboarding setup and provide templated communications for your internal launch. Employees sign up independently. There is no IT integration required, no complex procurement process, and no ongoing admin burden. Most organisations are live within a few weeks."
    },
    {
      question: "How is Claudia different from our existing EAP or wellness platform?",
      answer: "EAPs and generic wellness platforms are built for broad populations. Claudia is purpose-built specifically for ADHD and executive function challenges. It is designed around how neurodivergent brains actually work, which is why it achieves engagement and retention rates that generic tools cannot match. It complements your existing benefits rather than replacing them."
    },
    {
      question: "What does the pilot look like?",
      answer: "The pilot is a structured 3-month engagement. We guide your HR team through setup, onboard your pilot cohort, and provide ongoing support throughout. At the end of the pilot, we deliver a comprehensive review with usage data, outcome metrics, and employee feedback. Pricing is discussed during our initial conversation and is based on company size."
    },
    {
      question: "Is this clinically backed?",
      answer: "Yes. Claudia is advised by leading ADHD clinicians including Dr. James Kustow (Medical Director at The Grove Practice and founding member of UKAAN), Dr. Tony Lloyd (former CEO of the ADHD Foundation), and Prof. David Daley (leading ADHD academic in Europe). We are also working with the Health Innovation Network to gather real-world clinical evidence through the NHS."
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
            <span className="font-poppins font-semibold text-white text-sm sm:text-lg pr-4">{faq.question}</span>
            <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              <ChevronDown size={16} className="text-[#0EA5E9]" />
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

const AffiliateProfile = ({ name, image, link, isLarge = false, bio = [], role = null, tooltipSide = 'center' }) => {
  const [active, setActive] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setActive(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('touchstart', close);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('touchstart', close); };
  }, []);

  const handleClick = (e) => {
    if (!active) { e.preventDefault(); setActive(true); }
  };

  const tooltipPos =
    tooltipSide === 'left'
      ? 'left-0 sm:left-1/2 sm:-translate-x-1/2'
      : tooltipSide === 'right'
      ? 'right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2'
      : 'left-1/2 -translate-x-1/2';

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 sm:gap-3 group relative cursor-pointer"
      onClick={handleClick}
    >
      <div className={`${isLarge ? 'w-20 h-20 sm:w-40 sm:h-40' : 'w-16 h-16 sm:w-32 sm:h-32'} rounded-full border-2 p-1 overflow-hidden relative transition-all bg-slate-800 shadow-xl ${active ? 'border-[#0EA5E9] shadow-[#0EA5E9]/20' : 'border-slate-700 group-hover:border-[#0EA5E9] group-hover:shadow-[#0EA5E9]/20'}`}>
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-0.5 sm:gap-1">
        <span className={`font-medium text-[10px] sm:text-base text-center max-w-[80px] sm:max-w-[160px] transition-colors leading-tight ${active ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{name}</span>
        {role && <span className="text-[#0EA5E9] font-medium text-[9px] sm:text-xs text-center leading-tight">{role}</span>}
      </div>

      <div className={`absolute bottom-full mb-3 ${tooltipPos} w-[190px] sm:w-[280px] bg-slate-800 border border-slate-600 rounded-xl p-3 sm:p-4 transition-all duration-300 z-20 shadow-2xl pointer-events-none ${active ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
        <ul className="space-y-1.5">
          {bio.map((item, index) => (
            <li key={index} className="text-[10px] sm:text-xs text-slate-300 flex items-start text-left leading-snug">
              <span className="text-[#0EA5E9] mr-1.5 flex-shrink-0">&bull;</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 border-r border-b border-slate-600 transform rotate-45"></div>
      </div>
    </a>
  );
};

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

const CostItem = ({ label, value, color }) => {
  const colorMap = {
    red: 'border-red-400/20 bg-red-400/5',
    orange: 'border-orange-400/20 bg-orange-400/5',
    yellow: 'border-yellow-400/20 bg-yellow-400/5',
    purple: 'border-purple-400/20 bg-purple-400/5',
  };

  return (
    <div className={`p-3 rounded-lg border ${colorMap[color]} flex items-center gap-3`}>
      <TrendingDown size={16} className="text-red-400 flex-shrink-0" />
      <span className="text-slate-300 text-sm">{label}</span>
    </div>
  );
};

const StatCard = ({ value, label, desc, color }) => {
  const colorMap = {
    cyan: { text: 'text-[#0EA5E9]', glow: 'stat-glow-cyan', border: 'border-[#0EA5E9]/20' },
    purple: { text: 'text-[#6366F1]', glow: 'stat-glow-purple', border: 'border-[#6366F1]/20' },
    emerald: { text: 'text-emerald-400', glow: 'stat-glow-emerald', border: 'border-emerald-400/20' },
  };

  const c = colorMap[color] || colorMap.cyan;

  return (
    <div className={`glass-card rounded-2xl p-6 sm:p-8 text-center hover:scale-[1.03] transition-all ${c.glow} border ${c.border}`}>
      <div className={`text-4xl sm:text-5xl font-bold font-poppins mb-2 ${c.text}`}>{value}</div>
      <div className="text-white font-semibold text-lg mb-2 font-poppins">{label}</div>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
};

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

const IndustryCard = ({ icon, title, stat, desc }) => (
  <div className="glass-card p-6 rounded-2xl text-center hover:border-slate-500 transition-all hover:scale-[1.02] group">
    <div className="w-14 h-14 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center mx-auto mb-4 text-[#0EA5E9] group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-poppins font-bold text-white text-lg mb-2">{title}</h3>
    <div className="text-2xl font-bold text-[#0EA5E9] font-poppins mb-1">{stat}</div>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

export default ForCorporate;
