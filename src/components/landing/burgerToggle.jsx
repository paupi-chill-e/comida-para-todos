import { Link } from 'react-router-dom';
import React from 'react';
import './styles/burguerToggle.css';

const BurguerToggle = (props) => {
  const classToogle = props.burgerOn === true ? 'toggleVisible' : 'toggleHidden'
  return (
    <div className='containerBurguerToggle'>
      <div className={classToogle}>
        <Link to="/">
          <p className='textBurgerToggle'>Quienes somos</p>
        </Link>
        <Link to="/">
          <p className='textBurgerToggle'>Objetivos</p>
        </Link>
        <Link to="/">
          <p className='textBurgerToggle'>Transparencia</p>
        </Link>
      </div>
    </div>
  );
}

export default BurguerToggle;


