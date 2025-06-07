import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce website built using the MERN stack with dynamic cart and user authentication.',
      link: '#'
    },
    {
      title: 'T-Shirt Selling Website',
      description: 'A luxurious, fully animated T-shirt selling platform with responsive design and smooth navigation.',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A multi-page, fully animated personal portfolio built using React and CSS.',
      link: '#'
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
