import React, { useEffect } from 'react';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import ThankYouSection from '../components/ThankyouSection';


const ThankYouPage = () => {
    useEffect(() => {
      
    }, []); // Empty dependency array to run the effect only once
  
    
    return (
      <>
        <HeaderSection />
        <ThankYouSection />
        <FooterSection />
        </>
  );
}

export default ThankYouPage;
