import React from "react";
import CategoryCard from "./CategoryCard";

const cards = [
  {
    id: 1,
    category: "Category1",
    title: "FREE ADHD Starter Bundle",
    subtitle: "The perfect Notion Starter pack for ADHD!",
    price: "FREE",  // Changed to string "FREE"
    image: "https://NeuroNotionPullZonw.b-cdn.net/FreeBundleDemoCropped.webp",
    link: "https://neuronotionn.gumroad.com/l/freebundle"
  },
  {
    id: 2,
    category: "Category2",
    title: "Personal Productivity Bundle",
    subtitle: "COMING SOON!",
    price: "",
    link: ""
  },
];

const NotionBundle = () => {
  return (
    <section id="bundle" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-prim font-bold text-prim mb-8 text-center md:text-left">
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
