import React from "react";
import HPHeader from "../Homepage/HPHeader";
import BlogCard from "./blogcard";

const ArticleSelect = () => {
  return (
    <div className="flex justify-center">
      <HPHeader />
      <div className="max-w-screen-lg w-full">
        <section className="bg-white pt-16 pb-10 lg:pt-32 lg:pb-20">
          <div className="container px-4 lg:px-0">
            <div className="flex flex-wrap justify-center">
              <div className="w-full">
                <div className="mx-auto mb-12 lg:mb-20 max-w-[600px] text-center">
                  <span className="mb-2 block text-lg font-semibold text-prim font-prim">
                    Our Blogs
                  </span>
                  <h2 className="mb-4 text-3xl lg:text-[40px] font-bold text-prim font-prim">
                    Our Recent Blog Posts
                  </h2>
                  <p className="text-lg text-sec font-cg">
                    Packed with value to help you regain control of your ADHD. <br /> Pick from any of the articles below to learn more.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <BlogCard
                date="Sep 11, 2024"
                CardTitle="Why can't I build habits with ADHD?"
                CardDescription="A deep dive into why habits are hard to form with ADHD and how to fix it."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-kadiravsarr-24877182.jpg"
                slug="adhd-and-routines"
              />
              <BlogCard
                date="Sep 09, 2024"
                CardTitle="What should I listen to while studying with ADHD?"
                CardDescription="A deep dive into the most effective study music and sounds for Students with ADHD."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-armin-rimoldi-5553630.jpg"
                slug="adhd-and-study-music"
              />
              {/* Add more BlogCard components with unique slugs */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArticleSelect;
