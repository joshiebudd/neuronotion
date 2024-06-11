import React from "react";
import HeaderSection from "../HeaderSection";


const Blog = () => {
  return (
    <div className="flex justify-center">
      <HeaderSection />
      <div className="max-w-screen-lg w-full">
        <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-baloo font-baloo font-semibold text-gray-900">
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
            <div className="-mx-4 flex flex-wrap font-baloo font-regular justify-center">
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="Meet AutoManage, the best AI management tools"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="Meet AutoManage, the best AI management tools"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Y23YC07/image-02.jpg"
              />
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="Meet AutoManage, the best AI management tools"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/7jdcnwn/image-03.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 w-full">
        <div className="mb-8 overflow-hidden rounded">
          <img src={image} alt="" className="w-full" />
        </div>
        <div>
          {date && (
            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-baloo font-baloo font-semibold leading-loose text-gray-900">
              {date}
            </span>
          )}
          <h3>
            <a
              href="/BlogPages/StudyMusicBlog"
              className="mb-4 inline-block text-xl font-baloo font-semibold text-gray-900 hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-gray-900">{CardDescription}</p>
        </div>
      </div>
    </div>
  );
};