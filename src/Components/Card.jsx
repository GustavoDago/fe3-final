import React from "react";
import imagenDentista from "./utils/doctor.jpg"

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
            <img src={imagenDentista} alt="dentista-detail" />
            <p>{name}</p>
            <p>{username}</p>
            <p>{id} </p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
