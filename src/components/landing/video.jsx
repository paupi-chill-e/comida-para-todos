import React from 'react';
// import videox from '../../img/comidaparatodos.mp4';
import banner from '../../img/Banners/landing.gif';
import './styles/video.css'; 


function Video() {
  return (
    <div className='containerVideoHome'>
      <img className='videoHome' src={banner}/>
    </div>
  );
}

export default Video;
