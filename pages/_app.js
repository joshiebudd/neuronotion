import '../src/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
// other imports if necessary

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Neuro Notion ┃ The Ultimate ADHD Study Notion Template</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css" />
        <link rel="icon" href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" type="image/webp" />
        <style>
          {`.hero-section{margin-bottom:50px;} .star-rating{margin-bottom:50px;} .centered-image{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;} .full-header{z-index:10;} h3{color:black;}`}
        </style>
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://img.icons8.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
         {/* Vercel Analytics Inline Script */}
        <script dangerouslySetInnerHTML={{ __html: `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };` }}></script>
      </Head>

      <Script
        src="/_vercel/insights/script.js"
        defer
      />


      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
