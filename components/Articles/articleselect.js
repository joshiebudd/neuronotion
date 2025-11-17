import React from "react";
import NEWClaudiaLPHeader from "../NEWClaudiaLPHeader";
import BlogCard from "./blogcard";

const ArticleSelect = () => {
  return (
    <div className="flex justify-center">
      <NEWClaudiaLPHeader />
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
                date="Jan 18, 2025"
                CardTitle="When ADHD and Anxiety Gang Up on You: Practical Steps to Break the Loop Fast"
                CardDescription="Learn practical steps to break the anxiety-ADHD loop and regain control of your mental health."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/wvIWFSbiCjCQqVaq.jpeg"
                slug="adhd-and-anxiety-gang-up"
              />
              <BlogCard
                date="Jan 25, 2025"
                CardTitle="ADHD and Being Too Emotional: Understanding Emotional Dysregulation"
                CardDescription="Understand emotional dysregulation in ADHD and discover strategies to manage intense feelings."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/riwkbOhGxUQuCLUZ.jpeg"
                slug="adhd-and-being-too-emotional"
              />
              <BlogCard
                date="Feb 09, 2025"
                CardTitle="How to Manage ADHD in Adults: With or Without Medication"
                CardDescription="Discover effective non-medical strategies and lifestyle changes to manage adult ADHD symptoms."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/McgXjtOeRfqjcOnq.jpeg"
                slug="adhd-and-medication"
              />
              <BlogCard
                date="Feb 07, 2025"
                CardTitle="How to Build Habits and Routines with ADHD That Actually Stick"
                CardDescription="A deep dive into why habits are hard to form with ADHD and how to fix it."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/GPvWuqqMlJXqGfva.jpeg"
                slug="adhd-and-routines"
              />
              <BlogCard
                date="Feb 13, 2025"
                CardTitle="What Should People with ADHD Listen To When Studying? The Science of Focus Music"
                CardDescription="A deep dive into the most effective study music and sounds for students with ADHD."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/axuRxHXILJREfGFZ.jpeg"
                slug="adhd-and-study-music"
              />
              <BlogCard
                date="Feb 03, 2025"
                CardTitle="ADHD Brains Don&apos;t Do &apos;Small&apos;: Why You Procrastinate Until Conditions Are &apos;Perfect&apos;"
                CardDescription="Why you procrastinate until conditions are &apos;perfect&apos; and how to overcome it."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/VEnHjHYXPZefhmTJ.jpeg"
                slug="adhd-brains-dont-do-small"
              />
              <BlogCard
                date="Jan 30, 2025"
                CardTitle="ADHD, Masking, and Imposter Syndrome: Breaking Free from the Exhausting Performance"
                CardDescription="Explore the connection between ADHD masking and imposter syndrome, and find relief."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/SMWxbHIGQazTUxDR.jpeg"
                slug="adhd-masking-and-imposter-syndrome"
              />
              <BlogCard
                date="Jan 20, 2025"
                CardTitle="ADHD & The Hidden Cost of Choice: The Gold Dust Theory 🫰"
                CardDescription="Understanding the Gold Dust Theory and how decision fatigue affects your ADHD brain."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/JnHGETMOzTffoZOO.jpeg"
                slug="adhd-the-hidden-cost-of-choice-the-gold-dust-theory"
              />
              <BlogCard
                date="Feb 17, 2025"
                CardTitle="Do Your Systems Still Work When ADHD is Hitting You Hard?"
                CardDescription="Discover how to maintain your productivity systems even during the toughest ADHD days."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/zWDJHJhFuLbxsfmv.jpeg"
                slug="do-your-systems-still-work-when-adhd-is-hitting-you-hard"
              />
              <BlogCard
                date="Feb 05, 2025"
                CardTitle="Exhausted Again? Why Your ADHD Brain Needs to Do Differently, Not Less"
                CardDescription="Why your ADHD brain needs to approach tasks differently rather than doing less."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/LltYgvQAcoKhzxqs.jpeg"
                slug="exhausted-again-do-differently"
              />
              <BlogCard
                date="Feb 11, 2025"
                CardTitle="How I Fixed My Sleep with ADHD: Shutting Down the 2 A.M. TED Talk"
                CardDescription="A practical approach to shutting down the 2 A.M. TED Talk in your ADHD brain."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/DnEgXsmJYbbjSTrt.jpeg"
                slug="how-i-fixed-my-sleep-with-adhd"
              />
              <BlogCard
                date="Feb 15, 2025"
                CardTitle="I Can Do the Thing... But My Brain Says No: Overcoming Executive Dysfunction"
                CardDescription="Overcoming executive dysfunction and the intention-action gap with ADHD."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/fsJKZJxgvoVKpFGz.jpeg"
                slug="i-can-do-the-thing-but-my-brain-says-no"
              />
              <BlogCard
                date="Jan 28, 2025"
                CardTitle="When Your Brain Says &quot;I Can&apos;t&quot;: Bridging the ADHD Intention-Action Gap"
                CardDescription="Bridging the intention-action disconnect and getting unstuck with ADHD."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/QOuSXcrsBzPJJTLN.jpeg"
                slug="something-for-when-your-brain-says-i-cant"
              />
              <BlogCard
                date="Jan 22, 2025"
                CardTitle="Stuck in Fight, Flight, or Scroll? 📱 Understanding ADHD Nervous System Dysregulation"
                CardDescription="How to calm your nervous system and break free from the stress response cycle."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/FXbxnmUvXUPZYprM.jpeg"
                slug="stuck-in-fight-flight-or-scroll"
              />
              <BlogCard
                date="Feb 01, 2025"
                CardTitle="The ADHD Goldilocks Zone: Finding the Perfect Balance of Structure and Freedom"
                CardDescription="Finding the perfect balance of structure and freedom for your ADHD brain."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/juoQygcofodGdLMN.jpeg"
                slug="the-adhd-goldilocks-zone"
              />
              
              <BlogCard
                date="Aug 23, 2025"
                CardTitle="Want a Chance at a Clearer, Calmer Version of You? Neuro AI Makes it Possible with Claudia by Neuro"
                CardDescription="Discover how AI-powered tools can help you achieve mental clarity and calm."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/vvvtStinZQXxtjIq.jpeg"
                slug="want-a-chance-at-a-clearer-calmer-version-of-you"
              />
              <BlogCard
                date="Feb 22, 2025"
                CardTitle="Be Honest With Me... Are You Scared to Try New Things with ADHD?"
                CardDescription="Explore why ADHD makes trying new things scary and how to overcome that fear."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/ZZoUTrygimUJlMwe.jpeg"
                slug="adhd-fear-of-trying-new-things"
              />
              <BlogCard
                date="Feb 23, 2025"
                CardTitle="ADHD is Not What You Think: What It&apos;s Really Like"
                CardDescription="Discover what ADHD really feels like beyond the stereotypes and misconceptions."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/fSIaPDNaTFZggEfb.jpeg"
                slug="adhd-is-not-what-you-think"
              />
              <BlogCard
                date="Feb 20, 2025"
                CardTitle="How to Reduce ADHD Procrastination: Stop Waiting for Motivation"
                CardDescription="Learn practical strategies to stop procrastinating and start taking action with ADHD."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/cZyekxPYEmrpoxfd.jpeg"
                slug="how-to-reduce-adhd-procrastination"
              />
              <BlogCard
                date="Feb 19, 2025"
                CardTitle="How to Take Control of Your ADHD (Instead of Letting It Control You)"
                CardDescription="Take back control from ADHD with proven strategies and mindset shifts."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/aHPlhULEzomtJJSq.jpeg"
                slug="how-to-take-control-of-your-adhd"
              />
              <BlogCard
                date="Feb 21, 2025"
                CardTitle="Why Do &quot;Simple&quot; Things Feel Impossible with ADHD?"
                CardDescription="Understand why everyday tasks feel overwhelming and how to make them manageable."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/jLhDjJNxGODgXDBr.jpeg"
                slug="why-simple-things-feel-impossible-with-adhd"
              />
              <BlogCard
                date="Feb 27, 2025"
                CardTitle="How to Make Your ADHD Motivation Actually Useful"
                CardDescription="Harness your ADHD motivation bursts and turn them into sustainable action."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/fGXyhQpTXhpjFeaI.jpeg"
                slug="how-to-make-adhd-motivation-useful"
              />
              <BlogCard
                date="Feb 28, 2025"
                CardTitle="Why ADHD Task Breakdown Actually Works (When Everything Else Fails)"
                CardDescription="Discover why breaking tasks down is the most effective ADHD strategy."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/EHGHCUTRaWBwtZcR.jpg"
                slug="why-adhd-task-breakdown-works"
              />
              <BlogCard
                date="Feb 24, 2025"
                CardTitle="23 Ways to Make Living with ADHD 10x Easier"
                CardDescription="Practical tips and strategies to simplify daily life with ADHD."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/uaajkRZBUiEbGLxb.jpeg"
                slug="23-ways-to-make-living-with-adhd-easier"
              />
              <BlogCard
                date="Feb 25, 2025"
                CardTitle="Everyone Isn&apos;t &quot;A Little ADHD&quot;"
                CardDescription="Why ADHD is a real condition, not just a personality quirk everyone has."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/DsUQnwIJdBgOxKRM.jpeg"
                slug="everyone-isnt-a-little-adhd"
              />
              <BlogCard
                date="Feb 26, 2025"
                CardTitle="The Truth About How ADHD Affects Every Part of Your Life"
                CardDescription="Understanding the far-reaching impact of ADHD beyond focus and attention."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/kvktnPCUiQTmfJVx.jpeg"
                slug="how-adhd-affects-every-part-of-your-life"
              />
              <BlogCard
                date="Feb 28, 2025"
                CardTitle="Why Sleep is THE Foundation for Managing ADHD (Not Just Another Tip)"
                CardDescription="Why quality sleep is the most important foundation for managing ADHD effectively."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/kMamzgpPkERhwZgR.jpeg"
                slug="adhd-sleep-foundation"
              />
              <BlogCard
                date="Feb 28, 2025"
                CardTitle="How to Build Habits with ADHD That Actually Stick (The 4 Laws)"
                CardDescription="Master the 4 laws of habit formation designed specifically for ADHD brains."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/MyZTUZWInbBbQIKc.jpg"
                slug="building-habits-that-stick-4-laws"
              />
              <BlogCard
                date="Mar 01, 2025"
                CardTitle="ADHD Diagnosis Doesn&apos;t Equal Symptom Reduction: What Actually Works"
                CardDescription="Understanding that ADHD diagnosis is just the beginning—learn what actually creates lasting change."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/NPluqgDnQNuJKKmP.jpeg"
                slug="adhd-diagnosis-not-symptom-reduction"
              />
              <BlogCard
                date="Mar 02, 2025"
                CardTitle="Your ADHD is Bleeding Time: Why Organization is Non-Negotiable"
                CardDescription="How disorganization costs you hours every day and why getting organized is essential for ADHD."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/MSjTIgDGEtyceKtq.jpeg"
                slug="adhd-wasting-time-disorganization"
              />
              <BlogCard
                date="Mar 03, 2025"
                CardTitle="From &quot;The Naughty Kid&quot; to High-Performing Entrepreneur: My ADHD Journey"
                CardDescription="A personal story of transformation from struggling student to successful entrepreneur with ADHD."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/QRBLUTtjMlDxDQnj.jpeg"
                slug="my-adhd-journey-story"
              />
              <BlogCard
                date="Feb 17, 2025"
                CardTitle="Why Is ADHD on the Rise? The Modern World Is Making Your Symptoms Worse"
                CardDescription="Explore why ADHD diagnoses are increasing and how modern life amplifies symptoms."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/PyHzaRRBUwMYKNFb.jpeg"
                slug="adhd-is-rising-why"
              />
              <BlogCard
                date="Feb 19, 2025"
                CardTitle="The Three Pillars of ADHD Control: Sleep, Diet, and Exercise"
                CardDescription="Master the foundational lifestyle factors that make the biggest difference in ADHD management."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/ZBzjTRaDqDchxuLR.jpg"
                slug="three-pillars-adhd-control"
              />
              <BlogCard
                date="Feb 18, 2025"
                CardTitle="Finally, Someone Gets It: Why Being Understood Changes Everything with ADHD"
                CardDescription="Why feeling understood is transformative for people with ADHD and how to find your people."
                image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663094569463/AERmRCdhXAECATTn.jpeg"
                slug="you-just-get-me"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArticleSelect;
