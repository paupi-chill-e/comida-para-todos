import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import almuerzos from '../../img/Landing/Donar/almuerzo.jpg';
import despensa from '../../img/Landing/Donar/despensa.jpg';
import talento from '../../img/Landing/Donar/talento.jpg';
import educacion from '../../img/Landing/Donar/educacion.jpg';
import huertas from '../../img/Landing/Donar/huertas.jpg';
import './styles/donateSection.css';
import { ShowContext } from '../../App';
// import DonateEducation from '../donation/donateEducation';
// import DonateHuertas from '../donation/donateHuertas';
// import DonateTalent from '../donation/donateTalent';
// import DonateFood from '../donation/donateFood';

function DonateSection() {

  const [formToShow, setFormToShow] = useContext(ShowContext);

  return (
    <div className='donateSectionPage'>
    <div className='textDonateSectionPage'>
     <p className='titledonatesection'>Garantizar comida para todos,<strong> es un esfuerzo de equipo.</strong> </p>
     
      <Link to="/">
          <button className="btnDonation">HAZTE PARTE</button>
        </Link>
      <h2>¡Descubre cómo puedes ayudar!</h2>
      <p className='moretext'>Con tu ayuda<strong> podemos reactivar</strong>  a pequeños productores, restaurantes y transportes para entregar <strong>almuerzos nutritivos</strong> a comedores solidarios y <strong>fortalecer a sus comunidades.</strong></p> 
      </div>
      <div className='singleContainerDonate'>
          <Link to="/Donaciones">
            <img  className='imgDonate' src={almuerzos} alt='almuerzos' />
            <div className='iconPlusDonate'>
              <p  className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
      <div className='containerDonates'>
        <div className='eachDonateContainer'>
          
          <Link to="/Donaciones">
            <img onClick={()=>setFormToShow('Food')} className='imgDonate' src={despensa} alt='despensa'/>
            <div className='iconPlusDonate'>
              <p onClick={()=>setFormToShow('Food')} className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img onClick={()=>setFormToShow('Talent')} className='imgDonate' src={talento} alt='talento' />
            <div className='iconPlusDonate'>
              <p onClick={()=>setFormToShow('Talent')} className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img onClick={()=>setFormToShow('Education')} className='imgDonate' src={educacion} alt='educacion' />
            <div className='iconPlusDonate'>
              <p onClick={()=>setFormToShow('Education')} className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones">
            <img onClick={()=>setFormToShow('Huertas')} className='imgDonate' src={huertas} alt='huertas' />
            <div className='iconPlusDonate'>
              <p onClick={()=>setFormToShow('Huertas')} className='donateIcon'>+</p>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/Donaciones">
        <button className="btnDonation2">CÓMO AYUDAR</button>
      </Link>
    </div>
  );
}

export default DonateSection;