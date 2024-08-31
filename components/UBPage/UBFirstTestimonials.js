import React from "react";

const UBFirstTestimonials = () => {
  const testimonials = [
    {
      name: "Ian Tenenbaum",
      occupation: "Founder of Accountable.live",
      text: "Hands down the best EVER Notion template for ADHD!",
      image: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/ian.webp"
    },
    {
      name: "Josh Ames",
      occupation: "Entrepreneur",
      text: "Saved myself 100s of hours. Extremely ADHD Friendly. So impressive!",
      image: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/joshames2.webp"
    },
  ];

  return (
    <div className="flex justify-center bg-white">
      <div className="w-full max-w-screen-xl px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-evenly items-start">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-md w-full lg:w-1/2 mb-14 lg:mb-0">
              <div className="flex flex-col items-center">
                <div className="rounded-full border-2 w-16 h-16 bg-white flex items-center justify-center mb-2 overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-pop font-bold text-prim block">
                  {testimonial.name}
                </span>
                <span className="text-gray-500 font-cg block mb-2">
                  {testimonial.occupation}
                </span>
                <span className="text-2xl text-accent4 mb-2">⭐⭐⭐⭐⭐</span>
                <div className="flex-grow flex items-center justify-center">
                  <span className="text-gray-700 font-cg font-normal">
                    {testimonial.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UBFirstTestimonials;
