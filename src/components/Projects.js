import React, { useEffect, useState } from 'react';
import { ProjectService } from '../apiService';  // Adjust the path to your service
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Projects.css';  // Make sure this path is correct

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    // Fetch all projects on component mount
    ProjectService.getAllProjects()
      .then(data => {
        setProjects(data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects.');
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);
  const handle404 = () => {
    navigate('/');
  }

  if (loading) {
    return <div class="loader-container">
    <div class="loader"></div>
  </div> // Show loading indicatorc
  }

  if (error) {
    return <section class="page_404">
    <div class="container">
      <div class="row">	
      <div class="col-sm-12 ">
      <div class="col-sm-10 col-sm-offset-1  text-center">
      <div class="four_zero_four_bg">
        <h1 class="text-center ">404</h1>
      
      
      </div>
      
      <div class="contant_box_404">
      <h3 class="h2">
      Look like you're lost
      </h3>
      
      <p>{error}</p>
      
      <a onClick={handle404} class="link_404">Go to Home</a>
    </div>
      </div>
      </div>
      </div>
    </div>
  </section> // Show error message
  }

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
                 < a href={project.githubLink}><button  className='button-80'>GitHub >></button></a> 
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