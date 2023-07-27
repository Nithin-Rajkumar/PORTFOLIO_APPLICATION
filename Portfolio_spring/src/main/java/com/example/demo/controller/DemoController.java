package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.Models.Details;
import com.example.demo.Models.User;
import com.example.demo.service.ContactService;
import com.example.demo.service.Myservice;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
//@CrossOrigin
@RequestMapping("/api/v1/demo")
@RequiredArgsConstructor
public class DemoController {
	@Autowired
	Myservice mser;
	
	@Autowired
	ContactService contactService;
	
	@Autowired
	RestTemplate rest;

    @GetMapping
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello! Aakash");
    }
    
    @GetMapping("/get/{email}")
	public Optional<User> getbyid(@PathVariable String email){
    	System.out.print(email);
		return mser.getname(email);
	}
    @PostMapping("/addcontacts")
    public Details addContact(@RequestBody Details contactData) {
        return contactService.addContact(contactData);
    }
    
    @GetMapping("/get")
    public List<Details> getAllContacts() {
        return contactService.getAllContacts();
    }
    @GetMapping("/getcontact/{email}")
    public ResponseEntity<Details> getContactByEmail(@PathVariable String email) {
        Details contact = contactService.getContactByEmail(email);
        if (contact != null) {
            return ResponseEntity.ok(contact);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/updatecontact/{email}")
    public ResponseEntity<Details> updateContactByEmail(@PathVariable String email, @RequestBody Details contactData) {
        Details updatedContact = contactService.updateContactByEmail(email, contactData);
        if (updatedContact != null) {
            return ResponseEntity.ok(updatedContact);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/deletecontact/{email}")
    public ResponseEntity<Void> deleteContactByEmail(@PathVariable String email) {
        contactService.deleteContactByEmail(email);
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/send")
    public ResponseEntity<String> sendDataToServerA(@RequestBody String data) {
        // Prepare the data to be sent to Server A
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> request = new HttpEntity<>(data, headers);

        // Replace "http://localhost:8081/api/send-data" with the actual URL of Server A's 
        String serverAResponse = rest.postForObject("http://localhost:8081/send-data", request, String.class);

        return ResponseEntity.ok("Data sent to Server A. Response from Server A: " + serverAResponse);
    }
}