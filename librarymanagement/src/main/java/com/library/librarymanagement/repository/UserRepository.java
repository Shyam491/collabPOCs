package com.library.librarymanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.librarymanagement.entity.User;


public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findByUsername(String username);

}
