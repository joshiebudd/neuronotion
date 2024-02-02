import React, { useState } from "react";
import FAQItem from "./FAQItem";

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
    <section id="faqs" className="bg-gray-100 pb-12 pt-24 FAQ_section">
      <div className="text-center">
        <h2 className="font-bold text-4xl lg:leading-9 md:leading-7 leading-9 text-gray-900">
          Frequently Asked Questions ❔
        </h2>
        <p className="font-normal text-base leading-6 text-gray-900 lg:w-8/12 md:w-9/12 mx-auto text-xl mt-6">
          Answers to some commonly asked questions.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="flex flex-col items-center md:space-x-8 md:mt-16 mt-8 mx-8">
        <div className="w-full md:w-6/12 lg:w-6/12 mx-auto">
          {/* FAQ Item 0 */}
          <FAQItem>
            <h3 className="font-semibold text-xl leading-5 text-gray-800">
              What is a Notion Template?
            </h3>
            <p
              id="para1"
              className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              A Notion template is a pre-designed layout in the{" "}
              <a
                href="https://affiliate.notion.so/scq8k2tmgpnc"
                className="text-blue-500"
              >
                Notion app, a super popular note-taking app for students{""}
              </a>
              , especially among ADHDers. The template provides a ready-to-use
              structure for organizing notes, tasks, and schedules. It
              simplifies setup and is customizable to individual needs.
            </p>
          </FAQItem>

          {/* FAQ Item 1 */}
          <FAQItem>
            <h3 className="font-semibold text-xl leading-5 text-gray-800">
              How does this work?
            </h3>
            <p
              id="para2"
              className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              After you purchase, you will receive a link to add the template to
              your own Notion account. From here you can get started right away,
              with a tiny bit of customization.
            </p>
          </FAQItem>

          {/* FAQ Item 2 */}
          <FAQItem>
            <h3 className="font-semibold text-xl leading-5 text-gray-800">
              Is this worth $20?
            </h3>
            <p
              id="para2"
              className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              We think absolutely! In fact we think it&apos;s worth more and so
              do many others! This template saves you countless hours of
              creating your own system and has tons of extra valuable tools and
              custom features built-in too!
            </p>
          </FAQItem>

          {/* FAQ Item 3 */}
          <FAQItem>
            <h3 className="font-semibold text-xl leading-5 text-gray-800">
              Do I need Notion Premium?
            </h3>
            <p
              id="para4"
              className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              Nope! Notion Free plan is absolutely enough - you only need{" "}
              <a
                href="https://affiliate.notion.so/neuro-notion-ai"
                className="text-blue-500"
              >
                Notion Premium
              </a>{" "}
              if you want to use the AI features very often.
            </p>
          </FAQItem>

          {/* FAQ Item 4 */}
          <FAQItem>
            <h3 className="font-semibold text-xl leading-5 text-gray-800">
              I have more questions!
            </h3>
            <p
              id="para5"
              className={`font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              If there is something you are still confused about that I
              haven&apos;t answered above; please send an email to
              joshiebudd@gmail.com and I&apos;ll be happy to answer any queries.
            </p>
          </FAQItem>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
