import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Smartphone, Laptop, ArrowRight, Grid } from 'lucide-react';
import '../Styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Real-estate Website',
      description: 'A premium, fully responsive real-estate portal built with the MERN stack. Features comprehensive search listings, robust user authentication, property upload workflows, and an elegant interface.',
      link: 'https://realstate-yowr.onrender.com',
      tags: ['MERN', 'React', 'Node.js', 'MongoDB', 'Full-Stack'],
      icon: <Layout size={24} />,
      category: 'mern',
      image: '/realestate.png'
    },
    {
      title: 'Trendy E-commerce',
      description: 'An online storefront specializing in custom T-shirts. Integrates frictionless navigation, interactive shopping carts, detailed product selections, and a polished checkout flow.',
      link: 'https://modern-main.onrender.com/',
      tags: ['React', 'E-commerce', 'UI/UX', 'Tailwind'],
      icon: <Smartphone size={24} />,
      category: 'ecommerce',
      image: '/ecommerce.png'
    },
    {
      title: 'Play India Game Link',
      description: 'A dynamic two-player game network developed to test quick reaction reflexes. Features synchronized scores, real-time feedback, and full MERN integration.',
      link: 'https://playindia-0khi.onrender.com',
      tags: ['MERN', 'React', 'Node.js', 'MongoDB', 'Gaming'],
      icon: <Grid size={24} />,
      category: 'mern',
      image: '/playindia.png'
    },
    {
      title: 'Fitness Gym Platform',
      description: 'A visually striking fitness hub with class calendars, dynamic trainer modules, comprehensive pricing charts, and sleek glassmorphic aesthetics.',
      link: 'https://my-gym-adm1.onrender.com/',
      tags: ['React', 'UI/UX', 'Fitness', 'Responsive'],
      icon: <Laptop size={24} />,
      category: 'react',
      image: '/zumba-studio.png'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mern', label: 'MERN Stack' },
    { id: 'react', label: 'React Apps' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectData
    : projectData.filter(project => project.category === activeCategory);

  return (
    <div className="projects-wrapper">
      {/* Background Orbs */}
      <div className="glow-orb orb-projects-1"></div>
      <div className="glow-orb orb-projects-2"></div>

      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <div className="section-badge">
            <Code size={14} className="sparkle-icon" />
            <span>My Creations</span>
          </div>
          <h1>My <span className="highlight">Portfolio</span> Projects</h1>
          <p>A handpicked gallery of my finest full-stack developments and engineering solutions.</p>
        </motion.div>

        {/* Project Categories Filter */}
        <div className="projects-filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with dynamic AnimatePresence */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5 }}
                className="project-card glass-card"
                whileHover={{ y: -10 }}
              >
                <div className="project-image-container">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                  ) : (
                    <div className="project-image-placeholder">
                      <Code size={40} className="placeholder-icon" />
                    </div>
                  )}
                  <div className="project-overlay">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="overlay-btn"
                      title="Live Demo"
                    >
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

                  <div className="project-card-footer">
                    <a href={project.link} className="btn-view" target="_blank" rel="noreferrer">
                      Live Preview <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
