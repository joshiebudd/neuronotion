import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import CategoryCard from "./CategoryCard";

const categories = ["All", "Category1", "Category2", "Category3"];
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
  {
    id: 4,
    category: "Category1",
    title: "Title 4",
    subtitle: "Subtitle 4",
    price: 99,
  },
  {
    id: 5,
    category: "Category2",
    title: "Title 5",
    subtitle: "Subtitle 5",
    price: 99,
  },
  {
    id: 6,
    category: "Category3",
    title: "Title 6",
    subtitle: "Subtitle 6",
    price: 99,
  },
];

const ADHDTemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  return (
    <div className="md:p-16 p-8">
      <div className="text-[32px] text-gray-600 font-bold">
        ADHD Notion Templates
      </div>
      <div className="text-[20px] text-gray-600 ">Search for some templates</div>
      <div className="w-full">
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              selectedCategory={selectedCategory}
              onClick={setSelectedCategory}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {filteredCards.map((card) => (
            <CategoryCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ADHDTemplates;
