import "../src/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="vercel_analysis"
        dangerouslySetInnerHTML={{
          __html: `
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('<ph_project_api_key>', {api_host: 'https://eu.posthog.com/'});
          `,
        }}
      />

      <Script
        id="track-pageview-pixel"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
          fbq("init", "230622039592089");
          fbq("track", "PageView");
        }}
      />

      <Script id="vercel-speed-insights" src="/_vercel/insights/script.js" />

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Neuro Notion ┃ The Ultimate ADHD Study Notion Template</title>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
          type="image/webp"
        />
        <style>
          {
            ".hero-section{margin-bottom:50px;} .star-rating{margin-bottom:50px;} .centered-image{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;} .full-header{z-index:10;} h3{color:black;}"
          }
        </style>
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link
          rel="preload"
          href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/maindemo.webp"
          as="image"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
