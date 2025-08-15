import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Real-estate Website',
      description: 'A fully responsive real-estate website with a modern design. Includes features like property listings, search functionality, and user authentication.',
      link: 'https://realstate-yowr.onrender.com',
      // Add image path if available
        },
        {
          title: 'Portfolio Projects',
          description: 'A collection of my personal and academic projects showcasing my skills in web development. Includes various technologies and frameworks.',
          link: 'https://vikash-portfolio-grmx.onrender.com',
          image: '/vikashport.png'
        },

        {
          title: 'T-shirt Selling',
          description: 'An online platform for buying and selling trendy T-shirts with secure payment and fast delivery.',
          link: 'https://demoo-3lp6.onrender.com/', // Add link if available
          image: '/tshirt.png' // Add image path if available
        },
        {
          title: 'Simon Game',
          description: 'A web-based version of the classic Simon game. It includes sound effects and a responsive design.',
          link: 'https://simon-game-sezp.onrender.com',
          image: '/simon.png' // Add image path if available
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{
              backgroundImage: project.image ? `url(${project.image})` : 'none',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',
            }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="view-project-button" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
