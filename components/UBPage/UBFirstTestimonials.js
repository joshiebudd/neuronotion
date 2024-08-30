import React from "react";

const UBFirstTestimonials = () => {
  const testimonials = [
    {
      name: "Ian Tenenbaum",
      occupation: "Founder of Accountable.live",
      text: "Hands down the best EVER template for ADHD!",
      image: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/ian.webp"
    },
    {
      name: "Josh Ames",
      occupation: "Entrepreneur",
      text: "I would have saved myself hours of attempting to organize my life if I'd started out with this template on Notion! Extremely ADHD friendly. So impressive!",
      image: "https://NeuroNotionPullZonw.b-cdn.net/Avatars/joshames2.webp"
    },
  ];

  return (
    <div className="flex justify-evenly items-stretch py-4 bg-white">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-md w-1/2">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
              <span className="text-4xl text-accent4 mb-4">★★★★★</span>
              <div className="flex-grow flex items-center justify-center">
                <span className="text-gray-700 font-cg font-normal">
                  {testimonial.text}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="rounded-full border-2 w-16 h-16 bg-white flex items-center justify-center mb-2 mx-auto overflow-hidden">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-pop font-bold text-prim block">
                {testimonial.name}
              </span>
              <span className="text-gray-500 font-cg block">
                {testimonial.occupation}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UBFirstTestimonials;