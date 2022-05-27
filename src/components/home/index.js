import React from "react";
import { Accordion } from "react-bootstrap";
// import imagen from "./components/footer/images/hoja_vida";

function Aux() {
  return (
    <div>
        {/* <img className='d-block w-100' src={imagen} alt='Third slide' /> */}
        <Accordion defaultActiveKey='0' class="Accordion_1">
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Información personal</Accordion.Header>
          <Accordion.Body>
          En esta pagina podemos ver la hoja de vida de dos estudiantes de la
          uniiversidad de manizales que estudian Ingenieria de sistemas y
          Telecomunicaciones, la aplicacion esta hecha en react js con fines de
          proyecto Final de la materia de programacion 4
          </Accordion.Body>
        </Accordion.Item>
        <br></br>
      </Accordion>
    </div>
  );
}

export default Aux;
