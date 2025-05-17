import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" onClick={closeMenu}>
          <Logo />
        </Link>
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/exercises" className="nav-link" onClick={closeMenu}>Exercises</Link>
          <Link to="/programs" className="nav-link" onClick={closeMenu}>Programs</Link>
          <Link to="/nutrition" className="nav-link" onClick={closeMenu}>Nutrition</Link>
          <Link to="/community" className="nav-link" onClick={closeMenu}>Community</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 