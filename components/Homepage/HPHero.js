import React from 'react';

const HPHeroSection = () => {
  return (
    <section className="text-center mt-32 py-16 bg-white">
      <h1 className="text-5xl font-bold mb-4">Take Control of your ADHD.</h1>
      <p className="text-gray-600 mb-8">
        Subheading asadas asd asd asd asd asd sa sdf adsfdasfasdf dasf asdf. fadsfadsfadsf
        afasdfasdfadsfasdfasdf
      </p>
      <div className="space-x-4">
        <button className="bg-indigo-500 text-white py-2 px-8 rounded-full">Button</button>
        <button className="bg-indigo-500 text-white py-2 px-8 rounded-full">Button</button>
      </div>
      <div className="mt-8">
        <p className="text-gray-600">Trusted by and Affiliated with:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default HPHeroSection;
