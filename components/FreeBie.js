import React from "react";
import IframeResizer from "iframe-resizer-react";
import FreebieCopy from "./FreebieCopy";

const FreeBie = () => {
  const onGetFreeBie = () => {
    window.location.href =
      "https://joshiebudd.github.io/notionwidgets/timer.html";
  };

  return (
    <>
      <section className="px-4 bg-white py-16 md:h-[500px] h-full">
        <div className="md:block flex flex-row flex-wrap md:relative text-center content-center justify-center ">
          <div className="md:block flex md:left-[40%] md:top-[70px] md:w-1/2 text-center md:relative order-1 justify-center pb-8">
            <h2 className="text-2xl md:px-48 flex md:text-4xl font-bold leading-6 text-center">
              PRESS THIS BUTTON TO GET YOUR FREEBIE.
            </h2>
          </div>

          <FreebieCopy /> {/* Place FreebieCopy component here */}

          <div className="md:block md:left-[30%] md:absolute w-full md:w-1/2 order-2 timer-widget flex justify-center height-auto pb-8">
            <IframeResizer
              className="border border-black rounded-lg md:w-[35%]"
              style={{
                height: "400px",
                marginBottom: "30px",
              }}
              src="https://joshiebudd.github.io/notionwidgets/timer.html"
              scrolling="no"
            />
          </div>

          <div className="md:relative md:block order-3 md:left-[40%] md:top-[100px] md:w-1/2 ">
            <div className="flex justify-center">
              <button
                onClick={onGetFreeBie}
                className="flex md:w-80 w-72 justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                I prefer hacks. Give me the gift only
              </button>
            </div>
            <div className="pt-3 ">
              <p className="italic text-md leading-10 text-gray-700">
                *No email required
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeBie;
