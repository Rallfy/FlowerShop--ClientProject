import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import FlorarieClasica from './pages/FlorarieClasica';
import NuntiPetreceri from './pages/NuntiPetreceri';
import ProduseFunerare from './pages/ProduseFunerare';
import Servicii from './pages/Servicii';
import Cadouri from './pages/Cadouri';
import './App.css';

const App = () => {
  useEffect(() => {
    // Smooth scrolling enabled by CSS; no additional effect required.
  }, []);

  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '125px' }}> {/* Matches the Navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/florarie-clasica" element={<FlorarieClasica />} />
          <Route path="/nunti-petreceri" element={<NuntiPetreceri />} />
          <Route path="/produse-funerare" element={<ProduseFunerare />} />
          <Route path="/florarie-clasica" element={<FlorarieClasica />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/cadouri" element={<Cadouri />} />
        </Routes>
      </div>
      <BackToTop />
    </Router>
  );
};

export default App;
