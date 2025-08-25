import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin-login");
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Bine ai venit în Panoul de Administrare</h2>

      <div className="admin-links">
        <button onClick={() => navigate("/admin/products")} className="admin-button">
          Gestionare Produse
        </button>
        <button onClick={() => navigate("/admin/portfolio")} className="admin-button">
          Gestionare Portofoliu
        </button>
        <button onClick={() => navigate("/admin/homepage")} className="admin-button">
          Gestionare Imagine Principală
        </button>
        <button onClick={() => navigate("/admin/about-us")} className="admin-button">
          Gestionare Imagine Despre Noi
        </button>
      </div>

      <button onClick={handleLogout} className="admin-logout-button">
        Logout
      </button>
    </div>
  );
};

export default Admin;
