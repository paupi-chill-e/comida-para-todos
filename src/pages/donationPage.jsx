import React, { Fragment,useState} from 'react';
import Footer from '../components/landing/footer';
import Header from '../components/landing/header';
import BecomePart from '../components/donation/becomePart'
import ArchiveButtons from '../components/donation/archiveButtons';
import DonateFood from '../components/donation/donateFood';
import DonateHuertas from '../components/donation/donateHuertas';

const DonationPage= (props) => {

  

  return (
    <Fragment>
      <Header/>
      <BecomePart/>
      <ArchiveButtons 
      onClick={DonateHuertas}
      onClick={DonateFood}
      />
      <Footer/>
    </Fragment>
  );
}

export default DonationPage;