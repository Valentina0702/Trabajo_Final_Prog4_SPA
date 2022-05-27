import React from "react";
import { Accordion } from "react-bootstrap";

function Aux() {
  return (
    <div>
      <br></br>
      <Accordion defaultActiveKey='0' class="Accordion_1">
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Información personal</Accordion.Header>
          <Accordion.Body>
            <p>Nombre y Apellidos: Valentina Díaz Orozco</p>
            <p class='titleInfo'>
              Dirección: Cuchilla del salado Casa el Diamante apto 05
            </p>
            <p class='titleInfo'>Teléfono: 3216092882</p>
            <p class='titleInfo'>Email: vadio7200@gmail.com</p>
            <p class='titleInfo'>Fecha de nacimiento: 07 de febrero del 2000</p>
            <p class='titleInfo'>Cédula: 1002547454</p>
          </Accordion.Body>
        </Accordion.Item>
        <br></br>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Experiencia laboral</Accordion.Header>
          <Accordion.Body>
            <p class='titleInfo'>Feryeik Jeans: Asesora comercial</p>
            <p class='titleInfo'>Fabi Sport: Asesora comercial</p>
            <p class='titleInfo'>Comdata Group: Asesora comercial</p>
            <p class='titleInfo'>Comdata Group: Auditora de calidad</p>
            <p class='titleInfo'>
              Comdata Group: Consultora Analytics (Cargo actual)
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br></br>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Educación e Información</Accordion.Header>
          <Accordion.Body>
            <p class='titleSeccion'></p>
            <p class='titleInfo'>
              Institución Educativa Rural Miguel Antonio Caro: Primaria
            </p>
            <p class='titleInfo'>
              Institución Educativa Rural Miguel Antonio Caro: Secundaria
            </p>
            <p class='titleInfo'>
              Universidad de Manizales: Ingeniería de sistemas y
              telecomunicaciones (cursando actualmente)
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <br></br>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Aptitudes y Pasatiempos</Accordion.Header>
          <Accordion.Body>
            <p class='titleSeccion'></p>
            <p class='titleInfo'>
              Aptitudes: Soy ágil, me gusta el trabajo en equipo, facil
              adaptación al cambio, puedo trabajar bajo presión, me considero
              muy responsable y proactiva en todo lo que hago.
            </p>
            <p class='titleInfo'>
              Pasatiempos: El cine, salir a comer, ir a bailar, estudiar y leer.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br></br>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Lenguas</Accordion.Header>
          <Accordion.Body>
            <p class='titleInfo'>Materna: Español</p>
            <p class='titleInfo'>Secundaria: Inglés, nivel básico</p>
          </Accordion.Body>
        </Accordion.Item>
        <br></br>
      </Accordion>
    </div>
  );
}

export default Aux;
