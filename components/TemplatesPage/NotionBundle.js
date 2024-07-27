import React from "react";
import CategoryCard from "./CategoryCard";

const cards = [
  {
    id: 1,
    category: "Category1",
    title: "Title 1",
    subtitle: "Subtitle 1",
    price: 99,
  },
  {
    id: 2,
    category: "Category2",
    title: "Title 2",
    subtitle: "Subtitle 2",
    price: 99,
  },
  {
    id: 3,
    category: "Category3",
    title: "Title 3",
    subtitle: "Subtitle 3",
    price: 99,
  },
];

const NotionBundle = () => {
  return (
    <section className="py-16 bg-white">
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
            />
          ))}
        </div>
        <hr className="mt-8 w-full border-t border-gray-400" />
      </div>
    </section>
  );
};

export default NotionBundle;
