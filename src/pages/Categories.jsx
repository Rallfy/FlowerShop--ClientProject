import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Categories.css";
import category1 from "../assets/categories/ctg1_f1.jpg"
import category2 from "../assets/categories/ctg2_pg.jpg"
import category3 from "../assets/categories/ctg3_gifts.jpg"
import category4 from "../assets/categories/ctg4_nunta.jpg"
import category5 from "../assets/categories/ctg5_fn.jpg"
import category_new1 from "../assets/categories/ctg_aranjamente_cutie.jpeg"
import category_new2 from "../assets/categories/ctg_ocazii_speciale.jpeg"

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Buchete",
      description: "Explorați o varietate de buchete clasice.",
      image: category1,
      route: "/categorii/buchete",
    },
    {
      title: "Aranjamente cutie",
      description: "Descoperiți aranjamente florare minunate in cutii.",
      image: category_new1,
      route: "/categorii/aranjamente-cutie",
    },
    {
      title: "Plante si flori la ghiveci",
      description: "Toate produsele noastre din gama de planta la ghiveci.",
      image: category2,
      route: "/categorii/plante-ghiveci",
    },
    {
      title: "Cadouri",
      description: "Descoperă cele mai frumoase cadouri pentru momente memorabile.",
      image: category3,
      route: "/categorii/cadouri",
    },
    {
      title: "Nunți și petreceri",
      description: "Găsiți flori perfecte pentru nunți și evenimente.",
      image: category4,
      route: "/categorii/nunti-petreceri",
    },
    {
      title: "Ocazii speciale",
      description: "Descoperiți aranjamente florale deosebite pentru cele mai îndrăgite sărbători din an.",
      image: category_new2,
      route: "/categorii/ocazii-speciale",
    },
    {
      title: "Produse funerare",
      description: "Descoperiți aranjamente funerare personalizate.",
      image: category5,
      route: "/categorii/produse-funerare",
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
