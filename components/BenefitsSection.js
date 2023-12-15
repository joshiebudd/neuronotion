import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <section id="features" className="bg-white benefits-section">
      <div className="py-8 pb-24 px-4 mx-auto max-w-screen-xl sm:pt-4 lg:px-56">
        <div className="max-w-screen-md mx-auto text-center mb-2 mt-2">
          <h2 className="text-5xl tracking-tight font-bold text-gray-900">
          ADHD causing study struggles? <br /> Not anymore.
          </h2>
          <p className="mt-8 text-gray-700 sm:text-xl text-gray-900">
            Neuro Notion is built by ADHDers for ADHDers... We know your struggles, and we&apos;re making huge strides to solve them.</p>
        </div>
        <div className="md:grid md:grid-cols-2 gap-x-16 gap-y-4 items-center">
          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              width={320}
              height={320}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/quickadd_ben.webp"
              alt="Quick Add Demo"
            />
                    <h3 className="text-xl font-bold text-black">More Hyper-focus, Less Distractions </h3>
            <p className="text-gray-700">Capture ideas rapidly, block out noise, maintain flow.</p>
          </div>

          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              width={320}
              height={320}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/flashcards_ben.webp"
              alt="Flashcards Demo"
            />
            <h3 className="text-xl font-bold text-black">Save Time & Effort</h3>
            <p className="text-gray-700">Create, Revise, Test. All in one place.</p>
          </div>
                
          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              width={320}
              height={320}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/focus_tools_ben.webp"
              alt="Focus Tools Demo"
            />
            <h3 className="text-xl font-bold text-black">Built around ADHD</h3>
            <p className="text-gray-700">Custom-built ADHD focus timers, sounds, and tools</p>
          </div>

          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              width={320}
              height={320}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/essayplans_ben.webp"
              alt="Essay plans demo"
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
