import Image from "next/image";
import React, { useRef } from "react";

export default function Header() {
  const titleRef = useRef(null);
  return (
    <div className="full-header bg-white bg-opacity-30 backdrop-blur-lg fixed top-0 right-0 left-0">
      <nav className="px-8 py-5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a
            href="https://www.neuro-notion.com/#hero"
            className="flex items-center grow  transition duration-300"
            ref={titleRef}
          >
            <Image
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/Bubbles.svg"
              alt="logo"
              loading="eager"
              className="mr-3"
              width={56}
              height={56}
            />
            <div className="w-full grow text-center sm:text-left">
              <span className="self-center whitespace-nowrap text-2xl sm:text-2xl font-baloo font-bold text-black">
                Neuro Notion
              </span>
            </div>
          </a>
          <div className="hidden justify-end lg:flex items-center space-x-4 grow min-w-[200px]">
            <a className="px-1 py-1 text-lg md:xl font-baloo font-regular text-slate-900 hover:text-slate-900 cursor-pointer hover:underline hover:text-xl transition-all duration-500">
              ADHD Templates
            </a>
            <a className="px-1 py-1 text-lg md:xl font-baloo font-regular text-slate-900 hover:text-slate-900 cursor-pointer hover:underline hover:text-xl transition-all duration-500">
              Bundles
            </a>
            <a
              className="inline-block rounded-lg
                bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-400 to-blue-700
                px-4 py-4 text-lg font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-3 hidden sm:block"
            >
              Ultimate ADHD Brain
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
