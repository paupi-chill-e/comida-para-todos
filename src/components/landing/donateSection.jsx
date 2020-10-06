import React from 'react';
import { Link } from 'react-router-dom';
import fotoprueba from '../../img/foto.jpeg';
import './styles/donateSection.css'

function DonateSection() {
  return (
    <div className='donateSectionPage'>
    <div className='textDonateSectionPage'>
     <strong>Garantizar comida para todos, es un esfuerzo de equipo.</strong>
     
      <Link to="/">
          <button className="btnDonation">Hazte Parte</button>
        </Link>

      <p>Con tu ayuda podemos reactivar a pequeños productores, restaurantes y transportes para entregar almuerzos nutritivos a comedores solidarios en la región.</p>
      </div>
      <div className='containerDonates'>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='Huertas' />
            </Link>
            <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
          
            <img className='imgDonate' src={fotoprueba} alt='almuerzos' />
          </Link>
          <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='despensa' />
          </Link>
          <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='talento' />
          </Link>
          <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='conocimiento' /> 
          </Link>
          <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
        </div> 
      </div>
      <Link to="/">
          <button className="btnDonation">Como Ayudar</button>
        </Link>
    </div>
  );
}

export default DonateSection;