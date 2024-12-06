import { useState, useEffect } from 'react';
import Image from 'next/image';
import { track } from "@vercel/analytics";
import { useRouter } from 'next/router';

const StickyWaitingList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // List of paths where the component should appear
    const allowedPaths = ['/', '/templates', '/brain', '/blogs', '/timer'];
    setShouldShow(allowedPaths.includes(router.pathname));
  }, [router.pathname]);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    track("Waiting_List_Minimize");
  };

  const handleLearnMore = () => {
    window.location.href = "/waiting";
    track("Waiting_List_Learn_More");
  };

  if (!isOpen || !shouldShow) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isMinimized ? 'w-16 h-16' : 'w-72'}`}>
      <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-gray-200">
        {isMinimized ? (
          <button 
            onClick={handleMinimize}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/Bubbles.svg"
              alt="Neuro Logo"
              width={40}
              height={40}
            />
          </button>
        ) : (
          <div>
            <div className="flex justify-between items-start mb-2">
              <div className="text-lg font-pop text-center w-full pr-6 font-bold">Join the waiting list...</div>
              <button 
                onClick={handleMinimize}
                className="text-gray-400 hover:text-gray-600 absolute top-4 right-4"
              >
                −
              </button>
            </div>
            <div className="mb-3 text-center">
              <div className="text-md">
                <span className="font-bold text-[#4C1D95]">Neuro</span>
                <span>: Your Voice</span>
              </div>
              <div className="text-md">powered ADHD Sidekick.</div>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => {
                  window.location.href = "https://josh-sjhmahbq.scoreapp.com";
                  track("Waiting_List_Learn_More");
                }}
                className="bg-accent2 hover:bg-accent3 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <span>Learn More</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickyWaitingList; 