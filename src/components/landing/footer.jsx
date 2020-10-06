import React from 'react';
import { Link } from "react-router-dom";
import './styles/footer.css';
import logox from '../../img/logo.png'
import  Ig from '../../img/ig.png';
import Linked from '../../img/linked.png';
import Mail from '../../img/mail.png';

function Footer() {
  return (
    <footer>
      <div className='imgsFooter'>
        <div className='containerLogoFooter'>
          <img src={logox} alt="" className='logoFooter' />
        </div>
        <div className='containerIconsFooter'>
          <img src={Ig} alt="" className='iconFooter' />
          <img src={Linked} alt="" className='iconFooter' />
          <img src={Mail} alt="" className='iconFooter' />
        </div>
      </div>
      <div className='infoFooter'>
      <div className='descriptionMotivation'>
        <p>• Quiénes somos</p>
        </div>
        <div className='descriptionMotivation'>
        <p >• Transparencia</p>
        </div>
        <div className='descriptionMotivation'>
        <p >• Qué hacemos</p>
        </div>
        <div className='descriptionMotivation'>
        <p>• Cómo ayudar</p>
        </div>
        </div>
      <div className= 'btnFootertwo'>
      <Link to="/">
          <button className="btnFooter">Hazte Parte</button>
        </Link>
        </div>
    </footer>
  );
}

export default Footer;