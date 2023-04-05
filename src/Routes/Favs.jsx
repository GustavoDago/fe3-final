import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const destacadosGuardados = JSON.parse(localStorage.getItem("Destacados")) || [];
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {destacadosGuardados.map((dentista) => (
            <Card key={dentista.id}
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
            />
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
