import React, { useEffect } from "react";
import "../styles/ProductDetailsPopup.css";

const ProductDetailsPopup = ({ product, onClose }) => {
  useEffect(() => {
    console.log("Product Data in Popup:", product);
  }, [product]);

  if (!product) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Log Image Source */}
        <img
          src={product.imageUrl || product.image}
          alt={product.name}
          className="popup-image"
          onError={(e) => {
            console.error("Image failed to load:", product.imageUrl || product.image);
            e.target.src = "https://via.placeholder.com/400"; // Fallback image
          }}
        />

        <h2 className="popup-title">{product.name}</h2>
        {/* <p className="popup-description">{product.details}</p> */}
        <p
          className="popup-description"
          dangerouslySetInnerHTML={{
          __html: product.details
            .replace(/\n/g, "<br>") // Preserve new lines
            .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Convert **bold** to <b>bold</b>
            .replace(/_(.*?)_/g, "<i>$1</i>") // Convert _italic_ to <i>italic</i>
          }}
          ></p>


        <button className="close-popup" onClick={onClose}>
          Închide
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPopup;
