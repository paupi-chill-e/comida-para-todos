import React from 'react';
import logox from '../../img/logo.png'
import './styles/header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='containerLogoHome'>
        <img src={logox} alt="" className='logoHome' />
      </div>
      <div>
        <span>&#9776;</span>
      </div>
    </div>
  )
}

export default Header; 
