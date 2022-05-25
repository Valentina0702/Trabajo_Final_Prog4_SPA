import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import imagen from "./components/footer/images/hoja_vida.jpeg";

import HeaderNV from "./components/header";
import FooterNV from "./components/footer/index";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Link to='/' className='btn btn-primary'>
            Inicio
          </Link>
          <br />
          <Link to='/footer' className='btn btn-primary'>
            Nicolas Trujillo Rios
          </Link>
          <br />
          <Link to='/header' className='btn btn-primary'>
            Valentina Diaz Orozco
          </Link>

          <Routes>
            <Route exac path='/footer' component={FooterNV}></Route>
            <Route exac path='/header' component={HeaderNV}></Route>
            <Route exac path='/'>
              Inicio
            </Route>
          </Routes>
        </Router>
        {/* <FooterNV></FooterNV> */}
        {/* <HeaderNV></HeaderNV> */}
        <p>
          En esta pagina podemos ver la hoja de vida de dos estudiantes de la
          uniiversidad de manizales que estudian Ingenieria de sistemas y
          Telecomunicaciones, la aplicacion esta hecha en react js con fines de
          proyecto Final de la materia de programacion 4
        </p>
        <img src={imagen} className='App-logo' alt='hoja_vida' />
      </header>
    </div>
  );
}

export default App;
