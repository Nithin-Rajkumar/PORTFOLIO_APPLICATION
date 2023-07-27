package com.example.demo.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.User;
import com.example.demo.Repositories.UserRepository;

@Service
public class Myservice {
	
	@Autowired
	UserRepository urep;

	public Optional<User> getname(String email) {
		return urep.getName(email);
	}
	
	
}