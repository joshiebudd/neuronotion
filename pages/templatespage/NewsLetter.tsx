import React, { useState } from "react";

export default function ADHDNewsletterSignup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted:", { firstName, email });
    // Reset form fields
    setFirstName("");
    setEmail("");
  };

  return (
    <div className="md:p-16 p-8 flex flex-col items-center justify-center max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Join the ADHD Newsletter
      </h2>
      <p className="mt-8 text-lg text-center">
        Every Single Day, you&apos;ll receive a{" "}
        <span className="font-bold">2-minute email</span> containing practical
        tips, stories, and examples of how to better manage your ADHD,
        completely free.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-4">
        <input
          type="text"
          placeholder="Enter First Name"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
        >
          Join Email List
        </button>
        <p className="text-sm text-center font-semibold italic">
          No Spam. Unsubscribe in one click.
        </p>
      </form>
      <hr className="mt-12 w-full border-t border-gray-300" />
    </div>
  );
}