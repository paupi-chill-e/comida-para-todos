import React from 'react';
import logo from '../../img/logo.png';
import '../landing/styles/header.css';

const HeaderIntranet = () => {
    return (
      <header className='header'>
        <div className='containerLogoHome'>
            <img src={logo} alt="logo" className='logoHome' />
        </div>
        {/* aqui va el burguer intranet */}
      </header>
    )
  }
  
  export default HeaderIntranet; 