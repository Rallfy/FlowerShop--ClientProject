import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "portfolio"));
      const imageList = querySnapshot.docs.map((doc) => doc.data().imageUrl);
      setImages(imageList);
    };

    fetchImages();
  }, []);

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">PORTOFOLIU</h2>
      <div className="portfolio-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Portofoliu ${index + 1}`}
            className="portfolio-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* ✅ Fullscreen Image Popup */}
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <div className="fullscreen-image-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged" className="fullscreen-image" />
            <button className="close-fullscreen" onClick={() => setSelectedImage(null)}>Închide</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;