import React from 'react';
import { Link } from 'react-router-dom';
import fotoprueba from '../../img/foto.jpeg';
import './styles/donateSection.css'

function DonateSection() {
  return (
    <div className='donateSectionPage'>
    <div className='textDonateSectionPage'>
     <p>Garantizar comida para todos,<strong> es un esfuerzo de equipo.</strong> </p>
     
      <Link to="/">
          <button className="btnDonation">Hazte Parte</button>
        </Link>
      <p>Con tu ayuda<strong> podemos reactivar</strong>  a pequeños productores, restaurantes y transportes para entregar almuerzos nutritivos a comedores solidarios en la región.</p>
      <p>Fortalecemos a las comunidades para proteger su seguridad alimentaria <strong>¡Descubre cómo puedes ayudar!</strong></p>
      </div>
      <div className='singleContainerDonate'>
          <Link to="/Donaciones">
            <img className='imgDonate' src={fotoprueba} alt='Huertas' />
            </Link>
            <div className='iconPlusDonate'>
              <p className='donateIcon'>+</p>
            </div>
        </div>
      <div className='containerDonates'>
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