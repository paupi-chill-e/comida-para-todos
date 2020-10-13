import React from 'react';
import './styles/whatWeArchived.css';
import photo from '../../img/foto.jpeg';

function WhatWeArchived() {
  return (
    <div className='sectionWhatWeArchived'>
      <h1 className='title'>Qué hemos logrado</h1>
      <div className='containerWhatWeArchived'>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived'/>
        </div>
        <p className='text'>8.888</p>
        <p>Almuerzos</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived' />
        </div>
        <p className='text'>8.888</p>
        <p>Almuerzos</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={photo} className='photowahtwearchived'/>
        </div>
        <p className='text'>8.888</p>
        <p>Almuerzos</p>
      </div>
      </div>
    </div>
  );
}

export default WhatWeArchived;