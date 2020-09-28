import React from 'react';
import videox from '../../img/comidaparatodos.mp4';
import './styles/video.css'; 


function Video() {
  return (
    <div className='containerVideoHome'>
      <video className='videoHome' src={videox} autoPlay muted loop />
    </div>
  );
}

export default Video;
