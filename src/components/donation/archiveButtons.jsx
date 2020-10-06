import React from 'react';
import DonateHuertas from './donateHuertas';
import './styles/archiveButtons.css'

function ArchiveButtons() {
  return (
    <div className='containerSectionArchiveBtnAndDonateForms'>
        <div className='sectionArchiveButtons'>
          <button className='archiveBtn'>Huertas</button>
          <button className='archiveBtn'>Talento</button>
          <button className='archiveBtn'>Despensa</button>
          <button className='archiveBtn'>Educación</button>
        </div>
        <DonateHuertas/>
    </div>
  
  );
}

export default ArchiveButtons;