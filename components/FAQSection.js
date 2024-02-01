import React, { useState } from 'react';

const FAQSection = () => {
  // State to track the open/close state of FAQ items
  const [isOpen, setIsOpen] = useState([false, false, false, false, false]);

  // Function to toggle FAQ item open/close
  const toggleFAQ = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <section id="faqs" className="bg-white mt-20 mb-20 FAQ_section">
      <div className="text-center">
        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
        <p className="font-normal text-base leading-6 text-gray-800 lg:w-8/12 md:w-9/12 mx-auto">
          Answers to some commonly asked questions.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="flex flex-col items-center md:space-x-8 md:mt-16 mt-8">
        <div className="w-full md:w-6/12 lg:w-6/12 mx-auto">
          {/* FAQ Item 0 */}
          <div className={`bg-gray-200 rounded-lg p-4 md:p-6 mb-6 max-w-md mx-auto cursor-pointer ${isOpen[0] ? 'open' : ''}`} onClick={() => toggleFAQ(0)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl leading-5 text-gray-800">What is a Notion Template?</h3>
              {/* Plus Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" strokeWidth="1.25">
                <path id="path1" d="M10 4.1665V15.8332" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p id="para1" className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12 ${isOpen[0] ? 'block' : 'hidden'}`}>
        A Notion template is a pre-designed layout in the <a href="https://affiliate.notion.so/scq8k2tmgpnc" className="text-blue-500">Notion app, a super popular note-taking app for students </a>, especially among ADHDers. The template provides a ready-to-use structure for organizing notes, tasks, and schedules. It simplifies setup and is customizable to individual needs.
            </p>
          </div>

          {/* FAQ Item 1 */}
          <div className={`bg-gray-200 rounded-lg p-4 md:p-6 mb-6 max-w-md mx-auto cursor-pointer ${isOpen[1] ? 'open' : ''}`} onClick={() => toggleFAQ(1)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl leading-5 text-gray-800">How does this work?</h3>
              {/* Plus Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" strokeWidth="1.25">
                <path id="path2" d="M10 4.1665V15.8332" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p id="para2" className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12 ${isOpen[1] ? 'block' : 'hidden'}`}>
              After you purchase, you will receive a link to add the template to your own Notion account. From here you can get started right away, with a tiny bit of customization.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className={`bg-gray-200 rounded-lg p-4 md:p-6 mb-6 max-w-md mx-auto cursor-pointer ${isOpen[2] ? 'open' : ''}`} onClick={() => toggleFAQ(2)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl leading-5 text-gray-800">Is this worth $10?</h3>
              {/* Plus Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" strokeWidth="1.25">
                <path id="path3" d="M10 4.1665V15.8332" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p id="para3" className={`font-normal  text-base leading-6 text-gray-700 mt-4 w-11/12 ${isOpen[2] ? 'block' : 'hidden'}`}>
              We think absolutely! In fact we think it&apos;s worth more and so do many others! This template saves you at least 10 hours of creating your own system and has tons of extra valuable tools and custom features built-in too!
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className={`bg-gray-200 rounded-lg p-4 md:p-6 mb-6 max-w-md mx-auto cursor-pointer ${isOpen[3] ? 'open' : ''}`} onClick={() => toggleFAQ(3)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl leading-5 text-gray-800">Do I need Notion Premium?</h3>
              {/* Plus Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" strokeWidth="1.25">
                <path id="path4" d="M10 4.1665V15.8332" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p id="para4" className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12 ${isOpen[3] ? 'block' : 'hidden'}`}>
              Nope! Notion Free plan is absolutely enough - you only need <a href="https://affiliate.notion.so/neuro-notion-ai" className="text-blue-500">Notion Premium</a> if you want to use the AI features very often.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className={`bg-gray-200 rounded-lg p-4 md:p-6 mb-6 max-w-md mx-auto cursor-pointer ${isOpen[4] ? 'open' : ''}`} onClick={() => toggleFAQ(4)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl leading-5 text-gray-800">I have more questions!</h3>
              {/* Plus Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" strokeWidth="1.25">
                <path id="path5" d="M10 4.1665V15.8332" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p id="para5" className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12 ${isOpen[4] ? 'block' : 'hidden'}`}>
              If there is something you are still confused about that I haven&apos;t answered above; please send an email to joshiebudd@gmail.com and I&apos;ll be happy to answer any queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
