import React from "react";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderNV from "./components/header";
import FooterNV from "./components/footer/index";


import logo from "./logo.svg";


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <HeaderNV />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <FooterNV></FooterNV>
      </header>
    </div>
  );
}

export default App;
