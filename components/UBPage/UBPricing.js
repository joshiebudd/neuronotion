import React from "react";
import CheckIcon from "../Common/Icons/CheckIcon";
import CrossIcon from "../Common/Icons/CrossIcon";
import { track } from "@vercel/analytics";

const UBPricing = () => {
  const logBasicPackageEvent = () => {
    track("Buy Basic");
  };

  const logStandardPackageEvent = () => {
    track("Buy Standard");
  };

  const logPremiumPackageEvent = () => {
    track("Buy Premium");
  };

  return (
    <section id="pricing" className="bg-white py-12 sm:py-16">
      <div className="px-4 text-center md:px-52">
        <div className="inline-block px-3 py-1 mb-6 bg-accent1 rounded-full text-xs text-gray-950 font-pop font-semibold">
          Pricing
        </div>
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-2 text-4xl tracking-tight font-prim font-bold text-gray-900">
            One Payment, Unlimited Usage ♾️
          </h2>
          <p className="mb-5 font-cg text-gray-700 text-xl">
            Lifetime access, technical support, no subscription fees.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {/* Pricing Card for Basic */}
          <div className="flex flex-col p-6 pb-12 pt-16 w-80 md:w-72 text-center text-gray-800 bg-gray-100 rounded-3xl border border-gray-200 shadow-xl items-center">
            <h3 className="mb-1 text-3xl font-prim font-semibold">Basic</h3>
            <div className="flex justify-center items-baseline my-2">
              <span className="mr-2 text-5xl font-prim font-semibold">Free</span>
            </div>
            <p className="mt-3 mb-3 font-cg italic text-gray-800 sm:text-lg">
              Lifetime Access Free.
            </p>
            <hr className="w-full border-1 border-gray-500 mb-4" />
            <ul role="list" className="mb-8 space-y-4 text-left h-52">
              <li className="flex">
                <CheckIcon color="rgb(17 24 39)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold italic">
                  All-in-one study system.
                </span>
              </li>
              <li className="flex">
                <CheckIcon color="rgb(17 24 39)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold italic">
                  Built-in focus sounds.
                </span>
              </li>
              <li className="flex">
                <CrossIcon color="rgb(239 68 68)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold italic">
                  Access to community.
                </span>
              </li>
              <li className="flex">
                <CrossIcon color="rgb(239 68 68)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold">Tutorials included.</span>
              </li>
              <li className="flex">
                <CrossIcon color="rgb(239 68 68)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold">Access to updates.</span>
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/dR6aGP8rBg3we9W9AS"
              id="GetBasicButton"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-200 font-prim font-bold rounded-xl text-sm px-5 py-2.5 text-center"
              onClick={logBasicPackageEvent}
            >
              Get Basic
            </a>
          </div>

          {/* Pricing Card for Standard */}
          <div className="relative flex flex-col p-6 pb-12 pt-16 w-80 md:w-72 text-center text-white bg-gray-800 rounded-3xl border border-gray-300 shadow-xl md:mt-0 items-center">
            <div className="absolute top-6 px-1.5 py-0.5 mb-6 bg-accent2 rounded-full text-xs text-gray-950 font-pop font-semibold">
              Most Popular
            </div>
            <h3 className="mb-1 text-3xl font-prim font-semibold text-gray-50">
              Standard
            </h3>
            <div className="flex justify-center items-baseline my-2">
              <span className="text-5xl font-prim font-bold text-white">
                $9.99
              </span>
            </div>
            <p className="mt-3 mb-3 italic text-gray-200 sm:text-lg">
              Pay once. Access Forever.
            </p>
            <hr className="w-full border-1 border-gray-500 mb-4" />
            <ul role="list" className="mb-8 space-y-4 text-left h-52">
              <li className="flex">
                <CheckIcon color="white" size={28} />{" "}
                <span className="ml-2 text-gray-200 font-cg font-semibold italic">
                  All-in-one study system.
                </span>
              </li>
              <li className="flex">
                <CheckIcon color="white" size={28} />{" "}
                <span className="ml-2 text-gray-200 font-cg font-semibold italic">
                  Built-in focus sounds.
                </span>
              </li>
              <li className="flex">
                <CheckIcon color="white" size={28} />{" "}
                <span className="ml-2 text-gray-200 font-cg font-semibold italic">
                  AI-generation tutorials.
                </span>
              </li>
              <li className="flex">
                <CheckIcon color="white" size={28} />{" "}
                <span className="ml-2 text-gray-200 font-cg font-semibold italic">
                  Tutorials included.
                </span>
              </li>
              <li className="flex">
                <CheckIcon color="white" size={28} />{" "}
                <span className="ml-2 text-gray-200 font-cg font-semibold italic">
                  Community & Updates.
                </span>
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/5kAdT18rB5oS4zmbIV"
              id="GetStandardButton"
              className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 mb-2 rounded-lg px-5 py-3 text-lg font-prim font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
              onClick={logStandardPackageEvent}
            >
              Get Standard
            </a>
          </div>

          {/* Pricing Card for Premium */}
          <div className="flex flex-col p-6 pb-12 pt-16 w-80 md:w-72 text-center text-gray-800 bg-gray-200 rounded-3xl border border-gray-200 shadow-xl items-center">
            <h3 className="mb-1 text-3xl font-prim font-semibold">Premium</h3>
            <div className="flex justify-center items-baseline my-2">
              <span className="text-5xl font-prim font-semibold">$19.99</span>
            </div>
            <p className="mt-3 mb-3 italic text-gray-800 sm:text-lg">
              Pay once. Access Forever.
            </p>
            <hr className="w-full border-1 border-gray-500 mb-4" />
            <ul role="list" className="mb-8 space-y-4 text-left h-52">
              <li className="flex">
                <CheckIcon color="rgb(17 24 39)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold italic">
                  All benefits of Standard.
                </span>
              </li>
              <li className="flex">
                <CheckIcon color="rgb(17 24 39)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold italic">
                  Access to exclusive ADHD Study Tips Newsletter.
                </span>
              </li>
              <li className="flex">
                <CheckIcon color="rgb(17 24 39)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold italic">
                  1:1 15-minutes intro call with the founder.
                </span>
              </li>
              <li className="flex">
                <CheckIcon color="rgb(17 24 39)" size={28} />{" "}
                <span className="ml-2 font-cg font-semibold italic">
                  Early access to future tools and templates.
                </span>
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/4gweX54bl4kO7Ly4gv"
              id="GetPremiumButton"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-200 rounded-lg font-prim font-bold text-sm px-5 py-2.5 text-center"
              onClick={logPremiumPackageEvent}
            >
              Get Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UBPricing;
