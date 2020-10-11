import React from 'react';
import logox from '../../img/logo.png'
import './styles/header.css';
import IconBurgerToggle from './iconBurgerToggle';

const Header = () => {
  return (
    <header className='header'>
      <div className='containerLogoHome'>
        <img src={logox} alt="" className='logoHome' />
      </div>
      <IconBurgerToggle />
    </header>
  )
}

export default Header; 
