import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Download,
  Lock,
  Menu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'How it works', href: '#product' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'Clinical team', href: '#clinical-team' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pricing', href: '#pricing' },
];

const HERO_STATS = [
  { value: '~35', label: 'lost days per employee, per year' },
  { value: '2x', label: 'higher absenteeism' },
  { value: '25%', label: 'lower job satisfaction' },
];

const PROBLEM_CARDS = [
  {
    title: 'Hidden cost',
    body: '~£4,000 lost productivity per unsupported neurodivergent employee, per year. At scale, £400k a year in a 1,000-person business.',
    citation: 'Sedgwick 2025, Canela 2024.',
  },
  {
    title: 'Hidden signal',
    body: 'Underperformance shows up long before disclosure. By the time HR spots the pattern, the employee has been struggling for months.',
    citation: 'Canela 2024.',
  },
  {
    title: 'Fixable',
    body: 'The research is clear. The right support flips the numbers.',
    citation: 'Hodgkins 2011, Theeboom 2014.',
  },
];

const PREVALENCE_ROWS = [
  ['Tech Sales', '15-20%'],
  ['Recruitment', '15%'],
  ['Sales', '15%'],
  ['Marketing', '18%'],
  ['Creative Media', '21%'],
];

const EVIDENCE_WITHOUT = [
  '~35 lost days per year',
  '2x higher absenteeism',
  '2x higher mental health risk',
  '25% lower job satisfaction',
];

const EVIDENCE_WITH = [
  '60% less absenteeism',
  '36% higher performance at work',
  '87% feel less stressed and anxious at work',
  '18% higher job satisfaction',
];

const CLINICAL_TILES = [
  {
    name: 'Dr Tony Lloyd',
    role: 'Clinical Advisor',
    image: 'https://NeuroNotionPullZonw.b-cdn.net/tony.webp',
    summary: 'Former CEO of the ADHD Foundation. Thirty years advising the NHS and government.',
  },
  {
    name: 'Dr James Kustow',
    role: 'Clinical Lead',
    image: 'https://NeuroNotionPullZonw.b-cdn.net/jameskustow.webp',
    summary: 'Consultant Psychiatrist. Medical Director at The Grove Practice. UKAAN board.',
  },
  {
    name: 'Prof David Daley',
    role: 'Clinical Advisor',
    image: 'https://NeuroNotionPullZonw.b-cdn.net/david%20(1).webp',
    summary: 'Clinical Professor. Leading academic on digital interventions for ADHD.',
  },
  {
    name: 'Trusted in clinical settings',
    role: 'Clinical adoption',
    image: '',
    summary: 'Already in use across NHS and private ADHD clinic pilots, including Evolve, Innovate ADHD and Leicester Psychology. The same platform your clinicians are trialling is the one we bring to your workforce.',
  },
];

const GAP_CARDS = [
  {
    title: 'Disclosure gap',
    body: 'Most neurodivergent employees suspect for years before they tell anyone. HR only hears about it once performance has already dropped.',
  },
  {
    title: 'Support gap',
    body: 'Wellbeing apps treat stress. EAPs hand out counselling. Neither touches the day-to-day friction that actually costs the business.',
  },
  {
    title: 'Performance gap',
    body: 'Managers see the missed deadlines. They rarely have a tool to offer that does not need formal disclosure. Neuro gives them one.',
  },
];

const PRODUCT_TILES = [
  {
    title: 'Built for ADHD brains',
    body: 'Designed from scratch with neurodivergent users. Not a neurotypical tool with a new label.',
  },
  {
    title: 'Voice-first',
    body: 'Your people talk. The AI turns the chaos into a clear plan.',
  },
  {
    title: 'Learns the person',
    body: 'The more an employee uses it, the better it adapts to their patterns.',
  },
  {
    title: 'Ready from day one',
    body: 'No referrals. No waiting lists. Access on sign-up.',
  },
];

const COMPARISON_ROWS = [
  ['ADHD-specific support', '✗', '✗', '✓'],
  ['Clinical governance', 'partial', '✓', '✓'],
  ['Manager enablement', '✗', 'partial', '✓'],
  ['Outcome tracking', 'partial', 'partial', '✓'],
  ['Measurable ROI at renewal', '✗', 'partial', '✓'],
  ['Ready in under 4 weeks', '✓', '✗', '✓'],
];

