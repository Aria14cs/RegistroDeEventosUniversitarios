import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/Routes'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/eventos">Eventos</Link>
            </li>
            <li>
              <Link to="/configuracion">Configuración</Link>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <AppRoutes /> {/* Utiliza el componente de rutas aquí */}
        </div>
      </div>
    </Router>
  );
}

export default App;
