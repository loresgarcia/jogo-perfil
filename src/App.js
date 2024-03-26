// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Board from './components/Board';
import Card from './components/Card';
import Player from './components/Player';
import Hints from './components/Hints';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Defina outras rotas aqui, se necessário */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Board>
        {/* Coloque os componentes relacionados ao tabuleiro aqui */}
      </Board>
      <Card card={{ title: 'Exemplo', description: 'Esta é uma carta de exemplo.' }} />
      <Hints hints={['Dica 1', 'Dica 2', 'Dica 3']} />
    </>
  );
}

export default App;
