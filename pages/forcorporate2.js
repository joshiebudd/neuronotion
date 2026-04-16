import { useEffect, useMemo, useState } from 'react';
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
  Clock3,
  Download,
  Lock,
  Menu,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from 'lucide-react';

import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { Toaster } from '../components/ui/toaster';

const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'FAQ', href: '#faq' },
];

const TRUST_BADGES = [
  'GDPR-ready workflows',
  'DPA available',
  'Aggregate reporting only',
  'No diagnosis required',
];

const PROBLEM_GAPS = [
  {
    title: 'Disclosure gap',
    text: 'Employees often struggle with focus, planning, and overwhelm long before they feel safe enough to disclose what is happening.',
    icon: UserCheck,
  },
  {
    title: 'Support gap',
    text: 'Generic wellbeing tools rarely address executive function challenges in a way that feels practical for ADHD profiles.',
    icon: BrainCircuit,
  },
  {
    title: 'Performance gap',
    text: 'Managers see missed deadlines, inconsistency, and absence risk, but often lack a support option that is specific, scalable, and easy to adopt.',
    icon: TrendingDown,
  },
];

const DEPLOYMENT_OPTIONS = [
  {
    title: 'Pilot',
    subtitle: 'Low-friction starting point',
    points: [
      'Structured 12-week rollout for a defined cohort',
      'Guided launch for HR, managers, and employees',
      'Aggregate usage and feedback review at the end of the pilot',
      'Designed to help internal buyers build the business case',
    ],
  },
  {
    title: 'Enterprise rollout',
    subtitle: 'For organisations ready to scale',
    points: [
      'Ongoing licence for wider workforce access',
      'Manager enablement and repeatable onboarding support',
      'Recurring aggregate reporting for HR and leadership',
      'Suitable for organisations looking for durable neuroinclusion infrastructure',
    ],
  },
];

const USE_CASES = [
  'Performance reviews and preparation',
  'Deadline overwhelm and prioritisation',
  'Return-to-work support',
  'Manager conversations and accommodations',
  'Disclosure decisions',
  'Daily planning and sustained focus',
];

const INDUSTRIES = [
  'Technology',
  'Financial services',
  'Professional services',
  'Public sector',
];

const FAQS = [
  {
    question: 'Will employees actually use it?',
    answer:
      'The product is designed around day-to-day executive function support, so it is built to feel useful in the flow of work rather than like another HR resource library. The pilot is structured to validate activation and repeat usage before any larger rollout decision.',
  },
  {
    question: 'How is this different from an EAP or a generic wellbeing platform?',
    answer:
      'EAPs and broad wellbeing apps serve important roles, but they are not built specifically for ADHD-related planning, prioritisation, and overwhelm. Neuro is positioned as an ADHD-specific performance support layer, not another generic wellbeing subscription.',
  },
  {
    question: 'What happens if someone discloses a crisis or safeguarding concern?',
    answer:
      'The offer should sit within a clear safeguarding and escalation framework agreed with the employer. That includes signposting, escalation routes, and role clarity between the employer, existing support channels, and any clinical partners.',
  },
  {
    question: 'How do I justify this to finance?',
    answer:
      'The page frames the commercial case around hidden productivity loss, activation, retention, and absence risk. The pilot option exists specifically to help HR and People leaders collect enough evidence to support a finance conversation with less internal friction.',
  },
  {
    question: 'Do employees need a formal diagnosis?',
    answer:
      'No. The offer is designed for people who experience executive function challenges, including those who are undiagnosed, exploring diagnosis, or simply looking for practical support at work.',
  },
];

const ADVISORS = [
  {
    name: 'Dr. Tony Lloyd',
    role: 'Clinical Advisor',
    image: 'https://NeuroNotionPullZonw.b-cdn.net/tony.webp',
    summary: 'Former CEO of the ADHD Foundation and long-standing advisor to NHS and government bodies.',
  },
  {
    name: 'Dr. James Kustow',
    role: 'Clinical Lead',
    image: 'https://NeuroNotionPullZonw.b-cdn.net/jameskustow.webp',
    summary: 'Medical Director at The Grove Practice, founding member of UKAAN, and leading ADHD clinician.',
  },
  {
    name: 'Prof. David Daley',
    role: 'Clinical Advisor',
    image: 'https://NeuroNotionPullZonw.b-cdn.net/david%20(1).webp',
    summary: 'Leading ADHD academic with deep expertise in digital interventions and evidence generation.',
  },
];

