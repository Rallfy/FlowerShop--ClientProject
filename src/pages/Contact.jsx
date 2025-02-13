import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error messages

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lmcl96k", // Service ID
        "template_n5agd9t", // Template ID
        formData,
        "3QStq5Lef9Y7Ivm39" // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Mesaj trimis cu succes! Vei fi contactat în curând.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
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
        Completează formularul de mai jos pentru a ne spune mai multe despre evenimentul tău sau trimite-ne un email la <a href="mailto:florariacrinulregal@gmail.com">florariacrinulregal@gmail.com</a>.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group row">
          <div className="form-field">
            <label>Nume <span className="required">(obligatoriu)</span></label>
            <input type="text" name="firstName" value={formData.firstName} required onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Prenume</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Email <span className="required">(obligatoriu)</span></label>
          <input type="email" name="email" value={formData.email} required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Subiect <span className="required">(obligatoriu)</span></label>
          <input type="text" name="subject" value={formData.subject} required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Locația Evenimentului</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Mesaj <span className="required">(obligatoriu)</span></label>
          <textarea name="message" value={formData.message} required onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-button">Trimite</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
