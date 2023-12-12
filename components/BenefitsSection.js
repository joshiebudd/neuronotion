import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <section id="features" className="bg-white benefits-section">
      <div className="py-8 pb-24 px-4 mx-auto max-w-screen-xl sm:pt-4 lg:px-56">
        <div className="max-w-screen-md mx-auto text-center mb-2 mt-2">
          <h2 className="text-5xl tracking-tight font-bold text-gray-900">
            Silence the chaos. <br /> Channel the flow state.
          </h2>
          <p className="text-gray-700 sm:text-xl text-gray-900">
            The all-in-one system your brain has been crying out for. Everything in one place, with no distractions.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 gap-x-16 gap-y-4 items-center">
          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/quickadd_ben.webp"
              alt="Quick Add Demo"
              width={320}
              height={320}
            />
            <h3 className="text-xl font-bold text-black">Eliminate Distractions</h3>
            <p className="text-gray-700">Capture notes & ideas fast. No more distractions.</p>
          </div>

          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/flashcards_ben.webp"
              alt="Flashcards Demo"
              width={320}
              height={320}
            />
            <h3 className="text-xl font-bold text-black">Save Time & Effort</h3>
            <p className="text-gray-700">Create, Revise, Test. All in one place.</p>
          </div>
                
          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/focus_tools_ben.webp"
              alt="Focus Tools Demo"
              width={320}
              height={320}
            />
            <h3 className="text-xl font-bold text-black">Built around ADHD</h3>
            <p className="text-gray-700">Custom-built ADHD focus timers, sounds, and tools</p>
          </div>

          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/essayplans_ben.webp"
              alt="Essay plans demo"
              width={320}
              height={320}
            />
            <h3 className="text-xl font-bold text-black">Work Smarter. Much Smarter.</h3>
            <p className="text-gray-500">Let AI generate Essay Plans, Summaries & more!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
