import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import ProductCard from "../../components/ProductCard";
import ProductDetailsPopup from "../../components/ProductDetailsPopup";
import "./CategoriesPage.css";
import category1 from "../../assets/categories/ctg1_f1.jpg"

const products = [
  {
    id: 1,
    name: "Buchet de Trandafiri",
    details: "Un buchet elegant cu trandafiri roșii proaspeți.",
    image: category1,
  },
  {
    id: 2,
    name: "Buchet de Lalele",
    details: "Buchet cu lalele galbene vibrante pentru o zi însorită.",
    image: "/images/flower2.jpg",
  },
  {
    id: 3,
    name: "Aranjament Floral Elegant",
    details: "Mix sofisticat de flori de primăvară în tonuri pastelate.",
    image: "/images/flower3.jpg",
  },
  {
  id: 4,
  name: "Buchet de Trandafiri",
  details: "Un buchet elegant cu trandafiri roșii proaspeți.",
  image: category1,
},
{
  id: 5,
  name: "Buchet de Lalele",
  details: "Buchet cu lalele galbene vibrante pentru o zi însorită.",
  image: "/images/flower2.jpg",
},
{
  id: 6,
  name: "Aranjament Floral Elegant",
  details: "Mix sofisticat de flori de primăvară în tonuri pastelate.",
  image: "/images/flower3.jpg",
},
];

const ClassicFlorist = () => {
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

export default ClassicFlorist;
