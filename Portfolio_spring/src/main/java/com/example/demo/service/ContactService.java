package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Details;
import com.example.demo.Repositories.ContactRepositories;

@Service
public class ContactService {
	
	@Autowired
	ContactRepositories contactRepository;

	  public Details addContact(Details contactData) {
        return contactRepository.save(contactData);
    }

	public List<Details> getAllContacts() {
		 return contactRepository.findAll();
	}
	
	public Details getContactByEmail(String email) {
        return contactRepository.findByEmail(email);
    }
	
	public Details updateContactByEmail(String email, Details contactData) {
        Details existingContact = contactRepository.findByEmail(email);
        if (existingContact == null) {
            return null;
        }

        // Update contactData fields here
        existingContact.setName(contactData.getName());
        existingContact.setPhoneNo(contactData.getPhoneNo());
        existingContact.setEmail(contactData.getEmail());
        existingContact.setAddress(contactData.getAddress());
//        existingContact.setJob_title(contactData.getJob_title());
//        existingContact.setCompany(contactData.getCompany());
//        existingContact.setNotes(contactData.getNotes());

        return contactRepository.save(existingContact);
    }
	
	public void deleteContactByEmail(String email) {
        Details existingContact = contactRepository.findByEmail(email);
        if (existingContact != null) {
            contactRepository.delete(existingContact);
        }
    }

}