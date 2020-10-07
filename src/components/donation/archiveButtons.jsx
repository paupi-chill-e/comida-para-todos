import React from 'react';
import DonateHuertas from './donateHuertas';
import './styles/archiveButtons.css'
import DonateTalent from './donateTalent';

function ArchiveButtons() {
  return (
    <div className='containerSectionArchiveBtnAndDonateForms'>
        <div className='sectionArchiveButtons'>
          <button className='archiveBtn'>Huertas</button>
          <button className='archiveBtn'>Talento</button>
          <button className='archiveBtn'>Despensa</button>
          <button className='archiveBtn'>Educación</button>
        </div>
        {/* <DonateHuertas/> */}
        <DonateTalent/>
    </div>
  
  );
}

export default ArchiveButtons;