import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

export const initialState = { theme: false, data: [] };
// Obtengo los datos iniciales del localStorage
export const initialDestacados =
  JSON.parse(localStorage.getItem("Destacados")) || [];
export const ContextGlobal = createContext();

const destReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DEST":
      // Creo un nuevo objeto con los datos actuales
      const nuevoDestacado = action.payload;
      // Agrego el nuevo objeto al array
      return [...state, nuevoDestacado];
    default:
      throw new Error();
  }
};

const apiReducer = (state, action) => {
  switch(action.type){
      case 'GET_API':
          return action.payload
      default:
          throw new Error()
  }
}


const themeReducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_DARK':
      return true
    case 'SWITCH_LIGHT':
      return false
    default:
      throw new Error()
  }
}


export const ContextProvider = ({ children }) => {
  const [activado, themeDispatch] = useReducer(themeReducer, initialState.theme);
  const [dentistas, apiDispatch] = useReducer(apiReducer, initialState.data)
  const [destacadosState, destacadosDispatch] = useReducer(
    destReducer,
    initialDestacados
  );


  //traigo los datos de la API
  useEffect(() => {
    const getData = async () => {
      const datos = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const convert = await datos.json();
      apiDispatch({ type: 'GET_API', payload: convert })
    }
    getData()
  }, [])

  useEffect(() => {
    // Guardo el array actualizado en el localStorage
    localStorage.setItem("Destacados", JSON.stringify(destacadosState));
  }, [destacadosState]);


  return (
    //pongo a disposición los datos que quiero compartir del context
    <ContextGlobal.Provider
      value={{
        activado,
        themeDispatch,
        dentistas,
        destacadosDispatch,
        destacadosState,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () => {
  return useContext(ContextGlobal);
};
