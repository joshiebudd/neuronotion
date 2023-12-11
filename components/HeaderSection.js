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
                            <a onClick={() => scrollToMiddle('features')} className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600">Features</a>
                            <a onClick={() => scrollToMiddle('pricing')} className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600">Pricing</a>
                            <a onClick={() => scrollToMiddle('faqs')} className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600">FAQs</a>
                        </div>
                        <a onClick={() => scrollToMiddle('pricing')} className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600">Get Now</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSection;


