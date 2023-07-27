package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Details {

    @Id
    @GeneratedValue
    private int contact_id;
    private String name;
    private Long phoneNo;
    private String email;
    private String address;
    private String project;
    private String technologiesDescription;
    private String projectUrl;
    private String skills;
    private double collegeCgpa;

    public Details() {
        super();
    }

    public Details(int contact_id, String name, Long phoneNo, String email, String address,
                   String project, String technologiesDescription, String projectUrl, String skills,
                   double collegeCgpa) {
        super();
        this.contact_id = contact_id;
        this.name = name;
        this.phoneNo = phoneNo;
        this.email = email;
        this.address = address;
        this.project = project;
        this.technologiesDescription = technologiesDescription;
        this.projectUrl = projectUrl;
        this.skills = skills;
        this.collegeCgpa = collegeCgpa;
    }

    public int getContact_id() {
        return contact_id;
    }

    public void setContact_id(int contact_id) {
        this.contact_id = contact_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(Long phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public String getTechnologiesDescription() {
        return technologiesDescription;
    }

    public void setTechnologiesDescription(String technologiesDescription) {
        this.technologiesDescription = technologiesDescription;
    }

    public String getProjectUrl() {
        return projectUrl;
    }

    public void setProjectUrl(String projectUrl) {
        this.projectUrl = projectUrl;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public double getCollegeCgpa() {
        return collegeCgpa;
    }

    public void setCollegeCgpa(double collegeCgpa) {
        this.collegeCgpa = collegeCgpa;
    }
}
