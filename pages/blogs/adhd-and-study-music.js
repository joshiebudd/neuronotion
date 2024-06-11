import React from 'react';
import 'flowbite';
import 'flowbite-typography';
import 'tailwindcss/tailwind.css';
import HeaderSection from '../../components/HeaderSection';

const StudyMusicBlog = () => {
  return (
    <main className="pt-40 pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <HeaderSection />
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-100 dark:text-gray-100">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="https://NeuroNotionPullZonw.b-cdn.net/headshot%20circle.jpg"
                  alt="Josh Budd"
                />
                <div>
                  <a href="#" rel="author" className="text-xl font-bold text-gray-100 dark:text-gray-100">
                    Josh Budd
                  </a>
                  <p className="text-base text-gray-100 dark:text-gray-100">
                    Founder @ <b> Neuro Notion </b>
                  </p>
                  <p className="text-base text-gray-100 dark:text-gray-100">
                    <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-100 lg:mb-6 lg:text-4xl dark:text-gray-100">
              Best practices for successful prototypes
            </h1>
          </header>
          <p className="lead text-gray-100 dark:text-gray-100">
            Flowbite is an open-source library of UI components built with the utility-first
            classes from Tailwind CSS. It also includes interactive elements such as dropdowns,
            modals, datepickers.
          </p>
          <br />
          <p className="text-gray-100 dark:text-gray-100">
            Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
            you can think things through before committing to an actual design project.
          </p>
          <br />
          <p className="text-gray-100 dark:text-gray-100">
            But then I found a <a href="https://flowbite.com" className="text-gray-100 dark:text-gray-100">component library based on Tailwind CSS called
            Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation
            bars, cards, form elements, and more which are conveniently built with the utility classes from
            Tailwind CSS.
          </p>
          <br />
          <figure>
            <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />
            <figcaption className="text-gray-100 dark:text-gray-100">Digital art by Anonymous</figcaption>
          </figure>
          <br />
          <h2 className="text-gray-100 dark:text-gray-100">Getting started with Flowbite</h2>
          <br />
          <p className="text-gray-100 dark:text-gray-100">
            First of all you need to understand how Flowbite works. This library is not another framework.
            Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
            documentation.
          </p>
          <br />
          <p className="text-gray-100 dark:text-gray-100">
            It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
            and datepickers which you can optionally include into your project via CDN or NPM.
          </p>
          <br />
          <p className="text-gray-100 dark:text-gray-100">
            You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/" className="text-gray-100 dark:text-gray-100">quickstart
            guide</a> to explore the elements by including the CDN files into your project. But if you want
            to build a project with Flowbite I recommend you to follow the build tools steps so that you can
            purge and minify the generated CSS.
          </p>
          <br />
          <p className="text-gray-100 dark:text-gray-100">
            You&apos;ll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
            you get started with your projects even faster. You can check out this <a
            href="https://flowbite.com/docs/components/tables/" className="text-gray-100 dark:text-gray-100">comparison table</a> to better understand
            the differences between the open-source and pro version of Flowbite.
          </p>
          <br />
          <h3 className="text-gray-100 dark:text-gray-100">Laying the best for successful prototyping</h3>
          <br />
          <p className="text-gray-100 dark:text-gray-100">
            A serif is a small shape or projection that appears at the beginning:
          </p>
          <br />
          <blockquote className="text-gray-100 dark:text-gray-100">
            <p className="text-gray-100 dark:text-gray-100">
              Flowbite is just awesome. It contains tons of predesigned components and pages starting from
              login screen to complex dashboard. Perfect choice for your next SaaS application.
            </p>
          </blockquote>
          <br />
          <h4 className="text-gray-100 dark:text-gray-100">Code example</h4>
          <br />
          <p className="text-gray-100 dark:text-gray-100">
            A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
            Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
            following:
          </p>
        </article>
      </div>
    </main>
  );
};

export default StudyMusicBlog;
