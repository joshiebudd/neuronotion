import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 About_neuronotes">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pt-10 lg:px-6 text-center">
        <div className="max-w-screen-lg mx-auto text-gray-800 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">About Neuro Notion</h2>
          <p className="mb-4 font-light">Neuro Notion was founded out of frustration for a lack of tools for people with ADHD. There are so many amazing productivity tools out there, Notion being one of them, but using 10 different apps only leads to inevitable distractions. <br /> <br /> So, we made it our job to create something simple, but mightily impressive that would leave no choice but to stay focused. <br /> <br /> We spoke to countless ADHDers and listened to what they wanted in a tool like this - and made exactly that. All of our team use it and find it extremely helpful - and we hope you do too!</p>
          <p className="mb-4 font-medium">We would love to hear your thoughts or testimonials to display on our website - please reach out and contact the team!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