const BUYING_OPTIONS = [
  {
    title: 'Pilot',
    body: '12-week structured pilot.',
    points: ['50 to 200 employees', 'Guided HR onboarding', 'Outcome report at week 12', 'Fixed fee. No commitment.', 'Live in three weeks.'],
  },
  {
    title: 'Enterprise rollout',
    body: 'Ongoing licence across your workforce.',
    points: ['Unlimited access', 'Quarterly reporting with trend analysis', 'Manager content and scripts included', 'Dedicated account contact', 'Annual, renewable'],
  },
];

const SCENARIOS = [
  ['Performance reviews', 'employees arrive with clarity, not dread.'],
  ['Deadline overwhelm', 'big tasks broken into next steps.'],
  ['Return to work', 'low-friction re-entry after absence.'],
  ['1-1 conversations', 'a shared language between manager and employee.'],
  ['Task prioritisation', 'voice-led triage.'],
  ['Disclosure decisions', 'private guidance when it matters.'],
];

const MANAGER_POINTS = [
  'Manager content on supporting neurodivergent reports without overstepping.',
  'Scripts for 1-1s, reviews and return-to-work chats.',
  'A shared language that does not need formal disclosure.',
];

const PARTNER_ROWS = [
  {
    label: 'Clinical partners',
    items: ['Evolve', 'Innovate ADHD', 'Leicester Psychology', 'NHS trusts when consented'],
  },
  {
    label: 'Technology',
    items: ['11Labs', 'Additional partners'],
  },
  {
    label: 'Pilot settings',
    items: ['Populated as they land'],
  },
];

const INDUSTRY_CARDS = [
  {
    title: 'Technology',
    body: '15 to 20% of your engineers are likely neurodivergent. The productivity drag hits velocity before it hits a wellness dashboard.',
  },
  {
    title: 'Financial services',
    body: 'Disclosure rates are among the lowest of any sector. The drag is there. Your current tools are not catching it.',
  },
  {
    title: 'Professional services',
    body: 'Output variability in a billable-hour model hits margin directly. Neurodivergent associates underperform against their own ceiling.',
  },
  {
    title: 'Public sector',
    body: 'Aligns with Equality Act and inclusion obligations. Procurement-ready.',
  },
];

const PROCUREMENT_POINTS = [
  'One point of contact from first call to go-live.',
  'Standard DPA on request.',
  'Security pack ready for your InfoSec team.',
  'Clinically governed by our advisory board.',
];

const FAQS = [
  {
    question: 'Will my employees actually use it?',
    answer: 'Pilot engagement is running ahead of typical workplace wellbeing benchmarks. The tool is voice-first, so there is no onboarding friction. Most employees are active in their first session.',
  },
  {
    question: 'How is this different from our EAP or a wellbeing app?',
    answer: 'EAPs offer counselling. Wellbeing apps offer meditation. Neither addresses the day-to-day friction neurodivergent employees actually face at work. Neuro is built for that.',
  },
  {
    question: 'What happens if an employee discloses a crisis?',
    answer: 'Our safeguarding protocols route anyone in crisis to human support, not AI. Your HR policies are respected, not bypassed.',
  },
  {
    question: 'Do employees need a formal ADHD diagnosis?',
    answer: 'No. Most neurodivergent employees are undiagnosed, often for years. Gating access behind diagnosis would exclude the people who need it most.',
  },
  {
    question: 'How do I justify this to finance?',
    answer: 'Two numbers to land on. First, the recovered productivity: a 1,000-person business with average prevalence typically recovers over £100k a year in absenteeism and output. Second, the inclusion credential: neuroinclusion is commercially visible to talent, clients and investors. Both show up at renewal.',
  },
  {
    question: 'Who sees individual employee data?',
    answer: 'No one inside your business. Employer reporting is aggregated and anonymised. That is architectural, not a setting.',
  },
  {
    question: 'What happens after the pilot?',
    answer: 'You get a full outcome report against the metrics agreed at the start. If it is working, we move to an enterprise licence. If not, the pilot ends cleanly with no further cost.',
  },
];

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#product' },
      { label: 'Evidence', href: '#evidence' },
      { label: 'Clinical team', href: '#clinical-team' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: 'https://www.neuro-notion.com' },
      { label: 'Careers', href: 'https://www.neuro-notion.com' },
      { label: 'Press', href: 'https://www.neuro-notion.com' },
    ],
  },
  {
    title: 'Employers',
    links: [
      { label: 'For employers', href: '/forcorporate2' },
      { label: 'Book a demo', href: '#final-cta' },
      { label: 'One-pager', href: '#final-cta' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: 'https://www.neuro-notion.com' },
      { label: 'Cookies', href: 'https://www.neuro-notion.com' },
      { label: 'Terms', href: 'https://www.neuro-notion.com' },
      { label: 'DPA', href: '#procurement' },
    ],
  },
];

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#7DD3FC] uppercase mb-4">
      <Sparkles size={12} />
      {children}
    </div>
  );
}

