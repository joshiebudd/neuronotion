import React from "react";

const NewsLetter = () => {
  const handleButtonClick = () => {
    window.location.href = "https://magic.beehiiv.com/v1/688915fa-72cc-473f-8e55-576a784dc419";
  };

  return (
    <section className="py-16 bg-prim">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10">
          <span className="bg-accent7 text-prim p-2 font-prim font-bold rounded-xl text-xs shadow-gray-600 shadow-md">
          ↓ Join Now ↓
          </span>
        </div>
        <h2 className="text-4xl font-pop font-bold text-gray-50 mb-4">Join the ADHD Newsletter</h2>
        <p className="text-lg text-gray-50 font-pop lg:px-48 md:px-16 mb-8">
          Every Single Day, you&apos;ll receive a{" "}
          <span className="font-bold">2-minute email</span> containing practical
          tips, stories, and examples of how to better manage your ADHD, completely free.
        </p>
        <div className="flex flex-col items-center space-y-4 mb-8 font-cg font-italic">
          <button 
            onClick={handleButtonClick}
            className="bg-sec text-prim py-3 px-6 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-accent3 hover:text-prim transition-colors duration-300">
            Join the Newsletter
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
