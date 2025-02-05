import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onDetails }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-details">{product.details}</p>
      <button className="details-button" onClick={() => onDetails(product)}>
        Mai multe detalii
      </button>
    </div>
  );
};

export default ProductCard;
