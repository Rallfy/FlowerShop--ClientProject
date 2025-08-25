import React, { useEffect, useState } from "react";
import { db, storage } from "../config/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../styles/AdminPortfolio.css";

const AdminPortfolio = () => {
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  // Fetch portfolio images from Firestore
  useEffect(() => {
    const fetchPortfolioImages = async () => {
      const querySnapshot = await getDocs(collection(db, "portfolio"));
      const imageList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPortfolioImages(imageList);
    };

    fetchPortfolioImages();
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Upload image to Firebase Storage
  const uploadImage = async () => {
    if (!imageFile) return null;

    const storageRef = ref(storage, `portfolio/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    return await getDownloadURL(storageRef);
  };

  // Add New Portfolio Image
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await uploadImage();

      if (!imageUrl) {
        alert("Eroare la încărcarea imaginii.");
        return;
      }

      await addDoc(collection(db, "portfolio"), { imageUrl });

      setIsPopupOpen(false);
      setImageFile(null);
      window.location.reload(); // Refresh to update portfolio
    } catch (error) {
      console.error("Error adding portfolio image:", error);
    }
  };

  // Delete Portfolio Image
  const handleDelete = async (id, imageUrl) => {
    if (window.confirm("Sigur vrei să ștergi această imagine?")) {
      try {
        if (imageUrl) {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef).catch((error) =>
            console.error("Failed to delete image:", error)
          );
        }

        await deleteDoc(doc(db, "portfolio", id));
        setPortfolioImages(portfolioImages.filter(img => img.id !== id));
      } catch (error) {
        console.error("Error deleting portfolio image:", error);
      }
    }
  };

  return (
    <div className="admin-portfolio-container">
      <h2>Administrare Portofoliu</h2>
      <button onClick={() => setIsPopupOpen(true)} className="add-button">
        + Adaugă Imagine
      </button>
      <button onClick={() => navigate("/admin")} className="back-button">
        ← Înapoi
      </button>

      <div className="portfolio-grid">
        {portfolioImages.length === 0 ? (
          <p>Nu există imagini în portofoliu.</p>
        ) : (
          portfolioImages.map((image) => (
            <div key={image.id} className="portfolio-item">
              <img src={image.imageUrl} alt="Portfolio" className="portfolio-image" />
              <button onClick={() => handleDelete(image.id, image.imageUrl)} className="delete-button">
                ❌ Șterge
              </button>
            </div>
          ))
        )}
      </div>

      {/* Popup for adding image */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Adaugă Imagine în Portofoliu</h3>
            <form onSubmit={handleSubmit}>
              <input type="file" accept="image/*" onChange={handleImageChange} required />
              <button type="submit" className="popup-button">Adaugă Imagine</button>
              <button type="button" className="popup-cancel-button" onClick={() => setIsPopupOpen(false)}>Anulează</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPortfolio;
