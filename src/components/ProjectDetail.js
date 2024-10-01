import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectService, ProgressNoteService } from '../apiService'; // Adjust the import according to your folder structure
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    // Initialize state variables
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedStartDate, setUpdatedStartDate] = useState('');
    const [updatedDueDate, setUpdatedDueDate] = useState('');
    const [updatedStatus, setUpdatedStatus] = useState('');
    const [updatedGitHubLink, setUpdatedGitHubLink] = useState(''); // New state for GitHub link
    const [newNote, setNewNote] = useState('');
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the project on component mount
    const fetchProject = async () => {
        setLoading(true);
        try {
            const fetchedProject = await ProjectService.getProjectById(projectId);
            console.log(fetchedProject.githubLink); // Verify GitHub link here
            setProject(fetchedProject);
            setUpdatedTitle(fetchedProject.title);
            setUpdatedDescription(fetchedProject.description);
            setUpdatedStartDate(fetchedProject.startDate);
            setUpdatedDueDate(fetchedProject.dueDate);
            setUpdatedStatus(fetchedProject.status);
            setUpdatedGitHubLink(fetchedProject.githubLink); // Set GitHub link
        } catch (err) {
            console.error('Error fetching project:', err);
            setError('Project not found.');
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        fetchProject();
    }, [projectId]);

    const handleEdit = async () => {
        await ProjectService.updateProject(projectId, {
            title: updatedTitle,
            description: updatedDescription,
            startDate: updatedStartDate,
            dueDate: updatedDueDate,
            status: updatedStatus,
            githubLink: updatedGitHubLink, // Include GitHub link in update
        });
        setIsEditing(false);
        await fetchProject(); // Refetch project details to reflect updates
    };

    const handleDelete = async () => {
        await ProjectService.deleteProject(projectId);
        navigate('/projects');
    };

    const handleAddNote = async () => {
        const note = {
            noteText: newNote,
            timestamp: new Date().toISOString(),
        };
        await ProgressNoteService.createNote(projectId, note); // Call to ProgressNoteService
        setNewNote('');
        await fetchProject(); // Refetch project details to reflect the new note
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
                        value={updatedStartDate ? updatedStartDate.split('T')[0] : ''}
                        onChange={(e) => setUpdatedStartDate(e.target.value)}
                        className="form-input"
                        />
                    <input
                        type="date"
                        value={updatedDueDate ? updatedDueDate.split('T')[0] : ''}
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
                    <button onClick={handleEdit} className="btn btn-primary">
                        Save
                    </button>
                    <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="project-info">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>Start Date: {project.startDate ? project.startDate.split('T')[0] : 'N/A'}</p>
                    <p>Due Date: {project.dueDate ? project.dueDate.split('T')[0] : 'N/A'}</p>
                    <p>Status: {project.status}</p>
                    <p>GitHub Link: <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubLink}</a></p>
                    <div className="edit-dlt">
                        <button onClick={() => setIsEditing(true)} className="btn button-28">
                            Edit Project
                        </button>
                        <button onClick={handleDelete} className="btn button-28">
                            Delete Project
                        </button>
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
            <button onClick={handleAddNote} className="btn btn-primary">
                Add Note
            </button>
            <h4>Notes</h4>
            {project.notes && project.notes.map((note) => (
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