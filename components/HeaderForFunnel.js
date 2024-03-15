import React, { useEffect, useRef } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Image from "next/image";
import Script from "next/script";
import styles from "./HeaderSection.style.module.scss";

const HeaderForFunnel = () => {
  const titleRef = useRef(null);

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

      <div className="full-header bg-white bg-opacity-30 backdrop-blur-lg fixed top-0 right-0 left-0">
        <nav className="px-8 py-5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a
              href="https://www.neuro-notion.com/#hero"
              className="flex items-center grow transition duration-300"
              ref={titleRef}
            >
              <Image
                width={56}
                height={56}
                loading="eager"
                className="w-10 h-auto mr-3"
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
                alt="Neuro Notion Logo"
              />
              <div className="w-full grow text-center sm:text-left">
                <span className="self-center whitespace-nowrap text-xl sm:text-2xl lg:text-2xl font-semibold text-black">
                  Neuro Notion
                </span>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderForFunnel;
