import React from 'react';
import { 
  ArrowUp, 
  Rocket, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern">
      {/* Footer Top Content */}
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand & Socials */}
          <div className="footer-column brand-col">
            <Link to="/" className="f-logo">
              <div className="logo-glow"></div>
              <Rocket className="logo-icon" size={28} />
              <span>PRAKASH</span>
            </Link>
            <p className="brand-desc">
              Crafting high-performance digital experiences with a focus on 
              innovation, speed, and seamless user interfaces.
            </p>
            <div className="footer-social-wrapper">
              <a href="https://github.com/prakash552" target="_blank" rel="noreferrer" className="s-icon">
                <FaGithub size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="s-icon">
                <FaLinkedin size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="s-icon">
                <FaTwitter size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="s-icon">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="footer-column">
            <h4>Explore</h4>
            <div className="footer-links">
              <Link to="/"><ChevronRight size={14} className="link-arrow" /> Home</Link>
              <Link to="/projects"><ChevronRight size={14} className="link-arrow" /> My Portfolio</Link>
              <Link to="/contact"><ChevronRight size={14} className="link-arrow" /> Hire Me</Link>
              <a href="#"><ChevronRight size={14} className="link-arrow" /> Skillset</a>
              <a href="#"><ChevronRight size={14} className="link-arrow" /> Achievements</a>
            </div>
          </div>

          {/* Expertise Links */}
          <div className="footer-column">
            <h4>Expertise</h4>
            <div className="footer-links">
              <span><Rocket size={14} className="link-arrow" /> Frontend Architecture</span>
              <span><Rocket size={14} className="link-arrow" /> UI/UX Design Systems</span>
              <span><Rocket size={14} className="link-arrow" /> MERN Stack Solutions</span>
              <span><Rocket size={14} className="link-arrow" /> Responsive Web Apps</span>
              <span className="accent-text"><ExternalLink size={14} className="link-arrow" /> SEO Optimization</span>
            </div>
          </div>

          {/* Contact Data */}
          <div className="footer-column contact-col">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="c-icon"><Mail size={18} /></div>
                <div className="c-text">
                  <span>Email</span>
                  <a href="mailto:prakashmishra262005@gmail.com">prakashmishra262005@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="c-icon"><Phone size={18} /></div>
                <div className="c-text">
                  <span>Phone</span>
                  <a href="tel:+918743821921">+91 8743821921</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="c-icon"><MapPin size={18} /></div>
                <div className="c-text">
                  <span>Location</span>
                  <p>Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom (Copyright) */}
      <div className="footer-bottom-bar">
        <div className="bottom-content">
          <p className="copyright">
            &copy; {currentYear} <span>Prakash Mishra</span>. All Rights Reserved.
          </p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="sep">•</span>
            <a href="#">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop} 
            className="scroll-up-trigger" 
            aria-label="Back to Top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

