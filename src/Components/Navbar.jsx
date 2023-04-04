import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  //traigo los datos que necesito del context
  const{activado, cambiarTheme} = useGlobalStates()
  return (
    //aplico el cambio de tema
    <nav className={activado?'dark':""} >
      <Link to="/home">Inicio</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/dentist/:id">Detalle del dentista</Link>
      <Link to="/favs">Destacados</Link>
      <button className={activado?'dark':""}
      onClick={cambiarTheme}
      >Cambiar Tema</button>
    </nav>
  )
}

export default Navbar