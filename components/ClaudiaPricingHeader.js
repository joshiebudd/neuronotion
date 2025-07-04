import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { track } from "@vercel/analytics";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import WaitlistModal from './WaitlistModal';

const ClaudiaPricingHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionNavigation = (sectionId, targetPage = '/claudianewlp') => {
    if (router.pathname === targetPage) {
      // Same page - smooth scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Different page - navigate then scroll
      router.push(`${targetPage}#${sectionId}`).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    }
  };

  const handleCTAClick = () => {
    track("Claudia_Try_Free_Header");
    // TODO: Implement Try Claudia Free functionality
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
          <Link href="/" className="flex items-center space-x-2">
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
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              className="bg-[#30bcd9] hover:bg-[#30bcd9]/90 text-black font-bold py-2 px-6 rounded-lg text-sm shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#30bcd9]/20 backdrop-blur-sm border border-[#30bcd9]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              style={{ fontWeight: 700 }}
              onClick={handleCTAClick}
            >
              Try Claudia Free
            </button>
          </div>
        </div>
      </header>


    </>
  );
};

export default ClaudiaPricingHeader; 