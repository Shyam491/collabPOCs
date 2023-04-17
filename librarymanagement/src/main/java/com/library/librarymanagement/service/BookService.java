package com.library.librarymanagement.service;

import com.library.librarymanagement.entity.Book;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BookService {

    void updateBook(Book book);

    void createBook(Book book);
    List<Book> getAllBooks();
    void deleteBookById(int id);

}
