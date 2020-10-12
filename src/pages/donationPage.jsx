import React, { Fragment,useEffect } from 'react';
import Footer from '../components/landing/footer';
import Header from '../components/landing/header';
import BecomePart from '../components/donation/becomePart'
import ArchiveButtons from '../components/donation/archiveButtons';


const DonationPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <Fragment>
      <Header />
      <BecomePart />
      <ArchiveButtons />
      <Footer />
    </Fragment>
  );
}

export default DonationPage;