const COMPARISON_ROWS = [
  ['ADHD-specific support', 'Low', 'Low', 'High'],
  ['Clinical governance', 'Low', 'Medium', 'High'],
  ['Manager enablement', 'Low', 'Low', 'High'],
  ['Aggregate reporting', 'Low', 'Medium', 'High'],
  ['Deployment speed', 'Medium', 'Medium', 'High'],
];

function CorporateHeader({ onPrimaryClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#081120]/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="bg-[#0EA5E9] text-white text-center text-xs sm:text-sm font-medium px-4 py-2">
        Employer pilots for Q3 2026 are now open. Book a 30-minute demo to review fit, governance, and rollout options.
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/forcorporate2" className="flex items-center gap-3 min-w-0">
          <img
            src="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png"
            alt="Neuro logo"
            className="h-8 w-auto shrink-0"
          />
          <div className="min-w-0">
            <div className="text-white font-semibold leading-tight">Neuro for Employers</div>
            <div className="text-slate-400 text-xs hidden sm:block">ADHD-specific performance support for the workplace</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#pilot"
            className="px-4 py-2 rounded-xl border border-slate-600 text-sm text-white hover:border-slate-400 transition-colors"
          >
            See pilot structure
          </a>
          <button
            onClick={onPrimaryClick}
            className="px-4 py-2 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold text-sm transition-colors"
          >
            Book a Demo
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((current) => !current)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-700 text-white"
          aria-label="Toggle navigation"
        >
          <Menu size={18} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#081120]/95 backdrop-blur-md">
          <div className="px-4 pb-4 pt-3 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-200 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a href="#pilot" onClick={() => setMenuOpen(false)} className="text-slate-200 text-sm">
              See pilot structure
            </a>
            <button
              onClick={() => {
                setMenuOpen(false);
                onPrimaryClick();
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-[#0EA5E9] text-white font-semibold text-sm"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
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

  const handleChange = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleClose = () => {
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

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      setSubmitted(true);
    } catch (submissionError) {
      setError('Something went wrong. Please try again or email josh@neuro-notion.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm p-4 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-[#0F172A] shadow-2xl max-h-[92vh] overflow-y-auto relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} className="mx-auto" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-emerald-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-poppins">Thanks. We have your request.</h3>
            <p className="text-slate-300 leading-relaxed max-w-md mx-auto">
              A member of the team will review your enquiry and respond within one business day.
            </p>
          </div>
        ) : (
          <div className="p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#7DD3FC] text-xs font-medium mb-5">
              <CalendarCheck size={14} />
              Book a 30-minute demo
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-poppins">See whether Neuro fits your workforce</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              No commitment required. We can walk through the commercial case, deployment options, and governance questions with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField label="Full name" value={formData.name} onChange={(value) => handleChange('name', value)} required />
                <InputField label="Work email" type="email" value={formData.email} onChange={(value) => handleChange('email', value)} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <InputField label="Company" value={formData.company} onChange={(value) => handleChange('company', value)} required />
                <InputField label="Job title" value={formData.jobTitle} onChange={(value) => handleChange('jobTitle', value)} required />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Company size</label>
                <select
                  required
                  value={formData.companySize}
                  onChange={(event) => handleChange('companySize', event.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8]"
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
                <label className="block text-sm text-slate-300 mb-2">What are you evaluating?</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  placeholder="Tell us about the problem you are trying to solve, your timeline, or the questions you want covered in the demo."
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8] resize-none"
                />
              </div>

              {error && <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}

              <button
                type="submit"
                disabled={submitting}
                className={`w-full rounded-xl bg-[#0EA5E9] py-3.5 text-white font-semibold transition-colors ${
                  submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#0284C7]'
                }`}
              >
                {submitting ? 'Sending...' : 'Book a Demo'}
              </button>
              <p className="text-xs text-slate-400 text-center">30-minute call. No commitment. Response within 1 business day.</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({ label, type = 'text', value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-sm text-slate-300 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8]"
      />
    </div>
  );
}

function SectionTag({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#7DD3FC] text-xs font-medium mb-4">
      <Sparkles size={14} />
      {children}
    </div>
  );
}

function StatCard({ icon: Icon, eyebrow, title, body, tone = 'cyan' }) {
  const toneStyles = {
    cyan: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-300',
    violet: 'border-violet-500/20 bg-violet-500/10 text-violet-300',
    emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 h-full">
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 ${toneStyles[tone]}`}>
        <Icon size={14} />
        {eyebrow}
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-poppins">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{body}</p>
    </div>
  );
}

function CTACluster({ onPrimaryClick, compact = false }) {
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 ${compact ? '' : 'mt-8'}`}>
      <button
        onClick={onPrimaryClick}
        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold transition-colors inline-flex items-center justify-center gap-2"
      >
        Book a Demo
        <ArrowRight size={18} />
      </button>
      <a
        href="#pilot"
        className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-600 text-white font-semibold hover:border-slate-400 transition-colors inline-flex items-center justify-center gap-2"
      >
        <Download size={18} />
        See pilot structure
      </a>
      <div className="text-xs text-slate-400 text-center sm:text-left">30-minute call. No commitment. Response within 1 business day.</div>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {FAQS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-5 sm:px-6 py-5 flex items-center justify-between gap-4 text-left"
            >
              <span className="text-white font-semibold pr-4">{item.question}</span>
              <ChevronDown className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} size={18} />
            </button>
            {isOpen && <div className="px-5 sm:px-6 pb-5 text-slate-300 leading-relaxed">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}

function AdvisorCard({ name, role, image, summary }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center h-full">
      <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border border-white/10" />
      <div className="text-white font-semibold mb-1">{name}</div>
      <div className="text-[#7DD3FC] text-sm mb-3">{role}</div>
      <p className="text-slate-300 text-sm leading-relaxed">{summary}</p>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#081120] p-5 sm:p-6 shadow-2xl shadow-cyan-950/30">
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="flex-1 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
          <div className="text-cyan-300 text-xs uppercase tracking-[0.18em] mb-2">Activation</div>
          <div className="text-white text-2xl font-bold mb-2">Weekly engagement view</div>
          <div className="h-24 flex items-end gap-2">
            {[36, 52, 57, 61, 65, 67].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-xl bg-cyan-400/80" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="flex-1 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4">
          <div className="text-violet-300 text-xs uppercase tracking-[0.18em] mb-2">Themes</div>
          <div className="text-white text-2xl font-bold mb-2">What employees need help with</div>
          <div className="space-y-3 mt-4">
            {[
              ['Planning and prioritisation', '74%'],
              ['Deadline overwhelm', '61%'],
              ['Manager conversations', '42%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="flex items-center justify-between text-sm text-slate-200 mb-1">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-violet-400" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          ['Aggregate only', 'No employee-level reporting shown to employers'],
          ['Manager-ready insight', 'Useful for business case reviews and steering discussions'],
          ['Pilot review output', 'Supports renewal, rollout, or stop decisions'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-white font-semibold mb-2">{title}</div>
            <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ForCorporate2Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const commercialCase = useMemo(
    () => [
      {
        icon: TrendingDown,
        eyebrow: 'Commercial problem',
        title: 'The £400k problem in a 1,000-person workforce',
        body: 'Estimated lost productivity can exceed roughly £4,000 per affected employee per year. In a 1,000-person organisation, hidden cost can quickly move into the hundreds of thousands. Source shown on page: Kessler et al. 2009; de Graaf et al. 2008.',
        tone: 'cyan',
      },
      {
        icon: Clock3,
        eyebrow: 'Buyer reality',
        title: 'Underperformance often shows up before disclosure',
        body: 'By the time HR sees a pattern, the problem may already be affecting deadlines, confidence, and manager time. That is why the page now leads with business impact and not just wellbeing language.',
        tone: 'violet',
      },
      {
        icon: TrendingUp,
        eyebrow: 'Buyer outcome',
        title: 'Higher output. Lower absence. No diagnosis required.',
        body: 'The core proposition is now framed around the outcomes corporate buyers care about most, while keeping access simple for employees who need practical support right now.',
        tone: 'emerald',
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Neuro for Employers | forcorporate2</title>
        <meta
          name="description"
          content="ADHD-specific workplace support for employers. Improve productivity, reduce hidden performance drag, and give HR a more credible neuroinclusion offer."
        />
      </Head>

      <div className="min-h-screen bg-[#07111F] text-white font-lexend selection:bg-[#0EA5E9] selection:text-white overflow-x-hidden">
        <style jsx global>{`
          html { scroll-behavior: smooth; }
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-lexend { font-family: 'Lexend Deca', sans-serif; }
          body {
            background: #07111F;
          }
        `}</style>

        <CorporateHeader onPrimaryClick={() => setIsModalOpen(true)} />
        <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <main>
          <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-violet-500/10 blur-3xl rounded-full" />
            </div>
            <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <SectionTag>Sharper buyer positioning</SectionTag>
                <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Your neurodivergent employees are underperforming. They are not telling you.
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Neuro is an ADHD-specific workplace support offer built for employers who need a more credible answer to hidden performance drag. Higher output. Lower absence. No diagnosis required.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-2xl">
                  {TRUST_BADGES.map((badge) => (
                    <div key={badge} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 flex items-center gap-3">
                      <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>

                <CTACluster onPrimaryClick={() => setIsModalOpen(true)} />
              </div>

              <div className="space-y-5">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <img
                    src="https://NeuroNotionPullZonw.b-cdn.net/Desktopandmobilemockupfinal.webp"
                    alt="Neuro product view"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                <div className="rounded-[28px] border border-cyan-500/20 bg-cyan-500/10 p-6">
                  <div className="text-cyan-200 text-sm font-medium mb-3">Named financial anchor</div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-3 font-poppins">£400k+ hidden annual cost</div>
                  <p className="text-slate-200 leading-relaxed mb-2">
                    A practical way to frame the issue for HR and finance in a 1,000-person workforce.
                  </p>
                  <p className="text-xs text-cyan-100/80">Source on page: Kessler et al. 2009; de Graaf et al. 2008.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
              {commercialCase.map((item) => (
                <StatCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section className="py-20 px-4 sm:px-6 bg-[#091524] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mb-10">
                <SectionTag>Clinical governance moved higher</SectionTag>
                <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">Clinical oversight, built in as a core trust signal</h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  The strongest asymmetric advantage on this page is now much earlier in the journey. Neuro is positioned with named clinical leadership, not just soft wellbeing language.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5 mb-8">
                {ADVISORS.map((advisor) => (
                  <AdvisorCard key={advisor.name} {...advisor} />
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
                <div>
                  <div className="text-white text-xl font-semibold mb-2">Clinical governance is now a named pillar</div>
                  <p className="text-slate-300 leading-relaxed max-w-3xl">
                    The page explicitly frames governance as a buying criterion. That helps corporate buyers separate Neuro from generic apps and gives procurement a clearer confidence signal.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04]">Named clinicians</div>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04]">Safeguarding route</div>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04]">Aggregate reporting</div>
                </div>
              </div>
            </div>
          </section>

          <section id="problem" className="py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
              <div>
                <SectionTag>Problem framing</SectionTag>
                <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">Frame the issue as disclosure, support, and performance gaps</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  The revised route shifts from broad wellbeing language to a sharper employer narrative. Buyers are shown what is going wrong, why existing support often misses it, and where Neuro sits in the category.
                </p>
                <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6">
                  <div className="text-amber-200 text-sm font-medium mb-2">An example anchor for the story</div>
                  <p className="text-white text-lg font-semibold mb-2">At one professional services firm, the visible issue was missed deadlines. The hidden issue was executive function support.</p>
                  <p className="text-slate-200 leading-relaxed text-sm">
                    This is framed as an anonymised example to make the problem concrete without introducing unsourced outcome claims.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {PROBLEM_GAPS.map((gap) => {
                  const Icon = gap.icon;
                  return (
                    <div key={gap.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                      <div className="w-11 h-11 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center mb-4">
                        <Icon size={20} className="text-[#7DD3FC]" />
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-3">{gap.title}</h3>
                      <p className="text-slate-300 leading-relaxed text-sm">{gap.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-[#091524] border-y border-white/5">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div>
                <SectionTag>Category definition</SectionTag>
                <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">Not another wellbeing platform. Not a generic EAP. An ADHD-specific performance tool.</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  The new route names the alternatives directly so Neuro can define the category on employer terms. That gives buyers a cleaner mental model and helps the page sound more precise.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Employee support that feels practical',
                      text: 'Focus, planning, prioritisation, and overwhelm are treated as workplace performance issues, not just wellbeing talking points.',
                    },
                    {
                      title: 'Manager-facing value',
                      text: 'The page now makes room for manager conversations, accommodations, and escalations as part of the solution narrative.',
                    },
                    {
                      title: 'HR-ready reporting',
                      text: 'Aggregate-only reporting is positioned as a governance and procurement feature, not an afterthought.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-white font-semibold mb-2">{item.title}</div>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                <CTACluster onPrimaryClick={() => setIsModalOpen(true)} compact />
              </div>
              <DashboardMockup />
            </div>
          </section>

          <section id="comparison" className="py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mb-10">
                <SectionTag>Comparison table added</SectionTag>
                <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">Where Neuro sits versus common corporate alternatives</h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  The route now includes an explicit comparison to generic wellbeing apps and EAPs so the product is easier to place in a buyer discussion.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <table className="w-full text-left">
                  <thead className="bg-white/[0.04] text-slate-200 text-sm">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Capability</th>
                      <th className="px-5 py-4 font-semibold">Generic wellbeing apps</th>
                      <th className="px-5 py-4 font-semibold">EAPs</th>
                      <th className="px-5 py-4 font-semibold text-cyan-300">Neuro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row) => (
                      <tr key={row[0]} className="border-t border-white/10 text-sm sm:text-base">
                        {row.map((cell, index) => (
                          <td key={`${row[0]}-${index}`} className={`px-5 py-4 ${index === 0 ? 'text-white font-medium' : 'text-slate-300'} ${index === 3 ? 'text-cyan-300 font-semibold' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 sm:px-6 bg-[#091524] border-y border-white/5">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <SectionTag>Deployment options</SectionTag>
                <h2 id="pilot" className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">Two routes for buyers: pilot first or enterprise rollout</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  Larger buyers need a path beyond a single pilot offer. This route now gives both a lower-friction pilot path and a scale-up option for employers who already know they want broader access.
                </p>
                <div className="grid gap-5">
                  {DEPLOYMENT_OPTIONS.map((option) => (
                    <div key={option.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-white text-2xl font-semibold font-poppins">{option.title}</h3>
                          <p className="text-slate-400 text-sm">{option.subtitle}</p>
                        </div>
                        <Briefcase className="text-[#7DD3FC]" />
                      </div>
                      <ul className="space-y-3">
                        {option.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                            <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <SectionTag>Use cases made concrete</SectionTag>
                  <h3 className="text-white text-2xl font-semibold mb-4 font-poppins">Specific workplace scenarios covered</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {USE_CASES.map((useCase) => (
                      <div key={useCase} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-cyan-300 shrink-0" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <SectionTag>Manager layer included</SectionTag>
                  <h3 className="text-white text-2xl font-semibold mb-3 font-poppins">Managers are part of the buying case</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    The revised page now speaks to the manager layer directly, including support for conversations, expectations, and practical response paths when performance concerns appear.
                  </p>
                  <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-100 leading-relaxed">
                    Safeguarding and crisis escalation are also called out explicitly, because regulated and risk-aware buyers will look for that before they buy.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
              <div>
                <SectionTag>Social proof clarified</SectionTag>
                <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">Separate the story into clinical partners, technology, and usage context</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  The original mixed different logo types together. This route separates them so the credibility story reads more clearly to employers and procurement teams.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      label: 'Clinical partners',
                      items: 'Dr. Tony Lloyd, Dr. James Kustow, Prof. David Daley',
                    },
                    {
                      label: 'Technology',
                      items: '11Labs and product infrastructure partners',
                    },
                    {
                      label: 'Usage context',
                      items: 'Trusted in NHS-linked and employer support settings',
                    },
                  ].map((group) => (
                    <div key={group.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-cyan-300 text-sm font-medium mb-2">{group.label}</div>
                      <div className="text-white font-semibold">{group.items}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="text-cyan-300 text-sm font-medium mb-3">Named testimonial placeholder area</div>
                  <blockquote className="text-white text-xl leading-relaxed font-medium mb-4">
                    “This version now leaves room for a real named pilot quote and title, which would materially strengthen conversion once approved for use.”
                  </blockquote>
                  <div className="text-slate-400 text-sm">Recommended final content: named employer or clinic lead, title, and pilot context.</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="text-cyan-300 text-sm font-medium mb-3">Case study block added</div>
                  <h3 className="text-white text-2xl font-semibold mb-3 font-poppins">12-week pilot story format</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    The page now includes a clear placeholder for a specific, named, or anonymised pilot case study once approved metrics are available.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" /><span>Organisation type and workforce context</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" /><span>Activation and repeat usage data</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" /><span>Qualitative manager and employee feedback</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 sm:px-6 bg-[#091524] border-y border-white/5">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <SectionTag>Solutions for</SectionTag>
                <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">Segmented for the industries buyers expect to see</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  Buyers want proof that the message understands their environment. This section gives that signal without overclaiming vertical-specific outcomes.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {INDUSTRIES.map((industry) => (
                    <div key={industry} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 size={18} className="text-cyan-300" />
                        <div className="text-white font-semibold">{industry}</div>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        A sharper, more enterprise-ready framing for organisations that need support to be practical, governable, and easy to explain internally.
                      </p>
                    </div>
                  ))}
                </div>
                <CTACluster onPrimaryClick={() => setIsModalOpen(true)} compact />
              </div>
              <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 sm:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-medium mb-4">
                  <Users size={14} />
                  Enterprise tone upgrade
                </div>
                <h3 className="text-white text-3xl font-bold font-poppins mb-4">One buyer-facing brand, clearer procurement language</h3>
                <p className="text-slate-200 leading-relaxed mb-5">
                  This route reduces the naming friction from using both Neuro and Claudia at once. It also shifts the voice from warm consumer language to a more precise enterprise style.
                </p>
                <div className="grid gap-3 text-sm">
                  {[
                    'Primary CTA changed to Book a Demo',
                    'Persistent CTA added to the navigation',
                    'Commercial impact moved into the first screen',
                    'Unsourced round-number outcomes removed',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <SectionTag>Objection-led FAQ</SectionTag>
                <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">Questions from HR, People, and finance stakeholders</h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  The FAQ now focuses on purchase objections and governance questions rather than general information.
                </p>
              </div>
              <FAQAccordion />
            </div>
          </section>

          <section className="px-4 sm:px-6 pb-20">
            <div className="max-w-6xl mx-auto rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-[#0EA5E9]/15 to-violet-500/10 p-8 sm:p-12 text-center">
              <SectionTag>Final CTA</SectionTag>
              <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-white mb-4">Book a demo and see whether this solves a real employer problem</h2>
              <p className="text-slate-200 text-lg leading-relaxed max-w-3xl mx-auto">
                This version is designed to sound more credible to corporate buyers, surface the economic case earlier, and create more conversion opportunities throughout the page.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#07111F] hover:bg-slate-100 font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  Book a Demo
                  <ArrowRight size={18} />
                </button>
                <a
                  href="#problem"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 text-white hover:border-white/40 transition-colors"
                >
                  Review the business case
                </a>
              </div>
              <p className="text-sm text-slate-200/80 mt-4">30-minute call. No commitment. Response within 1 business day.</p>
            </div>
          </section>
        </main>

        <LPFooter />
        <Toaster />
      </div>
    </>
  );
}
