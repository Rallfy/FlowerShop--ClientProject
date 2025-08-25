import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the mobile menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* BRAND LOGO/TEXT */}
        <Link to="/" className="navbar-text-logo">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" />
            <span>FLORARIA CRINUL REGAL</span>
          </div>
        </Link>

        {/* Hamburger Icon (only visible on mobile due to CSS) */}
        <button className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Simple hamburger character */}
        </button>

        {/* Nav links (slide in/out on mobile) */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/despre-noi" className="nav-link" onClick={toggleMenu}>
            DESPRE NOI
          </Link>
          <Link to="/contact" className="nav-link" onClick={toggleMenu}>
            CONTACT
          </Link>
          <Link to="/categorii" className="nav-link" onClick={toggleMenu}>
            CATEGORII
          </Link>
          <Link to="/portofoliu" className="nav-link" onClick={toggleMenu}>
            PORTOFOLIU
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
