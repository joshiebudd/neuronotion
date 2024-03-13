import React from 'react';
import Head from 'next/head';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import LongFormVideo from '../components/LongFormVideo';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Neuro Notion </title>
        <meta name="description" content="Watch a long form video to learn how to do XYZ" />
      </Head>

      <HeaderSection />

      <main className="container mx-auto py-8">
        <LongFormVideo />
      </main>

      <FooterSection />
    </div>
  );
};

export default HomePage;