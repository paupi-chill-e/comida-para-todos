import React from 'react';
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
    </div>
  );
}

export default ArchiveButtons;