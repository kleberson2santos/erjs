import React from 'react';

import './App.css';
import HelloWorld from './HelloWorld';
import logo from './logo.svg';

const Component = React
  .createElement('div', {style: {background: 'red'}}, 'Olá dev!')

const HTMLElement = document.createElement('div')
HTMLElement.style.background = 'cyan'
HTMLElement.innerHTML = 'Olá a todos!!!'

console.log(Component);
console.log(HTMLElement);

document.body.appendChild(HTMLElement)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { Component }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá, mundo!
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
