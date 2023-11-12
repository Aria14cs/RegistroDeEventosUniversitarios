import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './components/Home';
import Eventos from './components/Eventos';
import Configuracion from './components/Configuracion';

function App() {
  return (
    <Router>
      <div>
        <nav>
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

        <Routes>
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
