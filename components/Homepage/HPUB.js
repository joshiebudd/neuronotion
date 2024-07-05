// components/StudySystem/StudySystemHeroSection.js
import React from 'react';

const HPUBSection = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-bold mb-4">Your all-in-one ADHD Life Management Tool</h2>
      <div className="flex justify-center items-center">
        <img src="https://NeuroNotionPullZonw.b-cdn.net/MainPageCroppedRoundedGlowPNG.png" alt="ADHD Life Management Tool" className="w-full max-w-4xl"/>
      </div>
      <p className="text-gray-600 mt-8">Everything you need to manage your life with ADHD. Add anything in just two clicks. Beautiful visuals. bla bla</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Button</button>
    </section>
  );
}

export default HPUBSection;
