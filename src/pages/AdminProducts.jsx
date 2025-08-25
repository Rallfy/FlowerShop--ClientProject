import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import "../styles/AdminProducts.css";

const AdminProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    shortDescription: "",
    details: "",
    imageUrl: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  // 🔒 Redirect to login if user is NOT logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin-login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Upload image to Firebase Storage
  const uploadImage = async () => {
    if (!imageFile) return formData.imageUrl;

    const storageRef = ref(storage, `products/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    return await getDownloadURL(storageRef);
  };

  // Add or Edit Product
  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = formData.imageUrl;

    try {
      if (editingProduct && imageFile) {
        // Delete old image if updating with a new one
        if (editingProduct.imageUrl) {
          const oldImageRef = ref(storage, editingProduct.imageUrl);
          await deleteObject(oldImageRef).catch((error) =>
            console.error("Failed to delete old image:", error)
          );
        }
      }

      if (imageFile) {
        // Upload new image
        imageUrl = await uploadImage();
      }

      const productData = {
        name: formData.name,
        category: formData.category,
        shortDescription: formData.shortDescription,
        details: formData.details,
        imageUrl,
      };

      if (editingProduct) {
        // Update existing product
        await updateDoc(doc(db, "products", editingProduct.id), productData);
      } else {
        // Add new product
        await addDoc(collection(db, "products"), productData);
      }

      setIsPopupOpen(false);
      setImageFile(null);
      window.location.reload(); // Refresh product list
    } catch (error) {
      console.error("Error adding/updating product:", error);
    }
  };

  // Delete Product
  const handleDelete = async (id, imageUrl) => {
    if (window.confirm("Sigur vrei să ștergi acest produs?")) {
      try {
        if (imageUrl) {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef).catch((error) =>
            console.error("Failed to delete product image:", error)
          );
        }
        await deleteDoc(doc(db, "products", id));
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="admin-products-container">
      <h2>Administrare Produse</h2>
      
      {/* 🔙 Back Button to go back to Admin Dashboard */}
      <button onClick={() => navigate("/admin")} className="back-button">⬅️ Înapoi</button>
      
      {/* 🚪 Logout Button */}
      <button onClick={() => { signOut(auth); navigate("/admin-login"); }} className="logout-button">🚪 Logout</button>

      <button
        onClick={() => {
          setIsPopupOpen(true);
          setEditingProduct(null);
          setFormData({ name: "", category: "", shortDescription: "", details: "", imageUrl: "" });
        }}
        className="add-button"
      >
        + Adaugă Produs
      </button>

      <table className="product-table">
        <thead>
          <tr>
            <th>Nume</th>
            <th>Categorie</th>
            <th>Imagine</th>
            <th>Descriere Scurtă</th>
            <th>Descriere Lungă</th>
            <th>Acțiuni</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.imageUrl} alt={product.name} className="product-image" />
              </td>
              <td>{product.shortDescription}</td>
              <td>{product.details}</td>
              <td>
                <button
                  onClick={() => {
                    setFormData(product);
                    setEditingProduct(product);
                    setIsPopupOpen(true);
                  }}
                  className="edit-button"
                >
                  ✏️ Editează
                </button>
                <button onClick={() => handleDelete(product.id, product.imageUrl)} className="delete-button">
                  ❌ Șterge
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Product Form Popup */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>{editingProduct ? "Editează Produs" : "Adaugă Produs"}</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nume produs" value={formData.name} onChange={handleChange} required />
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Selectează o categorie</option>
                <option value="Buchete">Buchete</option>
                <option value="Aranjamente cutie">Aranjamente cutie</option>
                <option value="Plante și flori la ghiveci">Plante și flori la ghiveci</option>
                <option value="Cadouri">Cadouri</option>
                <option value="Nunți și petreceri">Nunți și petreceri</option>
                <option value="Ocazii speciale">Ocazii speciale</option>
                <option value="Produse funerare">Produse funerare</option>
              </select>
              <input type="text" name="shortDescription" placeholder="Descriere scurtă" value={formData.shortDescription} onChange={handleChange} required />
              <textarea name="details" placeholder="Descriere detaliată" value={formData.details} onChange={handleChange} required></textarea>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              <button type="submit" className="popup-button">{editingProduct ? "Salvează Modificările" : "Adaugă Produs"}</button>
              <button type="button" className="popup-cancel-button" onClick={() => setIsPopupOpen(false)}>Anulează</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
