import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Florarie clasica",
      description: "Explorați o varietate de aranjamente florale clasice.",
      image: "/images/categories/ctg1_fl.jpg",
      route: "/florarie-clasica",
    },
    {
      title: "Nunti si petreceri",
      description: "Găsiți flori perfecte pentru nunți și evenimente.",
      image: "/images/categories/ctg2_nunta.jpg",
      route: "/nunti-petreceri",
    },
    {
      title: "Produse funerare",
      description: "Descoperiți aranjamente funerare personalizate.",
      image: "/images/categories/ctg3_fn.jpg",
      route: "/produse-funerare",
    },
    {
      title: "Servicii",
      description: "Toate serviciile noastre, transporturi si comenzi.",
      image: "/images/categories/ctg3_fn.jpg",
      route: "/servicii",
    },
    {
      title: "Cadouri",
      description: "Descoperiți cele mai frumoase cadouri pentru ocaziile speciale.",
      image: "/images/categories/ctg3_fn.jpg",
      route: "/cadouri",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-card"
          onClick={() => window.open(category.route, "_blank")} // Open in a new tab
        >
          <img src={category.image} alt={category.title} className="category-image" />
          <h3 className="category-title">{category.title}</h3>
          <p className="category-description">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
