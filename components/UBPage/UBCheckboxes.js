import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const UBCheckboxes = () => {
  const [checked, setChecked] = useState(new Array(6).fill(false));
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const checkboxLabels = [
    "ADHD Routine and Habit Tracker",
    "ADHD Mental Health Tracker (Journals and Mood Logs)",
    "ADHD Goal Setter and Tracker",
    "ADHD To-Do List",
    "ADHD Brain Dump System (w/ automatic organisation)",
    "AND SO MUCH MORE!"
  ];

  const handleCheckboxChange = (index) => {
    const updatedChecked = checked.map((item, idx) => (idx === index ? !item : item));
    setChecked(updatedChecked);
  };

  useEffect(() => {
    if (checked.every((item) => item)) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, [checked]);

  return (
    <div className="pt-10 bg-white text-center relative">
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="max-w-5xl mx-auto py-8">
        <h1 className="font-prim font-bold text-3xl lg:text-[40px] text-prim">
          Everything, in ONE place.
        </h1>
        <div className="flex flex-col items-start pt-8 max-w-2xl mx-auto">
          {checkboxLabels.map((label, index) => (
            <label key={index} className="flex items-center mb-4 text-xl font-prim text-sec">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-sec transition duration-150 ease-in-out mr-2"
                style={{ accentColor: 'lightblue' }}
                checked={checked[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex justify-center items-center space-x-8">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center text-center max-w-md w-full">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
              <span className="text-4xl text-accent4 mb-4">★★★★★</span>
              <div className="flex-grow flex items-center justify-center">
                <span className="text-gray-700 font-cg font-normal">
<b>                  I am usually very picky with templates as they tend to overwhelm me. But this one is just perfect. It has a super clean design and only has genuinely useful things.
</b>                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="rounded-full border-2 w-16 h-16 bg-white flex items-center justify-center mb-2 mx-auto overflow-hidden">
                <img
                  src="https://NeuroNotionPullZonw.b-cdn.net/Avatars/saam.webp"
                  alt="Anonymous"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-pop font-bold text-prim block">
                Saam Sadeghian
              </span>
              <span className="text-gray-500 font-cg block">
                Founder @ Rocket Crypto <br /> and ADHD Advocate
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col items-center text-center max-w-md w-full">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
              <span className="text-4xl text-accent4 mb-4">★★★★★</span>
              <div className="flex-grow flex items-center justify-center">
                <span className="text-gray-700 font-cg font-normal">
                  <b>This template has made it so much easier to get out of my head when I get over/understimulated or I have a meltdown. Thank you!!!</b>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="rounded-full border-2 w-16 h-16 bg-white flex items-center justify-center mb-2 mx-auto overflow-hidden">
                <img
                  src="https://NeuroNotionPullZonw.b-cdn.net/Avatars/tav.webp"
                  alt="Anonymous"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-pop font-bold text-prim block">
                Travis Munter
              </span>
              <span className="text-gray-500 font-cg block">
                Head of HR @ FluidStack
                <br /> and ADHD Advocate
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute text-left top-60 right-1/3 bg-accent3 text-prim font-pop font-semibold py-2 px-4 rounded-lg shadow-lg text-sm">
        <b>PSSSTT</b>... tick all the boxes <br /> for an<b> easter egg🥚</b>
      </div>
    </div>
  );
};

export default UBCheckboxes;
