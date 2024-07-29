import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import _ from "lodash";

const CommunitySection = () => {
  const [countStart, setCountStart] = useState(false);

  const onWindowScroll = () => {
    if (scrollY > document.getElementById("counter_container").offsetTop - 1000)
      setCountStart(true);
    else setCountStart(false);
  };
  const throttledWindowScroll = _.throttle(onWindowScroll, 100);
  useEffect(() => {
    onWindowScroll();
    window.addEventListener("scroll", throttledWindowScroll);
    return () => {
      window.removeEventListener("scroll", throttledWindowScroll);
    };
  }, []);

  return (
    <section className="bg-white text-center community-section">
      <div className="px-4 mx-auto max-w-screen-xl py-12 sm:py-16">
      <div className="inline-block px-3 py-1 mb-6 bg-blue-300 rounded-full text-xs text-grey-950 font-baloo font-semibold">
            Community
            </div>
        <div className="max-w-screen-md mb-2 mx-auto text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-baloo font-bold text-gray-900">
        Find your{' '}
        <span className="from-blue-400 to-blue-700 bg-gradient-to-tr bg-clip-text text-transparent">
        Body Double Buddy.
        </span> Join our growing community🤍
        </h2>
          <p className="text-xl mt-4 mb-0 font-baloo text-gray-900">
            Access our exclusive community, find fellow ADHDers, learn effective
            study tools, and stay in the loop with updates and tutorials.
          </p>
        </div>

        {/* Image Container with Centering Classes */}
        <div className="flex justify-center w-full mt-12">
          <Image
            src={`https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/community_demo.webp?v=${new Date().getTime()}`}
            alt="Join Our Community Mockup"
            width={600}
            height={400}
            redraw
            className="mx-auto"
          />
        </div>

        <div
          id="counter_container"
          className="max-w-screen-xl px-4 py-1 mt-4 sm:mt-0 text-center lg:py-16 lg:px-6"
        >
          <div className="grid max-w-screen-md text-gray-900 grid-cols-3 mx-auto justify-items-center">
            <div className="flex flex-col items-center py-2 w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-baloo font-bold">
                <CountUp
                  start={countStart ? 0 : null}
                  end={1354}
                  duration={2}
                  separator=","
                  redraw
                ></CountUp>
              </dt>
              <dd className="mb-3 sm:mb-6 font-light font-baloo text-gray-900">Study buddies</dd>
            </div>
            <div className="flex flex-col items-center py-2 w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-baloo font-bold">
                <CountUp
                  start={countStart ? 0 : null}
                  end={27245}
                  duration={2}
                  separator=","
                  redraw
                ></CountUp>
              </dt>
              <dd className="mb-2 font-light font-baloo text-gray-900">Notes created</dd>
            </div>
            <div className="flex flex-col items-center py-2 w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-baloo font-bold">
                <CountUp
                  start={countStart ? 0 : null}
                  end={51}
                  duration={2}
                  separator=","
                  redraw
                ></CountUp>
              </dt>
              <dd className="mb-2 font-light font-baloo text-gray-900">Countries </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
