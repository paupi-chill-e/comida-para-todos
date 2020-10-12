import React, { useState, useContext, useEffect } from 'react';
import DonateEducation from './donateEducation';
import DonateHuertas from './donateHuertas';
import DonateTalent from './donateTalent';
import DonateFood from './donateFood';
import {ShowContext} from '../../App'
import './styles/archiveButtons.css';
import { animateScroll as scroll} from 'react-scroll';


function ArchiveButtons() {
  
  const [formToShow, setFormToShow] = useContext(ShowContext);

  useEffect(()=>{
    window.scrollTo(0,0)}
  )

  const classButtonArchiveHuerta = formToShow === 'Huertas'?'archiveBtnOn': 'archiveBtnOff';
  const classButtonArchiveTalent = formToShow === 'Talent' ?'archiveBtnOn': 'archiveBtnOff';
  const classButtonArchiveFood = formToShow === 'Food'?'archiveBtnOn': 'archiveBtnOff';
  const classButtonArchiveEducation = formToShow === 'Education'?'archiveBtnOn': 'archiveBtnOff';

  let form = '';

  if (formToShow=== 'Huertas') form=<DonateHuertas/>
  if (formToShow=== 'Talent') form=<DonateTalent/>
  if (formToShow=== 'Food') form=<DonateFood/>
  if (formToShow=== 'Education') form=<DonateEducation/>


  
  return (
    <div className='containerSectionArchiveBtnAndDonateForms'>
        <div className='sectionArchiveButtons'>
          <button className={classButtonArchiveHuerta} onClick={()=>{setFormToShow('Huertas')}}>Huertas</button>
          <button className={classButtonArchiveTalent} onClick={()=>{setFormToShow('Talent')}}>Talento</button>
          <button className={classButtonArchiveFood} onClick={()=>{setFormToShow('Food')}}>Despensa</button>
          <button className={classButtonArchiveEducation} onClick={()=>{setFormToShow('Education')}}>Educación</button>
        </div>
        {form}  
    </div>
  );
}

export default ArchiveButtons;