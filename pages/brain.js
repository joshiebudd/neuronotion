import React from "react";
import HeaderSection from "../pages/mypage/Header";
import CommunitySection from "../components/CommunitySection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection/FAQSection";
import FinalCTA from "../components/FinalCTASection";
import FooterSection from "../components/FooterSection";

const ADHDBrain = () => {
  return (
    <>
      <HeaderSection />
      <div className="mt-32 lg:px-0 px-8">
        <div className="mx-auto flex flex-col items-center">
          <h1 className="text-center font-bold text-2xl lg:text-[60px]">
            HERO TITLE
          </h1>
          <p className="text-center font-semibold text-xl lg:text-[20px] pt-4">
            Sub Heading
          </p>
          <button className="border-none px-4 py-3 bg-purple-600 w-max text-white rounded-lg mt-2">
            Get Ultimate ADHD Brain
          </button>
          <div className="flex mt-2">
            <div className="flex">
              <div className="rounded-full border-2 max-w-10 max-h-10 min-w-10 min-h-10 -mx-1 bg-white"></div>
              <div className="rounded-full border-2 max-w-10 max-h-10 min-w-10 min-h-10 -mx-1 bg-white"></div>
              <div className="rounded-full border-2 max-w-10 max-h-10 min-w-10 min-h-10 -mx-1 bg-white"></div>
              <div className="rounded-full border-2 max-w-10 max-h-10 min-w-10 min-h-10 -mx-1 bg-white"></div>
              <div className="rounded-full border-2 max-w-10 max-h-10 min-w-10 min-h-10 -mx-1 bg-white"></div>
            </div>
            <div className="flex flex-col">
              <span>⭐⭐⭐⭐⭐</span>
              <span>4.9/5 from other ADHDers.</span>
            </div>
          </div>
        </div>

        <div className="lg:px-0 px-8 mx-auto max-w-screen-xl pt-4 pb-2 text-center lg:px-12">
          <div className="centered-image max-w-full sm:max-w-[950px] sm:pt-2 pb-4">
            <img
              style={{ width: "100%" }}
              loading="eager"
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/mainDemoNew.webp"
              alt="template"
              width={1920}
              height={1280}
              priority={1}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-evenly">
        <div className="flex flex-col text-sm items-center">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="max-w-56">
            TESTIMONIAL: I LOVE THIS PRODUCT ITS SO GOOD FOR XYZ.
          </span>
          <div className="rounded-full border-2 max-w-16 max-h-16 min-w-16 min-h-16 -mx-1 bg-white"></div>
          <span className="font-bold">name</span>
          <span>Occupation/other details</span>
        </div>
        <div className="flex flex-col text-sm items-center">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="max-w-56">
            TESTIMONIAL: I LOVE THIS PRODUCT ITS SO GOOD FOR XYZ.
          </span>
          <div className="rounded-full border-2 max-w-16 max-h-16 min-w-16 min-h-16 -mx-1 bg-white"></div>
          <span className="font-bold">name</span>
          <span>Occupation/other details</span>
        </div>
      </div>

      <hr className="mt-10" />
      <div className="pt-10 lg:px-0 px-8">
        <h1 className="text-center font-bold text-2xl lg:text-[40px]">
          All ADHDers have these problems:
        </h1>
        <p className="pt-4 text-center text-lg">
          As a team of ADHDers ourselves, we've been here before...
        </p>
        <div className="pt-4 flex justify-evenly">
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 max-w-20 max-h-20 min-w-20 min-h-20 -mx-1 bg-white"></div>
            <p className="font-bold pt-4 text-center">Brain is Overwhelmed</p>
            <p className="max-w-72 text-center ">
              Too much to remember, too many things to keep on top of, not
              enough time or energy to do it all.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 max-w-20 max-h-20 min-w-20 min-h-20 -mx-1 bg-white"></div>
            <p className="font-bold  text-center pt-4">Brain is Overwhelmed</p>
            <p className="max-w-72  text-center ">
              Too much to remember, too many things to keep on top of, not
              enough time or energy to do it all.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 max-w-20 max-h-20 min-w-20 min-h-20 -mx-1 bg-white"></div>
            <p className="font-bold  text-center pt-4">Brain is Overwhelmed</p>
            <p className="max-w-72  text-center ">
              Too much to remember, too many things to keep on top of, not
              enough time or energy to do it all.
            </p>
          </div>
        </div>
        <hr className="mt-10" />
      </div>

      <div className="pt-10 lg:px-0 px-8 ">
        <h1 className="text-center font-bold text-2xl lg:text-[40px]">
          But it doesn't have to be like that:
        </h1>
        <p className="text-center text-lg">
          With the Ultimate ADHD brain, all you have to do is brain dump, and
          the system handles the rest for you.
        </p>
        <div className="flex justify-evenly pt-4">
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 max-w-20 max-h-20 min-w-20 min-h-20 -mx-1 bg-white"></div>
            <p className="font-bold pt-4 text-center ">Brain is Overwhelmed</p>
            <p className="max-w-72  text-center ">
              Too much to remember, too many things to keep on top of, not
              enough time or energy to do it all.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 max-w-20 max-h-20 min-w-20 min-h-20 -mx-1 bg-white"></div>
            <p className="font-bold pt-4 text-center ">Brain is Overwhelmed</p>
            <p className="max-w-72  text-center ">
              Too much to remember, too many things to keep on top of, not
              enough time or energy to do it all.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 max-w-20 max-h-20 min-w-20 min-h-20 -mx-1 bg-white"></div>
            <p className="font-bold pt-4 text-center ">Brain is Overwhelmed</p>
            <p className="max-w-72  text-center ">
              Too much to remember, too many things to keep on top of, not
              enough time or energy to do it all.
            </p>
          </div>
        </div>
        <hr className="mt-10" />
      </div>

      <div className="lg:px-0 px-8 pt-10">
        <h1 className="text-center  font-bold text-2xl lg:text-[40px]">
          Transform your chaos into clarity:
        </h1>
        <p className="text-center text-lg">in just a few clicks</p>
        <div className="bg-gray-200 rounded-sm flex items-center justify-center lg:mx-60 aspect-video ">
          <div className="bg-gray-500 rounded-full max-w-24 max-h-24 min-h-24 min-w-24"></div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col text-sm pt-4 items-center">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="max-w-56">
              TESTIMONIAL: I LOVE THIS PRODUCT ITS SO GOOD FOR XYZ.
            </span>
            <div className="rounded-full border-2 max-w-16 max-h-16 min-w-16 min-h-16 -mx-1 bg-white"></div>
            <span className="font-bold">name</span>
            <span>Occupation/other details</span>
          </div>
        </div>
        <hr className="mt-10" />
      </div>

      <div className="pt-10">
        <div className="w-max mx-auto">
          <h1 className="text-center font-bold text-xl lg:text-[40px]">
            Everything, in ONE place.
          </h1>
          <div className="flex pt-4 flex-col">
            <label>
              <input type="checkbox" />
              <span>Checkbox</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Checkbox</span>
            </label>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="flex flex-col text-sm items-center pt-4">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="max-w-56 pt-4">
              TESTIMONIAL: I LOVE THIS PRODUCT ITS SO GOOD FOR XYZ.
            </span>
            <div className="rounded-full border-2 max-w-16 max-h-16 min-w-16 min-h-16 -mx-1 bg-white"></div>
            <span className="font-bold">name</span>
            <span>Occupation/other details</span>
          </div>
        </div>
        <hr className="mt-10" />
      </div>

      <div className="lg:px-0 px-8">
        <h1 className="font-bold text-2xl lg:text-[30px] text-center mt-10">
          Your perfect system, in just 10 minutes
        </h1>
        <div className="flex space-x-4 lg:mx-auto lg:w-2/3">
          <div className="flex flex-col items-center lg:pt-4 lg:space-y-4">
            <span className="font-bold text-2xl lg:text-[60px]">1</span>
            <span className="font-bold text-xl lg:text-[30px]">Duplicate</span>
            <p className="text-center">
              Checkout, Access via email, and Duplicate to your Notion space.
            </p>
          </div>
          <div className="flex flex-col items-center lg:pt-4 lg:space-y-4">
            <span className="font-bold text-2xl lg:text-[60px]">1</span>
            <span className="font-bold text-xl lg:text-[30px]">Duplicate</span>
            <p className="text-center">
              Checkout, Access via email, and Duplicate to your Notion space.
            </p>
          </div>
          <div className="flex flex-col items-center lg:pt-4 lg:space-y-4">
            <span className="font-bold text-2xl lg:text-[60px]">1</span>
            <span className="font-bold text-xl lg:text-[30px]">Duplicate</span>
            <p className="text-center">
              Checkout, Access via email, and Duplicate to your Notion space.
            </p>
          </div>
        </div>
        <hr className="mt-10" />
      </div>

      <CommunitySection />
      <PricingSection />
      <FAQSection />

      <div>
        <p className="text-center">
          Still have questions? Send me an email <b>josh@neuro-notion.com</b>
        </p>
      </div>

      <FinalCTA />
      <FooterSection />
    </>
  );
};
export default ADHDBrain;
