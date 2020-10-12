import React, { Fragment, useState, useEffect } from 'react';
import { firebase } from '../../firebase';
import './styles/getData.css';

const GetData = () => {
  const [showTable, setShowTable] = useState(null)

  const handleFoodShow = () => {
    const obtenerDatos = async () => {
      const db = firebase.firestore()
      try {
        const data = await db.collection('Despensa').get()
        const arrayData = data.docs.map(doc => (doc.data()))
        console.log(arrayData)
      } catch {
        console.log('error')
      }
    }
    obtenerDatos()

  }

  return (
    <Fragment>
      <div className='contentIntranetForms'>
        <div className='textIntranetForms'>
          <h1 className='titleIntranetForms'>¡Bienvenido!</h1>
          <p className='paragraphIntranetForms'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div>
        <div className='containerBtnsFormsIntranet'>
          {/* <button onClick={handleHuertaShow}>Huerta</button>
          <button onClick={handleEducationShow}>Educación</button>
          <button onClick={handleTalentShow}>Talento</button> */}
          <button onClick={handleFoodShow}>Despensa</button>
        </div>
      </div>
    
    </Fragment>
  );
}

export default GetData;