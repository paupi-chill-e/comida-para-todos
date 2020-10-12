import React, { Fragment, useState,useEffect} from 'react';
import { firebase } from '../../firebase';
import ReactTable from 'react-table'
import IntranetDataExport from './intranetDataExport'

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
        
            {
              showTable.map(data => (
                
                <div className="list-group-item" key={data.id}>
                <div className="box">
                  <p>{data.nombreCompleto}</p>
                  </div>
                  <div className="box">
                  <p>{data.correo}</p>
                  </div>
                </div>
                ))
            }
        

  <p>Mostrar los postulantes</p>
      {/* <button onClick={handleHuertaShow}>Huerta</button>
      <button onClick={handleEducationShow}>Educación</button>
      <button onClick={handleTalentShow}>Talento</button> */}
      <button onClick={props.obtenerDatos}>Despensa</button>

      <IntranetDataExport/>
      </Fragment>
   
  )

}

 export default GetData