import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './CardContainer.css';

const CardContainer = () => {
    const navigate = useNavigate(); // React Router hook to navigate

    // Function to handle card click and navigate to respective page
    const handleCardClick = () => {
        navigate('/projects'); // Redirect to the projects page
    };

    return (
        <div></div>
    );
};

export default CardContainer;
