import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend
    fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setFormSubmitted(true);

        // Pass success message as state during redirect
        setTimeout(() => {
          navigate('/', { state: { message: 'I will contact you soon' } });
        }, 3000);  // Redirect to home page after 3 seconds
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-wrapper">
      {formSubmitted ? (
        <div className="success-message">
          <h2>Thank you! We will contact you soon.</h2>
          <p>Redirecting to the homepage...</p>
        </div>
      ) : (
        <div className="contact-container">
          <div className="form-section">
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="info-section">
            <h2>Contact us</h2>
            <p><strong>Address:</strong> 198 West 21th Street, Suite 721 New York NY 10016</p>
            <p><strong>Phone:</strong> +1235 2355 98</p>
            <p><strong>Email:</strong> info@yoursite.com</p>
            <p><strong>Website:</strong> yoursite.com</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
