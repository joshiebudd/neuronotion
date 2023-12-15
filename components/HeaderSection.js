import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
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


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
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
                        fbq('init', '230622039592089'); // Insert your pixel ID here
                        fbq('track', 'PageView');
                    `,
                }}
            />
            <SpeedInsights />
            <div className={`fixed top-0 left-0 right-0 z-40 w-full bg-white p-5 transition duration-500 ease-in-out ${isMenuOpen ? 'h-screen' : 'h-20'}`}>
                <nav className="flex items-center justify-between">
                    <a href="#hero" className="flex items-center">
                        <Image
                            src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
                            alt="Neuro Notion logo"
                            width={56}
                            height={56}
                            className="mr-3"
                        />
                        <span className="text-xl font-bold">Neuro Notion</span>
                    </a>
                    <button onClick={handleMenuToggle} className="text-black lg:hidden">
                        {isMenuOpen ? (
                            // Here you can put an icon for closing the menu
                            <RxCross2 className="h-6 w-6" />
                        ) : (
                            // This is the hamburger menu icon
                            <GiHamburgerMenu className="h-6 w-6" />
                        )}
                    </button>

                </nav>
                <div className={`flex flex-col mt-4 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
                    <a onClick={() => scrollToMiddle('features')} className="mb-2 text-base font-thin hover:underline">Features</a>
                    <a onClick={() => scrollToMiddle('pricing')} className="mb-2 text-base font-thin hover:underline">Pricing</a>
                    <a onClick={() => scrollToMiddle('faqs')} className="mb-2 text-base font-thin hover:underline">FAQs</a>
                    <a href="#pricing" onClick={handleButtonClick} className="self-center bg-black px-6 py-2 text-base font-bold text-white rounded-lg hover:bg-opacity-90 focus:outline-none">Buy Now</a>
                </div>
            </div>
        </header>
    );
};

export default HeaderSection;
