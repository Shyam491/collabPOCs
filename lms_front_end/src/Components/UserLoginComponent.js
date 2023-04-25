import React , {useState, useEffect} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom';
import LibraryServiceConnection from "../Service/LibraryServiceConnection";

const UserLoginComponent = () => {

    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');

    const history = useNavigate();

    const checkUser = (e) => {
        e.preventDefault();


        LibraryServiceConnection.verifyUser(userName,password).then((Response) => {

            console.log(Response.data);

            if(Response.data === "login success"){
                window.location.assign("books.html")
                history.push('/')
            }
            else{
                alert("User does not exist")
                return;
            }
        }).catch(error => {
            console.log(error)
        })

    }

  return (
    <div className='container'>

        <title>User Login Page</title>
        <link rel="stylesheet" href="./loginstyle.css"></link>

        <div id="bg"></div>

        
        <form>
        <h1 >User Login</h1>
        <div className="form-field">
            <input type="text" placeholder="userName" 
           // className='form-control'
            value = {userName}
            onChange = {(e) => setUserName(e.target.value)}
            required/>
        </div>
        
        <div className="form-field">
            <input type="password" placeholder="Password" 
            //className='form-control'
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            required/>                         </div>
        
        <div>
        <button className='btn btn-success' type = "submit" onClick = {(e) => checkUser(e) }>Log in</button>
    
        </div>
          <ul>
                    
              <a href="register.html">Dont Have an Accout, Register Here</a>
            </ul>
        
        </form>
    </div>
  )
}

export default UserLoginComponent