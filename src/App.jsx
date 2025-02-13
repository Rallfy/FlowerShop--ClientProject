import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ClassicFlorist from "./pages/categories/ClassicFlorist";
import Weddings from "./pages/categories/Weddings";
import FuneraryProducts from "./pages/categories/FuneraryProducts";
import Services from "./pages/categories/Services";
import Gifts from "./pages/categories/Gifts";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/Header.css";
import "./styles/Footer.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content"> {/* This pushes the footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/despre-noi" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categorii" element={<Categories />} />
            <Route path="/categorii/florarie-clasica" element={<ClassicFlorist />} />
            <Route path="/categorii/nunti-petreceri" element={<Weddings />} />
            <Route path="/categorii/produse-funerare" element={<FuneraryProducts />} />
            <Route path="/categorii/servicii" element={<Services />} />
            <Route path="/categorii/cadouri" element={<Gifts />} />
            <Route path="/portofoliu" element={<Portfolio />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
