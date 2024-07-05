import React from 'react';
import Image from "next/image";

const HPHeader = () => {
  return (
    <header className="bg-white bg-opacity-30 backdrop-blur-lg fixed top-0 right-0 left-0 shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a
          href="https://www.neuro-notion.com/#hero"
          className="flex items-center grow transition duration-300"
        >
          <Image
            width={400}
            height={400}
            loading="eager"
            className="w-16 h-auto mr-3"
            src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/Bubbles.svg"
            alt="Neuro Notion Logo"
          />
          <div className="w-full grow text-center sm:text-left">
            <span className="self-center whitespace-nowrap text-2xl sm:text-2xl font-baloo font-bold text-black">
              Neuro Notion
            </span>
          </div>
        </a>
        <nav className="space-x-4 flex items-center">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-lg md:xl font-baloo font-bold">ADHD Templates</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-lg md:xl font-baloo font-bold">Bundles</a>
          <a href="#" className="px-4 py-2 bg-purple-500 text-white rounded-md text-lg md:xl font-baloo font-bold hover:bg-purple-600 transition">
            Ultimate ADHD Brain
          </a>
        </nav>
      </div>
    </header>
  );
}

export default HPHeader;
