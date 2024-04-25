import React from "react";
import Image from "next/image";
import CalendarIcon from "./Common/Icons/CalendarIcon";
import BrainIcon from "./Common/Icons/BrainIcon";
import TutorialIcon from "./Common/Icons/TutorialIcon";
import MigrationIcon from "./Common/Icons/MigrationIcon";
import BrushIcon from "./Common/Icons/BrushIcon";
import FolderIcon from "./Common/Icons/FolderIcon";

const FeaturesSection = () => {
  const handleButtonClick = (e) => {
    logFeaturesBuyNowEvent(); // Log the FeaturesBuyNowClick event
  };

  const logFeaturesBuyNowEvent = () => {
    // Log event to Facebook Pixel for Features Buy Now click
    fbq("trackCustom", "FeaturesBuyNowClick");
  };

  return (
    <section
      id="features"
      className="pt-12 bg-white features_section mb-0 pb-8">
      <div className="sm:pb-20 px-4">
      <div className="pb-8 sm:pb-0 px-8 mx-auto max-w-screen-xl sm:pt-4 lg:px-12">
        <div className="max-w-screen-md mx-auto text-center mb-1 mt-2">
          <div className="inline-block px-3 py-1 mb-6 bg-blue-300 rounded-full text-xs text-grey-950 font-baloo font-semibold">
            Features
            </div>
            <div className="text-4xl text-left sm:text-center font-baloo font-bold text-gray-800">
            Finally...
            <span className="from-blue-400 to-blue-700 bg-gradient-to-tr bg-clip-text text-transparent">
              <br />One home for everything </span>🏠
            </div>
            <p className="mt-6 text-left sm:text-center max-w-md mx-auto font-baloo text-gray-900 pb-8 text-lg">
              The all-in-one system your brain has been crying out for. No more juggling 15 tabs, no more distractions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Task Card 1 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md shadow-gray-300 flex flex-col items-center">
              <div className="flex-shrink-0">
                <CalendarIcon color="#ef4444" />
              </div>
              <div className="pt-5 text-lg font-baloo font-semibold text-gray-900">
                Super Easy Organisation
              </div>
              <p className="pt-1 font-baloo text-gray-700 text-center">
                No more distractions. Set tasks, reminders, deadlines, schedules
                all in one place.
              </p>
            </div>

            {/* Task Card 2 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md shadow-gray-300 flex flex-col items-center">
              <div className="flex-shrink-0">
                <BrainIcon color="#16a34a" />
              </div>
              <div className="pt-5 text-lg font-baloo font-semibold text-gray-900">
                AI Generation Tools
              </div>
              <p className="pt-1 font-baloo text-gray-700 text-center">
                Transform notes into essay plans, summarise lecture topics, and
                more with Notion AI!
              </p>
            </div>

            {/* Task Card 3 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md shadow-gray-300 flex flex-col items-center">
              <div className="flex-shrink-0">
                <TutorialIcon color="#0284c7" />
              </div>
              <div className="pt-5 text-lg font-baloo font-semibold text-gray-900">
                Clear and Simple Tutorials
              </div>
              <p className="pt-1 font-baloo text-gray-700 text-center">
                {" "}
                Notion beginners can ease into this system with full how-to
                videos on every page.
              </p>
            </div>

            {/* Task Card 4 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md shadow-gray-300 flex flex-col items-center">
              <div className="flex-shrink-0">
                <BrushIcon color="#4f46e5" />
              </div>
              <div className="pt-5 text-lg font-baloo font-semibold text-gray-900">
                Make it Your Own
              </div>
              <p className="pt-1 font-baloo text-gray-700 text-center">
                In Notion, customization is easy. Change colors, icons, and
                layout however you like!
              </p>
            </div>

            {/* Task Card 5 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md shadow-gray-300 flex flex-col items-center">
              <div className="flex-shrink-0">
                <MigrationIcon color="#c026d3" />
              </div>
              <div className="pt-5 text-lg font-baloo font-semibold text-gray-900">
                Seamless Migration
              </div>
              <p className="pt-1 font-baloo text-gray-700 text-center">
                Moving from another platform is as easy as 1,2, CTRL + V ...
                Just Copy, Paste, and Go!
              </p>
            </div>

            {/* Task Card 6 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md shadow-gray-300 flex flex-col items-center">
              <div className="flex-shrink-0">
                <FolderIcon color="#e11d48" />
              </div>
              <div className="pt-5 text-lg font-baloo font-semibold text-gray-900">
                Everything in one place
              </div>
              <p className="pt-1 font-baloo text-gray-700 text-center">
                Flashcards, Revision Notes, Essay plans, and Extra Reading - all
                just one click away.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4 sm:mt-[-40px]">
          <a
            href="#pricing"
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 mb-2 rounded-lg px-5 py-3 text-lg font-baloo font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Get for Free.
          </a>
        </div>
    </section>
  );
};

export default FeaturesSection;