import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import CategoryCard from "./CategoryCard";

const categories = ["All", "Paid", "Free", "Mental Health", "Physical Health", "Productivity"];
const cards = [
  {
    id: 1,
    categories: ["Paid", "Productivity", "Mental Health", "Physical Health"],
    title: "The Ultimate ADHD Brain 2.0 ⚛️",
    subtitle: "Regain control with your ADHD Digital Assistant.",
    price: "$99",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/UBDarkModeDemoRoundedShadowFinal.webp",
    link: "https://neuronotionn.gumroad.com/l/ultimateadhdbrain?_gl=1*3zmfxv*_ga*MzkwMjUxNjgwLjE3MTMyMDY2OTc.*_ga_6LJN6D94N6*MTcyMjUyMjcxMS4xNTkuMS4xNzIyNTIyNzQ1LjAuMC4w" 
  },
  {
    id: 2,
    categories: ["Free", "Productivity"],
    title: "The Ultimate ADHD Study System 📚🎓",
    subtitle: "Every ADHD Study Hack/Tool in one place.",
    price: "FREE",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/StudySystemShadowedDemoDark.webp",
    link: "https://neuronotionn.gumroad.com/l/neuronotion?_gl=1*19bp9gb*_ga*MzkwMjUxNjgwLjE3MTMyMDY2OTc.*_ga_6LJN6D94N6*MTcyMjUyMjcxMS4xNTkuMS4xNzIyNTIyOTY5LjAuMC4w"
  },
  {
    id: 3,
    categories: ["Free", "Mental Health"],
    title: "ADHD Journal & Mood Logger 🧠☮️",
    subtitle: "ADHD Journals and 90s mood logs!",
    price: "FREE",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/MentalHealthShadowDemoUpdated.webp",
    link: "https://neuronotionn.gumroad.com/l/adhdjournals?_gl=1*1bk2mro*_ga*MzkwMjUxNjgwLjE3MTMyMDY2OTc.*_ga_6LJN6D94N6*MTcyMjUyMjcxMS4xNTkuMS4xNzIyNTIyOTk5LjAuMC4w"
  },
  {
    id: 4,
    categories: ["Free", "Productivity"],
    title: "ADHD Task Manager 🏆☑️",
    subtitle: "An awesome task list, with an ADHD twist!",
    price: "FREE",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/TaskManagerShadowedDemo.webp",
    link: "https://neuronotionn.gumroad.com/l/adhdtaskmanager?_gl=1*1ljagim*_ga*MzkwMjUxNjgwLjE3MTMyMDY2OTc.*_ga_6LJN6D94N6*MTcyMjUyMjcxMS4xNTkuMS4xNzIyNTIyOTk5LjAuMC4w"
  },
  {
    id: 5,
    categories: ["Free", "Mental Health", "Physical Health"],
    title: "Habit & Routine Tracker🏆✅",
    subtitle: "Finally, build habits and stick to routines.",
    price: "FREE",
    image: "https://NeuroNotionPullZonw.b-cdn.net/Compressed%20Shadow%20Demo%20WEBPs/RoutinesShadowDemo.webp",
    link: "https://neuronotionn.gumroad.com/l/qnelxm?_gl=1*1ljagim*_ga*MzkwMjUxNjgwLjE3MTMyMDY2OTc.*_ga_6LJN6D94N6*MTcyMjUyMjcxMS4xNTkuMS4xNzIyNTIyOTk5LjAuMC4w"
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
            <a key={card.id} href={card.link}>
              <CategoryCard
                title={card.title}
                subtitle={card.subtitle}
                price={card.price}
                image={card.image}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ADHDTemplates;
