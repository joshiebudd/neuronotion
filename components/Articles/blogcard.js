import React from "react";

const BlogCard = ({ image, date, CardTitle, CardDescription, slug }) => {
    return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold leading-loose text-sec bg-prim rounded font-prim">
                {date}
              </span>
            )}
            <h3>
              <a href={`/blogs/${slug}`}>
                <span className="inline-block mb-2 text-xl font-semibold text-prim hover:text-sec font-prim lg:text-2xl cursor-pointer">
                  {CardTitle}
                </span>
              </a>
            </h3>
            <p className="text-base text-sec font-cg">{CardDescription}</p>
          </div>
        </div>
      </div>
    );
  };

  export default BlogCard;