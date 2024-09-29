package com.ProjectManager.Services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProjectManager.Entities.ProgressNote;
import com.ProjectManager.Entities.Project;
import com.ProjectManager.Repositories.ProgressNoteRepository;

@Service
public class ProgressNoteService {

    @Autowired
    private ProgressNoteRepository noteRepository;

    @Autowired
    private ProjectService projectService;

    public List<ProgressNote> getNotesByProject(Long projectId) {
        return noteRepository.findByProjectId(projectId);
    }

    public ProgressNote createNote(Long projectId, ProgressNote note) {
        Project project = projectService.getProjectById(projectId);
        note.setProject(project);
        note.setTimestamp(new Date());
        return noteRepository.save(note);
    }

    public ProgressNote updateNote(Long noteId, ProgressNote noteDetails) {
        ProgressNote note = noteRepository.findById(noteId).orElseThrow();
        note.setNoteText(noteDetails.getNoteText());
        note.setTimestamp(new Date());
        return noteRepository.save(note);
    }

    public void deleteNote(Long noteId) {
        noteRepository.deleteById(noteId);
    }
}
