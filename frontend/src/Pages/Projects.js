import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Real-estate Website',
      description: 'A fully responsive real-estate website with a modern design.  Includes features like property listings, search functionality, and user authentication.',
      link: ''
    },
    {
      title: 'Miniliby (Books selling)',
      description: 'A full-stack application for buying and selling books. Features include user authentication, book listings, and a shopping cart.',
      link: '#'
    },
    {
      title: 'Simon Game',
      description: 'A web-based version of the classic Simon game. It includes sound effects and a responsive design.',
      link: 'https://simon-game-sezp.onrender.com'
    }
   
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="view-project-button">
              View Project
            </a>
          </div>
        ))}
      </div>
        
    </div>
  );
};

export default Projects;
