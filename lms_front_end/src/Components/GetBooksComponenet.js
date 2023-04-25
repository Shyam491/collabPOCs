import React, {useEffect, useState} from 'react'
import LibraryServiceConnection from '../Service/LibraryServiceConnection'
import {useNavigate} from 'react-router-dom';

const GetBooksComponenet = () => {

    const  [books,setBooks] =useState([])

    useEffect(()=>{
        getAllBooks();
    },[])

    const history = useNavigate();

    const getAllBooks =()=>{
        LibraryServiceConnection.getAllBooks().then((Response)=>{
            setBooks(Response.data);
            console.data(Response.data);
        }).catch(error =>{
            console.error();
        })
    } 

    const deleteEmployees = (id) => {
        LibraryServiceConnection.deleteBook(id).then((Response) => {
            getAllBooks();
        }).catch(error => {
            console.log(error);
        })
    }

    const addingBook = () =>{
        window.location.assign("/addingBook");
    
    }

  return (
    <div className='container'>
        <h2 className='text -center'>List Books</h2>
        <table className="table table-bordered">
            <thead>
                <th>Id</th>
                <th>Author Name</th>
                <th>Book Name</th>
                <th>Published Year</th>
                <th>Category</th>
            </thead>
            <tbody>
                {
                books.map(book =>
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.authorName}</td>
                        <td>{book.bookName}</td>
                        <td>{book.publishedYear}</td>
                        <td>{book.type}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>deleteEmployees(book.id)}
                            style = {{marginLeft:"10px"}}> Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>

        </table>
        <div><button className='btn btn-danger' onClick={()=>addingBook()}
                            style = {{marginLeft:"10px"}}> AddBook</button></div>
        
    </div>
  )
}

export default GetBooksComponenet