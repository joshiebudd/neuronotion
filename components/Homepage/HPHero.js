import React from 'react';

const HPHeroSection = () => {
  const images = [
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/alang.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/notion.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/resetadhd.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/anonymous.webp",
    "https://NeuroNotionPullZonw.b-cdn.net/Avatars/anonymous.webp"
  ];

  return (
    <section id="hero" className="text-center pt-40 md:mt-32 py-16 md:py-16 bg-white">
      <h1 className="text-5xl md:text-7xl font-prim font-bold text-prim mb-4">Take Control of your ADHD.</h1>
      <p className="mx-6 md:m-4 text-lg md:text-2xl text-sec font-cg font-bold mb-8">
        The world&apos;s first suite of scientifically designed ADHD tools <br className="hidden md:inline" /> to help you regain control of your life with ADHD.
      </p>
      <div className="space-y-4 md:space-x-4 md:space-y-0 flex flex-col md:flex-row justify-center items-center">
        <button className="bg-prim text-sec py-3 px-6 md:px-10 font-prim font-bold rounded-xl text-lg md:text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim"
          onClick={() => window.location.href = "https://www.neuro-notion.com/templates"}>
          Browse Templates 
        </button>
        <button className="bg-gray-300 text-gray-700 text-opacity-80 py-3 px-6 md:px-10 font-prim font-bold rounded-xl text-lg md:text-xl shadow-gray-400 shadow-sm hover:bg-gray-400 hover:text-gray-800 hover: hover:shadow-gray-600 hover:shadow-sm"
          onClick={() => window.location.href = "https://www.neuro-notion.com/templates#bundle"}>
          View Bundles
        </button>
      </div>
    </section>
  );
}

export default HPHeroSection;
