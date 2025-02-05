import React from "react";
import "./ProductDetailsPopup.css";

const ProductDetailsPopup = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{product.name}</h2>
        <p>{product.details}</p>
        <button onClick={onClose} className="close-popup">
          Închide
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPopup;
