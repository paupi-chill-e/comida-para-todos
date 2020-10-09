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
          <p className='textTeam'>Rafael Rincón</p>
          <p>Director Ejecutivo</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={photo} className='photo'/>
          </div>
          <p className='textTeam'>Enrique Gellona</p>
          <p>Dir. de Finanzas y Administración</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={photo} className='photo'/>
          </div>
          <p className='textTeam'>Juan Gatica</p>
          <p>Dir. de Innovación Social</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={photo} className='photo'/>
          </div>
          <p className='textTeam'>Camila Moreno</p>
          <p>Coord. General</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={photo} className='photo'/>
          </div>
          <p className='textTeam'>Takehiro Kadena</p>
          <p>Coord. Territorial</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={photo} className='photo'/>
          </div>
          <p className='textTeam'>Louisa Fernández</p>
          <p>Coord. Territorial</p>
        </div>
      </div>
    </div>
  );
}

export default Team;