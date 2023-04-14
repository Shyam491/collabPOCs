package com.library.librarymanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.librarymanagement.entity.Book;
import com.library.librarymanagement.repository.BookRepository;

@RestController
public class UserController {
	
	@Autowired
	private BookRepository repo;
	
	@GetMapping("/users")
	public 	List<Book> getAllBooks() {
		return repo.findAll();
	}

}
