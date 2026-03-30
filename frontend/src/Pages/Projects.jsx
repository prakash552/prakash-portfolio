import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Smartphone, Laptop, ArrowRight } from 'lucide-react';
import '../Styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Real-estate Website',
      description: 'A fully responsive real-estate website with a modern design. Includes features like property listings, search functionality, and user authentication.',
      link: 'https://realstate-yowr.onrender.com',
      tags: ['React', 'Node.js', 'MongoDB', 'MERN'],
      icon: <Layout size={24} />,
      image: '/realestate.png'
    },
  
    {
      title: 'E-commerce',
      description: 'An online platform for buying and selling trendy T-shirts with secure payment and fast delivery.',
      link: 'https://modern-main.onrender.com/',
      tags: ['E-commerce', 'React', 'Payment-Gateway'],
      icon: <Smartphone size={24} />,
      image: '/ecommerce.png'
    },
    {
      title: 'Play India',
      description: 'A fully devloped game connection two players',
      link:'https://playindia-0khi.onrender.com',
      tags:['React','Node.js','MongoDB','MERN'],
      icon:<Layout size={24} />,
      image:'/playindia.png'
    },
  
    {
      title: 'Fitness Gym',
      description: 'A modern gym website with class schedules, trainer profiles, and membership options.',
      link: 'https://my-gym-adm1.onrender.com/',
      tags: ['Fitness', 'UI/UX', 'React'],
      icon: <Laptop size={24} />,
      image: '/zumba-studio.png'
    }
  ];

  return (
    <div className="projects-wrapper">
      <div className="glow-orb orb-projects"></div>

      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="projects-header"
        >
         
          <h1>My <span className="highlight">Portfolio</span> Projects</h1>
          <p>A selection of my best work and side projects.</p>
        </motion.div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card glass-card"
            >
              <div className="project-image-container">
                {project.image && (
                  <img src={project.image} alt={project.title} className="project-image" />
                )}
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noreferrer" className="overlay-btn">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="project-info">
                <div className="project-icon-badge">{project.icon}</div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <a href={project.link} className="btn-view" target="_blank" rel="noreferrer">
                  Live Preview <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
