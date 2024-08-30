import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import _ from "lodash";

const UBCommunity = () => {
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
    <section className="bg-white text-center pt-20 community-section">
      <div className="px-4 mx-auto max-w-screen-xl py-12 sm:py-16">
      <div className="inline-block px-3 py-1 mb-6 bg-blue-300 rounded-full text-xs text-grey-950 font-pop font-semibold">
            Community
            </div>
        <div className="max-w-screen-md mb-2 mx-auto text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-pop font-bold text-prim">
        Find your{' '}
        <span className="text-accent1 ">
        ADHD People.
        </span> Join our growing community🤍
        </h2>
          <p className="text-xl mt-4 mb-0 font-cg text-gray-900">
            Access our exclusive community, find fellow ADHDers, learn effective
            tools and techniques, and stay in the loop with updates on our future releases.
          </p>
        </div>

        {/* Image Container with Centering Classes */}
        <div className="flex justify-center w-full mt-12">
          <Image
            src={`https://NeuroNotionPullZonw.b-cdn.net/UBCommunity.webp?v=${new Date().getTime()}`}
            alt="Join Our Community Mockup"
            width={700}
            height={600}
            redraw
            className="mx-auto"
          />
        </div>

        <div
          id="counter_container"
          className="max-w-screen-xl px-4 py-1 mt-4 sm:mt-0 text-center lg:py-2 lg:px-6"
        >
          <div className="grid max-w-screen-md text-gray-900 grid-cols-3 mx-auto justify-items-center">
            <div className="flex flex-col items-center py-2 w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-pop font-bold">
                <CountUp
                  start={countStart ? 0 : null}
                  end={1354}
                  duration={2}
                  separator=","
                  redraw
                ></CountUp>
              </dt>
              <dd className="mb-3 sm:mb-6 font-light font-pop text-gray-900">ADHDers</dd>
            </div>
            <div className="flex flex-col items-center py-2 w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-pop font-bold">
                <CountUp
                  start={countStart ? 0 : null}
                  end={27245}
                  duration={2}
                  separator=","
                  redraw
                ></CountUp>
              </dt>
              <dd className="mb-2 font-light font-pop text-gray-900">Interactions</dd>
            </div>
            <div className="flex flex-col items-center py-2 w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-pop font-bold">
                <CountUp
                  start={countStart ? 0 : null}
                  end={103}
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

export default UBCommunity;
