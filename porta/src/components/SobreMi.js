import React from 'react';
import '../css/sobreMi.css'; // Puedes personalizar los estilos aquí
import img from "../img/IMG_3306.JPG"

const SobreMi = () => {
  return (
    <section className="sobre-mi-container">
      <div className="sobre-mi-content">
        {/* Imagen de Avatar */}
        <div className="avatar-container">
          <img
            src={img} // Cambia este path con la ruta de tu imagen
            alt="José Rodríguez"
            className="avatar"
          />
        </div>

        {/* Descripción */}
        <div className="sobre-mi-text">
          <h3>José Rodríguez</h3>
          <p style={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
  Soy programador Full Stack y recientemente terminé mis estudios en Kruger School X. Estoy emocionado y ansioso por comenzar esta nueva carrera llena de desafíos. A lo largo de mi formación, he trabajado en diversos proyectos tanto en el frontend como en el backend, lo que me ha permitido desarrollar un enfoque integral del desarrollo web.
</p>

<p style={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
  Antes de dedicarme a la programación, mi trayectoria estaba enfocada en la economía y las ventas, lo que me ha dotado de habilidades valiosas, como la capacidad de negociar y comunicarme eficazmente en entornos diversos. Hablo español, inglés y ruso, y viví en Rusia durante casi 10 años, donde trabajé en diversas industrias.
</p>

<p style={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
  Gracias a esta experiencia internacional, puedo adaptarme a equipos de trabajo multiculturales, ya sea a nivel local o global. Estoy listo para afrontar nuevos retos y seguir creciendo en este apasionante mundo del desarrollo tecnológico.
</p>

        </div>
      </div>
    </section>
  );
};

export default SobreMi;
