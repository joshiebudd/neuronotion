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
      <p className="font-cg text-md text-gray-700">Insert a testimonial here</p>
      <hr className="mt-10 border-gray-300" />
      <div className="absolute text-left top-60 right-1/3 bg-accent3 text-prim font-pop font-semibold py-2 px-4 rounded-lg shadow-lg text-sm">
        <b>PSSSTT</b>... tick all the boxes <br /> for an<b> easter egg🥚</b>
      </div>
    </div>
  );
};

export default UBCheckboxes;
