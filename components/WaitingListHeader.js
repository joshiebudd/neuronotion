import React, { useEffect, useRef, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { track } from "@vercel/analytics";
import Image from "next/image";
import Script from "next/script";
import Burger from "./Common/Burger";
import _ from "lodash";

import styles from "./StudySystem/HeaderSection.style.module.scss";

const WaitingListHeaderSection = () => {
  const titleRef = useRef(null);
  const menuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);

  let isMobile = false;

  const handleResize = () => {
    const newIsMobile = innerWidth < 640;

    if (newIsMobile !== isMobile) {
      isMobile = newIsMobile;

      if (newIsMobile) {
        menuRef.current.classList.add(styles.menu_mobile);
      } else {
        menuRef.current.classList.remove(styles.menu_mobile);
        menuRef.current.classList.remove(styles.mobile_menu_open);
        menuRef.current.classList.remove(styles.mobile_menu_close);
        titleRef.current.style.opacity = 1;
        setMenuActive(false);
      }
    }
  };

  const throttledHandleResize = _.throttle(handleResize, 300);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", throttledHandleResize);
    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const firstNameInput = document.getElementById("firstNameInput");
    if (firstNameInput) {
      firstNameInput.focus();
    }
    logCustomPixelEvent("HeaderBuyNowClick");
  };

  const logCustomPixelEvent = (eventName) => {
    fbq("trackCustom", eventName);
  };

  const showMenu = () => {
    titleRef.current.style.opacity = "0";
    menuRef.current.classList.add(styles.mobile_menu_open);
    menuRef.current.classList.remove(styles.mobile_menu_close);
  };

  const hideMenu = () => {
    titleRef.current.style.opacity = "1";
    menuRef.current.classList.add(styles.mobile_menu_close);
    menuRef.current.classList.remove(styles.mobile_menu_open);
  };

  const handleBurgerClick = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      showMenu();
    } else {
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
                        fbq('init', '230622039592089');
                        fbq('track', 'PageView');
                    `,
        }}
      />

      <SpeedInsights />

      <div className="full-header bg-white bg-opacity-20 backdrop-blur-lg fixed top-0 right-0 left-0">
        <nav className="px-8 py-5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <div
              className="flex items-center grow transition duration-300"
              ref={titleRef}
            >
              <Image
                width={400}
                height={400}
                loading="eager"
                className="w-16 h-auto mr-3"
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/Bubbles.svg"
                alt="Neuro Notion Logo"
              />
              <div className="w-full grow text-center sm:text-left">
                <span className="self-center whitespace-nowrap text-2xl sm:text-2xl font-pop font-bold text-sec">
                  Neuro Notion
                </span>
              </div>
            </div>
            <div
              className="hidden lg:flex items-center grow overflow-hidden mx-2 min-w-[200px]"
              ref={menuRef}
            />
            <div>
              <a
                href="#"
                onClick={handleButtonClick}
                className="inline-block rounded-lg bg-sec px-4 py-4 text-lg font-pop font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-3 hidden sm:block"
              >
                Secure your spot.
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

export default WaitingListHeaderSection;
