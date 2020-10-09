import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import fotoprueba from '../../img/foto.jpeg';
import './styles/donateSection.css'
import { ShowContext } from '../../App'
import DonateEducation from '../donation/donateEducation';
import DonateHuertas from '../donation/donateHuertas';
import DonateTalent from '../donation/donateTalent';
import DonateFood from '../donation/donateFood';

function DonateSection() {

  const [formToShow, setFormToShow] = useContext(ShowContext);

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
            <img  className='imgDonate' src={fotoprueba} alt='almuerzos' />
            <div className='iconPlusDonate'>
              <p  className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
      <div className='containerDonates'>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img onClick={()=>setFormToShow('Food')} className='imgDonate' src={fotoprueba} alt='despensa' />
            <div className='iconPlusDonate'>
              <p onClick={()=>setFormToShow('Food')} className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img onClick={()=>setFormToShow('Talent')} className='imgDonate' src={fotoprueba} alt='talento' />
            <div className='iconPlusDonate'>
              <p onClick={()=>setFormToShow('Talent')} className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img onClick={()=>setFormToShow('Education')} className='imgDonate' src={fotoprueba} alt='educacion' />
            <div className='iconPlusDonate'>
              <p onClick={()=>setFormToShow('Education')} className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img onClick={()=>setFormToShow('Huertas')} className='imgDonate' src={fotoprueba} alt='huertas' />
            <div className='iconPlusDonate'>
              <p onClick={()=>setFormToShow('Huertas')} className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/Donaciones">
        <button className="btnDonation">Como Ayudar</button>
      </Link>
    </div>
  );
}

export default DonateSection;