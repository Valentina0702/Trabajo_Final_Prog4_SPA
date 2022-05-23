import logo from './logo.svg';
import './App.css';
import React from 'react';
import MetaTags from 'react-meta-tags';

class Component1 extends React.Component {
  render() {
    return (
        <div class="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta id="meta-Author" name="Author" content="Valentina Díaz & Nicolas Trujillo" />
            <meta id="meta-description" content="Hoja de Vida SPA" />
            <meta id="meta-keywords" content="empresa, estudios, experiencia, referencias" />
            <meta charset="utf-8"></meta>
          </MetaTags>
          <div class="content"> Some Content </div>
        </div>
      )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
