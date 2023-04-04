import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const{activado} = useGlobalStates()


  const [dentistas, setDentistas] = useState([]);

  const getData = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const convert = await data.json();
    setDentistas(convert);
  };

  useEffect(() => {
    getData();
  });

  return (
    <main className={activado?'dark':""}>
      <h1>Bienvenidos</h1>
      <div className="card-grid">
        {dentistas.map((dentista) => (
            <Card key={dentista.id}
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
            />
        ))}
      </div>
    </main>
  );
};

export default Home;
