import React from "react";

const HPFinalCTA = () => {
  return (
    <section className="pt-12 pb-12 px-4 bg-prim Final_CTA">
      <div className="mx-auto max-w-screen-xl px-4 text-center lg:px-16">
        <h1 className="mb-4 text-3xl lg:text-4xl font-pop font-bold leading-tight tracking-tight text-gray-50">
          Calm the ADHD Chaos. <br />
          <span className="text-sec">
            Regain Control of your ADHD.
          </span>
        </h1>

        <p className="mb-6 text-lg lg:text-xl font-cg font-semibold text-gray-50 sm:px-4 lg:px-16">
          The <b>second brain for managing your ADHD</b>. Regain control over your entire life.
        </p>

        <div className="m-8">
          <a
            href="https://buy.stripe.com/4gw3en6jtdVo9TG00k"
            className="bg-sec text-prim py-3 px-8 font-prim font-bold rounded-xl text-lg lg:text-xl shadow-gray-600 shadow-md hover:shadow-gray-600 hover:shadow-sm hover:bg-accent3 hover:text-prim"
          >
            Get Ultimate Brain
          </a>
        </div>

        {/* Star Rating */}
        <div className="mb-2 flex justify-center">
          <span className="mb-0 font-pop text-4xl lg:text-5xl leading-none text-accent4">
            ★★★★★
          </span>
        </div>
      </div>
    </section>
  );
};

export default HPFinalCTA;
