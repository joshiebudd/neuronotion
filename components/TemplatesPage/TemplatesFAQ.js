import React, { useState } from "react";
import FAQItem from "../FAQSection/FAQItem";

const TemplatesFAQ = () => {
  // State to track the open/close state of FAQ items
  const [isOpen, setIsOpen] = useState([false, false, false, false, false, false]);

  // Function to toggle FAQ item open/close
  const toggleFAQ = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <section id="faqs" className="bg-prim text-sec pt-32 pb-10 FAQ_section custom-rounded-t">
      <div className="text-center">
        <h2 className="font-pop font-bold text-4xl lg:leading-9 md:leading-7 leading-9 text-gray-50">
          Frequently Asked Questions ?
        </h2>
        <p className="font-cg leading-6 text-gray-50 lg:w-8/12 md:w-9/12 mx-auto text-xl mt-3 px-14 sm:px-24">
          Answers to some commonly asked questions.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="flex flex-col items-center md:space-x-8 mt-8 mx-8">
        <div className="w-full md:w-6/12 lg:w-6/12 mx-auto">
          {/* FAQ Item 0 */}
          <FAQItem>
            <h3 className="font-pop font-semibold text-xl leading-5 text-gray-800">
              What is a Notion Template?
            </h3>
            <p
              id="para1"
              className={`font-cg font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
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
            <h3 className="font-pop font-semibold text-xl leading-5 text-gray-800">
              How does this work?
            </h3>
            <p
              id="para2"
              className={`font-cg font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              After you purchase, you will receive a link to add the template to
              your own Notion account. From here you can get started right away,
              with a tiny bit of customization.
            </p>
          </FAQItem>

          {/* FAQ Item 2 */}
          <FAQItem>
            <h3 className="font-pop font-semibold text-xl leading-5 text-gray-800">
            Will this work for my type of ADHD?
            </h3>
            <p
              id="para2"
              className={`font-cg font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              Most likely. Our existing userbase is made up of people with diverse kinds of ADHD vulnerabilities, and we have heard many good things about the product. However, if after you try it, you&apos;re still not able to focus within 14 days post-purchase, we will gladly refund you upon request.
            </p>
          </FAQItem>

          {/* New FAQ Item */}
          <FAQItem>
            <h3 className="font-pop font-semibold text-xl leading-5 text-gray-800">
              Why does Neuro Notion work so well?
            </h3>
            <p
              id="para6"
              className={`font-cg font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              Neuro Notion works because it reduces the amount of apps, items and tools you need for focusing, managing tasks, studying, writing essays, and testing yourself when you study to just ONE. This way, it leaves little room for the typical ADHD distractors or confusion to set in and disrupt your flow.
            </p>
          </FAQItem>

          {/* FAQ Item 3 */}
          <FAQItem>
            <h3 className="font-pop font-semibold text-xl leading-5 text-gray-800">
              Do I need Notion Premium?
            </h3>
            <p
              id="para4"
              className={`font-cg font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
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
            <h3 className="font-pop font-semibold text-xl leading-5 text-gray-800">
              I have more questions!
            </h3>
            <p
              id="para5"
              className={`font-cg font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              If there is something you are still confused about that I
              haven&apos;t answered above; please send an email to
              josh@neuro-notion.com and I&apos;ll be happy to answer any queries.
            </p>
          </FAQItem>

        </div>
      </div>
    </section>
  );
};

export default TemplatesFAQ;