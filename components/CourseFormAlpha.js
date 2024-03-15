import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
const CourseFormAlpha = () => {
  const onGetAccessClicked = () => {
    window.location.href = "http://www.stripe.com";
  };
  return (
    <section className="bg-gray-100 pt-24 sm:pt-32">
      <div className="text-center px-4">
        <div className=" flex justify-center">
          <h2 className="md:max-w-[600px]  text-xl md:text-4xl  font-bold leading-5 text-center ">
            LEARN HOW TO BUILD YOUR PERFECT PRODUCTIVITY SYSTEM.
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
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/maindemo.webp"
            alt="template"
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
        <div className="pt-3 flex justify-center pb-16">
          <p className="max-w-[500px] text-left italic leading-5 text-gray-700">
            'by clicking the button above, you are consenting to receive emails
            from us. you can opt out of this immediately but it is required for
            delivery.'
          </p>
        </div>
      </div>
    </section>
  );
};
export default CourseFormAlpha;