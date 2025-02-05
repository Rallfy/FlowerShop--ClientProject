import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import ProductDetailsPopup from "../components/ProductDetailsPopup";
import "./FlorarieClasica.css";

const products = [
  {
    id: 1,
    name: "Buchet de Trandafiri",
    details: "Un buchet elegant cu trandafiri roșii proaspeți.",
    image: "/images/flower1.jpg",
  },
  {
    id: 2,
    name: "Aranjament Floral",
    details: "Un aranjament special pentru ocazii festive.",
    image: "/images/flower1.jpg",
  },
];

const FlorarieClasica = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="florarie-clasica-container">
      <div className="top-bar">
        <button className="home-button" onClick={() => navigate("/")}>
          Acasă
        </button>
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDetails={setSelectedProduct}
          />
        ))}
      </div>
      <ProductDetailsPopup
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default FlorarieClasica;