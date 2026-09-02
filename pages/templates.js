import React from "react";
import Head from "next/head";
import HPHeader from '../components/Homepage/HPHeader';
import Cookies from "../components/Cookies";
import ADHDTemplates from "../components/TemplatesPage/ADHDTemplates";
import UnlockSection from "../components/TemplatesPage/UnlockSection";
import NotionBundle from "../components/TemplatesPage/NotionBundle";
import Howitworks from "../components/TemplatesPage/Howitworks";
import TemplatesFAQ from "../components/TemplatesPage/TemplatesFAQ";
import NewsLetter from "../components/TemplatesPage/NewsLetter";
import FooterSection from "../components/FooterSection";
import TemplatesRomiBanner from "../components/TemplatesRomiBanner";

/*
 * Legacy Notion templates page. Kept live on purpose: it still ranks for
 * "adhd notion template" (GSC, Aug 2026). Head + banner added 18 Aug 2026 so
 * the page has its own title/canonical and hands visitors over to Romi.
 */
const TemplatesPage = () => {
  return (
    <>
      <Head>
        <title>Free ADHD Notion Templates | From the Makers of Romi</title>
        <meta
          name="description"
          content="ADHD-friendly Notion templates for planning, tasks and habits, built by the team behind Romi, the personal ADHD companion app. Free downloads and the full bundle."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.romiadhd.com/templates" />
        <meta property="og:title" content="Free ADHD Notion Templates | From the Makers of Romi" />
        <meta
          property="og:description"
          content="ADHD-friendly Notion templates for planning, tasks and habits, built by the team behind Romi."
        />
        <meta property="og:url" content="https://www.romiadhd.com/templates" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Romi ADHD" />
        <meta property="og:image" content="https://www.romiadhd.com/og/romi-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <HPHeader />
        <Cookies />
        <ADHDTemplates />
        <UnlockSection />
        <NotionBundle />
        <Howitworks />
        <TemplatesFAQ />
        <NewsLetter />
        <FooterSection />
      </div>
      <TemplatesRomiBanner />
    </>
  );
};

export default TemplatesPage;
