import React from "react";
import "../styles/About.css"; // Importing separate CSS file
import about from "../assets/about.jpg"; // Ensure this path is correct

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Image */}
      <div className="about-image-wrapper">
        <img src={about} alt="Floraria Crinul Regal - About Us" className="about-image" />
      </div>

      {/* Heading */}
      <h2 className="about-heading">
        Cu o abordare artistică și o afinitate pentru culoare, Floraria Crinul Regal se inspiră din frumusețea naturii pentru a crea aranjamente unice și sofisticate.
      </h2>

      {/* Description Text */}
      <div className="about-text">
        <p>
          Floraria Crinul Regal este un studio floral de înaltă clasă care se specializează în nunți și evenimente speciale. Ne concentrăm pe eleganță, rafinament și naturalețe în fiecare aranjament floral.
        </p>
        <p>
          Lucrăm îndeaproape cu fiecare client pentru a ne asigura că aranjamentele florale sunt o reflectare a personalității și evenimentului lor, fără a crea același design de două ori.
        </p>
      </div>
    </div>
  );
};

export default About;
