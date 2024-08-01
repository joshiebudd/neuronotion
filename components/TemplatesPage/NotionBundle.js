import React from "react";
import CategoryCard from "./CategoryCard";

const cards = [
  {
    id: 1,
    category: "Category1",
    title: "FREE Template Bundle",
    subtitle: "COMING SOON!",
    price: "",  // Changed to string "FREE"
    image: "https://NeuroNotionPullZonw.b-cdn.net/FreeBundleDemoCropped.webp",
    link: ""
  },
  {
    id: 2,
    category: "Category2",
    title: "Personal Productivity Bundle",
    subtitle: "COMING SOON!",
    price: "",
    image: "https://NeuroNotionPullZonw.b-cdn.net/FreeBundleDemoCropped.webp",
    link: ""
  },
];

const NotionBundle = () => {
  return (
    <section id="bundle" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-prim font-bold text-prim mb-8 text-left">
          ADHD Notion Bundles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <CategoryCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotionBundle;
