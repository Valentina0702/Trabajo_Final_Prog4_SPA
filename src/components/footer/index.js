import React from "react";
import { Carousel } from "react-bootstrap";
import { Accordion } from "react-bootstrap";


import curriculum1 from "./images/curriculum1.jpg";
import curriculum2 from "./images/hoja_vida.jpeg";

const nombre = "Introducción";

function Footer(props) {
  return (
    <div>
      <br></br>
      <Accordion defaultActiveKey='1' class='Accordion_1'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>{nombre}</Accordion.Header>
          <Accordion.Body>
            En esta pagina podemos ver la hoja de vida de dos estudiantes de la
            uniiversidad de manizales que estudian Ingenieria de sistemas y
            Telecomunicaciones, la aplicacion esta hecha en react js con fines
            de proyecto Final de la materia de programacion 4
          </Accordion.Body>
        </Accordion.Item>
        <br></br>
      </Accordion>

      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={curriculum1} alt='Third slide' />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={curriculum2} alt='Third slide' />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Footer;
