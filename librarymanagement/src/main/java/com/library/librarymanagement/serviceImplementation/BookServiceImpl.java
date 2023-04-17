package com.library.librarymanagement.serviceImplementation;

import com.library.librarymanagement.entity.Book;
import com.library.librarymanagement.repository.BookRepository;
import com.library.librarymanagement.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepo;

    @Override
    public void updateBook(Book book){
        Book b = bookRepo.findById(book.getId()).get();

        b.setAuthorName(book.getAuthorName());
        b.setBookName(book.getBookName());
        b.setPublishedYear(book.getPublishedYear());
        b.setType(book.getType());
        bookRepo.save(b);

    }

    @Override
    public void createBook(Book book){
        bookRepo.save(book);
    }

    @Override
    public List<Book> getAllBooks(){
        return bookRepo.findAll();
    }

    @Override
    public void deleteBookById(int id){
        bookRepo.deleteById(id);
    }
}
