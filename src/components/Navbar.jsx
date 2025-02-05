import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="semi-circle">
        <img src="/images/logo.png" alt="Logo" className="nav-logo" />
        <h1 className="shop-name">Floraria Crinului</h1>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="/">
            <i className="fas fa-home"></i> Acasa
          </a>
          <a href="#categories">
            <i className="fas fa-list"></i> Categorii
          </a>
          <a href="#reviews">
            <i className="fas fa-comment"></i> Recenzii
          </a>
          <a href="#contact">
            <i className="fas fa-envelope"></i> Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
