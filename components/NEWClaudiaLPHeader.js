import { useState, useEffect } from 'react';
import Link from 'next/link';
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
          <Link href="/claudianewlp" className="flex items-center space-x-2">
            <img
              src="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png"
              alt="Neuro Logo"
              className="h-7 sm:h-8 w-auto"
            />
            <span className="hidden sm:inline text-xl font-semibold tracking-tight text-white">Claudia by Neuro</span>
            <span className="sm:hidden text-lg font-semibold tracking-tight text-white">Neuro</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#what-is-claudia"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                track('How it works from header');
                handleSectionNavigation('what-is-claudia');
              }}
            >
              How It Works
            </a>
            <Link
              href="/pricing"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              onClick={() => track('Pricing')}
            >
              Pricing
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
              className="md:hidden ml-2 text-white p-2"
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#what-is-claudia"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm cursor-pointer px-2"
                onClick={(e) => {
                  e.preventDefault();
                  track('How it works from mobile menu');
                  handleSectionNavigation('what-is-claudia');
                }}
              >
                How It Works
              </a>
              <Link
                href="/pricing"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm px-2"
                onClick={() => {
                  track('Pricing from mobile menu');
                  setMobileMenuOpen(false);
                }}
              >
                Pricing
              </Link>
              <Link
                href="/team"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm px-2"
                onClick={() => {
                  track('Our Team from mobile menu');
                  setMobileMenuOpen(false);
                }}
              >
                Our Team
              </Link>
              <a
                href="https://app.neuro-notion.com/?page=login"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm px-2 sm:hidden"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default NEWClaudiaLPHeader;
