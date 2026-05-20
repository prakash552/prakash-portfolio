import React, { useState, useEffect } from 'react';
import '../Styles/CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setHidden(false);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Dynamic hover listeners for links, buttons, and items
    const updateHoverState = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], .skill-card, .project-card, .social-icon-btn, .mobile-toggle, .filter-tab'
      );
      
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    // Run initially and set a small timeout to catch dynamically rendered items
    updateHoverState();
    const intervalId = setInterval(updateHoverState, 1500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(intervalId);
    };
  }, []);

  // Smooth trail effect
  useEffect(() => {
    if (isMobile) return;
    let animFrame;

    const followMouse = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease factor (0.15 for smooth lag)
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16,
        };
      });
      animFrame = requestAnimationFrame(followMouse);
    };

    followMouse();

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div 
        className={`custom-cursor-dot ${hidden ? 'hidden' : ''} ${hovered ? 'hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-trail ${hidden ? 'hidden' : ''} ${hovered ? 'hovered' : ''}`}
        style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
