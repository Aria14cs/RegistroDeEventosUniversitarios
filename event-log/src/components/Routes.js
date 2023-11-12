
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Eventos from './Eventos';
import Configuracion from './Configuracion';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/configuracion" element={<Configuracion />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
