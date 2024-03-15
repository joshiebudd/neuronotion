import React, { useState } from "react";

const CourseFormBeta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onGetAccessClicked = () => {
    window.location.href = "http://www.stripe.com";
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
            <div class="mt-2">
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
              class="flex w-80 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onGetAccessClicked}
            >
              Get Access to Course: $1.99
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseFormBeta;
