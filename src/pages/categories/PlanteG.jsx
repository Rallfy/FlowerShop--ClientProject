import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import ProductCard from "../../components/ProductCard";
import ProductDetailsPopup from "../../components/ProductDetailsPopup";
import "./CategoriesPage.css";

import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Services = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredProducts = productList.filter(
          (product) => product.category === "Plante și flori la ghiveci"
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
        {filteredProducts.length === 0 ? (
          <p className="no-products">Nu există produse disponibile.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                image: product.imageUrl, // Ensure correct image path
              }}
              onDetails={setSelectedProduct}
            />
          ))
        )}
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
