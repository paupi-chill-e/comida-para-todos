import React from 'react';
import photo from '../../img/foto.jpeg';
import './styles/team.css';

function Team() {
  return (
    <div className='sectionTeam'>
      <h1 className='title'>EQUIPO</h1>
      <div className='containerTeam'>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={photo} className='photo'/>
          </div>
          <p className='textTeam'>Juan Perez</p>
          <p>Colaborador</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={photo} className='photo'/>
          </div>
          <p className='textTeam'>Juan Perez</p>
          <p>Colaborador</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={photo} className='photo'/>
          </div>
          <p className='textTeam'>Juan Perez</p>
          <p>Colaborador</p>
        </div>
      </div>
    </div>
  );
}

export default Team;