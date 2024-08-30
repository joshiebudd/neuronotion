import React, { useState } from "react";
import FAQItem from "../FAQSection/FAQItem";

const UBFAQs = () => {
  // State to track the open/close state of FAQ items
  const [isOpen, setIsOpen] = useState([false, false, false, false, false, false]);

  // Function to toggle FAQ item open/close
  const toggleFAQ = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <section id="faqs" className="bg-prim pt-16 pb-10 FAQ_section">
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
                className="text-sky-600 italic"
              >
                Notion app, a super popular productivity platform ADHDers{""}
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
              Absolutely! I guarantee it. Our existing userbase is made up of people with diverse kinds of ADHD vulnerabilities, and we&apos;ve yet to hear of anyone who has said otherwise. However, if after you try it, you still don&apos;t think its appropriate for you within 14 days post-purchase, we will gladly refund you upon request.
            </p>
          </FAQItem>

          {/* New FAQ Item */}
          <FAQItem>
            <h3 className="font-pop font-semibold text-xl leading-5 text-gray-800">
              Why do Neuro Notion&apos;s tools work so well?
            </h3>
            <p
              id="para6"
              className={`font-cg font-normal text-base leading-6 text-gray-700 mt-4 w-11/12`}
            >
              Our tools work because they&apos;re scientifically designed around your ADHD brain. Unlike any other tools out there - we get your brain... on a scientific level, and a personal one too! 
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
                className="text-sky-600 italic"
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

export default UBFAQs;