import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const[dentistas, setDentistas] = useState([])

  const getData = async () => {
  const data = await
  fetch(`https://jsonplaceholder.typicode.com/users`)
  const convert = await data.json();
  setDentistas(convert)
}

useEffect(() => {
  getData();
  });

  return (
    <main className="" >
      <h1>Bienvenidos</h1>
      <div className='card-grid'>
        {dentistas.map(dentista =>(<Link key={dentista.id} to={'/dentist/'+ dentista.id} >< Card name={dentista.name} username={dentista.username} id={dentista.id} /></Link>))}

      </div>
    </main>
  )
}

export default Home