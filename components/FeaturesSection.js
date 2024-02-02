import React from "react";
import Image from "next/image";
import CalendarIcon from "./Common/Icons/CalendarIcon";
import BrainIcon from "./Common/Icons/BrainIcon";
import TutorialIcon from "./Common/Icons/TutorialIcon";
import MigrationIcon from "./Common/Icons/MigrationIcon";
import BrushIcon from "./Common/Icons/BrushIcon";
import FolderIcon from "./Common/Icons/FolderIcon";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="pt-24 bg-gray-100 features_section mb-0 pb-16"
    >
      <div className="sm:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl leading-10 font-bold text-gray-900">
              Finally, one home 🏠
              <br /> for everything! 
            </h2>
            <p className="mt-8 max-w-md mx-auto text-base text-gray-900 pb-8 text-xl">
              The all-in-one system your brain has been crying out for. No more
              juggling 15 tabs, no more distractions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Task Card 1 */}
            <div className="p-7 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <CalendarIcon color="#ef4444" />
              </div>
              <div className="pt-5 text-lg font-semibold text-black">
                Seamless Organisation
              </div>
              <p className="pt-1 text-gray-700 text-center">
                No more distractions. Set tasks, reminders, deadlines, schedules
                all in one place.
              </p>
            </div>

            {/* Task Card 2 */}
            <div className="p-7 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <BrainIcon color="#16a34a" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">
                Built-in AI
              </div>
              <p className="pt-1 text-gray-700 text-center">
                Transform notes into essay plans, summarise lecture topics, and
                more with Notion AI!
              </p>
            </div>

            {/* Task Card 3 */}
            <div className="p-7 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <TutorialIcon color="#0284c7" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">
                Easy Tutorials
              </div>
              <p className="pt-1 text-gray-700 text-center">
                {" "}
                Notion beginners can ease into this system with full how-to
                videos on every page.
              </p>
            </div>

            {/* Task Card 4 */}
            <div className="p-7 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <BrushIcon color="#4f46e5" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">
                Full Customization
              </div>
              <p className="pt-1 text-gray-700 text-center">
                Like Notion, customization is easy. Change colors, icons, and
                layout however you like!
              </p>
            </div>

            {/* Task Card 5 */}
            <div className="p-7 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <MigrationIcon color="#c026d3" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">
                Easy Migration
              </div>
              <p className="pt-1 text-gray-700 text-center">
                Moving from another platform is as easy as 1,2, CTRL + V ...
                Just Copy, Paste, and Go!
              </p>
            </div>

            {/* Task Card 6 */}
            <div className="p-7 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <FolderIcon color="#e11d48" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">
                Centralized Storage
              </div>
              <p className="pt-1 text-gray-700 text-center">
                Revision Notes, Flashcards, Essay plans, and Extra Reading - all
                just one click away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
