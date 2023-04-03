import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGlobalStates } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentista, setDentista] = useState([])
  const { id } = useParams()
  console.log(id)
  const {state, setState} =useGlobalStates
  
  useEffect(()=>{
    const obtenerDentista = async()=>{
          const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()
        console.log(data);
        setDentista(data)
    }
      obtenerDentista()
  }, [id])


  return (
    <>
      <h1>Detalle Dentista id {id} </h1>
      <h2>Nombre: {dentista.name}</h2>
      <h2>Email: {dentista.email}</h2>
      <h2>Teléfono: {dentista.phone}</h2>
      <h2>Sitio web: {dentista.website}</h2>
    </>
  )
}

export default Detail