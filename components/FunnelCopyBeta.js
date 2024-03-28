import React from 'react';
import Image from 'next/image';

const FunnelCopyBeta = () => {
  return (
    <section className="article-section">
      <p>Hey Friend,</p>
      <br />

      <p>Having ADHD should not mean you cannot thrive in life, hobbies and relationships.</p>
      <br />

      <p>And it definitely should not condemn you to failing in school.</p>
      <br />

      <p>As an ADHDer, I have learnt how to flourish in a world that is designed for people with neurotypical brains.</p>
      <br />

      <div className="mx-auto max-w-screen-xl px-4 py-4 text-center lg:px-12 lg:py-4">
    {/* Next.js Image component for optimized image loading */}
    <div className="centered-image max-w-full lg:max-w-[800px] pb-8 sm:pb-16">
      <Image
        style={{ width: "100%" }}
        loading="eager"
        src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/showcase.webp"
        alt="template"
        width={800} // Set the width of the image (you can adjust as needed)
        height={566} // Set the height of the image (adjust for the aspect ratio of your image)
        priority={1}
      />
    </div>
  </div>

      <p>And while in the past it meant that I could not study or do schoolwork as early as most people.</p>
      <br />

      <p>Having a system for focus now helps me get stuff done as soon as I need to.</p>
      <br />

      <p>All this while managing three businesses that I built as a student.</p>
      <br />
      <br />

      <div className="mx-auto max-w-screen-xl px-4 py-4 text-center lg:px-12 lg:py-4">
    {/* Next.js Image component for optimized image loading */}
    <div className="centered-image max-w-full lg:max-w-[800px] pb-8 sm:pb-16">
      <Image
        style={{ width: "100%" }}
        loading="eager"
        src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/trilogo.webp"
        alt="template"
        width={800} // Set the width of the image (you can adjust as needed)
        height={566} // Set the height of the image (adjust for the aspect ratio of your image)
        priority={1}
      />
    </div>
  </div>

      <p><strong>I invite you to get this guide today if…</strong></p>

      <ul>
        <li>You want a focus solution that will last longer than two weeks.</li>
        <br />
        <li>You&apos;re tired of scrolling TikTok and blogs for the next trendy &quot;productivity hack&quot; every now and then.</li>
        <br />
        <li>You&apos;re fed up of trying out new &quot;task manager apps&quot; every other month.</li>
        <br />
        <li>You want to be able to focus on demand.</li>
        <br />
        <li>You want to turn your ADHD hyper-focus into a superpower for your other interests…and not be worried about undone schoolwork.</li>
      </ul>
      <br />
      <br />

      <p><strong>What this guide will show you:</strong></p>

      <ol>
        <li>The principles that inform a lasting focus solution. We will also debunk harmful hacks that run on vibes alone but never really help you build a habit of focus.</li>
        <br />
        <li>How to build your productivity system with today&apos;s digital tools. All without needing to code. Some options only require minutes to plug and play!</li>
      </ol>
      <br />

      <p>If $2 is not too costly for improving your life, fill this form below and I&apos;ll see you inside the guide.</p>
      <br />
    </section>
  );
};

export default FunnelCopyBeta;