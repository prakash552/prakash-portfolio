import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Sparkles,
  GitBranch,
  Database,
  Layers,
  Smartphone
} from 'lucide-react';
import profileImage from '../Assets/me.jpg';
import '../Styles/Homepage.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Homepage = () => {
  // Custom typing subtitles
  const roles = ["Full Stack Developer", "MERN Stack Specialist", "Creative UI/UX Designer", "BCA Graduate"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Skill categorization
  const skillsData = [
    { name: "React.js", icon: <Code size={20} />, color: "#61DAFB", category: "frontend" },
    { name: "JavaScript", icon: <Terminal size={20} />, color: "#F7DF1E", category: "frontend" },
    { name: "Tailwind CSS", icon: <Layers size={20} />, color: "#38BDF8", category: "frontend" },
    { name: "Node.js", icon: <Terminal size={20} />, color: "#339933", category: "backend" },
    { name: "Express.js", icon: <Cpu size={20} />, color: "#828282", category: "backend" },
    { name: "MongoDB", icon: <Database size={20} />, color: "#47A248", category: "backend" },
    { name: "MERN Stack", icon: <Layers size={20} />, color: "#a855f7", category: "backend" },
    { name: "RESTful APIs", icon: <Globe size={20} />, color: "#6366f1", category: "backend" },
    { name: "Git & GitHub", icon: <GitBranch size={20} />, color: "#F05032", category: "tools" },
    { name: "bootstrap", icon: <Layers size={20} />, color: "#563d7c", category: "frontend" },
    { name: "Figma", icon: <ExternalLink size={20} />, color: "#F24E1E", category: "tools" },
    { name: "UI/UX Design", icon: <Sparkles size={20} />, color: "#EC4899", category: "frontend" },
    { name: "Responsive Layouts", icon: <Smartphone size={20} />, color: "#E34F26", category: "frontend" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const services = [
    {
      title: "Web Development",
      desc: "Building highly modular, performance-optimized, and pixel-perfect web applications tailored to solve unique challenges.",
      icon: <Code size={32} />
    },
    {
      title: "MERN Full Stack Solutions",
      desc: "Architecting reliable end-to-end applications integrating Express servers, MongoDB schemas, and React components.",
      icon: <Cpu size={32} />
    },
    {
      title: "UI/UX & Responsiveness",
      desc: "Creating breath-taking visual layouts that remain intuitive and fully responsive across all modern displays.",
      icon: <Sparkles size={32} />
    }
  ];

  return (
    <div className="homepage-wrapper">
      {/* Dynamic Animated Glow Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

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
              <div className="welcome-badge">
                <Sparkles size={16} className="sparkle-icon" />
                <span>Welcome to my digital realm</span>
              </div>
              
              <h1>
                Crafting <span className="highlight">Digital</span> <br />
                Experiences with <span className="highlight">Precision</span>.
              </h1>
              
              {/* Typewriter Subtitle */}
              <div className="hero-subtitle-wrapper">
                <span className="subtitle-prefix">I am a </span>
                <span className="subtitle-typing">{currentText}</span>
                <span className="typing-cursor">|</span>
              </div>

              <p className="hero-description">
                Hi, I'm <span className="bold-text">Prakash Mishra</span>. A creative Frontend & Full Stack Developer dedicated to bringing high-performance, visually spectacular, and highly accessible web creations to life utilizing the <span className="highlight">MERN Stack</span> and industry-grade paradigms.
              </p>
              
              <div className="hero-actions">
                <Link to="/projects" className="btn-primary">
                  Explore Projects <ArrowRight size={20} />
                </Link>
                <a href="/Myresume.pdf" className="btn-secondary" download="Prakash_Mishra_Resume.pdf">
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hero-image-wrapper"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
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

        {/* Stats Banner Section */}
        <motion.section 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="stats-banner"
        >
          <div className="stat-item">
            <h3>4+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3>1.5+</h3>
            <p>Years Learning & Dev</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Tech Stack Mastered</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Pixel Perfection</p>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="services-section"
        >
          <div className="section-header center">
            <h2>My Specialized <span className="highlight">Services</span></h2>
            <p className="section-subtitle">What I build to solve real-world complexities</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card glass-card"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Dynamic Skills Grid Section */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid-section"
        >
          <div className="section-header">
            <h2>Core Expertise</h2>
            <p className="section-subtitle">A curated view of technologies I utilize daily</p>
            <div className="header-line"></div>
          </div>

          {/* Skill Filters */}
          <div className="skills-filter-container">
            {["all", "frontend", "backend", "tools"].map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Animating Skill Cards */}
          <motion.div layout className="skills-container">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  key={skill.name}
                  className="skill-card glass-card"
                  whileHover={{ 
                    y: -4, 
                    borderColor: skill.color,
                    boxShadow: `0 8px 24px -10px ${skill.color}50` 
                  }}
                >
                  <div className="skill-icon" style={{ color: skill.color, background: `${skill.color}12` }}>
                    {skill.icon}
                  </div>
                  <h3>{skill.name}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              I specialize in creating interactive and fully optimized web solutions.
              My primary focus is delivering seamless user experiences utilizing elegant layouts 
              backed by efficient MERN architecture. Currently pursuing my BCA, I dedicate my 
              days to writing robust clean code and continually mastering modern technological boundaries.
            </p>
            <Link to="/contact" className="text-link">
              Let's build something epic <ChevronRight size={16} className="chevron-link" />
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

        {/* CTA - Final Pitch */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="final-cta glass-card"
        >
          <div className="cta-glow"></div>
          <h2>Ready to bring your digital vision to life?</h2>
          <p>Let's collaborate on code that matters and design that inspires.</p>
          <Link to="/contact" className="btn-primary large">
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </motion.section>

      </motion.div>
    </div>
  );
};

export default Homepage;
