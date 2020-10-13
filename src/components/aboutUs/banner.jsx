import React from 'react';
import banner from '../../img/foto.jpeg';
import './styles/banner.css';


function Banner() {
  return (
    <div className='containerBanner'>
       <img src={banner} className='banner'/> 
    </div>
  );
}

export default Banner;