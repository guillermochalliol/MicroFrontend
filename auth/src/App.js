import './App.scss';
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register />
      </header>
    </div>
  );
}

export default App;

