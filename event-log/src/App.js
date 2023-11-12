import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/Routes'; // Asegúrate de que la ruta sea correcta
import Sidebar from './components/Sidebar'; // Importa el componente de la barra de navegación

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Agrega la barra de navegación aquí */}
        <div className="main-content">
          <AppRoutes /> Utiliza el componente de rutas aquí
        </div>
      </div>
    </Router>
  );
}

export default App;
