import React, { Fragment } from "react";
import Header from '../components/landing/header';
import Video from '../components/landing/video';
import Footer from '../components/landing/footer';
import DonateSection from '../components/landing/donateSection';
import Carousel2 from '../components/landing/Carousel';

const LandingPage = () => {
  return (
    <Fragment>
     
      <Header/>
      <Video />
      <DonateSection/>
      <Carousel2/>
      <Footer/>
    </Fragment>  
  );
}

export default LandingPage;