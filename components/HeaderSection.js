import React from 'react';
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

    return (
        <header>
            <div className="full-header fixed top-0 left-0 right-0 bg-white lg:bg-opacity-30 lg:backdrop-blur-lg" style={{ backdropFilter: 'blur(10px)' }}>
                <nav className="px-8 py-5 lg:px-6">
                    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                        <a href="#hero" className="flex items-center">
                            <img src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" className="mr-3 h-6 sm:h-9" alt="NeuroNotes Logo" />
                            <span className="self-center whitespace-nowrap text-2xl font-semibold text-black">Neuro Notion</span>
                        </a>
                        <div className="hidden lg:flex items-center space-x-4">
                            <a onClick={() => scrollToMiddle('features')}    className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline">Features</a>
                            <a onClick={() => scrollToMiddle('pricing')}    className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline">Pricing</a>
                            <a onClick={() => scrollToMiddle('faqs')}    className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline">FAQs</a>
                        </div>
<a href="#pricing" onClick={handleButtonClick} className="StandardCheckoutButton inline-block rounded-lg bg-black px-4 py-2 text-sm font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:px-8 sm:py-4 sm:text-lg">Get Now</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSection;
