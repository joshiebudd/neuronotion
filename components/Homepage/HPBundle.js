// components/Homepage/BundleSection.js
import React from 'react';

const HPBundleSection = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Free ADHD Notion Starter Bundle.</h2>
      <div className="flex justify-center items-center">
        <img src="https://NeuroNotionPullZonw.b-cdn.net/MainPageCroppedRoundedGlowPNG.png" alt="ADHD Notion Starter Bundle" className="w-full max-w-4xl"/>
      </div>
      <p className="text-gray-600 mt-8">Get FREE access to 6 ADHD Notion Templates to start controlling the chaos.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Button</button>
    </section>
  );
}

export default HPBundleSection;
