package com.library.librarymanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String bookName;
	
	private String authorName;
	
	private String type;
	
	private String publishedYear;

}
