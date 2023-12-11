import React, { useState } from 'react';
import Image from 'next/image';

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToMiddle = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topPosition =
        section.offsetTop + section.offsetHeight / 2 - window.innerHeight / 2;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close the menu after clicking a link
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const topPosition =
        pricingSection.offsetTop + pricingSection.offsetHeight / 2 - window.innerHeight / 2;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close the menu after clicking the "Get Now" button
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div
        className={`full-header fixed top-0 left-0 right-0 bg-white lg:bg-opacity-30 lg:backdrop-blur-lg ${
          menuOpen ? 'h-auto' : 'h-16'
        }`}
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <nav className="px-8 py-5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="#hero" className="flex items-center">
              <img
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
                className="mr-3 h-6 sm:h-9"
                alt="NeuroNotes Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-black">
                Neuro Notion
              </span>
            </a>
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={toggleMenu}
                className="px-2 py-1 text-lg text-black focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div
              className={`${
                menuOpen ? 'block' : 'hidden'
              } lg:flex lg:items-center space-x-4`}
            >
              <a
                onClick={() => scrollToMiddle('features')}
                className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline"
              >
                Features
              </a>
              <a
                onClick={() => scrollToMiddle('pricing')}
                className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline"
              >
                Pricing
              </a>
              <a
                onClick={() => scrollToMiddle('faqs')}
                className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline"
              >
                FAQs
              </a>
              <a
                href="#pricing"
                onClick={handleButtonClick}
                className="StandardCheckoutButton inline-block rounded-lg bg-black px-4 py-2 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                Get Now
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
