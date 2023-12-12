import '../src/styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Neuro Notion ┃ The Ultimate ADHD Study Notion Template</title>
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://img.icons8.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://super.so/icon/dark/check.svg" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://img.icons8.com" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="preconnect" href="https://super.so/icon/dark/check.svg" />

        <link rel="preload" href="../src/styles/tailwind.min.css" as="style" />
        <link rel="icon" href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" type="image/webp" />
        <link rel="preload" href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" as="image" />
        <link rel="preload" href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/maindemo.webp" as="image" />   
        <link rel="stylesheet" href="../src/styles/tailwind.min.css" />


        <style>
          {`.hero-section{margin-bottom:50px;} .star-rating{margin-bottom:50px;} .centered-image{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;} .full-header{z-index:10;} h3{color:black;}`}
        </style>
      </Head>



      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
