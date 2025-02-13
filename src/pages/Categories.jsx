import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Categories.css";
import category1 from "../assets/categories/ctg1_f1.jpg"
import category2 from "../assets/categories/ctg2_nunta.jpg"
import category3 from "../assets/categories/ctg3_fn.jpg"
import category4 from "../assets/categories/ctg4_services.jpg"
import category5 from "../assets/categories/ctg5_gifts.jpg"

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Florarie Clasică",
      description: "Explorați o varietate de aranjamente florale clasice.",
      image: category1,
      route: "/categorii/florarie-clasica",
    },
    {
      title: "Nunți și petreceri",
      description: "Găsiți flori perfecte pentru nunți și evenimente.",
      image: category2,
      route: "/categorii/nunti-petreceri",
    },
    {
      title: "Produse funerare",
      description: "Descoperiți aranjamente funerare personalizate.",
      image: category3,
      route: "/categorii/produse-funerare",
    },
    {
      title: "Servicii",
      description: "Toate serviciile noastre, transporturi și comenzi.",
      image: category4,
      route: "/categorii/servicii",
    },
    {
      title: "Cadouri",
      description: "Descoperiți cele mai frumoase cadouri pentru ocaziile speciale.",
      image: category5,
      route: "/categorii/cadouri",
    },
  ];

  return (
    <div className="categories-container">
      <h2 className="categories-title">Explorați categoriile noastre</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => navigate(category.route)}>
            <img src={category.image} alt={category.title} className="category-image" />
            <h3 className="category-title">{category.title}</h3>
            <p className="category-description">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
