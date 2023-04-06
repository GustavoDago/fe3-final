import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  //traigo los datos que necesito del context
  const {activado, dentistas} = useGlobalStates()

  return (
    //implemento el cambio de tema
    <main >
      <h1 className={activado?'dark':""}>Bienvenidos</h1>
        {/* renderizo las cards */}
      <div className={`card-grid ${activado?'dark':""}`}>
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
