import React from "react";
import ADHDTemplates from "./ADHDTemplates";
import UnlockSection from "./UnlockSection";
import NotionBundle from "./NotionBundle";
import Howitworks from "./Howitworks";
import FAQSection from "../../components/FAQSection/FAQSection";
import NewsLetter from "./NewsLetter";
import FooterSection from "../../components/FooterSection";

const categories = ["All", "Category1", "Category2", "Category3"];
const cards = [
  {
    id: 1,
    category: "Category1",
    image: "/img1.jpg",
    title: "Title 1",
    subtitle: "Subtitle 1",
  },
  {
    id: 2,
    category: "Category2",
    image: "/img2.jpg",
    title: "Title 2",
    subtitle: "Subtitle 2",
  },
  {
    id: 3,
    category: "Category3",
    image: "/img3.jpg",
    title: "Title 3",
    subtitle: "Subtitle 3",
  },
  {
    id: 4,
    category: "Category1",
    image: "/img4.jpg",
    title: "Title 4",
    subtitle: "Subtitle 4",
  },
  {
    id: 5,
    category: "Category2",
    image: "/img5.jpg",
    title: "Title 5",
    subtitle: "Subtitle 5",
  },
  {
    id: 6,
    category: "Category3",
    image: "/img6.jpg",
    title: "Title 6",
    subtitle: "Subtitle 6",
  },
];
export default function index() {
  return (
    <>
      <div>
        <ADHDTemplates />
        <UnlockSection />
        <NotionBundle />
        <Howitworks />
        <FAQSection />
        <NewsLetter />
        <FooterSection />
      </div>
    </>
  );
}
