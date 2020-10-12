import React from 'react';
import './styles/whatWeArchived.css';
import lunch from '../../img/AboutUs/whatWeArchived/almuerzoSolidario.png';
import restorant from '../../img/AboutUs/whatWeArchived/restaurant.png';
import peque from '../../img/AboutUs/whatWeArchived/pequeProduc.png';
import transportis from '../../img/AboutUs/whatWeArchived/transporti.png';
import comedor from '../../img/AboutUs/whatWeArchived/comedor.png';
import region from '../../img/AboutUs/whatWeArchived/region.png';

function WhatWeArchived() {
  return (
    <div className='sectionWhatWeArchived'>
      <h1 className='title'>NUESTRA RED HA LOGRADO</h1>
      <div className='containerWhatWeArchived'>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={lunch} className='photowahtwearchived'/>
        </div>
        <p className='textx'>97.644
        <br/>
        Almuerzos Solidarios</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={restorant} className='photowahtwearchived' />
        </div>
        <p className='textx'>19
        <br/>
        Restaurantes colaboradores</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={peque} className='photowahtwearchived'/>
        </div>
        <p className='textx'>19
        <br/>
        Pequeños productores</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={transportis} className='photowahtwearchived'/>
        </div>
        <p className='textx'>8
        <br/>
        Transportista</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={comedor} className='photowahtwearchived'/>
        </div>
        <p className='textx'>28
        <br/>
        Comedores comunitarios</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={region} className='photowahtwearchived'/>
        </div>
        <p className='textx'>4
        <br/>
        Regiones</p>
      </div>
      </div>
    </div>
  );
}

export default WhatWeArchived;