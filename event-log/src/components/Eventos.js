import React from 'react';
import './eventos.css';

function Eventos() {
  return (
    <div>
      <div className="Event-information">
      <h2>Informacion del evento</h2>
      <h3>Añade la informacion que consideres necesaria</h3>
      <label>
        <div>Título:</div>
        <textarea />
      </label>
      <br />
      <label>
        <div>Descripción:</div>
        <textarea />
      </label>
      <label>
        <div>Destacar evento</div>
        <button></button>
      </label>
     
      </div>




    </div>
  );
}

export default Eventos;
