import React, { Fragment, useState, useEffect } from 'react';
import { firebase } from '../../firebase';
import './styles/getData.css';

 const GetData = (props) => {

  const [showTable, setShowTable] = useState([] )
  useEffect(() => {
 
    const obtenerDatos = async () => {
      const db = firebase.firestore()
      try {
        const data = await db.collection('Despensa').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        console.log(arrayData)
        setShowTable(arrayData)
      } catch {
        console.log('error')
      }
    }
  
    obtenerDatos()

  }, [])
    
 
  return (
    <Fragment>
      <div className='contentIntranetForms'>
        <div className='textIntranetForms'>
          <h1 className='titleIntranetForms'>¡Bienvenido!</h1>
          <p className='paragraphIntranetForms'>Aquí podrás visualizar en forma de tabla los respectivos postulantes, tan solo haciendo click en los botones adyacentes.</p>
        </div>
        <div className='btnsIntranetForms'>
          <button className='archiveBtnOff' >Huerta</button>
          <button className='archiveBtnOff' >Educación</button>
          <button className='archiveBtnOff' >Talento</button>
          <button onClick={handleFoodShow} className='archiveBtnOff' >Despensa</button>
        </div>
      </div>
    
    </Fragment>
  );
}

 export default GetData