function CTAButtons({ onPrimaryClick, secondaryHref = '#product', secondaryLabel = 'See how it works' }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <button
        onClick={onPrimaryClick}
        className="w-full sm:w-auto rounded-xl bg-[#0EA5E9] px-6 py-3.5 text-white font-semibold transition-colors hover:bg-[#0284C7] inline-flex items-center justify-center gap-2"
      >
        Book a demo
        <ArrowRight size={18} />
      </button>
      <a
        href={secondaryHref}
        className="w-full sm:w-auto rounded-xl border border-slate-600 px-6 py-3.5 text-white font-semibold transition-colors hover:border-slate-400 inline-flex items-center justify-center gap-2"
      >
        {secondaryLabel}
      </a>
    </div>
  );
}

function InputField({ label, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-[#38BDF8] focus:outline-none"
      />
    </div>
  );
}

function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    companySize: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const closeModal = () => {
    onClose();
    setSubmitted(false);
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/corporate-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (submissionError) {
      setError('Something went wrong. Please try again or email josh@neuro-notion.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-slate-700 bg-[#0B1220] shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <CheckCircle2 size={28} className="text-emerald-400" />
            </div>
            <h3 className="mb-3 font-poppins text-2xl font-bold text-white">Thanks. We have your request.</h3>
            <p className="mx-auto max-w-md leading-relaxed text-slate-300">A member of the team will review your enquiry and respond within one business day.</p>
          </div>
        ) : (
          <div className="p-8 sm:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/10 px-3 py-1 text-xs font-medium text-[#7DD3FC]">
              <CalendarCheck size={14} />
              Book a demo
            </div>
            <h3 className="mb-3 font-poppins text-3xl font-bold text-white">See if Neuro fits your workforce</h3>
            <p className="mb-6 leading-relaxed text-slate-300">30-minute call. No commitment. We respond within one business day.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField label="Full name" value={formData.name} onChange={(value) => updateField('name', value)} required />
                <InputField label="Work email" type="email" value={formData.email} onChange={(value) => updateField('email', value)} required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <InputField label="Company" value={formData.company} onChange={(value) => updateField('company', value)} required />
                <InputField label="Job title" value={formData.jobTitle} onChange={(value) => updateField('jobTitle', value)} required />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Company size</label>
                <select
                  required
                  value={formData.companySize}
                  onChange={(event) => updateField('companySize', event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-[#38BDF8] focus:outline-none"
                >
                  <option value="">Select company size</option>
                  <option value="0-100">0 to 100 employees</option>
                  <option value="100-250">100 to 250 employees</option>
                  <option value="250-500">250 to 500 employees</option>
                  <option value="500-1000">500 to 1,000 employees</option>
                  <option value="1000-5000">1,000 to 5,000 employees</option>
                  <option value="5000+">5,000+ employees</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">What are you evaluating?</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  placeholder="Tell us about the problem you want to solve, the team size, or any questions for the call."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              {error && <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}

              <button
                type="submit"
                disabled={submitting}
                className={`w-full rounded-xl py-3.5 font-semibold text-white transition-colors ${submitting ? 'cursor-not-allowed bg-[#0EA5E9]/70' : 'bg-[#0EA5E9] hover:bg-[#0284C7]'}`}
              >
                {submitting ? 'Sending...' : 'Book a demo'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function CorporateHeader({ onPrimaryClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-[#081120]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="bg-[#0EA5E9] px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
        We have closed our latest funding round. <span className="underline underline-offset-2">Read the announcement.</span>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/forcorporate2" className="flex items-center gap-3 min-w-0">
          <img src="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png" alt="Neuro logo" className="h-8 w-auto shrink-0" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button onClick={onPrimaryClick} className="rounded-xl bg-[#0EA5E9] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0284C7]">
            Book a demo
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          <Menu size={18} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#081120]/95 px-4 pb-4 pt-3 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm text-slate-200">
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onPrimaryClick();
              }}
              className="mt-2 rounded-xl bg-[#0EA5E9] px-4 py-2 text-sm font-semibold text-white"
            >
              Book a demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {FAQS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="pr-4 font-semibold text-white">{item.question}</span>
              <ChevronDown size={18} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="px-5 pb-5 text-slate-300 sm:px-6">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#081120] p-5 shadow-2xl shadow-cyan-950/30">
      <div className="mb-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
          <div className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-300">Activation trend</div>
          <div className="mb-4 text-2xl font-bold text-white">Weekly engagement</div>
          <div className="flex h-24 items-end gap-2">
            {[34, 41, 56, 62, 68, 74].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-xl bg-cyan-400/80" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4">
          <div className="mb-2 text-xs uppercase tracking-[0.18em] text-violet-300">Common themes</div>
          <div className="mb-4 text-2xl font-bold text-white">What support is used for</div>
          <div className="space-y-3">
            {[
              ['Task prioritisation', '78%'],
              ['Deadline overwhelm', '61%'],
              ['Manager conversations', '42%'],
            ].map(([label, width]) => (
              <div key={label}>
                <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
                  <span>{label}</span>
                  <span>{width}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-violet-400" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ['Aggregate only', 'No employee-level reporting shown to employers.'],
          ['Trend view', 'Outcomes and usage patterns only.'],
          ['Procurement-ready', 'Built for renewal conversations and reporting.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-2 font-semibold text-white">{title}</div>
            <p className="text-sm leading-relaxed text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ForCorporate2Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Neuro for Employers - ADHD Support at Work</title>
        <meta
          name="description"
          content="Your neurodivergent employees are underperforming and not telling you. Neuro is the ADHD tool built for the workplace. Higher output. Lower absence. Clinically backed."
        />
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-[#07111F] font-lexend text-white selection:bg-[#0EA5E9] selection:text-white">
        <style jsx global>{`
          html { scroll-behavior: smooth; }
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-lexend { font-family: 'Lexend Deca', sans-serif; }
          body { background: #07111F; }
          @keyframes slow-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .partner-scroll {
            animation: slow-scroll 34s linear infinite;
          }
        `}</style>

        <CorporateHeader onPrimaryClick={() => setIsModalOpen(true)} />
        <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <main>
          <section className="relative px-4 pb-16 pt-40 sm:px-6 sm:pb-20">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-12 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-3xl" />
            </div>
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <SectionEyebrow>For employers</SectionEyebrow>
                <h1 className="mb-6 font-poppins text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Your neurodivergent employees are underperforming. And they&apos;re not telling you.
                </h1>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                  Neuro is the ADHD tool built for the workplace. Higher output. Lower absence. Backed by clinicians.
                </p>
                <CTAButtons onPrimaryClick={() => setIsModalOpen(true)} secondaryHref="#product" secondaryLabel="See how it works" />
              </div>

              <div className="space-y-5">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <img
                    src="https://NeuroNotionPullZonw.b-cdn.net/Desktopandmobilemockupfinal.webp"
                    alt="Neuro product interface"
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {HERO_STATS.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center">
                      <div className="mb-2 font-poppins text-3xl font-bold text-white">{item.value}</div>
                      <div className="text-sm leading-relaxed text-slate-300">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-xs text-slate-400">When unsupported. Kessler 2005, de Graaf 2008, Canela 2024.</div>
              </div>
            </div>
          </section>

          <section className="border-y border-white/5 bg-[#0A1424] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-5 md:grid-cols-3">
                {HERO_STATS.map((item) => (
                  <div key={`strip-${item.label}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
                    <div className="mb-2 font-poppins text-4xl font-bold text-white">{item.value}</div>
                    <div className="text-base text-slate-200">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-slate-400">When unsupported. Kessler 2005, de Graaf 2008, Canela 2024.</div>
            </div>
          </section>

          <section id="problem" className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>The problem</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">The £400k problem in a 1,000-person workforce</h2>
                <p className="text-lg leading-relaxed text-slate-300">15 to 21% of your knowledge workers are neurodivergent. Each one loses around £4,000 a year in productivity without the right support. No one is reporting against this number.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {PROBLEM_CARDS.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="mb-3 text-xl font-semibold text-white">{card.title}</div>
                    <p className="mb-4 leading-relaxed text-slate-300">{card.body}</p>
                    <div className="text-sm text-slate-400">{card.citation}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-white/5 bg-[#0A1424] px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <SectionEyebrow>Prevalence</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">This is already in your workforce</h2>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                {PREVALENCE_ROWS.map(([label, value], index) => (
                  <div key={label} className={`flex items-center justify-between gap-4 px-6 py-5 ${index !== PREVALENCE_ROWS.length - 1 ? 'border-b border-white/10' : ''}`}>
                    <span className="text-lg text-slate-200">{label}</span>
                    <span className="font-poppins text-2xl font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-slate-400">Estimates from Neuro platform self-assessments.</div>
            </div>
          </section>

          <section id="evidence" className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>The evidence</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">What changes when ADHD support actually lands</h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="mb-5 text-xl font-semibold text-white">Without support</div>
                  <ul className="space-y-4">
                    {EVIDENCE_WITHOUT.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-200">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-sm text-slate-400">Kessler 2005, de Graaf 2008, Canela 2024.</div>
                </div>
                <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 sm:p-8">
                  <div className="mb-5 text-xl font-semibold text-white">With the right support</div>
                  <ul className="space-y-4">
                    {EVIDENCE_WITH.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-100">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-sm text-cyan-100/80">Hodgkins 2011, Theeboom 2014, Sedgwick 2025, Canela 2024.</div>
                </div>
              </div>
              <div className="mt-6 text-center text-lg text-slate-300">The gap between these two columns is the opportunity.</div>
            </div>
          </section>

          <section id="clinical-team" className="border-y border-white/5 bg-[#0A1424] px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>Clinical team</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Clinicians run the platform. Not marketers.</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {CLINICAL_TILES.map((person) => (
                  <div key={person.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    {person.image ? (
                      <img src={person.image} alt={person.name} className="mb-4 h-20 w-20 rounded-full object-cover border border-white/10" />
                    ) : (
                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                        <ShieldCheck size={28} className="text-cyan-300" />
                      </div>
                    )}
                    <div className="mb-1 text-xl font-semibold text-white">{person.name}</div>
                    <div className="mb-3 text-sm text-cyan-300">{person.role}</div>
                    <p className="text-sm leading-relaxed text-slate-300">{person.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>Where employers get stuck</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Three gaps, not one</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {GAP_CARDS.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="mb-3 text-xl font-semibold text-white">{card.title}</div>
                    <p className="leading-relaxed text-slate-300">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="product" className="border-y border-white/5 bg-[#0A1424] px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <SectionEyebrow>The product</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Not another wellbeing app. Not a generic EAP. A performance tool built around ADHD.</h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-300">Neuro helps your people get more done, with less drag. Every design choice serves that.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {PRODUCT_TILES.map((tile) => (
                    <div key={tile.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="mb-2 text-lg font-semibold text-white">{tile.title}</div>
                      <p className="text-sm leading-relaxed text-slate-300">{tile.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <DashboardMock />
                <div className="mt-4 text-center text-sm text-slate-300"><span className="font-semibold text-white">The HR view. Outcomes and trends only.</span></div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>The comparison</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">How Neuro compares</h2>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <table className="w-full text-left">
                  <thead className="bg-white/[0.04] text-sm text-slate-200">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Capability</th>
                      <th className="px-5 py-4 font-semibold">Wellbeing apps</th>
                      <th className="px-5 py-4 font-semibold">EAPs</th>
                      <th className="px-5 py-4 font-semibold text-cyan-300">Neuro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row) => (
                      <tr key={row[0]} className="border-t border-white/10 text-sm sm:text-base">
                        {row.map((cell, index) => (
                          <td key={`${row[0]}-${index}`} className={`px-5 py-4 ${index === 0 ? 'font-medium text-white' : 'text-slate-300'} ${index === 3 ? 'font-semibold text-cyan-300' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm text-slate-400">Full source notes on request.</div>
            </div>
          </section>

          <section id="pricing" className="border-y border-white/5 bg-[#0A1424] px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>How to buy</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Start with a pilot. Scale when it works.</h2>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {BUYING_OPTIONS.map((option) => (
                  <div key={option.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-poppins text-2xl font-bold text-white">{option.title}</h3>
                        <p className="mt-1 text-slate-300">{option.body}</p>
                      </div>
                      <Briefcase className="text-cyan-300" />
                    </div>
                    <ul className="space-y-3">
                      {option.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-slate-200">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <CTAButtons onPrimaryClick={() => setIsModalOpen(true)} secondaryHref="#faq" secondaryLabel="Book a demo to find the right route" />
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>What it covers</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">The moments Neuro shows up in</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {SCENARIOS.map(([title, body]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="mb-2 text-lg font-semibold text-white">{title}</div>
                    <p className="text-slate-300">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-white/5 bg-[#0A1424] px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <SectionEyebrow>Managers</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Managers are half the buying case</h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-300">The biggest unlock for neurodivergent employees is not the tool. It is the manager knowing how to use it.</p>
                <ul className="space-y-4">
                  {MANAGER_POINTS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 sm:p-10">
                <blockquote className="mb-4 font-poppins text-2xl font-semibold leading-relaxed text-white">&quot;The biggest unlock is not the app. It is the manager knowing how to use it.&quot;</blockquote>
                <div className="text-slate-300">Dr James Kustow, Clinical Lead</div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>Working with</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Clinical partners and pilot settings</h2>
              </div>
              <div className="space-y-4 overflow-hidden">
                {PARTNER_ROWS.map((row) => (
                  <div key={row.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{row.label}</div>
                    <div className="overflow-hidden">
                      <div className="partner-scroll flex min-w-max gap-3">
                        {[...row.items, ...row.items].map((item, index) => (
                          <div key={`${row.label}-${item}-${index}`} className="flex min-h-[52px] min-w-[180px] items-center justify-center rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 text-center text-sm text-slate-300 grayscale">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-white/5 bg-[#0A1424] px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <SectionEyebrow>By industry</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Where we see the biggest impact</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {INDUSTRY_CARDS.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Building2 size={18} className="text-cyan-300" />
                      <div className="text-lg font-semibold text-white">{card.title}</div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="procurement" className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionEyebrow>For procurement</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Easy to sign off</h2>
                <div className="space-y-4">
                  {PROCUREMENT_POINTS.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">
                      <Lock size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-[#0EA5E9]/12 to-violet-500/10 p-8 sm:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
                  <ShieldCheck size={14} />
                  Built for approval
                </div>
                <h3 className="mb-4 font-poppins text-3xl font-bold text-white">Security, governance and commercial clarity in one flow</h3>
                <p className="mb-6 leading-relaxed text-slate-200">From the first demo to go-live, this offer is structured to reduce friction for HR, InfoSec and procurement. That is part of the product, not an afterthought.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {['Outcome tracking', 'Clinical governance', 'Aggregate reporting', 'DPA-ready'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-100">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="border-y border-white/5 bg-[#0A1424] px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <SectionEyebrow>FAQ</SectionEyebrow>
                <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">Questions we hear from HR, People and finance leaders</h2>
              </div>
              <FAQAccordion />
            </div>
          </section>

          <section id="final-cta" className="px-4 pb-20 pt-20 sm:px-6">
            <div className="mx-auto max-w-6xl rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-[#0EA5E9]/16 to-violet-500/10 p-8 text-center sm:p-12">
              <SectionEyebrow>Talk to us</SectionEyebrow>
              <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-5xl">Book a demo. See if this solves a real problem for your business.</h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-200">30-minute call. No commitment. We respond within one business day.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 font-semibold text-[#07111F] transition-colors hover:bg-slate-100 inline-flex items-center justify-center gap-2"
                >
                  Book a demo
                  <ArrowRight size={18} />
                </button>
                <a
                  href="#final-cta"
                  className="w-full sm:w-auto rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:border-white/40 inline-flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download the employer one-pager
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#060D18] px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-2 font-poppins text-2xl font-bold text-white">Neuro is the ADHD tool built for the workplace.</div>
                <a href="https://www.neuro-notion.com" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-300 underline underline-offset-2">
                  Looking for Neuro for individuals? Visit our consumer site.
                </a>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="rounded-xl bg-[#0EA5E9] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0284C7]">
                Book a demo
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <div className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{column.title}</div>
                  <div className="space-y-3">
                    {column.links.map((link) => {
                      const isInternalRoute = link.href.startsWith('/');
                      const isAnchor = link.href.startsWith('#');

                      if (isInternalRoute) {
                        return (
                          <Link key={link.label} href={link.href} className="block text-slate-300 transition-colors hover:text-white">
                            {link.label}
                          </Link>
                        );
                      }

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={isAnchor ? undefined : '_blank'}
                          rel={isAnchor ? undefined : 'noopener noreferrer'}
                          className="block text-slate-300 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">Part of Neuro Ltd. Registered in England and Wales. © 2026 Neuro Ltd.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
