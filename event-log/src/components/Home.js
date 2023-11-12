import React from 'react';
import './home.css';

function Home(){
  const handleCrearEvento = () => {
    // Aquí es donde podrías agregar la lógica para crear un evento
    console.log('Se presionó el botón para crear eventos');
  };

    return (
      <div className='container'>
    <img src="/img/estudiante-online.jpg" alt="Descripción de la imagen" />

   

        <h2>Aún no has creado el evento</h2>
        <h2>Empieza creando tu primer evento seleccionando "Crear Evento"</h2>
        {/* Agrega aquí el contenido específico de la página de inicio */}

        <button onClick={handleCrearEvento}>Crear Eventos</button>
      </div>
    );
  };
  
  export default Home;