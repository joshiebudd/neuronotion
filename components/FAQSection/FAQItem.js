import { useState } from "react";

const FAQItem = ({ children }) => {
  // handle click operation

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle FAQ item open/close
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-gray-200 rounded-lg p-4 md:p-6 mb-6 max-w-md mx-auto cursor-pointer ${
        isOpen ? "open" : ""
      }`}
      onClick={() => toggleFAQ()}
    >
      <div className="flex justify-between items-center">
        {children[0] && children[0]}
        {/* Plus Icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          strokeWidth="1.25"
        >
          <path
            id="path3"
            d="M10 4.1665V15.8332"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16602 10H15.8327"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          !isOpen ? "max-h-0" : "max-h-[300px] sm:max-h-48 "
        }`}
      >
        {children[1] && children[1]}
      </div>
    </div>
  );
};

export default FAQItem;
