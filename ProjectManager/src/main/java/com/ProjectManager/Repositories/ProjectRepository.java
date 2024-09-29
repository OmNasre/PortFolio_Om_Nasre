package com.ProjectManager.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ProjectManager.Entities.Project;


@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}
