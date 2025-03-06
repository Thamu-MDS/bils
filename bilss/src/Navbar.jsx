import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="logo">
        <img src="src/assets/img/blissfullogo.png" alt="Logo" className="img1" />
      </div>

      {/* Center: Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right side: Button */}
      <div className="button-container">
        <button className="contact-button">Contact Us</button>
      </div>

      {/* Burger Menu for mobile */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
