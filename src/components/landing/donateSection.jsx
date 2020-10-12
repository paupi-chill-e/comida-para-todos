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

  // me traigo valores del contexto
  const { formToShow, positionScrollForm } = useContext(ShowContext);

  // le doy un valor a los estados de cada objeto
  const [formToShowValue, setFormToShowValue] = formToShow;
  const [positionScrollFormValue, setPositionScrollFormValue] = positionScrollForm;

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
        <Link to="/Donaciones" onClick={() => { setFormToShowValue('Huertas'); setPositionScrollFormValue(0) }}>
          <img className='imgDonate' src={almuerzos} alt='almuerzos' />
          <div className='iconPlusDonate'>
            <p className='donateIcon'>&#43;</p>
          </div>
        </Link>
      </div>
      <div className='containerDonates'>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones" onClick={() => { setFormToShowValue('Food'); setPositionScrollFormValue(390) }}>
            <img className='imgDonate' src={despensa} alt='despensa' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>&#43;</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones" onClick={() => { setFormToShowValue('Talent'); setPositionScrollFormValue(390) }}>
            <img className='imgDonate' src={talento} alt='talento' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>&#43;</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones" onClick={() => { setFormToShowValue('Education'); setPositionScrollFormValue(390) }}>
            <img className='imgDonate' src={educacion} alt='educacion' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>&#43;</p>
            </div>
          </Link>
        </div>
        <div className='eachDonateContainer'>
          <Link to="/Donaciones" onClick={() => { setFormToShowValue('Huertas'); setPositionScrollFormValue(390) }}>
            <img className='imgDonate' src={huertas} alt='huertas' />
            <div className='iconPlusDonate'>
              <p className='donateIcon'>&#43;</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='btnSectionPage'>
        <Link to="/Donaciones" onClick={() => { setFormToShowValue('Huertas'); setPositionScrollFormValue(0) }}>
          <div className='btnSectionMargin'>
            <button className="btnDonation">COMO AYUDAR</button>
          </div>
        </Link>
      </div>
    </div >
  );
}

export default DonateSection;