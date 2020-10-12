/* import React, { Component } from 'react';
import ReactTable from 'react-table'
// import 'react-table/react-table.css'
import firebase from '../../config'

class AppExel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Despensas: []
    }
  }

  componentWillMount(){
    this.getDespensas()
  }

  getDespensas() {
    let Despensas = []
    firebase.database().ref(`Despensas/`).once('value', snapshot => {
      snapshot.forEach(snap => {
        Despensas.push(snap.val())
      })
      this.setState({
        Despensas
      })
    })
  }

  render() {
    const DespensasColumns = [
      {
        Header: "Nombre",
        columns: [
          {
            Header: "Nombre",
            id: "nombreCompleto",  
            accessor: d => d.nombreCompleto
          },
          {
            Header: "Correo",
            id: "correo",  
            accessor: d => d.correo
          }
        ]
      },
      {
        Header: "Comuna",
        columns: [
          {
            Header: "Comuna",
            id: "comuna",  
            accessor: d => d.comuna
          }
        ]
      }
    ]
    return (
      <div style={style}>
        <div>
          <h1>Donaciones Comida para todos</h1>
          <button>Export to Excel</button>
          <ReactTable
            style={{marginLeft:'-40%', marginRight:'-40%'}}
            data={this.state.Despensas}
            columns={DespensasColumns}
          />
        </div>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center',
}

export default AppExel; */