import React, { Fragment, useState, useEffect } from 'react';
import { firebase } from '../../firebase'

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
      <p>Mostrar los postulantes</p>
      {/* <button onClick={handleHuertaShow}>Huerta</button>
      <button onClick={handleEducationShow}>Educación</button>
      <button onClick={handleTalentShow}>Talento</button> */}
      <button onClick={handleFoodShow}>Despensa</button>
    </Fragment>
  );
}

export default GetData;