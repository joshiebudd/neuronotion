import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
const CourseFormAlpha = () => {
  const onGetAccessClicked = () => {
    window.location.href = "https://buy.stripe.com/6oE5mvdLVcRk3vicN3";
  };
  return (
    <section className="bg-gray-100 pt-24 sm:pt-32">
      <div className="text-center px-4">
        <div className=" flex justify-center">
          <h2 className="md:max-w-[600px]  text-2xl md:text-4xl  font-bold leading-6 text-center ">
          Make ADHD your Superpower with a Study Focus System.
          </h2>
        </div>
        <div className="my-1 md:my-3 pb-8">
          <p className="text-center text-8 text-center leading-10 text-gray-700">
            SUBHEADING
          </p>
        </div>
        <div className="timer-widget flex justify-center height-auto pt-4 pb-16">
          <Image
            className="md:w-[50%] w-[80%]"
            loading="eager"
            src="https://neuronotionpullzonw.b-cdn.net/longsquare.mp4"
            alt="mainlongvideo"
            width={800} // Set the width of the image (you can adjust as needed)
            height={566} // Set the height of the image (adjust for the aspect ratio of your image)
            priority={1}
          />
        </div>
        <div className="sign-form sm:mx-auto sm:w-full sm:max-w-sm">
          <div class="space-y-2">
            <div>
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  required
                  class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                class="flex w-80 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onGetAccessClicked}
              >
                Get Access to Course: $1.99
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseFormAlpha;
