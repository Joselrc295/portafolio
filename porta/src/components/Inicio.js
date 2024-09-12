import React from 'react';
import SocialIcons from './SocialIcons';
import '../css/inicio.css';
import DownloadButton from './DownloadButton';

const Inicio = () => {
  
  // Función para copiar el correo al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText('joselrc295@gmail.com');
    alert('Correo copiado');
  };

  return (
    <div className="centered-container">
      {/* Nombre destacado */}
      <h1>Jose Rodriguez </h1>
     <h2> Programador Full Stack</h2>

      {/* Habilidades */}
        <p className="skills-list">
    <span>HTML</span> &middot; <span>CSS</span> &middot; <span>JAVASCRIPT</span> &middot; 
    <span>REACT</span> &middot; <span>ANGULAR</span> &middot; <span>Node.js</span> &middot; 
    <span>MongoDB</span> &middot; <span>Firebase</span> &middot; 
    <span>AWS LAMBDA</span> &middot; <span>DYNAMODB</span>
    </p>


      {/* Contacto */}
      <p>
        Si quieres ponerte en contacto, escríbeme a{' '}
        <a className="copy-email" onClick={copyToClipboard} href="mailto:joselrc295@gmail.com">joselrc295@gmail.com</a> 

      </p>
      

      {/* Botón de WhatsApp */}
    
  {/* Botón para descargar el CV */}
  <br></br>
    <DownloadButton/>
    <br></br>
    <br></br>
      <SocialIcons />
    </div>
  );
};

export default Inicio;
