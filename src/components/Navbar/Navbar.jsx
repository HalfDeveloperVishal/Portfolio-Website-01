import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    // Scroll to the corresponding section smoothly
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="navbar-brand">Vishal.dev</div>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="cross-icon">&#10005;</div>
        ) : (
          <div className="hamburger-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
      </div>

      {/* Nav Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        {['Home', 'About', 'Skills','Projects', 'Contact'].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={activeLink === link ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleClick(link);
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
