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
    <section className="pt-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-prim font-bold text-prim mb-2">ADHD Notion Templates</h2>
          <p className="text-xl text-gray-700 font-sec mb-8">Search for some templates</p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center space-x-4">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                category={category}
                selectedCategory={selectedCategory}
                onClick={setSelectedCategory}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
    </section>
  );
};

export default ADHDTemplates;
