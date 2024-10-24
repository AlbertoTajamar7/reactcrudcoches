import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


export class HomeCoches extends Component {
  state ={
    coches : []
  }

  loadCoches =()=>{
    let request = "api/Coches"
    let url = Global.apiCoches+request
    axios.get(url).then(response =>{
      console.log("leyendo")
      this.setState({
        coches:response.data
      })
      console.log(response.data)
    })

  }
  componentDidMount=()=>{
    this.loadCoches();
  }

  render() {
    return (
      <div>
        <h1>Home coches</h1>
        <button><NavLink className="nav-link dropdown-toggle" to="/crear/">Crear un elemento</NavLink></button>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID coche</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody></tbody>
            <tbody class="thead-light">
              {
                this.state.coches.map((coche,index)=>{
                  return(
                    <tr key={index} >
                    <td>{coche.idCoche}</td>
                    <td>{coche.marca}</td>
                    <td>{coche.modelo}</td>
                    <td>{coche.conductor}</td>
                    <td><img src={coche.imagen} width="20%"/></td>
                    <td><button onClick={()=>{
                      let request ="api/Coches/DeleteCoche/"+coche.idCoche
                      let url = Global.apiCoches+request
                      console.log(url)
                      axios.delete(url).then(response=>{
                        alert("Elemento Borrado")
                        this.loadCoches();
                      })
                    }}>Borrar</button></td>
                    <td><button>Modificar</button></td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
    )
  }
}
