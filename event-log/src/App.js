import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import AppRoutes from './components/Routes';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Aquí se coloca la barra de navegación o Sidebar */}
        <div className="main-content">
          <AppRoutes /> {/* El componente de rutas para el contenido dinámico */}
        </div>
      </div>
    </Router>
  );
}

export default App;

