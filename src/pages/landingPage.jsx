import React, { Fragment } from "react";
import Header from '../components/landing/header';
import Video from '../components/landing/video';
import Footer from '../components/landing/footer';

const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <Video />
      <Footer/>
    </Fragment>
  );
}

export default LandingPage;