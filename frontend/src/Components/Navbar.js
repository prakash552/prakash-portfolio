import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Prakash Mishra</div>

      {/* Toggle Icon */}
      <div className="toggle-icon" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="/projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
