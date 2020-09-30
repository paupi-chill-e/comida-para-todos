import React, { Fragment } from "react";
import Header from '../components/landing/header';
import Video from '../components/landing/video';
import Footer from '../components/landing/footer';
import DonateSection from '../components/landing/donateSection';


const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <Video />
      <DonateSection/>
      <Footer/>
    </Fragment>
  );
}

export default LandingPage;