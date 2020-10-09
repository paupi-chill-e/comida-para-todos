import React from 'react';
import './styles/whatWeArchived.css';
import photo from '../../img/gato.jpg';

function WhatWeArchived() {
  return (
    <div className='sectionWhatWeArchived'>
      <h1 className='title'>NUESTRA RED HA LOGRADO</h1>
      <div className='containerWhatWeArchived'>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived'/>
        </div>
        <p className='textx'>97.644
        <br/>
        Almuerzos Solidarios</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived' />
        </div>
        <p className='textx'>19
        <br/>
        Restaurantes colaboradores</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived'/>
        </div>
        <p className='textx'>19
        <br/>
        Pequeños productores</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived'/>
        </div>
        <p className='textx'>8
        <br/>
        Transportista</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived'/>
        </div>
        <p className='textx'>28
        <br/>
        Comedores comunitarios</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived'/>
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