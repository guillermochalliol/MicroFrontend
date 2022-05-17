import React, { lazy, Suspense, useContext } from "react";
import './App.scss';
import Navbar from './components/Navbar'
import  GlobalAuthContextProvider from 'Auth/GlobalAuthContext';

function App() {
  
  return (
    <div className="app">
        <GlobalAuthContextProvider>
          <Navbar />
        </GlobalAuthContextProvider>
    </div>
  );
}

export default App;
