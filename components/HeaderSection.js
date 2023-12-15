import React, { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Image from 'next/image';
import Script from 'next/script';

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
            <Script 
                id="fb-pixel-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '230622039592089'); // Replace with your actual pixel ID
                        fbq('track', 'PageView');
                    `,
                }}
            />

            <SpeedInsights />
          
            <div className="full-header fixed top-0 left-0 right-0 bg-white lg:bg-opacity-30 lg:backdrop-blur-lg" style={{ backdropFilter: 'blur(10px)' }}>
                <nav className="px-8 py-5 lg:px-6">
                    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                        <a href="#hero" className="flex items-center">
                            {/* Increase the logo size */}
                            <Image width={56} height={56} loading="eager" className="mr-3 sm:h-9" src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" alt="NeuroNotes Logo" />
                            {/* Make the title smaller on small and medium screens */}
                            <span className="self-center whitespace-nowrap text-xl sm:text-2xl lg:text-2xl font-semibold text-black">Neuro Notion</span>
                        </a>
                        <div className="hidden lg:flex items-center space-x-4">
                            <a onClick={() => scrollToMiddle('features')} className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline">Features</a>
                            <a onClick={() => scrollToMiddle('pricing')} className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline">Pricing</a>
                            <a onClick={() => scrollToMiddle('faqs')} className="px-2 py-1 text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline">FAQs</a>
                        </div>
                        <a href="#pricing" onClick={handleButtonClick} className="inline-block rounded-lg bg-black px-4 py-2 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-8 lg:py-4">Buy Now</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSection;
