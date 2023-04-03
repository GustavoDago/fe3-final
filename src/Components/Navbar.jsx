import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const [activado, setActivado] = useState(false)
  const cambiarTheme = (e)=> setActivado(current => !current)
  return (
    <nav className={activado?'dark':""} >
      <Link to="/home">Inicio</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/dentist/:id">Detalle del dentista</Link>
      <Link to="/favs">Destacados</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button
      onClick={cambiarTheme}
      >Change theme</button>
    </nav>
  )
}

export default Navbar