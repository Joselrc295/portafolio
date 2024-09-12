import React from 'react';
import '../css/projects.css'; // Asegúrate de tener un archivo CSS para estilos personalizados

const Projects = () => {
  const projects = [
    {
      title: 'Gestión de Alquiler de Departamentos',
      description: 'Solución full stack para la administración de alquileres de departamentos, con autenticación segura, sistema CRUD avanzado y mensajería interna.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Material-UI', 'Google Authorization', 'Passport', 'JWT'],
    },
    {
      title: 'Aplicación de Gestión de Recursos Humanos',
      description: 'Desarrollé el frontend y backend de una aplicación que reduce el proceso de evaluación de candidatos de una semana a tres días, integrada con inteligencia artificial y un chatbot.',
      technologies: ['Node.js', 'React', 'Express', 'MongoDB', 'Inteligencia Artificial', 'Chatbot'],
    },
    {
      title: 'Diseño de Interiores - Potenciación de Negocio',
      description: 'Estoy creando una página web para un cliente que busca potenciar su negocio de diseño de interiores con tecnologías modernas y un futuro deploy en AWS o Firebase.',
      technologies: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Material-UI', 'Google Drive Forms', 'AWS', 'Firebase'],
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="project-tech">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
