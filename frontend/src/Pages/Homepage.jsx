import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Terminal,
  Cpu,
  Globe,
  Github,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  ChevronRight,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import profileImage from '../Assets/me.jpg';
import '../Styles/Homepage.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Homepage = () => {
  const skills = [
    { name: "React.js", icon: <Code size={20} />, color: "#61DAFB" },
    { name: "JavaScript", icon: <Terminal size={20} />, color: "#F7DF1E" },
    { name: "MERN Stack", icon: <Cpu size={20} />, color: "#47A248" },
    { name: "Node.js", icon: <Terminal size={20} />, color: "#339933" },
    { name: "UI/UX Design", icon: <Sparkles size={20} />, color: "#A855F7" },
    { name: "Responsive", icon: <Globe size={20} />, color: "#E34F26" },
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Building scalable, high-performance web applications using modern technologies.",
      icon: <Code size={32} />
    },
    {
      title: "MERN Integration",
      desc: "Full-stack solutions with MongoDB, Express, React, and Node.js.",
      icon: <Cpu size={32} />
    },
    {
      title: "UI/UX Optimization",
      desc: "Creating intuitive interfaces that provide seamless user experiences.",
      icon: <Sparkles size={32} />
    }
  ];


  return (
    <div className="homepage-wrapper">
      {/* Background Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="home-container"
      >
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <motion.div variants={itemVariants} className="hero-text-block">
              <h1>
                Crafting <span className="highlight">Digital</span> <br />
                Experiences with <span className="highlight">Precision</span>.
              </h1>
              <p className="hero-description">
                Hi, I'm <span className="bold-text">Prakash Mishra</span>. A Frontend Developer
                passionate about building high-performance, visually stunning web applications
                using the <span className="highlight">MERN Stack</span> and modern tools.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn-primary">
                  View My Work <ArrowRight size={20} />
                </Link>
                <a href="../Myresume.pdf" className="btn-secondary" download="Prakash_Mishra_Resume.pdf">
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hero-image-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="image-border-glow"></div>
              <img
                src={profileImage}
                alt="Prakash Mishra"
                className="hero-avatar"
              />
            </motion.div>
          </div>
        </section>


        {/* Services Section */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-section"
        >
          <div className="section-header center">
            <h2>My Specialized <span className="highlight">Services</span></h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card glass-card"
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid-section"
        >
          <div className="section-header">
            <h2>Core Expertise</h2>
            <div className="header-line"></div>
          </div>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card glass-card"
                whileHover={{ y: -5, borderColor: skill.color }}
              >
                <div className="skill-icon" style={{ color: skill.color, background: `${skill.color}15` }}>
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About & Journey */}
        <div className="about-journey-split">
          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="about-mini glass-card"
          >
            <div className="section-header">
              <h2><Award className="inline-icon" /> About Me</h2>
            </div>
            <p>
              I specialize in creating interactive and responsive web applications.
              My focus is on delivering a seamless user experience through clean code
              and innovative design solutions. Currently pursuing my BCA, I'm constantly
              exploring the boundaries of frontend technologies.
            </p>
            <Link to="/contact" className="text-link">
              Let's collaborate <ChevronRight size={16} />
            </Link>
          </motion.section>

          <motion.section
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="journey-mini glass-card"
          >
            <div className="section-header">
              <h2><GraduationCap className="inline-icon" /> Education</h2>
            </div>
            <div className="timeline-mini">
              <div className="timeline-point">
                <div className="point-dot"></div>
                <div className="point-info">
                  <h4>BCA Graduate</h4>
                  <p>KCC Institutes, 2023 - 2026</p>
                </div>
              </div>
              <div className="timeline-point">
                <div className="point-dot"></div>
                <div className="point-info">
                  <h4>Secondary Education</h4>
                  <p>Shambhu Dayal Inter College, 2023</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* CTA - Final Project Pitch */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="final-cta glass-card"
        >
          <div className="cta-glow"></div>
          <h2>Ready to bring your idea to life?</h2>
          <p>Let's build something exceptional together.</p>
          <button onClick={() => window.location.href = "/contact"} className="btn-primary large">
            Start a Conversation <ArrowRight size={20} />
          </button>
        </motion.section>

      </motion.div>
    </div>
  );
};

export default Homepage;
