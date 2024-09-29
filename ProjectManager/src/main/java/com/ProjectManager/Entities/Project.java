package com.ProjectManager.Entities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 500)
    private String description;
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGithubLink() {
		return githubLink;
	}

	public void setGithubLink(String githubLink) {
		this.githubLink = githubLink;
	}

	@Column(length = 500 , nullable = true)
    private String githubLink;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date dueDate;

    @Enumerated(EnumType.STRING)
    private ProjectStatus status; // Updated to use the custom ProjectStatus enum

    private String location; // File path, URL, etc.

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private List<ProgressNote> notes;

    // Getters and Setters`

    public Long getProjectId() {
        return id;
    }

    public void setProjectId(Long projectId) {
        this.id = projectId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public ProjectStatus getStatus() {
        return status;
    }

    public void setStatus(ProjectStatus status) {
        this.status = status;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<ProgressNote> getNotes() {
        return notes;
    }

    public void setNotes(List<ProgressNote> notes) {
        this.notes = notes;
    }

	public Project() {
		super();
	}

	public Project(Long id, String title, String description, String githubLink, Date startDate, Date dueDate,
			ProjectStatus status, String location, List<ProgressNote> notes) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.githubLink = githubLink;
		this.startDate = startDate;
		this.dueDate = dueDate;
		this.status = status;
		this.location = location;
		this.notes = notes;
	}
}
