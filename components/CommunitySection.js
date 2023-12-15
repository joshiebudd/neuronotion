import React from 'react';
import Image from 'next/image';

const CommunitySection = () => {
  return (
    <section className="bg-gray-50 community-section">
      <div className="py-0 pb-0 px-4 mx-auto max-w-screen-xl pt-20">
        <div className="max-w-screen-md mb-2 lg:mb-16 mx-auto text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-black">Join our ADHD <br /> Study Buddy Community</h2>
          <p className="mb-0 text-black">Access our exclusive community, find fellow ADHDers, learn effective study tools, and stay in the loop with updates and tutorials.</p>
        </div>

        {/* Image Container with Centering Classes */}
        <div className="flex justify-center w-full">
        <Image style={{ width:'100%' }} className="mx-auto" src={`https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/community_demo.webp?v=${new Date().getTime()}`} alt="Join Our Community Mockup" />
        </div>

        <div className="max-w-screen-xl px-4 py-1 mt-2 text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md text-gray-900 sm:grid-cols-3 mx-auto justify-items-center">
            <div className="flex flex-col items-center justify-center py-2 sm:w-full md:w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-bold">1,354</dt>
              <dd className="mb-4 font-light text-black">Fellow study buddies</dd>
            </div>
            <div className="flex flex-col items-center justify-center py-2 sm:w-full md:w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-bold">27,245</dt>
              <dd className="mb-4 font-light text-black">Notes created</dd>
            </div>
            <div className="flex flex-col items-center justify-center py-2 sm:w-full md:w-auto">
              <dt className="mb-1 text-3xl md:text-4xl font-bold">51</dt>
              <dd className="mb-4 font-light text-black">Countries </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
