import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">My Portfolio</div>
      <div className="footer-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Service</a>

      </div>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>

        </a>
      </div>

      <p className="footer-copyright">

        &copy; {new Date().getFullYear()} Prakash Mishra. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
