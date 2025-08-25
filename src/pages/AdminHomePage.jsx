import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../config/firebase"; // Ensure this imports your Firebase config
import "../styles/AdminHomePage.css";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const [heroImageUrl, setHeroImageUrl] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const db = getFirestore(app);
  const storage = getStorage(app);

  // ✅ Fetch current homepage image from Firestore
  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const docRef = doc(db, "homepage", "heroImage");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setHeroImageUrl(docSnap.data().imageUrl);
        }
      } catch (error) {
        console.error("Error fetching homepage image:", error);
      }
    };
    fetchHeroImage();
  }, []);

  // ✅ Handle Image Upload
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  // ✅ Upload Image to Firebase Storage & Update Firestore
  const handleUpload = async () => {
    if (!newImage) return;

    setUploading(true);
    const storageRef = ref(storage, `homepage/heroImage.jpg`);

    try {
      // Upload new image
      await uploadBytes(storageRef, newImage);
      const downloadURL = await getDownloadURL(storageRef);

      // Update Firestore with new image URL
      await setDoc(doc(db, "homepage", "heroImage"), { imageUrl: downloadURL });

      setHeroImageUrl(downloadURL);
      setNewImage(null);
      setUploading(false);
      alert("Homepage image updated successfully!");
    } catch (error) {
      console.error("Error updating homepage image:", error);
      setUploading(false);
    }
  };

  return (
    <div className="admin-homepage-container">
      <h2>Admin - Homepage</h2>
      <div className="current-image-section">
        <h3>Current Hero Image</h3>
        {heroImageUrl ? (
          <img src={heroImageUrl} alt="Homepage Hero" className="hero-image" />
        ) : (
          <p>No image set</p>
        )}
      </div>

      <div className="upload-section">
        <h3>Upload New Hero Image</h3>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={() => navigate("/admin")} className="back-button">
          ← Înapoi
        </button>
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? "Uploading..." : "Update Image"}
        </button>
      </div>
    </div>
  );
};

export default AdminHomePage;
