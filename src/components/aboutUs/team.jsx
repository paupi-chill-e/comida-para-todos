import React from 'react';
import rafa from '../../img/AboutUs/Team/rafa.jpg';
import enrique from '../../img/AboutUs/Team/enrique.JPG';
import seba from '../../img/AboutUs/Team/seba.png';
import cami from '../../img/AboutUs/Team/cami.jpeg';
import take from '../../img/AboutUs/Team/Take.png';
import lou from '../../img/AboutUs/Team/LOUISA.jpeg';
import ale from '../../img/AboutUs/Team/ale.JPG';
import ele from '../../img/AboutUs/Team/Eleanore.jpg';
import enzo from '../../img/AboutUs/Team/ENZO.JPG';
import majo from '../../img/AboutUs/Team/majo.png';
import hans from '../../img/AboutUs/Team/HANS.JPG';
import carlos from '../../img/AboutUs/Team/carlos.png';

import './styles/team.css';

function Team() {
  return (
    <div className='sectionTeam'>
      <h1 className='titleTeam'>EQUIPO</h1>
      <div className='containerTeam'>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={rafa} className='photo'/>
          </div>
          <p className='textTeam'>Rafael Rincón</p>
          <p>Director Ejecutivo</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={enrique} className='photo'/>
          </div>
          <p className='textTeam'>Enrique Gellona</p>
          <p>Dir. de Finanzas y Administración</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={seba} className='photo'/>
          </div>
          <p className='textTeam'>Sebastián Gatica</p>
          <p>Dir. de Innovación Social</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={cami} className='photo'/>
          </div>
          <p className='textTeam'>Camila Moreno</p>
          <p>Coord. General</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={take} className='photo'/>
          </div>
          <p className='textTeam'>Takehiro Kadena</p>
          <p>Coord. Territorial</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={lou} className='photo'/>
          </div>
          <p className='textTeam'>Louisa Fernández</p>
          <p>Coord. Territorial</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={ale} className='photo'/>
          </div>
          <p className='textTeam'>Alejandra Vidales</p>
          <p>Coord. Social</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={ele} className='photo'/>
          </div>
          <p className='textTeam'>Eleanore Hendersson</p>
          <p>Coord. Voluntariado</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={enzo} className='photo'/>
          </div>
          <p className='textTeam'>Enzo Lambertini</p>
          <p>Coord. de Administración</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={majo} className='photo'/>
          </div>
          <p className='textTeam'>María José de la Fuente</p>
          <p>Coord. de Proyectos</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={hans} className='photo'/>
          </div>
          <p className='textTeam'>Hans Rautenberg</p>
          <p>Asesor Estratégico y Financiero</p>
        </div>
        <div className='eachTeamMate'>
          <div className='containerPhotoTeam'>
            <img src={carlos} className='photo'/>
          </div>
          <p className='textTeam'>Carlos Román</p>
          <p>Consultor Estratégico</p>
        </div>
      </div>
    </div>
  );
}

export default Team;