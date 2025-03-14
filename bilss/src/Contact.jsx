import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import "./Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation for required fields
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required.";
    if (!formData.lastName) formErrors.lastName = "Last name is required.";
    if (!formData.phone) formErrors.phone = "Phone number is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.message) formErrors.message = "Message is required.";
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);  // Show validation errors
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      alert(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({}); // Reset errors if successful
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <div className="contact-body">
      <div className="grid-contact">
        <div className="content-box">
          <h1>Contact <b>Us</b></h1>
          <img src="src/assets/img/contactheadimg.jpg" alt="" className="cantact-head-img" />
        </div>
      </div>

      <div className="contact-container">
        {/* Left Box: Contact Form */}
        <div className="left-box">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="name-row">
              <label htmlFor="firstName">
                First Name*
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </label>
              <label htmlFor="lastName">
                Last Name*
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </label>
            </div>

            <div className="contact-row">
              <label htmlFor="phone">
                Phone Number*
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Phone Number"
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>
              <label htmlFor="email">
                E-Mail*
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
            </div>

            <div className="message-row">
              <label htmlFor="message">Your Message*</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>

        {/* Right Box: Address and Social Media */}
        <div className="right-box">
          <div className="address-section">
            <h3>Address</h3>
            <p>
              <a
                href="https://www.google.com/maps?q=33rd+Street,+GKM+colony,+kolathur,+Chennai-600082,+Tamilnadu"
                target="_blank"
                rel="noopener noreferrer"
              >
                33rd Street, GKM colony, Kolathur, Chennai-600082, Tamilnadu
              </a>
            </p>
            <h3>Phone Number</h3>
            <p>
              <a href="tel:+917358569113">+91 7358569113</a>
            </p>
            <h3>Email</h3>
            <p>
              <a href="mailto:Blissfuloccasions@gmail.com">
                Blissfuloccasions@gmail.com
              </a>
            </p>
          </div>

          <div className="social-media-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/img/social 3.png"
                  alt="Facebook"
                  width="30"
                  height="30"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/img/social2.png"
                  alt="Twitter"
                  width="40"
                  height="40"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/img/social1.png"
                  alt="Instagram"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
