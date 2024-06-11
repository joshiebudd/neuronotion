import React from 'react';
import HeaderSection from '../../components/HeaderSection';

const StudyMusicBlog = () => {
  return (
    <main className="pt-40 pb-16 lg:pb-24 bg-blue-50 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <HeaderSection />
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue font-baloo">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="https://NeuroNotionPullZonw.b-cdn.net/headshot%20circle.jpg"
                  alt="Josh Budd"
                />
                <div>
                  <a href="#" rel="author" className="text-xl font-bold text-gray-900">
                    Josh Budd
                  </a>
                  <p className="text-base text-gray-900">
                    Founder @ <b> Neuro Notion </b>
                  </p>
                  <p className="text-base text-gray-900">
                    <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="blog-header mb-4 lg:mb-6">
              What Should ADHDers Listen To When Studying?
            </h1>
          </header>
          <p className="lead blog-body italic">
            Hey, before you read this I want to introduce myself. I&apos;m Josh Budd, and I&apos;m on a mission to get every single Neurodiverse person across the world access to the Neurodiverse tools they deserve. For too long, us ADHDers (and other neurodiversities) have been using productivity and organisation tools designed for Neurotypical brains and that&apos;s part of the reason why we struggle so much. So before you read this, remember, your brain is not broken or wrong and it doesn&apos;t need fixing, it just has different requirements. If you use a system that is designed for your ADHD brain, you will start to understand that you can achieve deep focus for long periods of time and not feel drained afterwards!
          </p>
          <br />
          <div className="w-full bg-gray-300" style={{ height: '1px' }}></div>
          <br />
          <p className="blog-body">
            If you have ADHD, you know that certain sounds can be incredibly distracting or even overwhelming. This is because people with ADHD are typically more sensitive to sound than Neurotypical people. But what you probably don&apos;t know is you can actually use sounds to your advantage when studying.
          </p>
          <br />
          <p className="blog-body">
            The right type of noise can significantly improve focus for those with ADHD and some frequencies make it so much easier to enter deep focus - especially when combined with noise cancellation headphones, a timer, and the right environment.
          </p>
          <br />
          <br />
          <h2 className="blog-subheader">I have ADHD and I want to focus, what should I listen to while studying?</h2>
          <p className="blog-body">
            Studies have shown that Binaural Beats, Brown Noise, White Noise are scientifically beneficial to neurodiverse brains when studying. They provide a consistent, gentle backdrop that drowns out disruptive external sounds and for ADHD brains - drowns out the chatter of our brain. This allows you to be in control of the narrative upstairs, rather than having a constant stream of words and thoughts in your mind.
          </p>
          <br />
          <br />
          <h2 className="blog-subheader">How do these ADHD focus sounds help me with studying?</h2>
          <p className="blog-body">
            These sounds help people with ADHD focus in a simple way. They play noise that is concentrated in a certain frequency area (Some are high frequency, some are low frequency) and this creates a deep, rumbling sound. This helps mask distracting higher-pitched sounds in your environment, like office chatter or air conditioning hums. The calming, relaxing nature of these sounds also promotes a focus and concentration in people with ADHD by reducing stress and anxiety. By playing these sounds on noise cancellation headphones instead of speakers, you feel like you get transported to an ADHD focus bubble, allowing your brain to be fully immersed into focus and block out distractions.
          </p>
          <br />  
          <br />
          <h2 className="blog-subheader">What&apos;s wrong with studying to other music?</h2>
          <p className="blog-body">
            Not just for people with ADHD, but for all people, music with lyrics is a big distraction. This is because your brain can only process one instance of speech at any given time. If you&apos;re listening to lyrics and trying to write an essay or read a problem question, your brain will get overwhelmed, you will get confused faster, and you will lose focus sooner.
          </p>
          <br />
          <br />
          <h2 className="blog-subheader">Studying with ADHD and Focus Timers</h2>
          <p className="blog-body">
            It&apos;s also hugely beneficial to implement session timers using techniques like Pomodoro. Breaking up focus sessions lets your brain know exactly how long it needs to focus for before it gets a break, and also lets you enter deeper focus. People with ADHD commonly struggle with time management, so this helps to manage how much time you&apos;re actually studying for. If you have ADHD and you&apos;re struggling to focus, I recommend starting with 25-minute sessions (Whilst playing Binaural Beats), and then gradually moving up to 60 and then 90 minute sessions. The timed structure provides structure to your ADHD brain, while the breaks allow your ADHD brain a well-deserved reset before the next session.
          </p>
          <br />
          <br />
          <h2 className="blog-subheader">Final Takeaways:</h2>
          <p className="blog-body">
            Us students with ADHD are often overwhelmed by our environment and we&apos;re really easily distractible. By strategically introducing these study sounds, putting your phone out of reach, and setting a timer, you can become a super productive student. Over time, your brain will start to associate these sounds with deep focus and it will get easier and easier to enter the zone everytime you play them.
          </p>
          <br />
          <p className="blog-body">
            So, listen to your ADHD brain. Ditch the Taylor Swift or Kanye album and pick up some Binaural Beats, Brown Noise, or White Noise. Soon enough, you&apos;ll find yourself studying and focusing in a way that you&apos;d told yourself wasn&apos;t possible because of your ADHD. Remember, studying with ADHD doesn&apos;t have to be difficult. Your brain is not broken and it doesn&apos;t need fixing, you just need to understand the different things it requires.
          </p>
          <br />
          <br />
          <p className="blog-body">
            <i> By Josh Budd </i> | Founder @ <b>Neuro Notion</b>
          </p>
        </article>
      </div>
    </main>
  );
};

export default StudyMusicBlog;
