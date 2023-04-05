
import imagenDentista from "./utils/doctor.jpg";
import { Link } from "react-router-dom";
import { useGlobalStates } from './utils/global.context'

const Card = ({ name, username, id }) => {
  const{activado, destacadosDispatch} = useGlobalStates()

  const addFav = () => {
    destacadosDispatch({type:'ADD_DEST', payload:{ name, username, id }})
  };
  
  return (
    
    <div className= {`card ${activado?'dark':""}`}>
      <Link key={id} to={"/dentist/" + id}>
        <img src={imagenDentista} alt="dentista-detail" />
        <p>{name}</p>
        <p>{username}</p>
        <p>{id} </p>
      </Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
