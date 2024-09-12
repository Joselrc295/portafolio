import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Inicio from '../components/Inicio';
import SobreMi from '../components/SobreMi';
import WhatsAppButton from '../components/WhatsAppButton';
import Projects from '../components/Projects';

function Home() {
  return (
    <div>
      <ResponsiveAppBar />

      {/* IDs para poder desplazarse con scroll */}
      <div id="inicio">
        <Inicio />
      </div>
      <div id="sobre-mi">
        <SobreMi />
      </div>
      <div id="portafolio">
        <WhatsAppButton />
      </div>
      <div id='projets'>
      <Projects/>
      </div>
    </div>
  );
}

export default Home;
