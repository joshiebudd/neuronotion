import React from "react";
import HeaderSection from "../components/HeaderSection";
import ADHDTemplates from "../components/TemplatesPage/ADHDTemplates";
import UnlockSection from "../components/TemplatesPage/UnlockSection";
import NotionBundle from "../components/TemplatesPage/NotionBundle";
import Howitworks from "../components/TemplatesPage/Howitworks";
import FAQSection from "../components/FAQSection/FAQSection";
import NewsLetter from "../components/TemplatesPage/NewsLetter";
import FooterSection from "../components/FooterSection";

const TemplatesPage = () => {
  return (
    <div>
      <HeaderSection />
      <ADHDTemplates />
      <UnlockSection />
      <NotionBundle />
      <Howitworks />
      <FAQSection />
      <NewsLetter />
      <FooterSection />
    </div>
  );
};

export default TemplatesPage;
