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
    <div className="md:p-16 mt-8 p-8">
      <div className="text-[32px] font-bold text-gray-600">
        ADHD Notion Bundles
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
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
  );
};

export default NotionBundle;
