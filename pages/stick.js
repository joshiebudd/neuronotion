import React, { useEffect } from "react";
import Head from "next/head";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import LongFormVideo from "../components/LongFormVideo";

const HomePage = () => {
  useEffect(() => {
    // Any necessary effects or tracking logic can be added here
  }, []);

  return (
    <>
      <Head>
        <title>Neuro Notion</title>
        <meta
          name="description"
          content="Watch a long form video to learn how to do XYZ"
        />
      </Head>

      <HeaderSection />
      <LongFormVideo />
      <FooterSection />
    </>
  );
};

export default HomePage;