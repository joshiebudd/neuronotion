import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: 'Ive given into (and given up on) countless self-help tools purportedly meant for ADHD folk. But no matter how hard Id try, I could never make them work for me. Ultimately, I think they all fail to understand that the ways in which ADHD brains tick are just as diverse as the ADHDers themselves. The Ultimate ADHD Brain, by contrast, truly understands this: The tool does all the hard work for you; all you have to do is use it as you wish, again and again.',
    name: 'Ryan Carteret',
    position: 'Student',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/Ryan.webp'
  },
  {
    text: 'I love the product; the fact that I can easily input things within a second saves time and helps me remember. Its really good for mobile users as well, and Ive had no trouble navigating through pages.',
    name: 'Ayush Wadhwani',
    position: 'UI Designer',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/ayush.webp'
  },
  {
    text: 'My son and I both love this template. Josh has done an amazing job of pulling together some of the latest understandings of ADHD brain science and put it into a user-friendly format',
    name: 'Michelle Wiethoff',
    position: 'Consultant/Home Educator',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/michelle.jpg'
  },
  {
    text: 'It helped me document and organise my thoughts and life. It provides 360 degree ADHD management and a way to keep myself accountable and sustain good habits',
    name: 'Samuel Ola',
    position: 'Founder of Nestwork',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/samuel.webp'
  },
  {
    text: 'It has the structure that I need and struggle coming up with it myself. This helps me to keep on track with my tasks, projects and goals.',
    name: 'Anonymous',
    position: 'Teacher',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/anonymous.webp'
  },
  {
    text: 'It helps me sort out all the junk in my brain to sort, prioritize, and understand every part of your brain and life. LOVE IT!',
    name: 'Ramona Burke',
    position: 'Social Worker',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/ramona.webp'
  },
  {
    text: 'This template is thorough, clean, and very user friendly. There are short and sweet embedded video tutorials for a quick overview of each page, and one of my favourite parts is the synced blocked sidebar that links everything together. Its a to-do list, habit tracker, and mental health aid all rolled into one, with extra features such as meal planning and finance tracking. Im also really impressed by the specific connections and explanations to help support users with ADHD!',
    name: 'Ethan Greenberg',
    position: 'Unknown',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/ethan.webp'
  },
  {
    text: 'Just moved to a new state and started a new job and this template makes it easy to stay on top of everything I need to do.',
    name: 'Parker James',
    position: 'Unknown',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/parker.webp'
  },
  {
    text: 'Ngl I am impressed. I am usually very picky with templates as they tend to have too many pages and overwhelm me. This one, however, has just the right amount of functions and properties. The template looks clean, it does not have useless buttons, pictures, or pages. I love the way the to-do is designed. My favourite thing, however, is the "Anti-ADHD Rut Protocol", having all of that written down with a checklist just makes it so much easier to get out of my head when I get over/understimulated or I have a meltdown. The only thing I didnt like were the emojis on the buttons/pages, but thats very easy to fix and personalize so I wouldnt say its a defect but rather a personal choice. Overall, great job!',
    name: 'Anonymous',
    position: 'Unknown',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/anonymous.webp'
  },
  {
    text: 'This is an extremely well thought out template. I love the instructional videos that guide you through the template, and I love that everything is set up in a very organized, uncluttered way. I would have saved myself hours of attempting to organize my life if Id started out with this template on Notion! Definitely ADHD friendly. Very impressed.',
    name: 'Sweet Bee',
    position: 'Unknown',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/sweetbee.webp'
  },
  {
    text: 'This is so worth the investment. You are not just getting a template, you are also getting step by step videos and resources!! This is great.',
    name: 'Kristen Moura',
    position: 'Unknown',
    avatar: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/kristen.webp'
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const previewLength = 200; // Maximum number of characters to show before "see more"

  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if window is defined
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const toggleExpand = (index) => {
    setExpandedTestimonials((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const cardsToShow = windowWidth < 768 ? 1 : 5; // 1 card on mobile, 5 cards on larger screens
  const totalCards = testimonials.length;
  const visibleTestimonials = testimonials.concat(testimonials); // Duplicate the testimonials list

  return (
    <div className="bg-prim text-white p-8 md:p-16 custom-rounded-t">
      <h2 className="text-3xl md:text-4xl font-pop font-bold text-sec mb-8 text-center">The Wall of Love ❤️</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full md:w-1/${cardsToShow} flex-shrink-0 px-2`}
              style={{ flex: `0 0 ${100 / cardsToShow}%` }}
            >
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-full flex flex-col">
                <div className="text-2xl mb-2 w-full flex justify-center">
                  <span className="mt-0 mb-0 text-3xl leading-none text-accent6">★★★★★</span>
                </div>
                <p className="mb-4 text-sm flex-grow">
                  {expandedTestimonials[index % totalCards]
                    ? testimonial.text
                    : `${testimonial.text.substring(0, previewLength)}${
                        testimonial.text.length > previewLength ? '...' : ''
                      }`}
                </p>
                {testimonial.text.length > previewLength && (
                  <button
                    onClick={() => toggleExpand(index % totalCards)}
                    className="text-gray-400 font-pop text-xs"
                  >
                    {expandedTestimonials[index % totalCards] ? 'Show less' : 'See more...'}
                  </button>
                )}
                <div className="mt-auto">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <p className="font-pop font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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