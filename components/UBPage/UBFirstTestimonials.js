import React from "react";

const UBFirstTestimonials = () => {
  const testimonials = [
    { name: "name", occupation: "Occupation/other details", text: "TESTIMONIAL: I LOVE THIS PRODUCT ITS SO GOOD FOR XYZ." },
    { name: "name", occupation: "Occupation/other details", text: "TESTIMONIAL: I LOVE THIS PRODUCT ITS SO GOOD FOR XYZ." },
  ];

  return (
    <div className="flex justify-evenly">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-col text-sm items-center">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="max-w-56">{testimonial.text}</span>
          <div className="rounded-full border-2 max-w-16 max-h-16 min-w-16 min-h-16 -mx-1 bg-white"></div>
          <span className="font-bold">{testimonial.name}</span>
          <span>{testimonial.occupation}</span>
        </div>
      ))}
    </div>
  );
};

export default UBFirstTestimonials;
