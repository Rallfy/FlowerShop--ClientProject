import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onDetails }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image ios-fix" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-details">{product.shortDescription}</p>
      <div className="button-container">
        <button className="details-button" onClick={() => onDetails(product)}>
          Mai multe detalii
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
