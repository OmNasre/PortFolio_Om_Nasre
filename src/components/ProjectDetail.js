import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    // Static data for projects
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
                { noteText: "Added Sign-in feature", timestamp: "2024-09-27T17:04:02.414+00:00", noteId: 8 },
                { noteText: "Reviewed by Guide", timestamp: "2024-09-27T17:04:09.428+00:00", noteId: 9 },
                { noteText: "Hasshhh", timestamp: "2024-09-27T17:12:21.079+00:00", noteId: 10 }
            ],
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
        },
        {
            id: 6,
            title: "Insta-Clone",
            description: "The Instagram Clone project is built using Spring Boot for the backend and HTML, CSS for the frontend. It replicates core functionalities of Instagram, such as user registration, post management, likes, comments, and an admin panel for user and post management.",
            githubLink: "https://github.com/OmNasre/Instagram-Clone",
            startDate: "2023-09-20",
            dueDate: "2023-09-30",
            status: "COMPLETED",
            notes: [],
        }
    ];

    // Find the project based on projectId param
    const project = staticProjects.find((proj) => proj.id === parseInt(projectId));

    // Initialize state variables
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(project?.title || '');
    const [updatedDescription, setUpdatedDescription] = useState(project?.description || '');
    const [updatedStartDate, setUpdatedStartDate] = useState(project?.startDate || '');
    const [updatedDueDate, setUpdatedDueDate] = useState(project?.dueDate || '');
    const [updatedStatus, setUpdatedStatus] = useState(project?.status || '');
    const [updatedGitHubLink, setUpdatedGitHubLink] = useState(project?.githubLink || '');
    const [newNote, setNewNote] = useState('');

    const handleEdit = () => {
        // Update project details with static data logic
        setIsEditing(false);
    };

    const handleDelete = () => {
        // Simulate deletion and redirect to the project list page
        navigate('/projects');
    };

    const handleAddNote = () => {
        if (project) {
            const note = {
                noteText: newNote,
                timestamp: new Date().toISOString(),
                noteId: project.notes.length + 1
            };
            project.notes.push(note);
            setNewNote(''); // Clear the new note input
        }
    };

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className='project-detail-page'>
            <div class="container">
                <div className="project-detail">
                    <h1>{isEditing ? 'Edit Project' : 'Project Detail'}</h1>
                    {isEditing ? (
                        <div className="edit-form">
                            <input
                                type="text"
                                value={updatedTitle}
                                onChange={(e) => setUpdatedTitle(e.target.value)}
                                placeholder="Project Title"
                                className="form-input"
                            />
                            <textarea
                                value={updatedDescription}
                                onChange={(e) => setUpdatedDescription(e.target.value)}
                                placeholder="Project Description"
                                className="form-input"
                            />
                            <input
                                type="date"
                                value={updatedStartDate}
                                onChange={(e) => setUpdatedStartDate(e.target.value)}
                                className="form-input"
                            />
                            <input
                                type="date"
                                value={updatedDueDate}
                                onChange={(e) => setUpdatedDueDate(e.target.value)}
                                className="form-input"
                            />
                            <select
                                value={updatedStatus}
                                onChange={(e) => setUpdatedStatus(e.target.value)}
                                className="form-input"
                            >
                                <option value="NOT_STARTED">Not Started</option>
                                <option value="IN_PROGRESS">In Progress</option>
                                <option value="COMPLETED">Completed</option>
                            </select>
                            <input
                                type="text"
                                value={updatedGitHubLink}
                                onChange={(e) => setUpdatedGitHubLink(e.target.value)}
                                placeholder="GitHub Link"
                                className="form-input"
                            />
                            <button onClick={handleEdit} className="btn btn-primary">Save</button>
                            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
                        </div>
                    ) : (
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <p>Start Date: {project.startDate}</p>
                            <p>Due Date: {project.dueDate}</p>
                            <p>Status: {project.status}</p>
                            <p>GitHub Link: <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubLink}</a></p>
                            <div className="edit-dlt">
                                <button onClick={() => setIsEditing(true)} className="btn button-28">Edit Project</button>
                                <button onClick={handleDelete} className="btn button-28">Delete Project</button>
                            </div>
                        </div>
                    )}
                    <h3>Add a Note</h3>
                    <textarea
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Add a note"
                        className="form-input"
                    />
                    <button onClick={handleAddNote} className="btn btn-primary">Add Note</button>
                    <h4>Notes</h4>
                    {project.notes.map((note) => (
                        <div key={note.noteId} className="note">
                            <p>{note.noteText}</p>
                            <small>{new Date(note.timestamp).toLocaleString()}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
