import React from 'react';
import Head from 'next/head';
import NEWClaudiaLPHeader from '../components/NEWClaudiaLPHeader';
import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { Badge } from '../components/ui/badge';

export default function Team() {
  const founderStory = {
    name: 'Josh Budd',
    role: 'Founder & CEO',
    image: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/0046-DSCF5673%20(2).jpg',
    story: [
      "Hi, I&apos;m Josh, and I&apos;m diagnosed severe combined ADHD. By age 11 I&apos;d been expelled from 13 schools and discarded as a &quot;problem child&quot;.",
      "As an adult, I&apos;ve tried every productivity/life management system, app, and &quot;ADHD hack&quot; out there. Most were built by neurotypical minds for neurotypical brains. Some of those slapped an &quot;ADHD friendly&quot; label on there.",
      "This just didn&apos;t work for my ADHD brain, so I spent two years building my own (in true ADHD fashion 😂). Something that actually understands how we think, process information, and get things done.",
      "We are all unique, but there are some things that 95% of us with ADHD struggle with, Claudia tries to make managing those things 10x easier."
    ]
  };

  const leadershipTeam = [
    {
      name: 'Josh Budd',
      role: 'Founder & CEO',
      image: 'https://NeuroNotionPullZonw.b-cdn.net/Avatars/0046-DSCF5673%20(2).jpg',
      bio: 'Leading the vision and mission of Neuro Notion. Josh brings lived experience with ADHD and a passion for building tools that actually work for ADHD brains.'
    },
    {
      name: 'Vlad',
      role: 'Co-Founder & CTO',
      image: 'https://NeuroNotionPullZonw.b-cdn.net/vladheadshot.png',
      bio: 'Leading our technical vision and building the infrastructure that powers Claudia. With years of experience in scalable systems and AI, Vlad ensures our platform is both powerful and reliable.'
    }
  ];

  const clinicalTeam = [
    {
      name: 'Dr James Kustow',
      role: 'Clinical Lead',
      image: 'https://NeuroNotionPullZonw.b-cdn.net/jameskustow.webp',
      bio: 'Our Clinical Lead brings deep expertise in ADHD treatment and clinical psychology. Dr Kustow ensures that Claudia is built on evidence-based practices and clinical science.'
    },
    {
      name: 'Dr Tony Lloyd',
      role: 'Clinical Advisor',
      image: 'https://NeuroNotionPullZonw.b-cdn.net/tony.webp',
      bio: 'As our Clinical Advisor, Dr Lloyd provides strategic guidance on ADHD management approaches and ensures our methods align with the latest clinical research and best practices.'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Team - Claudia AI Personal Assistant</title>
        <meta name="description" content="Meet the team behind Claudia - built for ADHDers, by ADHDers, and informed by clinical science." />
        <link rel="icon" href="https://NeuroNotionPullZonw.b-cdn.net/Secondary%20logo.png" />
      </Head>

      <NEWClaudiaLPHeader />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-4 bg-[#1e2a4a]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:bg-white/10" style={{ fontWeight: 400 }}>
              Our Team
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0" style={{ fontWeight: 700 }}>
            Clinically built for ADHDers, <br className="hidden sm:block" />by ADHDers
          </h1>
          
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0 mb-8" style={{ fontWeight: 400 }}>
            We&apos;re a team of ADHD entrepreneurs and clinical experts working together to build tools that actually work for ADHD brains.
          </p>

          {/* Founder Story Text */}
          <div className="prose prose-lg max-w-3xl mx-auto">
            {founderStory.story.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed text-left" style={{ fontWeight: 400 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-[#253550]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Leadership Team */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  Leadership Team
                </h2>
              </div>

              <div className="space-y-8">
                {leadershipTeam.map((member, index) => (
                  <div key={index} className="bg-[#465e76] rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover shadow-lg mb-4"
                      />
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontWeight: 700 }}>
                        {member.name}
                      </h3>
                      <p className="text-base text-[#30bcd9] font-semibold mb-4" style={{ fontWeight: 600 }}>
                        {member.role}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed" style={{ fontWeight: 400 }}>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Team */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontWeight: 700 }}>
                  Clinical Team
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed" style={{ fontWeight: 400 }}>
                  Built on clinical science
                </p>
              </div>

              <div className="space-y-8">
                {clinicalTeam.map((member, index) => (
                  <div key={index} className="bg-[#465e76] rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover shadow-lg mb-4"
                      />
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontWeight: 700 }}>
                        {member.name}
                      </h3>
                      <p className="text-base text-[#30bcd9] font-semibold mb-4" style={{ fontWeight: 600 }}>
                        {member.role}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed" style={{ fontWeight: 400 }}>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <LPFooter />
    </>
  );
}
