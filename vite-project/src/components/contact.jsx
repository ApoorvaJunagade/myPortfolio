import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    const mailtoLink = `mailto:apoorva.junagade@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Get in Touch</h2>
      <p style={styles.sub}>I'm open to new opportunities and collaborations!</p>

      <div style={styles.detailsContainer}>
        <p><strong>Phone:</strong> +91 9860156054</p>
        <p><strong>Email:</strong> <a href="mailto:apoorva.junagade@gmail.com">apoorva.junagade@gmail.com</a></p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/apoorva-junagade/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/apoorva-junagade/
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>Send Message</button>

        {status === "success" && (
          <span style={{ ...styles.msg, color: "#2e7d32" }}>
            thank you!
          </span>
        )}
        {status === "error" && (
          <span style={{ ...styles.msg, color: "#c62828" }}>
            Please fill out all fields.
          </span>
        )}
      </form>
    </section>
  );
};

const styles = {
  section: {
    fontFamily: 'Poppins, sans-serif',
    padding: "60px 20px",
    background: "#f9fafb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#FFDAB9'

  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.25em",
  },
  sub: {
    marginBottom: "1.5rem",
    color: "#555",
  },
  detailsContainer: {
    marginBottom: "2rem",
    textAlign: "left",
    width: "100%",
    maxWidth: "500px",
    lineHeight: "1.6",
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "12px 16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "12px 16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
    resize: "vertical",
  },
  button: {
    padding: "12px 16px",
    background: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "opacity 0.3s",
  },
  msg: {
    fontSize: "0.9rem",
    marginTop: "0.5rem",
  },
};

export default Contact;
