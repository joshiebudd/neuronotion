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
                date="Sep 30, 2025"
                CardTitle="When ADHD and Anxiety Gang Up on You"
                CardDescription="Learn practical steps to break the anxiety-ADHD loop and regain control of your mental health."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-andrea-piacquadio-3807738.jpg"
                slug="adhd-and-anxiety-gang-up"
              />
              <BlogCard
                date="Jun 5, 2025"
                CardTitle="ADHD and Being Too Emotional"
                CardDescription="Understand emotional dysregulation in ADHD and discover strategies to manage intense feelings."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-andrea-piacquadio-3777943.jpg"
                slug="adhd-and-being-too-emotional"
              />
              <BlogCard
                date="Nov 4, 2024"
                CardTitle="How to Manage ADHD in Adults Without Medication"
                CardDescription="Discover effective non-medical strategies and lifestyle changes to manage adult ADHD symptoms."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-karolina-grabowska-4210611.jpg"
                slug="adhd-and-medication"
              />
              <BlogCard
                date="May 15, 2023"
                CardTitle="How to Build Habits and Routines with ADHD"
                CardDescription="A deep dive into why habits are hard to form with ADHD and how to fix it."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-kadiravsarr-24877182.jpg"
                slug="adhd-and-routines"
              />
              <BlogCard
                date="Feb 8, 2022"
                CardTitle="What Should ADHDers Listen To When Studying?"
                CardDescription="A deep dive into the most effective study music and sounds for students with ADHD."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-armin-rimoldi-5553630.jpg"
                slug="adhd-and-study-music"
              />
              <BlogCard
                date="Sep 11, 2025"
                CardTitle="ADHD Brains Don&apos;t Do &apos;Small&apos;"
                CardDescription="Why you procrastinate until conditions are &apos;perfect&apos; and how to overcome it."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-cottonbro-4098369.jpg"
                slug="adhd-brains-dont-do-small"
              />
              <BlogCard
                date="Jun 10, 2025"
                CardTitle="ADHD, Masking, and Imposter Syndrome"
                CardDescription="Explore the connection between ADHD masking and imposter syndrome, and find relief."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-alex-green-5699456.jpg"
                slug="adhd-masking-and-imposter-syndrome"
              />
              <BlogCard
                date="May 28, 2025"
                CardTitle="ADHD & The Hidden Cost of Choice"
                CardDescription="Understanding the Gold Dust Theory and how decision fatigue affects your ADHD brain."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-olly-3760067.jpg"
                slug="adhd-the-hidden-cost-of-choice-the-gold-dust-theory"
              />
              <BlogCard
                date="Aug 27, 2025"
                CardTitle="Do Your Systems Still Work When ADHD is Hitting You Hard?"
                CardDescription="Discover how to maintain your productivity systems even during the toughest ADHD days."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-energepic-com-27411-313690.jpg"
                slug="do-your-systems-still-work-when-adhd-is-hitting-you-hard"
              />
              <BlogCard
                date="Oct 1, 2025"
                CardTitle="Exhausted Again? Do Differently, Not Less"
                CardDescription="Why your ADHD brain needs to approach tasks differently rather than doing less."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-andrea-piacquadio-3771115.jpg"
                slug="exhausted-again-do-differently"
              />
              <BlogCard
                date="Sep 24, 2025"
                CardTitle="How I Fixed My Sleep with ADHD"
                CardDescription="A practical approach to shutting down the 2 A.M. TED Talk in your ADHD brain."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-cottonbro-4069292.jpg"
                slug="how-i-fixed-my-sleep-with-adhd"
              />
              <BlogCard
                date="Sep 26, 2025"
                CardTitle="I Can Do the Thing... But My Brain Says No"
                CardDescription="Overcoming executive dysfunction and the intention-action gap with ADHD."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-nathan-cowley-897817.jpg"
                slug="i-can-do-the-thing-but-my-brain-says-no"
              />
              <BlogCard
                date="Sep 3, 2025"
                CardTitle="When Your Brain Says &quot;I Can&apos;t&quot;"
                CardDescription="Bridging the intention-action disconnect and getting unstuck with ADHD."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-andrea-piacquadio-3807755.jpg"
                slug="something-for-when-your-brain-says-i-cant"
              />
              <BlogCard
                date="Jun 3, 2025"
                CardTitle="Stuck in Fight, Flight, or Scroll?"
                CardDescription="How to calm your nervous system and break free from the stress response cycle."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-cottonbro-5082579.jpg"
                slug="stuck-in-fight-flight-or-scroll"
              />
              <BlogCard
                date="Jan 8, 2025"
                CardTitle="The ADHD Goldilocks Zone"
                CardDescription="Finding the perfect balance of structure and freedom for your ADHD brain."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-pixabay-277593.jpg"
                slug="the-adhd-goldilocks-zone"
              />
              <BlogCard
                date="Jan 8, 2025"
                CardTitle="The ADHD Goldilocks Zone (Rewrite)"
                CardDescription="Finding the perfect balance of structure and freedom for your ADHD brain."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-pixabay-277593.jpg"
                slug="the-adhd-goldilocks-zone-rewrite"
              />
              <BlogCard
                date="Aug 23, 2025"
                CardTitle="Want a Clearer, Calmer Version of You?"
                CardDescription="Discover how AI-powered tools can help you achieve mental clarity and calm."
                image="https://NeuroNotionPullZonw.b-cdn.net/Blog%20Cover%20Images/pexels-olly-3807738.jpg"
                slug="want-a-chance-at-a-clearer-calmer-version-of-you"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArticleSelect;
