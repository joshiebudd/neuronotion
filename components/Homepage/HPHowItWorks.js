import React from 'react';

const HPHowItWorksSection = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">HOW IT WORKS</h2>
      <div className="flex justify-center space-x-8 items-center">
        <div>
          <div className="text-8xl font-bold">1</div>
          <p className="text-xl text-gray-600">
            <span className="text-3xl font-bold">Choose</span> <br/>a template
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-6xl font-bold">&#8594;</div>
        </div>
        <div>
          <div className="text-8xl font-bold">2</div>
          <p className="text-xl text-gray-600">
            <span className="text-3xl font-bold">Access</span> <br/>via email
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-6xl font-bold">&#8594;</div>
        </div>
        <div>
          <div className="text-8xl font-bold">3</div>
          <p className="text-xl text-gray-600">
            <span className="text-3xl font-bold">Duplicate</span> <br/>to Notion
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <a href="#" className="px-8 py-4 bg-purple-500 text-white rounded-md text-2xl font-bold hover:bg-purple-600 transition">Get Free ADHD Bundle</a>
      </div>
    </section>
  );
}

export default HPHowItWorksSection;
