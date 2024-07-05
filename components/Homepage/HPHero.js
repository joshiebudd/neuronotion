import React from 'react';

const HPHeroSection = () => {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Take Control of your ADHD.</h1>
      <p className="text-gray-600 mb-8">Subheading asadas asd asd asd</p>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Button</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Button</button>
      </div>
      <div className="mt-8">
        <p>Trusted by and Affiliated with:</p>
        <div className="flex justify-center space-x-2 mt-4">
          {/* Add your logos here */}
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default HPHeroSection;
