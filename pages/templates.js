import React from "react";
import HPHeader from '../components/Homepage/HPHeader';
import Cookies from "../components/Cookies";
import ADHDTemplates from "../components/TemplatesPage/ADHDTemplates";
import UnlockSection from "../components/TemplatesPage/UnlockSection";
import NotionBundle from "../components/TemplatesPage/NotionBundle";
import Howitworks from "../components/TemplatesPage/Howitworks";
import TemplatesFAQ from "../components/TemplatesPage/TemplatesFAQ";
import NewsLetter from "../components/TemplatesPage/NewsLetter";
import FooterSection from "../components/FooterSection";

const TemplatesPage = () => {
  return (
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
  );
};

export default TemplatesPage;
