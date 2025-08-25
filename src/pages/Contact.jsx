import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // ✅ Added phone number field
    subject: "",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success/error messages

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone, // ✅ Added phone number to templateParams
      subject: formData.subject,
      location: formData.location || "Nespecificat",
      message: formData.message,
      to_name: "Florăria Crinul Regal",
    };

    emailjs
      .send(
        "service_or1g3xu",
        "template_rdhkcf3",
        templateParams,
        "g43YtQwESHwnJ9qEU"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Mesaj trimis cu succes! Vei fi contactat în curând.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "", // ✅ Reset phone field
            subject: "",
            location: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Eroare la trimiterea mesajului. Încearcă din nou.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contactează-ne</h2>
      <p className="contact-description">
        Completează formularul de mai jos pentru a ne spune mai multe despre
        evenimentul tău sau trimite-ne un email direct la{" "}
        <a href="mailto:florariacrinulregal1@gmail.com">
          florariacrinulregal1@gmail.com
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group row">
          <div className="form-field">
            <label>
              Nume <span className="required">(obligatoriu)</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label>Prenume</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>
            Email <span className="required">(obligatoriu)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>

        {/* ✅ New Phone Number Field */}
        <div className="form-group">
          <label>
            Număr de telefon <span className="required">(obligatoriu)</span>
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            Subiect <span className="required">(obligatoriu)</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Locația Livrare / Locația Evenimentului</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="">-- Selectează o locație --</option>
            <option value="Ardusat">Ardusat</option>
            <option value="Baia Mare">Baia Mare</option>
            <option value="Baia Sprie">Baia Sprie</option>
            <option value="Cavnic">Cavnic</option>
            <option value="Coas">Coaș</option>
            <option value="Farcasa">Fărcașa</option>
            <option value="Finteusu Mare">Finteușu Mare</option>
            <option value="Mesteacan">Mesteacăn</option>
            <option value="Miresu Mare">Mireșu Mare</option>
            <option value="Mogosesti">Mogoșești</option>
            <option value="Remetea Chioarului">Remetea Chioarului</option>
            <option value="Sacalaseni">Săcălășeni</option>
            <option value="Satulung">Satulung</option>
            <option value="Somcuta">Șomcuta</option>
            <option value="Ulmeni">Ulmeni</option>
            <option value="Valea Chioarului">Valea Chioarului</option>
          </select>
          <small className="note">
            Livrarea se va efectua și în localitățile limitrofe din
            împrejurimile celor afișate.
          </small>
          <small className="note">
            ⚠️ Pentru livrare, există o comandă minimă necesară.
          </small>
        </div>

        <div className="form-group">
          <label>
            Mesaj <span className="required">(obligatoriu)</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Trimite
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
