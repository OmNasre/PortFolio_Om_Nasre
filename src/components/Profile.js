import React, { useEffect } from 'react';
import Typed from 'typed.js';  // Import Typed.js
import './Profile.css';  // Import CSS for styling
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation to retrieve the passed state

function Profile() {
  const navigate = useNavigate();  // Initialize useNavigate hook
  const location = useLocation();  // Get location to retrieve state passed with navigate

  const handleCardClick = (path) => {
    navigate(path); // Redirect to the specified path
  };

  useEffect(() => {
    // Options for the Typed.js instance
    const options = {
      strings: ["Om Nasre", "Software Developer", "Data Analyst", "Java Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    // Create a new instance of Typed.js
    const typed = new Typed(".auto-input", options);

    // Cleanup function to destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='main'>
      {/* Display the message if it exists in location.state */}
      {location.state && location.state.message && (
        <div className="alert-message">
          <h2>{location.state.message}</h2>
        </div>
      )}

      <section className="profile">
        <div className="profile-text">
          <h1>Hi, I'm <br /><span className="auto-input"></span></h1>
          <p className="description">
            A passionate individual who always thrives to work on end-to-end products
            which develop sustainable and scalable social and technical systems to create impact.
          </p>
          <div className="social-icons">
            {/* Replace with actual social media links */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="profile-image">
          {/* Ensure this image exists in the public/img directory */}
          <img src={`${process.env.PUBLIC_URL}/img/profile.png`} alt="Profile" />
        </div>
      </section>
      <div className='buttons'>
        <a href={`${process.env.PUBLIC_URL}/files/resume.pdf`} download>
          <button className="button-36" role="button">Download Resume</button>
        </a>
        <button onClick={() => handleCardClick('/projects')} className="button-36" role="button">
          See Projects
        </button>
      </div>
    </div>
  );
}

export default Profile;
