import axios from 'axios';

const Lms_base_url = "http://localhost:8082";

class  LibraryServiceConnection{

    getAllBooks(){
        return axios.get(Lms_base_url+"/books")
    }

    addBook(book){
        return axios.post(Lms_base_url+"/add/book",book);
    }

    verifyUser(userName, password){
        return axios.get(Lms_base_url + '/' + userName +'/'+ password);
    }

    deleteBook(id){
        return axios.delete(Lms_base_url + "/delete/book/" + id);
    }
}

export default new LibraryServiceConnection();