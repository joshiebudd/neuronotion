import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { track } from "@vercel/analytics";
import { cn } from "../lib/utils";

const NEWClaudiaLPHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    track('Header CTA');
    if (typeof window !== 'undefined') {
      window.location.href = 'https://app.neuro-notion.com';
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-3 px-4 sm:py-4 sm:px-6 overflow-x-hidden",
          scrolled
            ? "bg-[#1e2a4a]/90 backdrop-blur-md shadow-sm border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between max-w-[1400px] mx-auto w-full">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png"
              alt="Neuro Logo"
              className="h-7 sm:h-8 w-auto"
            />
            <span className="hidden sm:inline text-xl font-semibold tracking-tight text-white">Claudia by Neuro</span>
            <span className="sm:hidden text-lg font-semibold tracking-tight text-white">Neuro</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#what-is-claudia"
              className="text-white/90 hover:text-white transition-colors duration-200 text-sm cursor-pointer font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              onClick={() => track('Pricing')}
            >
              Pricing
            </Link>
            <Link
              href="https://www.neuro-notion.com/forclinics"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              onClick={() => track('For Clinics')}
            >
              For Clinics
            </Link>
            <Link
              href="/team"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              onClick={() => track('Our Team')}
            >
              Our Team
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            <a
              href="https://app.neuro-notion.com/?page=login"
              className="hidden sm:inline-block bg-gray-100/80 border border-gray-300 text-gray-700 font-pop font-semibold py-1.5 px-3 sm:px-4 rounded-lg text-[11px] sm:text-sm shadow hover:bg-gray-200/80 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#30bcd9] focus:ring-offset-2 transition-colors duration-200 whitespace-nowrap"
              aria-label="Login"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { window.location.href = 'https://app.neuro-notion.com/?page=login'; } }}
            >
              Login
            </a>
            <button
              className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-1.5 px-3 sm:px-4 rounded-lg text-[11px] sm:text-sm shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 whitespace-nowrap"
              style={{ fontWeight: 700 }}
              onClick={handleCTAClick}
            >
              Try Claudia Free
            </button>
            
            {/* Mobile burger menu button */}
            <button
              className="md:hidden ml-2 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

      </header>
      
      {/* Mobile menu - redesigned with cleaner styling */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-[#1e2a4a]/98 backdrop-blur-lg border-b border-white/10 shadow-xl z-40">
            <nav className="flex flex-col max-w-[1400px] mx-auto px-4 py-6 space-y-1">
              <Link
                href="/#what-is-claudia"
                className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-base py-3 px-4 rounded-lg cursor-pointer font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-base py-3 px-4 rounded-lg font-medium"
                onClick={() => {
                  track('Pricing from mobile menu');
                  setMobileMenuOpen(false);
                }}
              >
                Pricing
              </Link>
              <Link
                href="https://www.neuro-notion.com/forclinics"
                className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-base py-3 px-4 rounded-lg font-medium"
                onClick={() => {
                  track('For Clinics from mobile menu');
                  setMobileMenuOpen(false);
                }}
              >
                For Clinics
              </Link>
              <Link
                href="/team"
                className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-base py-3 px-4 rounded-lg font-medium"
                onClick={() => {
                  track('Our Team from mobile menu');
                  setMobileMenuOpen(false);
                }}
              >
                Our Team
              </Link>
              <div className="pt-2 mt-2 border-t border-white/10">
                <a
                  href="https://app.neuro-notion.com/?page=login"
                  className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-base py-3 px-4 rounded-lg font-medium block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </a>
              </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NEWClaudiaLPHeader;
