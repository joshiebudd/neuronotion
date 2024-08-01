import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-16 bg-prim">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10">
          <span className="bg-accent7 text-prim p-2 font-prim font-bold rounded-xl text-xs shadow-gray-600 shadow-md">
          ↓ Coming soon ↓
          </span>
        </div>
        <h2 className="text-4xl font-pop font-bold text-gray-50 mb-4">Join the ADHD Newsletter</h2>
        <p className="text-lg text-gray-50 font-pop lg:px-48 md:px-16 mb-8">
          Every Single Day, you&apos;ll receive a{" "}
          <span className="font-bold">2-minute email</span> containing practical
          tips, stories, and examples of how to better manage your ADHD, completely free.
        </p>
        <div className="flex flex-col items-center space-y-4 mb-8 font-cg font-italic">
          <input
            type="text"
            placeholder="Enter First Name"
            className="border border-gray-400 p-3 rounded-xl w-full max-w-lg"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="border border-gray-400 p-3 rounded-xl w-full max-w-lg"
          />
          <button className="bg-sec text-prim py-3 px-6 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-accent3 hover:text-prim transition-colors duration-300">
            Coming Soon
          </button>
          <div className="pt-4 text-lg font-cg italic text-gray-300">
            No Spam. Unsubscribe in one click.
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
