import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
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
        <div className="navbar-logo">
          <Link to="/">PORTFOLIO BUILDER</Link>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/TemplateSelection" className="navbar-link" onClick={closeMenu}>
              Creation
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link" onClick={closeMenu}>
              Login
            </Link>
          </li>
          <li className="navbar-item dropdown">
            <button className="navbar-link" onClick={closeMenu}>
              <i className="fas fa-user"></i> Profile <i className="fas fa-caret-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/profile" className="navbar-link" onClick={closeMenu}>
                  Profile
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/logout" className="navbar-link" onClick={closeMenu}>
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
