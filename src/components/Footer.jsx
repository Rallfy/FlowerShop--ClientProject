import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact</h3>
        <p><strong>Email:</strong> florariacrinulregal@gmail.com</p>
        <p><strong>Telefon:</strong> +40 741035878 / +40 746014933 </p>
        <p><strong>Adresă:</strong> Strada Nicolae Bălcescu 2, Șomcuta Mare 437335, România</p>
      </div>
      
      <div className="footer-column">
        <h3>Social Media</h3>
        <p>
          <a 
            href="https://www.facebook.com/profile.php?id=100054254481322&locale=ro_RO"
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Facebook
          </a>
        </p>
        <p>
          <a 
            href="https://www.instagram.com/florariacrinulregal?igsh=dHR5NHpmdDQyYTJq&utm_source=qr"
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
