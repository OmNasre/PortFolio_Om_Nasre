import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';  // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={`${process.env.PUBLIC_URL}/img/signature.png`} alt="Profile" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="https://www.linkedin.com/in/om-nasre-335a63225/">LinkedIn</a></li>
        <li><Link to="/contact">Contact Me</Link></li>

        <li><a href="https://github.com/OmNasre">Github</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
