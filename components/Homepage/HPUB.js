import React from 'react';

const HPUBSection = () => {
  return (
    <section className="flex justify-center items-center py-16 bg-gray-100">
      <div className="border-2 border-black px-16 py-8 bg-white rounded-lg max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Your all-in-one ADHD Life Management Tool</h2>
        <div className="mb-8">
          <img src="https://NeuroNotionPullZonw.b-cdn.net/MainPageCroppedRoundedGlowPNG.png" alt="ADHD Life Management Tool" className="w-full max-w-4xl mx-auto"/>
        </div>
        <p className="text-gray-600 mb-8">Everything you need to manage your life with ADHD. Add anything in just two clicks. Beautiful visuals. bla bla</p>
        <a href="#" className="px-4 py-2 bg-purple-500 text-white rounded-md text-lg md:xl font-baloo font-bold hover:bg-purple-600 transition"> Get Ultimate ADHD Brain </a>
      </div>
    </section>
  );
}

export default HPUBSection;
