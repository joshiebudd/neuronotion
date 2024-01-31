import React, { useState } from "react";
import Image from "next/image";

const FooterSection = () => {
  const [showed, setShowed] = useState(false);
  const [email, setEmail] = useState("");
  const [bodyText, setBodyText] = useState("");
  const showPopup = (state) => {
    setShowed(state);
  };
  const handleSubmit = () => {
    var subject = "Neuronotion";
    var body = bodyText;
    var mailtoLink =
      "mailto:" +
      email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    window.location.href = mailtoLink;
  };
  return (
    <footer id="footer" className="p-4 bg-black md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#hero"
          className="flex justify-center items-center text-2xl font-semibold text-white"
        >
          <Image
            width={36}
            height={36}
            className="mr-3 sm:h-9"
            src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
            alt="NeuroNotes Logo"
          />{" "}
          Neuro Notion ©
        </a>
        <p className="my-6 text-white">
          The Ultimate Notion Template for Silencing the ADHD Chaos.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-400 relative">
          {showed && (
            <>
              <div
                className="absolute top-[-180px] flex flex-col p-3 bg-white rounded items-center w-64 shadow-lg border"
                style={{ zIndex: 16 }}
              >
                <input
                  placeholder="Email"
                  className="py-1 px-2 mb-1 border border-gray-300 w-full text-black"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Your text"
                  className="py-1 px-2 border border-gray-300 w-full text-black"
                  onChange={(e) => setBodyText(e.target.value)}
                />
                <button
                  className="inline-block rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 mt-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div
                className="fixed left-0 top-0 bottom-0 right-0"
                style={{ zIndex: 15 }}
                onClick={() => showPopup(false)}
              ></div>
            </>
          )}
          <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#faqs" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a
              // href="mailto:josh@neuro-notion.com"
              onClick={() => showPopup(true)}
              className="mr-4 hover:underline md:mr-6 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          Neuro Notion © 2023<a href="#hero" className="hover:underline"></a>.
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
