import React from 'react';
import { Link } from "react-router-dom";
import './styles/footer.css';
import logo from '../../img/logo.png'
import Ig from '../../img/Footer/insta.png';
import maps from '../../img/Footer/maps.png';
import Mail from '../../img/Footer/mail.png';

function Footer() {
  return (
    <footer>
        <div className='containerLogoFooter'>
          <img src={logo} alt="" className='logoFooter' />
        </div>
        <div className='containerIconsTextFooter'>
          <div className='containerEachContact'>
            <img src={Ig} alt="instaicon" className='iconFooter'/>
            <p className='textFooter'>@comidaparatodos</p>
          </div>
          <div className='containerEachContact'>
            <img src={Mail} alt="mailIcon" className='iconFooter'/> 
            <p className='textFooter'>hola@comidaparatodos.cl</p>
          </div>
          <div className='containerEachContact'>
          <img src={maps} alt="mailIcon" className='iconFooter'/> 
          <p className='textFooter'>Dir. calle Lorem #463</p>
          </div>
        </div>
    </footer>
    
  );
}

export default Footer;