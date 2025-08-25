import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ClassicFlorist from "./pages/categories/ClassicFlorist";
import Weddings from "./pages/categories/Weddings";
import FuneraryProducts from "./pages/categories/FuneraryProducts";
import PlanteG from "./pages/categories/PlanteG";
import Gifts from "./pages/categories/Gifts";
import OcaziiS from "./pages/categories/OcaziiS"
import AranjamenteC from "./pages/categories/AranjamenteC";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
{/* ADMIN IMPORT*/}
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProducts from "./pages/AdminProducts";
import AdminPortfolio from "./pages/AdminPortfolio";
import AdminHomePage from "./pages/AdminHomePage";
import AdminAbout from "./pages/AdminAbout";

function App() {
  // if (process.env.NODE_ENV !== "production") {
  //   console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
  //   console.log("Firebase Auth Domain:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
  //   console.log("Firebase Project ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);
  //   console.log("Firebase Storage Bucket:", import.meta.env.VITE_FIREBASE_STORAGE_BUCKET);
  //   console.log("Firebase Messaging Sender ID:", import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID);
  //   console.log("Firebase App ID:", import.meta.env.VITE_FIREBASE_APP_ID);
  // }
  return (
    <Router>
      <div className="app-container">
      {!location.pathname.startsWith("/admin") && <Header />} 
        <div className="main-content">
          <Routes>
            {/* ADMIN PANEL*/}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="/admin/products" element={<ProtectedRoute><AdminProducts /></ProtectedRoute>} />
            <Route path="/admin/portfolio" element={<ProtectedRoute><AdminPortfolio /> </ProtectedRoute>}/>
            <Route path="/admin/homepage" element={<ProtectedRoute><AdminHomePage /> </ProtectedRoute>}/>
            <Route path="/admin/about-us" element={<ProtectedRoute><AdminAbout /> </ProtectedRoute>}/>
            {/* FRONTEND*/}
            <Route path="/" element={<Home />} />
            <Route path="/despre-noi" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categorii" element={<Categories />} />
            <Route path="/categorii/buchete" element={<ClassicFlorist />} />
            <Route path="/categorii/aranjamente-cutie" element={<AranjamenteC />} />
            <Route path="/categorii/nunti-petreceri" element={<Weddings />} />
            <Route path="/categorii/produse-funerare" element={<FuneraryProducts />} />
            <Route path="/categorii/plante-ghiveci" element={<PlanteG />} />
            <Route path="/categorii/cadouri" element={<Gifts />} />
            <Route path="/categorii/ocazii-speciale" element={<OcaziiS />} />
            <Route path="/portofoliu" element={<Portfolio />} />
          </Routes>
        </div>
        {!location.pathname.startsWith("/admin") && <Footer />}
      </div>
    </Router>
  );
}
export default App;
