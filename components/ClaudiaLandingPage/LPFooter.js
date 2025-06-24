import React from 'react';
import { useToast } from "../../hooks/use-toast";
import ScrollReveal from '../ScrollReveal';

export const LPFooter = () => {
  const { toast } = useToast();

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('josh@neuro-notion.com');
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
      duration: 3000,
    });
  };

  return (
    <>
      {/* Hidden Text */}
      <div className="py-2 bg-[#1e2a4a]">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://neuro-deploy.vercel.app/" 
            className="text-[#1e2a4a] no-underline"
            style={{ textDecoration: 'none' }}
          >
            Visit claudia.
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <ScrollReveal>
        <footer className="py-8 border-t border-white/10 bg-[#1e2a4a]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm text-white/60">
                  © {new Date().getFullYear()} Neuro Notion App Limited. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://theblogspace.notion.site/Neuro-Notion-Cookies-Policy-c8fde8f3024a4a0389b888d0ec107e5b?pvs=4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/60 hover:text-white/80 transition-colors"
                >
                  Cookies
                </a>
                <a 
                  href="https://neuro-deploy.vercel.app/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/60 hover:text-white/80 transition-colors"
                >
                  Privacy
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="text-sm text-white/60 hover:text-white/80 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </>
  );
}; 