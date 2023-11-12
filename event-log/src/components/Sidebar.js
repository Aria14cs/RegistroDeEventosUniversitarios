
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
        <img src="/img/home.png" alt="Descripción de la imagen" />
          <Link to="/">Home</Link>
        </li>
        <li>
        <img src="/img/evento.png" alt="Descripción de la imagen" />
          <Link to="/eventos">Eventos</Link>

        </li>
        <li>
        <img src="/img/configuracion.png" alt="Descripción de la imagen" />
          <Link to="/configuracion">Configuración</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
