import React, { useEffect, useRef, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { track } from "@vercel/analytics";
import Image from "next/image";
import Script from "next/script";
import Burger from "./Common/Burger";
import _ from "lodash";

import styles from "./HeaderSection.style.module.scss";

const HeaderSection = () => {
  const titleRef = useRef(null);
  const menuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);

  let isMobile = false;

  const handleResize = () => {
    const newIsMobile = innerWidth < 640;

    // Check if the state needs to be updated
    if (newIsMobile !== isMobile) {
      isMobile = newIsMobile;

      //if enters mobile mode
      if (newIsMobile) {
        menuRef.current.classList.add(styles.menu_mobile);
      }
      // if enters desktop mode
      else {
        menuRef.current.classList.remove(styles.menu_mobile);
        menuRef.current.classList.remove(styles.mobile_menu_open);
        menuRef.current.classList.remove(styles.mobile_menu_close);
        titleRef.current.style.opacity = 1;
        setMenuActive(false);
      }
    }
  };

  // throttle resize function for overload optimization
  const throttledHandleResize = _.throttle(handleResize, 300);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", throttledHandleResize);
    return () => {
      //cleanup
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  const handleButtonClick = (e) => {
    // Log the custom pixel event
    logCustomPixelEvent("HeaderBuyNowClick");
  };

  const logCustomPixelEvent = (eventName) => {
    // Log event to Facebook Pixel
    fbq("trackCustom", "HeaderBuyNowClick");
  };

  const showMenu = () => {
    // hide title
    titleRef.current.style.opacity = "0";
    // show menus
    menuRef.current.classList.add(styles.mobile_menu_open);
    menuRef.current.classList.remove(styles.mobile_menu_close);
  };

  const hideMenu = () => {
    // show title
    titleRef.current.style.opacity = "1";
    // hide menus
    menuRef.current.classList.add(styles.mobile_menu_close);
    menuRef.current.classList.remove(styles.mobile_menu_open);
  };

  const handleBurgerClick = () => {
    setMenuActive(!menuActive);
    // have to show menu items
    if (!menuActive) {
      showMenu();
    }
    // have to hide mneu items
    else {
      hideMenu();
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

      <div className="full-header bg-white bg-opacity-30 backdrop-blur-lg fixed top-0 right-0 left-0">
        <nav className="px-8 py-5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a
              href="#hero"
              className="flex items-center grow  transition duration-300"
              ref={titleRef}
            >
              <Image
                width={56}
                height={56}
                loading="eager"
                className="w-10 h-auto mr-3"
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
                alt="NeuroNotes Logo"
              />
              <div className="w-full grow text-center sm:text-left">
                <span className="self-center whitespace-nowrap text-xl sm:text-2xl lg:text-2xl font-semibold text-black">
                  Neuro Notion
                </span>
              </div>
            </a>
            <div
              className="hidden lg:flex items-center space-x-4 grow overflow-hidden mx-2 min-w-[200px]"
              ref={menuRef}
            >
              <a
                href="#features"
                className="px-2 py-1 text-md sm:text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline hover:text-xl transition-all duration-500"
                onClick={() => track("CTA_Features")}
              >
                Features
              </a>
              <a
                href="#demo"
                className="px-2 py-1 text-md sm:text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline hover:text-xl transition-all duration-500"
                onClick={() => track("CTA_Demo")}
              >
                Demo
              </a>
              <a
                href="#pricing"
                className="px-2 py-1 text-md sm:text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline hover:text-xl transition-all duration-500"
                onClick={() => track("CTA_Pricing")}
              >
                Pricing
              </a>
              <a
                href="#faqs"
                className="px-2 py-1 text-md sm:text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline hover:text-xl transition-all duration-500"
                onClick={() => track("CTA_FAQ")}
              >
                FAQs
              </a>
            </div>
            <div>
              <a
                href="#pricing"
                onClick={handleButtonClick}
                className="inline-block rounded-lg bg-black px-4 py-2 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-8 lg:py-4 hidden sm:block"
              >
                Buy Now
              </a>
              <div className="block sm:hidden">
                <Burger
                  handleToggle={handleBurgerClick}
                  isActive={menuActive}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
