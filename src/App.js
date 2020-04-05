import React from 'react';
import './App.css';
import Board from './Board/board';

function App() {
  /* jshint ignore:start */
  return (
    <div className="App">
      <h1 className="h1">Tic Tac Toe</h1>
      <Board/>
    </div>
  );
  /* jshint ignore:end */
}

export default App;
