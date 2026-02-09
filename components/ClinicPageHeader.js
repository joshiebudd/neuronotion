import { useState, useEffect } from 'react';
import Link from 'next/link';
import { track } from "@vercel/analytics";
import { cn } from "../lib/utils";

const ClinicPageHeader = ({ onLearnMoreClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearnMoreClick = () => {
    track('Header Learn More');
    if (onLearnMoreClick) {
      onLearnMoreClick();
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
          <a href="https://www.neuro-notion.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <img
              src="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png"
              alt="Neuro Logo"
              className="h-7 sm:h-8 w-auto"
            />
            <span className="hidden sm:inline text-xl font-semibold tracking-tight text-white">Claudia by Neuro</span>
            <span className="sm:hidden text-lg font-semibold tracking-tight text-white">Neuro</span>
          </a>

          <div className="flex items-center gap-1">
            <button
              className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-1.5 px-3 sm:px-4 rounded-xl text-[11px] sm:text-sm shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 whitespace-nowrap"
              style={{ fontWeight: 700 }}
              onClick={handleLearnMoreClick}
            >
              Learn more
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default ClinicPageHeader;
