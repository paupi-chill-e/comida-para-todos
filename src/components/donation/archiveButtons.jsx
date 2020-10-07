import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DonateFood from './donateFood';
import DonateHuertas from './donateHuertas';
import './styles/archiveButtons.css'

function ArchiveButtons() {
  return (

    <Fragment>
            <div className='containerSectionArchiveBtnAndDonateForms'>
            <button onClick={DonateHuertas} className='archiveBtn'>Huertas
               
                </button>
              
               <button onClick={DonateFood} className='archiveBtn'>Despensa
              </button>
            </div>
          <br/>
          <br/>
          <br/>
          <br/>
        </Fragment>
  
  );
}


export default ArchiveButtons;