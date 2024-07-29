import React from "react";

const UBFirstTestimonials = () => {
  const testimonials = [
    { name: "name", occupation: "Occupation/other details", text: "TESTIMONIAL: I LOVE THIS PRODUCT ITS SO GOOD FOR XYZ." },
    { name: "name", occupation: "Occupation/other details", text: "TESTIMONIAL: I LOVE THIS PRODUCT ITS SO GOOD FOR XYZ." },
  ];

  return (
    <div className="flex justify-evenly py-4 bg-white">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-md">
          <span className="text-4xl text-accent4">★★★★★</span>
          <span className="text-gray-700 font-cg font-normal mb-4">{testimonial.text}</span>
          <div className="rounded-full border-2 w-16 h-16 bg-white flex items-center justify-center mb-2">
            {/* Placeholder for image or initials */}
          </div>
          <span className="font-pop font-bold text-prim">{testimonial.name}</span>
          <span className="text-gray-500 font-cg">{testimonial.occupation}</span>
        </div>
      ))}
    </div>
  );
};

export default UBFirstTestimonials;