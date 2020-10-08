import React, { Fragment } from "react";
import Header from '../components/landing/header';
import Video from '../components/landing/video';
import Footer from '../components/landing/footer';
import DonateSection from '../components/landing/donateSection';
import Carousel2 from '../components/landing/Carousel';
import MotivationSectionF from '../components/landing/motivationSection';
import ActivitySectionF from '../components/landing/activitySection';
import  DataTableFilterDemo from '../components/demo/DataTableFilterDemo';
import DataDo from '../components/landing/data2';

const LandingPage = () => {
  return (
    <Fragment>
    <DataDo/>
     <DataTableFilterDemo/>
    <Header/>
    <obtenerDatos/>
      <Video />
      <DonateSection/>
      <MotivationSectionF/>
      <ActivitySectionF/>
      <Carousel2/>
      <Footer/>
    </Fragment>  
  );
}

export default LandingPage;