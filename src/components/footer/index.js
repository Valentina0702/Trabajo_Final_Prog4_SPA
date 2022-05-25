import React from "react";
import { Carousel } from "react-bootstrap";

import perro from "./images/perro.jpg";
import gato from "./images/gato.jpg";

function Footer(props) {
  return (  
    <div>
      <h1>Hola soy el footer</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://static.vecteezy.com/system/resources/previews/004/619/870/non_2x/resume-color-icon-cv-curriculum-vitae-personal-information-isolated-illustration-vector.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://hdstatic.net/gridfs/holadoctor/692x0_547cc689ba3795e12c0b30b4_0_27-1417463484996.jpg?fmt=webp'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={perro} alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={gato} alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Footer;
