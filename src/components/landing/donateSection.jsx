import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import almuerzos from '../../img/Landing/Donar/almuerzo.jpg';
import despensa from '../../img/Landing/Donar/despensa.jpg';
import talento from '../../img/Landing/Donar/talento.jpg';
import educacion from '../../img/Landing/Donar/educacion.jpg';
import huertas from '../../img/Landing/Donar/huertas.jpg';
import './styles/donateSection.css';
import { ShowContext } from '../../App';

function DonateSection() {

  const [formToShow, setFormToShow] = useContext(ShowContext);


  return (
    <div className='donateSectionPage'>
      <div className='textDonateSectionPage'>
        <p className='titledonatesection'>Garantizar comida para todos,<strong> es un esfuerzo de equipo.</strong> </p>
        <Link to="/Donaciones" >
          <button className="btnDonation">HAZTE PARTE</button>
        </Link>
        <h2>¡Descubre cómo puedes ayudar!</h2>
        <p className='moretext'>Con tu ayuda<strong> podemos reactivar</strong> a pequeños productores, restaurantes y transportes para entregar <strong>almuerzos nutritivos</strong> a comedores solidarios y <strong>fortalecer a sus comunidades.</strong></p>
      </div>
      <div className='singleContainerDonate'>
        <Link to="/Donaciones">
          <img className='imgDonate' src={almuerzos} alt='almuerzos' />
          <div className='iconPlusDonate'>
            <p className='donateIcon'>&#43;</p>
          </div>
        </Link>
      </div>
      <div className='containerDonates'>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones" onClick={() => { setFormToShow('Food');  }}>
            <img className='imgDonate' src={despensa} alt='despensa' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>&#43;</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones" onClick={() => { setFormToShow('Talent'); }}>
            <img className='imgDonate' src={talento} alt='talento' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>&#43;</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones" onClick={() => {setFormToShow('Education'); }}>
            <img className='imgDonate' src={educacion} alt='educacion' />
            <div className='iconPlusDonate'>
              <p  className='donateIcon'>&#43;</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones" onClick={() =>{setFormToShow('Huertas'); }}>
            <img className='imgDonate' src={huertas} alt='huertas' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>&#43;</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='btnSectionPage'>
        <Link to="/Donaciones">
          <div className='btnSectionMargin'>
            <button className="btnDonation">COMO AYUDAR</button>
          </div>
        </Link>
      </div>
    </div >
  );
}

export default DonateSection;