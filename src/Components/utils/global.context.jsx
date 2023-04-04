import { createContext, useContext, useState } from "react";

export const initialState = {theme: false, data: []}

export const ContextGlobal = createContext();

export  const  ContextProvider = ({ children }) => {
  const [activado, setActivado] = useState(initialState.theme)

  const cambiarTheme = (e)=> {
    setActivado(current => !current)}
  
  const [state, setState] = useState(initialState)

  return (
    <ContextGlobal.Provider value={{activado,cambiarTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates =()=>{
  return useContext(ContextGlobal)
}