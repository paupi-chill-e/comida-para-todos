import React from 'react';
import DonateFood from './donateFood';
import DonateHuertas from './donateHuertas';
import './styles/archiveButtons.css'

function ArchiveButtons() {
  return (
<<<<<<< HEAD
    <div>
      <button>Huertas</button>
      <button>Talento</button>
      <button>Despensa</button>
      <button>Educación</button>
      <DonateHuertas/>
      <DonateFood/>
=======
    <div className='containerSectionArchiveBtnAndDonateForms'>
        <div className='sectionArchiveButtons'>
          <button className='archiveBtn'>Huertas</button>
          <button className='archiveBtn'>Talento</button>
          <button className='archiveBtn'>Despensa</button>
          <button className='archiveBtn'>Educación</button>
        </div>
        <DonateHuertas/>
>>>>>>> 226bc55c9e28026f7000a4802c18aba1ddbbd90e
    </div>
  
  );
}

export default ArchiveButtons;