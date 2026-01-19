import React from 'react';
import Head from 'next/head';
import NEWClaudiaLPHeader from '../components/NEWClaudiaLPHeader';
import { LPFooter } from '../components/ClaudiaLandingPage/LPFooter';
import { Badge } from '../components/ui/badge';

export default function Team() {
  const teamMembers = [
    {
      name: 'Josh Budd',
      role: 'Founder & CEO',
      image: 'https://NeuroNotionPullZonw.b-cdn.net/Pitchshot.jpg',
      linkedin: 'https://www.linkedin.com/in/joshua-budd/',
      bio: [
        'Diagnosed Severe ADHD',
        'Expelled from 13 schools by age 11',
        'Spent 8 years deeply learning about ADHD',
        'Poured everything I knew into Claudia'
      ]
    },
    {
      name: 'Vlad Bacila',
      role: 'Co-Founder & CTO',
      image: 'https://NeuroNotionPullZonw.b-cdn.net/vladheadshot.png',
      bio: [
        'The technical brains behind Claudia',
        'Neuro\'s resident Mad Scientist',
        'Huge personal experience w/ ADHD',
        'AI Engineer'
      ]
    },
    {
      name: 'Dr James Kustow',
      role: 'Clinical Lead',
      image: 'https://NeuroNotionPullZonw.b-cdn.net/jameskustow.webp',
      bio: [
        'Leading adult ADHD expert',
        'Director of The Grove',
        '#1 Best selling ADHD Author - "How to Thrive with ADHD"'
      ]
    },
    {
      name: 'Dr Tony Lloyd',
      role: 'Clinical Advisor',
      image: 'https://NeuroNotionPullZonw.b-cdn.net/tony.webp',
      bio: [
        'Leading adult ADHD educator',
        'Doctorate in ADHD care',
        'Ex-CEO of ADHD Foundation'
      ]
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
          
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0" style={{ fontWeight: 400 }}>
            We&apos;re a team of ADHD entrepreneurs and clinical experts. Together, we&apos;re building tools that actually work for ADHD brains - informed by lived experience and clinical science.
          </p>
        </div>
      </section>

      {/* Team Section - Same background as hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-2 sm:px-3 bg-[#1e2a4a]">
        <div className="container mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#465e76] rounded-2xl shadow-xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="flex flex-col items-center text-center flex-grow">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </a>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg mb-6"
                    />
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontWeight: 700 }}>
                    {member.name}
                  </h3>
                  <p className="text-base sm:text-lg text-[#30bcd9] font-semibold mb-6" style={{ fontWeight: 600 }}>
                    {member.role}
                  </p>
                  <ul className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-2.5 text-left w-full" style={{ fontWeight: 400 }}>
                    {member.bio.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#30bcd9] mr-2 text-lg">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LPFooter />
    </>
  );
}
