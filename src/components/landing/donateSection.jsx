import React from 'react';
import { Link } from 'react-router-dom';
import fotoprueba from '../../img/foto.jpeg';
import './styles/donateSection.css'

function DonateSection() {
  return (
    <div className='donateSectionPage'>
      <p>Garantizar <strong>comida para todos</strong>, es un esfuerzo de equipo.</p>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim."</p>
      <div className='containerDonates'>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='Huertas' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='almuerzos' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='despensa' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='talento' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='conocimiento' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
          </Link>
        </div> 
      </div>
      <Link to="/">
          <button className="btnDonation">Hazte Parte</button>
        </Link>
    </div>
  );
}

export default DonateSection;