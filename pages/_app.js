import Head from 'next/head';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
// other imports if necessary

// Quick Page Exit Tracking Script
let pageLoadedTime = Date.now();
function trackQuickExit() {
  let timeSpent = Date.now() - pageLoadedTime;
  if (timeSpent <= 5000) {
    // Replace 'va' with your actual analytics function
    va('event', {
      name: 'QuickPageExit',
      data: {
        timeSpent: timeSpent
      },
    });
  }
}
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', trackQuickExit);
}

// Google Tag Manager Script
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-FTX0TWXP1E');
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Your existing Head content */}
        {/* Vercel Analytics Inline Script */}
        <script dangerouslySetInnerHTML={{ __html: `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };` }}></script>
      </Head>

      {/* Vercel Analytics External Script */}
      <Script
        src="/_vercel/insights/script.js"
      />

      {/* Facebook Pixel Script */}
      <Script
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
          fbq('init', '230622039592089');
          fbq('track', 'PageView');
        }}
      />

      <Component {...pageProps} />

      <Analytics />
    </>
  );
}

export default MyApp;
