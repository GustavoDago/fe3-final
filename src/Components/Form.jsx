import React from "react";
import { useState } from "react";

const Form = () => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    const usernameValido = validarUsername(userName)
    const emailValido = validarEmail(email)
    // Por ahora solo mostramos el nombre del usuario

    if(!usernameValido || !emailValido) alert('**Por favor verifique su información nuevamente**')
    else{
      alert(`**Gracias ${userName}, te contactaremos cuanto antes vía mail**`)
    console.log(`Nombre: ${userName}`)
    console.log(`Email: ${email}`)
    }
  }
  
  const validarEmail = (email) => (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email))
  const validarUsername = (userName) => userName.length>5
  const [userName, setUserName] = useState("");
  const onChangeUserName = (e) => setUserName(e.target.value);
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => setEmail(e.target.value);
  //Aqui deberan implementar el form completo con sus validaciones
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        {/*
          Creamos dos inputs controlados
          pasando el estado como value y el manejador
          al evento onChange
          */}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
        />
        {/*
          Mediante el type nos aseguramos que
          se dispare el evento onSubmit al hacer click
          en el botón
          */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
