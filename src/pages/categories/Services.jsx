import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import ProductCard from "../../components/ProductCard";
import ProductDetailsPopup from "../../components/ProductDetailsPopup";
import "./CategoriesPage.css";

const products = [];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page-container">
      {/* Top Section: Back Button + Search */}
      <div className="top-bar">
        <button className="home-button" onClick={() => navigate("/categorii")}>
          &larr; Înapoi
        </button>
        <SearchBar onSearch={setSearchTerm} />
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDetails={setSelectedProduct}
          />
        ))}
      </div>

      {/* Product Popup */}
      {selectedProduct && (
        <ProductDetailsPopup
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Services;
