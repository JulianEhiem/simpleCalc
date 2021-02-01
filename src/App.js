import React from 'react';
import './App.css';
import Numpad from './Numpad';


function App() {
  return (
  <div className="App">
    <div>
      <h1> This is a calculator app</h1>
    </div>
    <div className="centerAll">
      <Numpad/>
    </div>
    </div>
  );
}

export default App;
