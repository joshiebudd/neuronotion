import React from "react";
import HPHeader from "../Homepage/HPHeader";
import BlogCard from "./blogcard";

const Blog = () => {
  return (
    <div className="flex justify-center">
      <HPHeader />
      <div className="max-w-screen-lg w-full">
        <section className="bg-white pt-16 pb-10 lg:pt-32 lg:pb-20">
          <div className="container px-4 lg:px-0">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-baloo font-semibold text-gray-900">
                    Our Blogs
                  </span>
                  <h2 className="mb-4 text-3xl font-baloo font-bold text-gray-900 sm:text-4xl md:text-[40px]">
                    Our Recent News
                  </h2>
                  <p className="font-baloo font-regular text-gray-900">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mx-2 flex flex-wrap font-baloo font-regular justify-center">
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="Meet AutoManage, the best AI management tools"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
                slug="automange-ai-tools"
              />
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="What should I listen to while studying with ADHD?"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Y23YC07/image-02.jpg"
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

export default Blog;
