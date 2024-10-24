import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';

export default class CrearCoche extends Component {
    cajaId= React.createRef();
    cajaMarca= React.createRef();
    cajaModelo= React.createRef();
    cajaConductor= React.createRef();
    cajaImagen= React.createRef();
    insertarCoches=(e)=>{
      e.preventDefault();
      let id = parseInt(this.cajaId.current.value)
      let marca = this.cajaMarca.current.value
      let modelo = this.cajaModelo.current.value
      let conductor = this.cajaConductor.current.value
      let imagen = this.cajaImagen.current.value
      const coche={
        idCoche: id,
        marca: marca,
        modelo: modelo,
        conductor: conductor,
        imagen: imagen
      }
      let request = "api/Coches/InsertCoche";
      let url = Global.apiCoches+request
      axios.post(url,coche).then(response=>{
        alert("Coche insertado")
      })
    }

  render() {
    return (
      <div>
        <h1>Crea un Elemento</h1>
        <form>
            <label>ID Coche</label>
            <input type='text' ref={this.cajaId}></input><br/>
            <label>Marca</label>
            <input type='text' ref={this.cajaMarca}></input><br/>
            <label>Modelo</label>
            <input type='text' ref={this.cajaModelo}></input><br/>
            <label>Conductor</label>
            <input type='text' ref={this.cajaConductor}></input><br/>
            <label>Imagen</label>
            <input type='text' ref={this.cajaImagen}></input><br/>
            <button onClick={this.insertarCoches}>Insertar</button>
        </form>
      </div>
    )
  }
}
