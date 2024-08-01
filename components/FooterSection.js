import React, { useState } from "react";

const FooterSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("Josh@neuro-notion.com").then(
      () => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 5000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <footer id="footer" className="p-4 bg-black md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#hero"
          className="flex justify-center items-center text-2xl font-pop font-semibold text-white"
        >
          <img
            width={36}
            height={36}
            className="mr-3 sm:h-9"
            src="https://NeuroNotionPullZonw.b-cdn.net/logo.webp"
            alt="NeuroNotes Logo"
          />{" "}
          Neuro Notion App Limited ©
        </a>
        <p className="my-6 text-gray-50 font-pop">
          The Ultimate Notion Template for Silencing the ADHD Chaos.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-400 relative">
          {emailCopied && (
            <div
              className="absolute top-[-180px] flex flex-col p-3 bg-white rounded items-center w-64 shadow-lg border"
              style={{ zIndex: 16 }}
            >
              <p className="text-black">Email address copied to clipboard</p>
            </div>
          )}
          <li>
            <a href="#about" className="mr-4 font-pop hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#faqs" className="mr-4 font-pop hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a
              href="https://neuronotionn.gumroad.com/affiliates"
              className="mr-4 font-pop hover:underline md:mr-6"
            >
              Become an affiliate
            </a>
          </li>
          <li>
            <a
              onClick={copyToClipboard}
              className="mr-4 font-pop hover:underline md:mr-6 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-white font-pop sm:text-center dark:text-gray-400">
          Neuro Notion © 2024<a href="#hero" className="hover:underline"></a>.
          All Rights Reserved. Contact: Josh@neuro-notion.com
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;