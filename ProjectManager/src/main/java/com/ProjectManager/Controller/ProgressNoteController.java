package com.ProjectManager.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ProjectManager.Entities.ProgressNote;
import com.ProjectManager.Services.ProgressNoteService;

@RestController
@RequestMapping("/api/notes")
public class ProgressNoteController {

    @Autowired
    private ProgressNoteService noteService;

    // 1. Get all notes for a project
    @GetMapping("/project/{projectId}")
    public List<ProgressNote> getNotesByProject(@PathVariable Long projectId) {
        return noteService.getNotesByProject(projectId);
    }

    // 2. Create new progress note for a project
    @PostMapping("/project/{projectId}")
    public ProgressNote createNote(@PathVariable Long projectId, @RequestBody ProgressNote note) {
        return noteService.createNote(projectId, note);
    }

    // 3. Update existing progress note
    @PutMapping("/{noteId}")
    public ResponseEntity<ProgressNote> updateNote(@PathVariable Long noteId, @RequestBody ProgressNote noteDetails) {
        ProgressNote updatedNote = noteService.updateNote(noteId, noteDetails);
        return ResponseEntity.ok(updatedNote);
    }

    // 4. Delete progress note
    @DeleteMapping("/{noteId}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long noteId) {
        noteService.deleteNote(noteId);
        return ResponseEntity.noContent().build();
    }
}
