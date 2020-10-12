import React, { Fragment} from 'react';
import Footer from '../components/landing/footer';
import Header from '../components/landing/header';
import BecomePart from '../components/donation/becomePart'
import ArchiveButtons from '../components/donation/archiveButtons';


const DonationPage= () => {
 
      return (
    <Fragment>
      <Header/>
      
      <BecomePart /> 
      <ArchiveButtons/>
      <Footer/>
    </Fragment>
    
  );
}

export default DonationPage;