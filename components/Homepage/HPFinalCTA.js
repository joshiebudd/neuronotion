import React from "react";

const HPFinalCTA = () => {
  return (
    <section className="pt-12 pb-12 px-4 bg-prim Final_CTA">
      <div className="mx-auto max-w-screen-xl px-4 text-center lg:px-16">
        <h1 className="mb-4 text-4xl font-pop font-bold leading-none tracking-tight text-gray-50">
          Silence the ADHD Chaos. <br />
          <span className="text-sec">
            Regain Control of your ADHD.
          </span>
        </h1>

        <p className="mb-6 text-xl font-cg font-semibold text-gray-50 sm:px-16">
          The <b>second brain for managing your ADHD</b>. Manage your entire life <br />
          in your own ADHD-friendly space.
        </p>

        <div className="m-8">
          <a
            href="#pricing"
            className="bg-sec text-prim py-3 px-8 font-prim font-bold rounded-xl text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-accent2 hover:text-prim"
          >
            Get for Free
          </a>
        </div>

        {/* Star Rating */}
        <div className="mb-2 flex justify-center">
          <span className="mb-0 font-pop text-5xl leading-none text-accent4">
            ★★★★★
          </span>
        </div>
        <span className="mt-0 mb-0 text-md font-baloo text-gray-800"></span>
      </div>
    </section>
  );
};

export default HPFinalCTA;
