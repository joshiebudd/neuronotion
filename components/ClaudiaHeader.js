import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import WaitlistModal from './WaitlistModal';

const ClaudiaHeader = () => {
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

  const openModal = () => {
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
              href="#features" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works
            </a>
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Founder&apos;s Story
            </a>
            <Link 
              href="/templateshome"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
            >
              Neuro Notion
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              className="px-4 py-2 rounded-md text-sm font-medium bg-[#30bcd9] text-white shadow-sm hover:bg-[#2aa3c7] transition-all duration-300 hover:shadow-md"
              onClick={openModal}
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </header>

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ClaudiaHeader; 