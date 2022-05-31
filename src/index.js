import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './pages/Game'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Game/>
  </React.StrictMode>
);