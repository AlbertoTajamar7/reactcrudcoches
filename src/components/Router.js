import React, { Component } from 'react'
import  { BrowserRouter,Routes,Route, useParams} from 'react-router-dom'
import  MenuCoches from './MenuCoches'
import { HomeCoches } from './HomeCoches'
import CrearCoche from './CrearCoche'

export class Router extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
        <MenuCoches/>
        <Routes>
          <Route path='/' element={<HomeCoches/>}></Route>
          <Route path='/crear/' element={<CrearCoche/>}></Route>
        </Routes>
      </BrowserRouter>
      
      </div>
    )
  }
}
