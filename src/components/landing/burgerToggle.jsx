import React from 'react';
import { Link } from 'react-router-dom';
import './styles/burguerToggle.css';

const BurguerToggle = (props) => {
  const classToogle = props.burgerOn === true ? 'toggleVisible' : 'toggleHidden'
  return (
    <div className='containerBurguerToggle'>
      <div className={classToogle}>
        <Link to="/Nosotros">
          <a className='textBurgerToggle'>Quiénes somoss</a>
        </Link>
        <Link to="/Nosotros">
          <p className='textBurgerToggle'>Qué hacemos</p>
        </Link>
        <Link to="/Donaciones">
          <p className='textBurgerToggle'>Cómo ayudar</p>
        </Link>
        <Link to="/Nosotros">
          <p className='textBurgerToggle'>Transparencia</p>
        </Link>
        <Link to="/Donaciones">
          <p className='textBurgerToggle'>DONAR ALMUERZOS</p>
        </Link>
      </div>
    </div>
  );
}

export default BurguerToggle;


