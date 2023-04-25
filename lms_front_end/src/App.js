import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserLoginComponent from "./Components/UserLoginComponent"
import GetBooksComponenet from './Components/GetBooksComponenet';
import AddBookComponent from './Components/AddBookComponent';

function App() {
  return (

    <Router>
   <div className='container'>
    <Routes>

      <Route exact path = "/" element = {<UserLoginComponent/>}></Route>
      <Route path = "/books.html" element = {<GetBooksComponenet/>}></Route>
      <Route path = "/addingBook" element = {<AddBookComponent/>}></Route>
    </Routes>

    </div>
    </Router>
  );
}

export default App;
