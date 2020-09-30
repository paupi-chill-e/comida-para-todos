import React from 'react';
import './styles/footer.css';
import logox from '../../img/logo.png'
import chems from '../../img/chemspng.png';

function Footer() {
  return (
    <footer>
      <div className='imgsFooter'>
        <div className='containerLogoFooter'>
          <img src={logox} alt="" className='logoFooter' />
        </div>
        <div className='containerIconsFooter'>
          <img src={chems} alt="" className='iconFooter' />
        </div>
      </div>
      <div className='infoFooter'>
        <p>holamundo</p>
        <p>piterciosnorompaslacama</p>
        <p>porfavor</p>
      </div>
    </footer>
  );
}

export default Footer;