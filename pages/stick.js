import React, { useEffect } from "react";
import Head from "next/head";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import LongFormVideo from "../components/LongFormVideo";

const StickPage = () => {
  useEffect(() => {
    // Any necessary effects or tracking logic can be added here
  }, []);

  return (
    <>


      <HeaderSection />
      <LongFormVideo />
      <FooterSection />
    </>
  );
};

export default StickPage;