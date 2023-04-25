import React, {useEffect, useState} from 'react'
import LibraryServiceConnection from '../Service/LibraryServiceConnection'
import {useNavigate, Link, useParams} from 'react-router-dom';

const AddBookComponent = () => {
  
    const [id, setId] = useState("")
    const [authorName, setAuthorName] =useState('')
    const [bookName, setBookName] =useState('')
    const [publishedYear, setPublishedYear] =useState('');
    const [type, setType] =useState('')

    const history = useNavigate();
    const saveBook=(e)=>{
        e.preventDefault();

        const book = {id,authorName,bookName,publishedYear,type};

        LibraryServiceConnection.addBook(book).then((Response)=>{
            console.log(Response.data)
            //history.pushState("/addingBook")
        }).catch(error=>{
            console.log(error);
        })
        window.location.assign("/books.html");
    }

    

    const title = () =>{
        
            return <h2 className='text-center'>Add Book</h2>
        
    }

  return (
    <div>

        <br /> <br />

        <div className='container'>

            <div className='row'>

                <div className='card col-md-6 offset-md-3 offset-md-3'>

                    {

                        title()

                    }

                    <div className='card-body'>

                        <form>

                        <div className='form-group mb-2'>

                                <label className = "form-label"> Author Name</label>

                                <input

                                    type = "text"

                                    placeholder='Enter author name'

                                    name = "authorName"

                                    className='form-control'

                                    value = {authorName}

                                    onChange = {(e) => setAuthorName(e.target.value)}></input>

                            </div>

                           

                            <div className='form-group mb-2'>

                                <label className = "form-label"> Book Name</label>

                                <input

                                    type = "text"

                                    placeholder='Enter book Name'

                                    name = "bookName"

                                    className='form-control'

                                    value = {bookName}

                                    onChange = {(e) => setBookName(e.target.value)}></input>

                            </div>


 

                            <div className='form-group mb-2'>

                                <label className = "form-label"> Published Year</label>

                                <input

                                    type = "text"

                                    placeholder='Enter published year'

                                    name = "publishedYear"

                                    className='form-control'

                                    value = {publishedYear}

                                    onChange = {(e) => setPublishedYear(e.target.value)}></input>

                            </div>

                            <div className='form-group mb-2'>

                                <label className = "form-label"> Category</label>

                                <input

                                    type = "text"

                                    placeholder='Enter category'

                                    name = "type"

                                    className='form-control'

                                    value = {type}

                                    onChange = {(e) => setType(e.target.value)}></input>

                            </div>


 

                            <button className='btn btn-success' onClick = {(e) => saveBook(e)} >Submit</button>

                           

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}


export default AddBookComponent