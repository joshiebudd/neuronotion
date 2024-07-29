import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import CategoryCard from "./CategoryCard";

const categories = ["All", "Paid", "Free", "Mental Health", "Physical Health", "Productivity"];
const cards = [
  {
    id: 1,
    categories: ["Paid", "Productivity", "Mental Health", "Physical Health"],
    title: "Ultimate ADHD Brain 2.0 ⚛️",
    subtitle: "Your Perfect ADHD Digital Assistant.",
    price: "$79",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/UBDarkModeDemoRoundedShadowFinal.webp"
  },
  {
    id: 2,
    categories: ["Paid", "Productivity"],
    title: "The ADHD Study System 📚🎓",
    subtitle: "Every ADHD Study Hack/Tool in one place.",
    price: "$19",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/StudySystemShadowedDemoDark.webp"
  },
  {
    id: 3,
    categories: ["Free", "Mental Health"],
    title: "ADHD Journal & Mood Logger 🧠☮️",
    subtitle: "ADHD Journals and 90s mood logs!",
    price: "FREE",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/MentalHealthShadowDemoUpdated.webp"
  },
  {
    id: 4,
    categories: ["Free", "Productivity"],
    title: "ADHD Task Manager 🏆☑️",
    subtitle: "An awesome task list, with an ADHD twist!",
    price: "FREE",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/TaskManagerShadowedDemo.webp"
  },

  {
    id: 5,
    categories: ["Free", "Mental Health", "Physical Health"],
    title: "Habit & Routine Tracker🏆✅",
    subtitle: "Finally, build habits and stick to routines.",
    price: "FREE",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/RoutinesShadowDemo.webp"
  },
];

const ADHDTemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.categories.includes(selectedCategory));

  return (
    <section className="pt-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-prim font-bold text-prim mb-2">ADHD Notion Templates</h2>
          <p className="text-xl text-gray-700 font-sec mb-8">All <b>scientifically</b> designed around the ADHD Brain.</p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center space-x-4">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                category={category}
                selectedCategory={selectedCategory}
                onClick={() => setSelectedCategory(category)}
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
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ADHDTemplates;
