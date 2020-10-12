import React, { Fragment, useEffect, useContext} from "react";
import Header from '../components/landing/header';
import GaleryPhoto from '../components/aboutUs/galeryPhotos';
import Banner from '../components/aboutUs/banner';
import History from '../components/aboutUs/sectionHistory';
import Team from '../components/aboutUs/team';
import WhatWeDo from '../components/aboutUs/whatWeDo';
import WhatWeArchived from '../components/aboutUs/whatWeArchived';
import Transparency from '../components/aboutUs/transparency';
import Footer from '../components/landing/footer';
import {ShowContext} from '../App'



const AboutUs = () => {

  const [positionScroll, setPositionScroll] = useContext(ShowContext);

  useEffect(() => {
    window.scrollTo(0,positionScroll);
  })
  
  return (
    <Fragment>
      <Header/>
      <Banner/>
      <History/>
      <Team/>
      {/* <GaleryPhoto/> */}
      <WhatWeDo/>
      <WhatWeArchived/>
      <Transparency/>
      <Footer/>
    </Fragment>
  );
}

export default AboutUs;