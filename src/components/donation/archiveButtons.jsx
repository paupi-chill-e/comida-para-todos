import React, { useState } from 'react';
import DonateEducation from './donateEducation';
import DonateHuertas from './donateHuertas';
// import DonateTalent from './donateTalent';
// import DonateFood from './donateFood';
import './styles/archiveButtons.css'
import DonateTalent from './donateTalent';

function ArchiveButtons() {
  
  const [formToShow, setFormToShow] = useState(null);
  const [classToShow, setClassToShow] = useState(null)

  const handleHuertas=()=>{
    setFormToShow(<DonateHuertas/>)
    setClassToShow('Huertas')
  }
  const handleTalent=()=>{
    // setFormToShow(<DonateTalent/>)
    setClassToShow('Talent')
  }
  const handleFood=()=>{
    // setFormToShow(<DonateFood/>)
    setClassToShow('Food')
  }
  const handleEducation=()=>{
    setFormToShow(<DonateEducation/>)
    setClassToShow('Education')
  }


  const classButtonArchiveHuerta = classToShow === 'Huertas'?'archiveBtnOn': 'archiveBtnOff';
  // const classButtonArchiveTalent = classToShow === 'Talent' ?'archiveBtnOn': 'archiveBtnOff';
  // const classButtonArchiveFood = classToShow === 'Food'?'archiveBtnOn': 'archiveBtnOff';
  const classButtonArchiveEducation = classToShow === 'Education'?'archiveBtnOn': 'archiveBtnOff';

  console.log(formToShow)
  
  return (
    <div className='containerSectionArchiveBtnAndDonateForms'>
        <div className='sectionArchiveButtons'>
          <button className={classButtonArchiveHuerta} onClick={handleHuertas}>Huertas</button>
          <button className='archiveBtnOff' onClick={handleTalent}>Talento</button>
          <button className='archiveBtnOff' onClick={handleFood}>Despensa</button>
          <button className={classButtonArchiveEducation} onClick={handleEducation}>Educación</button>
        </div>
        {formToShow}

    </div>
  
  );
}


export default ArchiveButtons;