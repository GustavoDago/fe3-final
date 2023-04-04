import React, { useEffect, useState, useReducer } from "react";
import imagenDentista from "./utils/doctor.jpg";
import { Link } from "react-router-dom";
import { useGlobalStates } from './utils/global.context'

const Card = ({ name, username, id }) => {
  const{activado} = useGlobalStates()

  const addFav = () => {
    // Obtener los datos actuales del localStorage
    const destacadosGuardados = JSON.parse(localStorage.getItem("Destacados")) || [];

    // Crear un nuevo objeto con los datos actuales
    const nuevoDestacado = { name, username, id };

    // Agregar el nuevo objeto al array
    const updatedDestacados = [...destacadosGuardados, nuevoDestacado];

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("Destacados", JSON.stringify(updatedDestacados));
  };
  
  return (
    <div className= {`card ${activado?'dark':""}`}>
      <Link key={id} to={"/dentist/" + id}>
        <img src={imagenDentista} alt="dentista-detail" />
        <p>{name}</p>
        <p>{username}</p>
        <p>{id} </p>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
