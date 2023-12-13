import React from 'react';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <footer className="p-4 bg-black md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="#hero" className="flex justify-center items-center text-2xl font-semibold text-white">
          <Image width={36} height={36} className="mr-3 sm:h-9" src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" alt="NeuroNotes Logo" /> Neuro Notion ©
        </a>
        <p className="my-6 text-white">The Ultimate Notion Template for Silencing the ADHD Chaos.</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-400">
          <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#faqs" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
            <a href="mailto:joshiebudd@gmail.com" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
        </ul>
        <span className="text-sm text-white sm:text-center dark:text-gray-400">Neuro Notion © 2023<a href="#hero" className="hover:underline"></a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default FooterSection;
