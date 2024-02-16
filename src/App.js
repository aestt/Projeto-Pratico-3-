import logo from './logo.svg';
import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contato from './pages/contato/contato';
import Home from './pages/home';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/detalhes/detalhes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/detalhes/:id' element={<Detalhes />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
