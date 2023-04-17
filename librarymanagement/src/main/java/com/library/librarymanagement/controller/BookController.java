package com.library.librarymanagement.controller;

import com.library.librarymanagement.entity.Book;
import com.library.librarymanagement.service.BookService;
import com.library.librarymanagement.serviceImplementation.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {
   @Autowired
    private BookServiceImpl bookService;

    @GetMapping("/books")
    public List<Book> getAllBooks() {

        return bookService.getAllBooks();
    }

    @GetMapping("/admin")
    public String testingAdmin(){
        return "admin page";
    }
    @PostMapping("/add/book")
    public String saveBooks(@RequestBody Book book){

        bookService.createBook(book);
        return "created new book";
    }

    @PutMapping("/update/book")
    public void updateBook(@RequestBody Book book){
        bookService.updateBook(book);
    }

    @DeleteMapping("/delete/book/{id}")
    public void deleteBook(@PathVariable Integer id){
        bookService.deleteBookById(id);
    }
}
