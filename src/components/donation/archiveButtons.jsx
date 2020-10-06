import React from 'react';
import DonateFood from './donateFood';
import DonateHuertas from './donateHuertas';
import './styles/archiveButtons.css'

function ArchiveButtons() {
  return (
    <div>
      <button>Huertas</button>
      <button>Talento</button>
      <button>Despensa</button>
      <button>Educación</button>
      <DonateHuertas/>
      <DonateFood/>
    </div>
  );
}

export default ArchiveButtons;