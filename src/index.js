import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Pai from './pages/surprise';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Galeria from './pages/galeria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pai />} />
        <Route path='/galeria' element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);