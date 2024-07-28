import React from 'react';
import Image from "next/image";


const HPHeader = () => {
  return (
    <header className="bg-white bg-opacity-30 backdrop-blur-lg z-10 fixed top-0 right-0 left-0 shadow">
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
            <span className="self-center whitespace-nowrap text-3xl sm:text-2xl font-pop font-bold text-prim">
              Neuro Notion
            </span>
          </div>
        </a>
        <nav className="space-x-4 flex items-center">
          <a href="#" className="text-prim hover:text-gray-900 text-lg md:xl font-pop font-bold">ADHD Templates</a>
          <a href="#" className="text-prim hover:text-gray-900 text-lg md:xl font-pop font-bold">Bundles</a>
          <a href="#" className="bg-accent1 text-gray-50 py-2 px-4 font-prim font-bold rounded-xl text-lg shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-violet-700 hover:bg-opacity-80 hover:text-gray-50">
            Ultimate ADHD Brain
          </a>
        </nav>
      </div>
    </header>
  );
}

export default HPHeader;
