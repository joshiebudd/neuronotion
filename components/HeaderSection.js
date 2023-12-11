import React, { useState } from 'react';
import Image from 'next/image';


const HeaderSection = () => {

    const scrollToMiddle = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const topPosition = section.offsetTop + (section.offsetHeight / 2) - (window.innerHeight / 2);
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth'
            });
        }
    };
    
    const handleButtonClick = (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          const topPosition = pricingSection.offsetTop + (pricingSection.offsetHeight / 2) - (window.innerHeight / 2);
          window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
          });
        }
      };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
  return (
        <header>
            <div className="full-header fixed top-0 left-0 right-0 bg-white lg:bg-opacity-30 lg:backdrop-blur-lg" style={{ backdropFilter: 'blur(10px)' }}>
                <nav className="px-8 py-5 lg:px-6">
                    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                        {/* Logo and Title - Hidden on small screens */}
                        <div className={`flex items-center ${isMenuOpen ? 'hidden' : ''}`}>
                            <img src="logo.webp" className="mr-3 h-6 sm:h-9 hidden lg:block" alt="Logo" />
                            <span className="self-center whitespace-nowrap text-2xl font-semibold text-black hidden lg:block">Neuro Notion</span>
                        </div>

                        {/* Navigation Links - Hidden on small screens */}
                        <div className={`hidden lg:flex items-center space-x-4 ${isMenuOpen ? 'hidden' : ''}`}>
                            {/* Existing links... */}
                        </div>

                        {/* Get Now Button - Smaller on small screens */}
                        <a href="#pricing" onClick={handleButtonClick} className={`StandardCheckoutButton inline-block rounded-lg bg-black px-4 py-2 text-sm font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-8 lg:py-4 lg:text-lg ${isMenuOpen ? 'hidden' : ''}`}>Get Now</a>

                        {/* Burger Icon - Visible only on small screens */}
                        <button className="lg:hidden" onClick={toggleMenu}>
                            <img src="burger-icon.svg" alt="Menu" />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="mobile-menu lg:hidden">
                            {/* Mobile menu content... */}
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default HeaderSection;
