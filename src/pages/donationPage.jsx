import React, { Fragment,useState} from 'react';
import Footer from '../components/landing/footer';
import Header from '../components/landing/header';
import BecomePart from '../components/donation/becomePart'
import ArchiveButtons from '../components/donation/archiveButtons';
import ModalSalon from '../components/donation/modal-salon';

const DonationPage= () => {
  const [showMsalon, setShowMsalon] = useState(false);
	setShowMsalon(true);

	const closeModalSalon = () => {
		setShowMsalon(false);
	  }

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