package com.ProjectManager.Repositories;

//package com.ProjectManager.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ProjectManager.Entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
