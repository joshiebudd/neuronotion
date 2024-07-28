import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    name: 'Gustavo Workman',
    position: 'Head, Product Design'
  },
  {
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    name: 'Casy Camilari',
    position: 'Digital Marketing Director'
  },
  {
    text: 'Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.',
    name: 'Rayna Torff',
    position: 'Lead, Design Systems'
  },
  {
    text: 'This website is the best I have found so far. Firstly it has a huge range of components which are perfectly designed. All of them are responsive in both desktop and mobile version.',
    name: 'Marcus Brown',
    position: 'VP, Operations'
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 5; // Number of cards to show at once

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Loved By Industry Leaders</h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          {Array.from({ length: cardsToShow }).map((_, index) => {
            const testimonialIndex = (currentIndex + index) % testimonials.length;
            const testimonial = testimonials[testimonialIndex];
            return (
              <div
                key={index}
                className="w-1/5 flex-shrink-0 px-2 transition-all duration-300 ease-in-out"
              >
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-full flex flex-col">
                  <div className="text-2xl mb-2 w-full flex justify-center">
                    <span className="mt-0 mb-0 text-3xl leading-none text-blue-400">★★★★★</span>
                  </div>
                  <p className="mb-4 text-sm flex-grow">{testimonial.text}</p>
                  <div className="mt-auto">
                    <div className="flex items-center">
                      <img
                        src={`https://i.pravatar.cc/40?img=${testimonialIndex}`}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={prevTestimonial}
            className="bg-gray-700 p-2 rounded-full mx-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-700 p-2 rounded-full mx-2"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
