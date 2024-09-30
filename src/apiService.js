import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Update with your Spring Boot API base URL

// Project API Service
const ProjectService = {
  // Fetch all projects
  getAllProjects: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects', error);
      throw error;
    }
  },

  // Fetch project by ID
  getProjectById: async (projectId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects/${projectId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project with ID ${projectId}`, error);
      throw error;
    }
  },

  // Create new project
  createProject: async (project) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/projects`, project);
      return response.data;
    } catch (error) {
      console.error('Error creating project', error);
      throw error;
    }
  },

  // Update existing project
  updateProject: async (projectId, projectDetails) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/projects/${projectId}`, projectDetails);
      return response.data;
    } catch (error) {
      console.error(`Error updating project with ID ${projectId}`, error);
      throw error;
    }
  },

  // Delete project
  deleteProject: async (projectId) => {
    try {
      await axios.delete(`${API_BASE_URL}/projects/${projectId}`);
    } catch (error) {
      console.error(`Error deleting project with ID ${projectId}`, error);
      throw error;
    }
  }
};

// Progress Note API Service
const ProgressNoteService = {
  // Fetch all notes for a specific project
  getNotesByProject: async (projectId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/notes/project/${projectId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching notes for project with ID ${projectId}`, error);
      throw error;
    }
  },

  // Create new progress note for a project
  createNote: async (projectId, note) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/notes/project/${projectId}`, note);
      return response.data;
    } catch (error) {
      console.error(`Error creating note for project with ID ${projectId}`, error);
      throw error;
    }
  },

  // Update existing note
  updateNote: async (noteId, noteDetails) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/notes/${noteId}`, noteDetails);
      return response.data;
    } catch (error) {
      console.error(`Error updating note with ID ${noteId}`, error);
      throw error;
    }
  },

  // Delete note
  deleteNote: async (noteId) => {
    try {
      await axios.delete(`${API_BASE_URL}/notes/${noteId}`);
    } catch (error) {
      console.error(`Error deleting note with ID ${noteId}`, error);
      throw error;
    }
  }
};

export { ProjectService, ProgressNoteService };
