import React, { useState } from "react";

const CourseFormBeta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onGetAccessClicked = () => {
    window.location.href = "https://buy.stripe.com/6oE5mvdLVcRk3vicN3";
    track("Course_Checkout");
  };

  return (
    <div>
      <div className="sign-form sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="space-y-2">
          <div>
            <div class="mt-2">
              <input
                id="name"
                name="name"
                autocomplete="email"
                placeholder="Enter Name"
                required
                class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <div class="mt-2 mb-4">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email Address"
                autocomplete="email"
                required
                class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              class="flex w-80 justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-8"
              onClick={() => {
                onGetAccessClicked();
                track("Course_Checkout");
              }}
            >
              I want a lasting productivity solution!
            </button>
          </div>
        </div>
      </div>
      <p>
        PS: When you sign up for the guide, you will also get a link to set up
        the timer and audio player tool gift promised in the video above in your
        email. There will also be special tips on how to maximise the tool. So
        no need to get it from here.
      </p>
      <br />
      <p>If you missed it above, here&apos;s the form again to get the productivity system guide:</p>
      <div className="sign-form sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="space-y-2">
          <div>
            <div class="mt-2">
              <input
                id="name"
                name="name"
                autocomplete="email"
                placeholder="Enter Name"
                required
                class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <div class="mt-2 mb-4">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email Address"
                autocomplete="email"
                required
                class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <button
          type="submit"
          className="flex w-80 justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            onGetAccessClicked();
            track("Course_Checkout");
          }}
        >
          Only $2 to get organised? Yes please!
        </button>
      </div>
    </div>
  );
};

export default CourseFormBeta;