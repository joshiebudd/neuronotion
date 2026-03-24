import Head from 'next/head';
import React, { useState } from 'react';
import ClinicPageHeader from '../components/ClinicPageHeader';
import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { Check, ChevronDown, ChevronUp, Shield, Clock, TrendingUp, Users, Zap, Phone, Star, CalendarCheck, X, Package, Heart } from 'lucide-react';

// --- Booking Modal ---
const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-visible relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CalendarCheck size={32} className="text-[#0EA5E9]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-poppins leading-tight">
            Book a Call with Josh
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Speak with the founder to discuss how Claudia can work for your clinic.
          </p>
          <a
            href="https://app.usemotion.com/meet/josh-budd/clinicaldisc"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-xl py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Tier data ---
const tiers = [
  {
    id: 'solo',
    name: 'Solo Practitioner',
    clinicians: '1',
    clinicianLabel: 'Clinician',
    price: 200,
    annualSaving: 400,
    annualPrice: 2200,
  },
  {
    id: 'small',
    name: 'Small Practice',
    clinicians: '2 - 5',
    clinicianLabel: 'Clinicians',
    price: 500,
    annualSaving: 1000,
    annualPrice: 5500,
  },
  {
    id: 'growing',
    name: 'Growing Clinic',
    clinicians: '5 - 15',
    clinicianLabel: 'Clinicians',
    price: 1000,
    annualSaving: 2000,
    annualPrice: 11000,
    popular: true,
  },
  {
    id: 'established',
    name: 'Established Clinic',
    clinicians: '15 - 40',
    clinicianLabel: 'Clinicians',
    price: 3000,
    annualSaving: 6000,
    annualPrice: 33000,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    clinicians: '40+',
    clinicianLabel: 'Clinicians',
    price: 5000,
    annualSaving: 10000,
    annualPrice: 55000,
    topPriority: true,
  },
];

// --- Feature comparison rows ---
const comparisonFeatures = [
  { label: 'Unlimited patient distribution', solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: 'All pathways (RTC, insurance, private)', solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: 'Unlimited patient access (no time limits)', solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: 'Full data and outcome measurement', solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: 'We handle all setup and onboarding', solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: 'Less than 1 hour of your time', solo: true, small: true, growing: true, established: true, enterprise: true },
  { label: 'Optional clinician training module', solo: false, small: false, growing: true, established: true, enterprise: true },
  { label: 'Clinician training included', solo: false, small: false, growing: false, established: true, enterprise: true },
  { label: 'Priority support', solo: false, small: false, growing: true, established: true, enterprise: true },
  { label: 'Direct line to founder', solo: false, small: false, growing: false, established: true, enterprise: true },
  { label: 'Direct line to CTO', solo: false, small: false, growing: false, established: false, enterprise: true },
  { label: 'Top priority onboarding', solo: false, small: false, growing: false, established: false, enterprise: true },
];

// --- Main Page Component ---
export default function ClinicPricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showAnnual, setShowAnnual] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Head>
        <title>Clinic Pricing - Claudia by Neuro Notion</title>
        <meta name="description" content="Transparent, tiered pricing for clinics. White-label Claudia for your patients with unlimited distribution, full data measurement, and zero technical overhead." />
        <link rel="icon" href="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <ClinicPageHeader onLearnMoreClick={openModal} />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="min-h-screen bg-[#0F172A] text-white font-lexend overflow-x-hidden selection:bg-[#0EA5E9] selection:text-white">

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
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #0F172A; }
          ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        `}</style>

        {/* ============================================ */}
        {/* HERO / HEADER SECTION */}
        {/* ============================================ */}
        <section className="pt-28 sm:pt-36 pb-8 sm:pb-12 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] hero-glow pointer-events-none -z-10"></div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg rounded-full">
                Clinic Pricing
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight font-poppins">
              Simple, Transparent{' '}
              <span className="text-[#0EA5E9]">Pricing</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Tiered by team size. Locked in at your rate. Roughly the price of a single clinician per year.
            </p>

            {/* Monthly / Annual Toggle - fixed layout */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className={`text-sm font-medium transition-colors ${!showAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
              <button
                onClick={() => setShowAnnual(!showAnnual)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 flex-shrink-0 ${showAnnual ? 'bg-[#0EA5E9]' : 'bg-slate-600'}`}
              >
                <div className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${showAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm font-medium transition-colors ${showAnnual ? 'text-white' : 'text-slate-400'}`}>
                Annual
              </span>
              {/* Fixed-width container for the pill so it doesn't shift the toggle */}
              <div className="w-[120px] flex-shrink-0">
                {showAnnual && (
                  <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 animate-pulse whitespace-nowrap">
                    Save 2 months
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CALLOUT BANNERS */}
        {/* ============================================ */}
        <section className="px-4 sm:px-6 pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="glass-card rounded-xl p-4 sm:p-5 text-center">
              <Package className="w-6 h-6 text-[#0EA5E9] mx-auto mb-2" />
              <p className="text-white font-bold text-sm mb-1">One Price, Unlimited Distribution</p>
              <p className="text-slate-400 text-xs leading-relaxed">One flat fee covers unlimited patients across all pathways. No per-patient charges, no hidden costs, no surprises.</p>
            </div>
            <div className="glass-card rounded-xl p-4 sm:p-5 text-center">
              <Heart className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <p className="text-white font-bold text-sm mb-1">Two for the Price of One</p>
              <p className="text-slate-400 text-xs leading-relaxed">Non-pharma support and patient outcome monitoring all packaged into one. Two tools for the price of one.</p>
            </div>
            <div className="glass-card rounded-xl p-4 sm:p-5 text-center">
              <Shield className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="text-white font-bold text-sm mb-1">Low Risk. Pilot Pricing.</p>
              <p className="text-slate-400 text-xs leading-relaxed">Month 1 is a paid pilot. Not happy with results or data after that month? Opt out. You only pay for the one month.</p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PRICING TABLE */}
        {/* ============================================ */}
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto rounded-2xl border border-slate-700">
              <table className="w-full min-w-[800px]">
                {/* Header row with tier names and prices */}
                <thead>
                  <tr className="bg-[#1a2540]">
                    <th className="p-5 w-[200px]"></th>
                    {tiers.map((tier) => {
                      const displayPrice = showAnnual
                        ? Math.round(tier.annualPrice / 12)
                        : tier.price;
                      return (
                        <th key={tier.id} className="p-5 text-center relative">
                          {/* Badges */}
                          {tier.popular && (
                            <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                              <span className="bg-[#0EA5E9] text-black text-[10px] font-bold px-2.5 py-0.5 rounded-b-lg whitespace-nowrap">
                                Most Popular
                              </span>
                            </div>
                          )}
                          {tier.topPriority && (
                            <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                              <span className="bg-amber-500 text-black text-[10px] font-bold px-2.5 py-0.5 rounded-b-lg whitespace-nowrap flex items-center gap-1">
                                <Star className="w-2.5 h-2.5" /> Top Priority
                              </span>
                            </div>
                          )}
                          <p className="text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-0.5 mt-2">{tier.clinicians} {tier.clinicianLabel}</p>
                          <p className="text-white text-sm font-bold font-poppins mb-2">{tier.name}</p>
                          <div>
                            <span className="text-2xl sm:text-3xl font-bold text-white font-poppins">
                              £{displayPrice.toLocaleString()}
                            </span>
                            <span className="text-slate-400 text-xs">/mo</span>
                          </div>
                          {showAnnual && (
                            <p className="text-emerald-400 text-[10px] font-bold mt-1">
                              £{tier.annualPrice.toLocaleString()}/yr (save £{tier.annualSaving.toLocaleString()})
                            </p>
                          )}
                          {!showAnnual && (
                            <p className="text-slate-500 text-[10px] mt-1">
                              £{(tier.price * 13).toLocaleString()} over 13 months
                            </p>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                {/* Feature rows */}
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={i} className={`border-t border-slate-700/50 ${i % 2 === 0 ? 'bg-[#1E293B]/40' : 'bg-[#1E293B]/20'}`}>
                      <td className="text-sm text-slate-200 p-4 pl-5 font-medium">{row.label}</td>
                      {['solo', 'small', 'growing', 'established', 'enterprise'].map((tierId) => (
                        <td key={tierId} className="text-center p-4">
                          {row[tierId] ? (
                            <Check className="w-6 h-6 text-[#0EA5E9] mx-auto" strokeWidth={3} />
                          ) : (
                            <span className="text-slate-600 text-xl">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* CTA row */}
                  <tr className="border-t-2 border-[#0EA5E9]/30 bg-[#1a2540]">
                    <td className="p-5"></td>
                    {tiers.map((tier) => (
                      <td key={tier.id} className="p-5 text-center">
                        <button
                          onClick={openModal}
                          className={`w-full max-w-[160px] font-bold py-2.5 px-4 rounded-xl text-sm transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-0.5 ${
                            tier.popular
                              ? 'bg-[#0EA5E9] hover:bg-[#0284C7] text-white shadow-lg shadow-cyan-500/25'
                              : 'bg-slate-700 hover:bg-slate-600 text-white'
                          }`}
                        >
                          Book a Call
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* COST SAVINGS CALLOUT */}
        {/* ============================================ */}
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0EA5E9]/5 rounded-full blur-3xl -z-0"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-poppins mb-2">The Cost Savings Are Enormous</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      The consumer price for Claudia is <span className="text-white font-bold">$19/month per user</span>. Even on the Solo Practitioner tier at £200/month, you are distributing unlimited access to every single patient across all your pathways. That is a fraction of what it would cost if each patient subscribed individually.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#0EA5E9] font-poppins">$19</p>
                    <p className="text-slate-400 text-xs mt-1">Consumer price per patient/month</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400 font-poppins">Unlimited</p>
                    <p className="text-slate-400 text-xs mt-1">Patients included at every tier</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 font-poppins">~1 clinician</p>
                    <p className="text-slate-400 text-xs mt-1">Roughly the annual cost of one hire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ANNUAL PREPAY CALLOUT */}
        {/* ============================================ */}
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0EA5E9]/10 to-emerald-500/10 border border-[#0EA5E9]/20 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
              <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-b-lg">
                  Save 2 Months
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-poppins mt-6 mb-3">
                Pay Annually and Get 2 Months Free
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
                If you pay the full annual subscription up front, we discount two months off the annual price. That means your first 60 days are essentially free. Toggle to &quot;Annual&quot; above to see the discounted rates.
              </p>
              <button
                onClick={() => setShowAnnual(true)}
                className="inline-flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-bold text-sm px-6 py-2.5 rounded-xl border border-emerald-500/30 transition-all"
              >
                <Check className="w-4 h-4" />
                {showAnnual ? 'Annual pricing active' : 'Switch to annual pricing'}
              </button>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* HOW IT WORKS */}
        {/* ============================================ */}
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3 font-poppins">
              How It <span className="text-[#0EA5E9]">Works</span>
            </h2>
            <p className="text-slate-400 text-center text-sm mb-8 max-w-2xl mx-auto">
              We handle everything. Literally less than an hour of work on your end.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: '1',
                  title: 'Book a Call',
                  desc: 'Speak with Josh to understand your clinic needs and choose the right tier.',
                  icon: Phone,
                },
                {
                  step: '2',
                  title: 'We Set Everything Up',
                  desc: 'Our team works with yours to embed Claudia. We handle the technical side completely.',
                  icon: Zap,
                },
                {
                  step: '3',
                  title: 'Paid Pilot Month',
                  desc: 'Your first month is a paid pilot. If you are not happy with the results or data, opt out.',
                  icon: Shield,
                },
                {
                  step: '4',
                  title: 'Distribute to Patients',
                  desc: 'Unlimited distribution to all patients across RTC, insurance, and private pathways.',
                  icon: Users,
                },
              ].map((item) => (
                <div key={item.step} className="glass-card rounded-xl p-5 relative">
                  <div className="absolute -top-2 -left-2 w-7 h-7 bg-[#0EA5E9] rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{item.step}</span>
                  </div>
                  <item.icon className="w-6 h-6 text-[#0EA5E9] mb-3 mt-2" />
                  <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* KEY DETAILS CALLOUTS */}
        {/* ============================================ */}
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-start gap-4 glass-card rounded-xl p-5">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Your Price Never Goes Up</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Your rate is locked in from day one. It does not get more expensive as you grow. If you sign up on the 5-15 tier and end up with 60 clinicians next month, you stay on your original price. We reward early adopters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 glass-card rounded-xl p-5">
              <div className="w-10 h-10 bg-[#0EA5E9]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#0EA5E9]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Unlimited Distribution, Unlimited Access</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Distribute Claudia to all patients across all pathways: Right to Choose, insurance, and private customers. Patients get unlimited access for as long as they want, so you can measure data on a patient for as long as you need to or are allowed to.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 glass-card rounded-xl p-5">
              <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Less Than 1 Hour of Your Time</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We handle everything. Our team works with yours to embed Claudia into your workflows. Clinicians do not really need to get involved, but we can provide a simple training module if needed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 glass-card rounded-xl p-5">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Priority Access for Higher Tiers</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  With the new changes from the NHS, there is going to be a wave of clinics wanting to get involved. For the Established and Enterprise tiers, you get priority onboarding and a direct line to Josh (Founder) and Vlad (CTO). First movers get the best support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FAQ SECTION */}
        {/* ============================================ */}
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 font-poppins">
              Frequently Asked <span className="text-[#0EA5E9]">Questions</span>
            </h2>
            <div className="space-y-3">
              {[
                {
                  question: 'What happens during the paid pilot month?',
                  answer: 'Month 1 is a paid pilot. You pay for that month as normal, and we get everything set up and running. If at the end of that month you are not happy with the results or data, you can opt out. You only pay for the one month. The remaining 12 months of the contract only kick in if you choose to continue.',
                },
                {
                  question: 'What does "price-locked" actually mean?',
                  answer: 'It means the price you sign up at is the price you keep, regardless of how much you grow. If you sign up on the 5-15 clinician tier at £1,000/month and you scale to 60 clinicians, your price stays at £1,000/month. We do not penalise growth.',
                },
                {
                  question: 'How does the annual prepay discount work?',
                  answer: 'If you pay the full annual subscription up front, we discount two months off the annual price. So your first 60 days are essentially free. For example, the Growing Clinic tier at £1,000/month would be £11,000 for the year instead of £13,000.',
                },
                {
                  question: 'How much work is required from our team?',
                  answer: 'Less than an hour. We handle everything on the technical side. We work with your team to embed Claudia into your workflows. Clinicians do not really need to get involved at all, but we can provide a simple training module if needed.',
                },
                {
                  question: 'Is there a limit on how many patients can use Claudia?',
                  answer: 'No. Every tier includes unlimited patient distribution across all pathways: Right to Choose, insurance, and private customers. Patients also get unlimited access for as long as they want, so you can measure data and outcomes for as long as you need.',
                },
                {
                  question: 'What kind of support do we get?',
                  answer: 'All tiers get email support. The Growing Clinic tier and above get priority support. Established Clinic and Enterprise tiers get a direct line to Josh (Founder), and Enterprise also gets a direct line to Vlad (CTO). Higher tiers get priority onboarding and faster response times.',
                },
                {
                  question: 'How does this compare to the consumer price?',
                  answer: 'The consumer price for Claudia is $19/month per user. With clinic pricing, you get unlimited distribution to all patients for a flat monthly fee. Even on the Solo Practitioner tier at £200/month, the savings are significant compared to individual patient subscriptions.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-[#1a2540] rounded-xl overflow-hidden border border-slate-700/50">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-[#1f2d4a] transition-colors"
                  >
                    <h4 className="text-sm font-bold text-[#0EA5E9] pr-4">{faq.question}</h4>
                    {expandedFAQ === index ? (
                      <ChevronUp className="h-4 w-4 text-[#0EA5E9] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#0EA5E9] flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-5 pb-5">
                      <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FINAL CTA */}
        {/* ============================================ */}
        <section className="px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-poppins">
              Ready to Provide Better Patient Outcomes?
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              Book a call with Josh to discuss how Claudia can work for your clinic. No pressure, no hard sell.
            </p>
            <a
              href="https://app.usemotion.com/meet/josh-budd/clinicaldisc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-4 px-12 rounded-xl text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Book a Call
            </a>
            <p className="text-xs text-slate-500 mt-4">
              13-month contract with a paid pilot month. Your price is locked in forever.
            </p>
          </div>
        </section>

      </div>

      <LPFooter />
    </>
  );
}
