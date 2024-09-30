import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Profile'; // Assuming this is your home page
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import CardContainer from './components/CardContainer'; 
import About from './components/about';// Import your CardContainer
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component can remain as is */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <CardContainer /> */}

    </Router>
  );
}

export default App;
