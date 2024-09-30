// src/About.js
import React from 'react';
import './about.css';  // Create this CSS file for custom styles

function About() {
  return (
    <div className="about-container">
      <section className="about">
      <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/img/about.jpg`} alt="About Me" />
        </div>
        <div className='about-detail'>

        <h1>About Me</h1>
      <p> 
          Hello! I'm Om Nasre, a Software Developer and Data Scientist with a passion for creating scalable and impactful applications. My experience spans across both frontend and backend technologies, specializing in React, Spring Boot, Python, Django, and Cloud services like AWS. I aim to build efficient, sustainable systems that address real-world challenges and drive meaningful change.
<br></br> <br></br>
I have a deep interest in AI, machine learning, and networking, which fuels my projects in data science and backend architecture. My work often involves integrating data-driven insights into applications to enhance performance and user experience. Whether it's deploying scalable cloud infrastructure or building intuitive UIs, I enjoy working on full-stack solutions that make a difference.

In addition to my development work, I'm always exploring the latest trends in AI and cloud computing, seeking to improve my knowledge in networking, and contributing to open-source projects. My goal is to continuously grow and apply new technologies to create innovative solutions that positively impact society.
<br></br><br></br>
Thanks for visiting my profile! Feel free to connect with me through my social media links or send a message to discuss collaboration opportunities.

        </p>

        </div>
      </section>
    </div>
  );
}

export default About;
