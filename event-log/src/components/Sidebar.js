
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/eventos">Eventosgggggggggggggg</Link>
        </li>
        <li>
          <Link to="/configuracion">Configuración</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
