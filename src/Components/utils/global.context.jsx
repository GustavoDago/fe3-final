import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const initialState = {theme: false, data: []}

export const ContextGlobal = createContext();

const destReducer = (state, action) => {
  switch(action.type){
      case 'ADD_DEST':
            // Obtengo los datos actuales del localStorage
        const destacadosGuardados = JSON.parse(localStorage.getItem("Destacados")) || [];
            // Creo un nuevo objeto con los datos actuales
        const nuevoDestacado = action.payload;
          // Agrego el nuevo objeto al array
          return [...state, nuevoDestacado]
      default:
          throw new Error
  }
}

export  const  ContextProvider = ({ children }) => {
  
  const [activado, setActivado] = useState(initialState.theme)
  const [dentistas, setDentistas] = useState(initialState.data);
  const [destacadosState, destacadosDispatch] = useReducer(destReducer, initialState.data)
  //traigo los datos de la API
  const getData = async () => {
    const datos = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const convert = await datos.json();
    setDentistas(convert);
  };

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    // Guardo el array actualizado en el localStorage
    localStorage.setItem("Destacados", JSON.stringify(destacadosState));
}, [destacadosState])


//desarrollo el cambio de tema
  const cambiarTheme = (e)=> {
    setActivado(current => !current)}

  return (
    //pongo a disposición los datos que quiero compartir del context
    <ContextGlobal.Provider value={{activado,cambiarTheme, dentistas, destacadosDispatch, destacadosState}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates =()=>{
  return useContext(ContextGlobal)
}