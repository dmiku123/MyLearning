import React from 'react';
import minion from './minion.svg';
import './App.css';
import Authentication from './UnAuth'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={minion} className="App-logo" alt="logo" />
        <p>
          Watch minion in space rotating
        </p>
      </header>
    </div>
  );
}
export default (Authentication(App));
