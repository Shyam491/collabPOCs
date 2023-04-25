package com.library.librarymanagement.controller;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.library.librarymanagement.entity.User;
import com.library.librarymanagement.repository.UserRepository;
import com.library.librarymanagement.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.library.librarymanagement.entity.Book;
import com.library.librarymanagement.repository.BookRepository;

@CrossOrigin("*")
@RestController
//@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @GetMapping("/{userName}/{password}")
    public  String loginUser(@PathVariable String userName, @PathVariable String password){
        User findUser = userRepository.findByUsername(userName);

        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        //String testPasswordEncoded = passwordEncoder.encode(password);

        boolean isPasswordMatches = bcrypt.matches(password, findUser.getPassword());

        //System.out.println(isPasswordMatches);
        if(findUser != null){
            if(isPasswordMatches) return "login success";
            else return "wrong password"+ " " + findUser.getPassword() +" "+ password;
        }
        return "login failed"+ " " ;

    }
}
