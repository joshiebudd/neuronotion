import React from 'react';
import Head from 'next/head';
import LongFormVideo from '../components/LongFormVideo';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Neuro Notion</title>
        <meta name="description" content="Watch a long form video to learn how to do XYZ" />
      </Head>

      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Neuro Notion</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <LongFormVideo />
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p>&copy; 2023 Neuro Notion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;