import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import "../styles/AdminHomePage.css";

const AdminAbout = () => {
  const [aboutImageUrl, setAboutImageUrl] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const db = getFirestore(app);
  const storage = getStorage(app);

  useEffect(() => {
    const fetchAboutImage = async () => {
      try {
        const docRef = doc(db, "aboutus", "aboutpicture");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAboutImageUrl(docSnap.data().imageURL);
        }
      } catch (error) {
        console.error("Error fetching about image:", error);
      }
    };
    fetchAboutImage();
  }, [db]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!newImage) return;

    setUploading(true);
    const storageRef = ref(storage, `aboutus/aboutImage.jpg`);

    try {
      await uploadBytes(storageRef, newImage);
      const downloadURL = await getDownloadURL(storageRef);
      await setDoc(doc(db, "aboutus", "aboutpicture"), { imageURL: downloadURL });

      setAboutImageUrl(downloadURL);
      setNewImage(null);
      alert("Imaginea Despre Noi a fost actualizată cu succes!");
    } catch (error) {
      console.error("Eroare la actualizarea imaginii:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="admin-homepage-container">
      <h2>Admin - Despre Noi</h2>

      <div className="current-image-section">
        <h3>Imagine Curentă</h3>
        {aboutImageUrl ? (
          <img src={aboutImageUrl} alt="About Us" className="hero-image" />
        ) : (
          <p>Nicio imagine încărcată</p>
        )}
      </div>

      <div className="upload-section">
        <h3>Încarcă o Imagine Nouă</h3>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={() => navigate("/admin")} className="back-button">
          ← Înapoi
        </button>
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? "Se încarcă..." : "Actualizează Imaginea"}
        </button>
      </div>
    </div>
  );
};

export default AdminAbout;