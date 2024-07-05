import React from 'react';

const HPHeroSection = () => {
  return (
    <section className="text-center mt-32 py-16 bg-white">
      <h1 className="text-7xl font-prim font-bold text-prim mb-4">Take Control of your ADHD.</h1>
      <p className="text-slate-900 font-cg font-bold mb-8 text-lg">
        Subheading asadas asd asd asd asd asd sa sdf adsfdasfasdf dasf <br /> asdf. fadsfadsfadsf
        afasdfasdfadsfasdfasdf
      </p>
      <div className="space-x-4">
      <button className="bg-prim text-sec py-3 px-10 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-sec hover:text-prim">Button</button>
      <button className="bg-gray-300 text-gray-700 text-opacity-80 py-3 px-10 font-prim font-bold rounded-xl text-xl shadow-gray-400 shadow-sm hover:bg-gray-400 hover:text-gray-800 hover: hover:shadow-gray-600 hover:shadow-sm">Button</button>
      </div>
      <div className="mt-8">
        <p className=" font-sec italic text-gray-700">Trusted by and Affiliated with::</p>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default HPHeroSection;
