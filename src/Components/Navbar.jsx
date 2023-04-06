import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  //traigo los datos que necesito del context
  const{activado, themeDispatch} = useGlobalStates()
  const cambiarTheme = ()=> {
    if(activado) themeDispatch({type: 'SWITCH_LIGHT'})
    else themeDispatch({type: 'SWITCH_DARK'})
  }
  return (
    //aplico el cambio de tema
    <nav className={activado?'dark':""} >
      <Link to="/home">Inicio</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/dentist/:id">Detalle del dentista</Link>
      <Link to="/favs">Destacados</Link>
      <button className={activado?'dark':""}
      onClick={cambiarTheme}
      >{activado ? '😎': '🌛' }</button>
    </nav>
  )
}

export default Navbar