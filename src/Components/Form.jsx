import React from "react";
import { useState } from "react";

const Form = () => {



  const onSubmitForm = (e) => {
    e.preventDefault();

    //inicializo las validaciones
    const usernameValido = validarUsername(userName)
    const emailValido = validarEmail(email)

    //validaciones
    if(!usernameValido || !emailValido) alert('**Por favor verifique su información nuevamente**')
    else{
      alert(`**Gracias ${userName}, te contactaremos cuanto antes vía mail**`)
    console.log(`Nombre: ${userName}`)
    console.log(`Email: ${email}`)
    }
  }
  //valido el email
  const validarEmail = (email) => (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email))
  //valido el nombre
  const validarUsername = (userName) => userName.length>5
  //seteos del nombre
  const [userName, setUserName] = useState("");
  const onChangeUserName = (e) => setUserName(e.target.value);
  //seteos del email
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => setEmail(e.target.value);
  //Aqui deberan implementar el form completo con sus validaciones
  return (
    <div>
      <form onSubmit={onSubmitForm}>
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
