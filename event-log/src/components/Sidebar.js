import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando React Router

function Sidebar (){
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Iniciohhh</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Sidebar;
