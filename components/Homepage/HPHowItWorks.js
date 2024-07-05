// components/UBPage/UBPageHeroSection.js
import React from 'react';

const HPHowItWorksSection = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">HOW IT WORKS</h2>
      <div className="flex justify-center space-x-8">
        <div>
          <div className="text-4xl font-bold">1</div>
          <p className="text-gray-600">Choose a template</p>
        </div>
        <div>
          <div className="text-4xl font-bold">2</div>
          <p className="text-gray-600">Access via email</p>
        </div>
        <div>
          <div className="text-4xl font-bold">3</div>
          <p className="text-gray-600">Duplicate to Notion</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-8">Button</button>
    </section>
  );
}

export default HPHowItWorksSection;
