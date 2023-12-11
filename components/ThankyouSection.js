import React from 'react';
// Import any additional dependencies you might need

const ThankYouSection = () => {
  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center">
      <header className="fixed top-0 left-0 right-0 flex items-center justify-center h-20 bg-white bg-opacity-30 backdrop-blur-lg">
        <a href="www.neuro-notion.com" className="flex items-center">
          <img src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/roundedtranslogo.png" className="mr-3 h-6 sm:h-9" alt="NeuroNotes Logo" />
          <span className="whitespace-nowrap text-2xl font-semibold text-black">Neuro Notion</span>
        </a>
      </header>

      <div className="card w-full max-w-md rounded-lg p-4 text-center shadow bg-white text-gray-900">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <p className="mb-4 text-lg font-semibold">Thank you for your purchase!</p>
        <p className="text-gray-600">Please check your emails for a link to the template and instruction on how to install, order confirmation, and receipt. You can close this page now. </p>
      </div>
    </div>
  );
};

export default ThankYouSection;
