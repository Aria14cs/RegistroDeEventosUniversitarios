import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Eventos from './Eventos';
import Configuracion from './Configuracion';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Ruta para la vista Home */}
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/configuracion" element={<Configuracion />} />
    </Routes>
  );
}

export default AppRoutes;
