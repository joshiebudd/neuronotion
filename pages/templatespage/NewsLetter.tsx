import React from "react";

export default function () {
  return (
    <div className="md:p-16 p-8 flex flex-col items-center justify-center">
      <div className="pt-24 text-[32px] font-bold">
        Join the ADHD Newsletter
      </div>
      <div className="pt-12 text-lg lg:px-96 md:px-16">
        Every Single Day, you'll receive a{" "}
        <span className="font-bold">2-minute email</span> containing practical
        tips, stories, and examples of how to better manage your ADHD ,
        completely free.
      </div>
      <div className="pt-4 flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter First Name"
          className="border border-gray-400 p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="border border-gray-400 p-2 rounded-md"
        />
        <button className="border-none px-4 py-3 bg-purple-600 text-white rounded-lg mt-2">
          Join Email List.
        </button>
        <div className="pt-4 font-bold font-italic">
          No Spam. Unsubscribe in one click.
        </div>
      </div>
      <hr className="mt-8 w-full border-t border-gray-400" />
    </div>
  );
}
