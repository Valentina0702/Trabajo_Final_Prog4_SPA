import React from "react";
import { Alert } from 'react-bootstrap';

function Aux() {
  return (
    <div>
      <h1>Hola soy el header</h1>
      <p class="information__tituloseccion">Informacion Personal</p>
        <p class="information__tituloInfo">Nombre y Apellidos:</p>
        <p class="information__infoInfo">Nicolás Trujiillo Ríos</p>
        <p class="information__tituloInfo">Direccion:</p>
        <p class="information__infoInfo">CLL 19 # 10-53</p>
        <p class="information__tituloInfo">Telefono:</p>
        <p class="information__infoInfo">3113016167</p>
        <p class="information__tituloInfo">Email:</p>
        <p class="information__infoInfo">nico50829@gmail.com</p>
        <p class="information__tituloInfo">Fecha de nacimiento:</p>
        <p class="information__infoInfo">29 de agosto de 1999</p>
        <p class="information__tituloInfo">Identificacion:</p>
        <p class="information__infoInfo">1053872108</p>
    </div>
  );
}

export default Aux;
