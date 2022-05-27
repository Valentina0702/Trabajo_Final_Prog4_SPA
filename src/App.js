import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderNV from "./components/header";
import FooterNV from "./components/footer";
// import Home from "./components/home";
// import Curriculum from "./components/curriculum";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Link to='/home' className='btn btn-primary'>
            Inicio
          </Link>
          <br />
          <Link to='/header' className='btn btn-primary'>
            Curriculum
          </Link>

          <Routes>
            <Route exac path='/header' element={<HeaderNV></HeaderNV>}></Route>
            <Route exac path='/home' element={<FooterNV></FooterNV>}></Route>
          </Routes>
        </Router>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Nombre </Form.Label>
            <Form.Control type='name' placeholder='Nombre Completo' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email </Form.Label>
            <Form.Control type='email' placeholder='Ingresa email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Asunto</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Contactame
          </Button>
        </Form>
        {/* <FooterNV></FooterNV> */}
        {/* <HeaderNV></HeaderNV> */}
      </header>
    </div>
  );
}

export default App;
