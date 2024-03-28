import React, { useState } from "react";
import Image from "next/image";
import FunnelCopy from "./FunnelCopyAlpha";

const CourseFormAlpha = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onGetAccessClicked = () => {
    window.location.href = "https://buy.stripe.com/6oE5mvdLVcRk3vicN3";
    track("Course_Checkout");
  };

  return (
    <section className="bg-gray-100 pt-24 sm:pt-32">
      <div className="text-center px-4">
        <div className="flex justify-center">
          <h2 className="md:max-w-[600px] text-2xl md:text-4xl leading-6 text-center">
            <span className="font-extrabold">[</span>
            <span className="font-extrabold text-red-700">NEW</span>
            <span className="font-extrabold">]</span>{" "}
            <span className="font-bold text-black">
              Discover the System that Helps ADHDers to Switch into Focus in 2-6 Minutes
              Whenever They Need to Study
            </span>
          </h2>
        </div>
        <h3 className="font-bold text-center mt-4">**Plus: Free focus tool. (NO EMAIL REQUIRED)</h3>
        <div className="timer-widget flex justify-center height-auto pt-6 pb-12">
          <Image
            className="md:w-[50%] w-[80%]"
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/ipaddemo.webp"
            alt="templateipad"
            width={800}
            height={566}
            priority={1}
          />
        </div>
        <FunnelCopy />
        <div>
          <div className="sign-form sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-2">
              <div>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    autoComplete="email"
                    placeholder="Enter Name"
                    required
                    className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2 mb-4">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    autoComplete="email"
                    required
                    className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex w-80 justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-8"
                  onClick={() => {
                    onGetAccessClicked();
                    track("Course_Checkout");
                  }}
                >
                  Yes to a lasting productivity solution!
                </button>
              </div>
            </div>
          </div>
          <p className="text-left">
            PS: When you sign up for the guide, you will also get a link to set up
            the timer and audio player tool gift promised in the video above in your
            email. There will also be special tips on how to maximise the tool. So
            no need to get it from here.
          </p>
          <br />
          <p className="text-left">If you missed it above, here&apos;s the form again to get the productivity system guide:</p>
          <div className="sign-form sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-2">
              <div>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    autoComplete="email"
                    placeholder="Enter Name"
                    required
                    className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2 mb-4">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    autoComplete="email"
                    required
                    className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex w-80 justify-center rounded-md bg-sky-800 px-3 py-1.5 mb-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                onGetAccessClicked();
                track("Course_Checkout");
              }}
            >
              Only $2 to get organised? Yes please!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFormAlpha;