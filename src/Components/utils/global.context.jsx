import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {theme: false, data: []}

export const ContextGlobal = createContext();

export  const  ContextProvider = ({ children }) => {
  
  const [activado, setActivado] = useState(initialState.theme)
  const [dentistas, setDentistas] = useState(initialState.data);

  //traigo los datos de la API
  const getData = async () => {
    const datos = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const convert = await datos.json();
    setDentistas(convert);
  };

  useEffect(() => {
    getData();
  });

//desarrollo el cambio de tema
  const cambiarTheme = (e)=> {
    setActivado(current => !current)}

  return (
    //pongo a disposición los datos que quiero compartir del context
    <ContextGlobal.Provider value={{activado,cambiarTheme, dentistas}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates =()=>{
  return useContext(ContextGlobal)
}