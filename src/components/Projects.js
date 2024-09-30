import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Projects.css';  // Make sure this path is correct

function Projects() {
  // Static list of projects (replace API call)
  const staticProjects = [
    {
      id: 4,
      title: "My Portfolio",
      description: "Welcome to my personal developer portfolio, built to showcase my skills, projects, and expertise in full-stack development and data science. This portfolio is developed using React for the frontend and Spring Boot for backend integration, creating a seamless user experience while displaying my technical proficiency.",
      githubLink: "https://github.com/OmNasre/PortFolio_Om_Nasre",
      startDate: "2023-09-27",
      dueDate: "2023-12-31",
      status: "COMPLETED",
      notes: [
        { noteText: "40% work done", timestamp: "2024-09-27T11:28:12.177+00:00", noteId: 7 },
        { noteText: "Added Sign in feature", timestamp: "2024-09-27T17:04:02.414+00:00", noteId: 8 },
        { noteText: "Reviewed by Guide", timestamp: "2024-09-27T17:04:09.428+00:00", noteId: 9 },
        { noteText: "Hasshhh ", timestamp: "2024-09-27T17:12:21.079+00:00", noteId: 10 },
      ],
      projectId: 4
    },
    {
      id: 5,
      title: "EduSync",
      description: "EduSync is a career guidance platform designed specifically for students after completing their 10th-grade education. Built using Django for backend management and HTML/CSS for a sleek, responsive frontend, EduSync offers personalized and comprehensive advice to help students make informed decisions about their academic and career paths.",
      githubLink: "https://github.com/OmNasre/EduSync",
      startDate: "2023-09-27",
      dueDate: "2023-12-31",
      status: "COMPLETED",
      notes: [{ noteText: "Why it is too tough?", timestamp: "2024-09-28T10:25:58.470+00:00", noteId: 11 }],
      projectId: 5
    },
    {
      id: 6,
      title: "Insta-Clone",
      description: "The Instagram Clone project is built using Spring Boot for the backend and HTML, CSS for the frontend. It replicates core functionalities of Instagram, such as user registration, post management, likes, comments, and an admin panel for user and post management. The key feature of this application is a responsive and minimalist design that mimics Instagram’s user experience.",
      githubLink: "https://github.com/OmNasre/Instagram-Clone",
      startDate: "2023-09-20",
      dueDate: "2023-09-30",
      status: "COMPLETED",
      location: "D:\\Java FS\\instaClone",
      notes: [],
      projectId: 6
    }
  ];

  const [projects] = useState(staticProjects); // Initialize with static data
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to handle project card click
  const handleProjectClick = (projectId) => {
    console.log("Navigating to project with ID:", projectId); // Debugging line
    navigate(`/projects/${projectId}`); // Navigate to project detail page
  };

  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        {projects.length === 0 ? (
          <div>No projects available.</div> // Handle no projects case
        ) : (
          projects.map((project) => (
            <div className="ag-courses_item" key={project.projectId} onClick={() => handleProjectClick(project.projectId)}>
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  {project.title}
                  <span><div className='project-desc'>{project.description}</div></span>
                </div>
                
                <div className="ag-courses-item_date-box">
                  <a href={project.githubLink}><button className='button-80'>GitHub >></button></a> 
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Projects;
