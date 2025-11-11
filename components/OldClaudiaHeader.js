import { useState, useEffect } from 'react';
import Link from 'next/link';
import { track } from "@vercel/analytics";
import { cn } from "../lib/utils";
import WaitlistModal from './WaitlistModal';

const OldClaudiaHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    track("Claudia_Join_Waitlist_Header");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4 px-6",
          scrolled ? 
            "bg-[#1e2a4a]/90 backdrop-blur-md shadow-sm border-b border-white/10" : 
            "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="https://www.neuro-notion.com" className="flex items-center space-x-2">
            <img 
              src="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png" 
              alt="Neuro Logo" 
              className="h-8 w-auto" 
            />
            <span className="text-xl font-semibold tracking-tight text-white">Claudia by Neuro</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleSectionNavigation('how-it-works');
              }}
            >
              How It Works
            </a>
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleSectionNavigation('about');
              }}
            >
              Founder&apos;s Story
            </a>
            <Link
              href="/templates"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
            >
              Neuro Notion
            </Link>
          </nav>
          
          <button 
            className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-2 px-6 rounded-lg text-sm shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            style={{ fontWeight: 700 }}
            onClick={handleCTAClick}
          >
            Join the waitlist
          </button>
        </div>
      </header>

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default OldClaudiaHeader; 