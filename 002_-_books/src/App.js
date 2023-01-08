import {useEffect, useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, updateBooks]=useState([]);

  const fetchBooks=async ()=>{
    const response=await axios.get('http://localhost:3001/books');

    updateBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  },[])

  const createBook= async (title) => {
    const response= await axios.post('http://localhost:3001/books',{
      "title": title
    })

    const newBooks=[...books, response.data];

    updateBooks(newBooks);

    // var id = Math.ceil(Math.random() * 999999);
    //
    // const newBooks=[...books, {id: id, title: title}];
    //
    // updateBooks(newBooks);
  };

  const deleteBook=async (id)=>{
    await axios.delete('http://localhost:3001/books/'+id);

    const newBooks=books.filter((book)=>{
      return book.id!==id;
    });

    updateBooks(newBooks);
  };

  const editBook=async (id, newTitle)=>{
    const response=await axios.put('http://localhost:3001/books/'+id,{
      title:newTitle
    });

    const newBooks=books.map((book)=>{
      if(book.id===id){
        return {...response.data};
      }

      return book;
    });

    updateBooks(newBooks);
  };

  return <div>
    <BookList books={books} fun_deleteBook={deleteBook} fun_editBook={editBook}/>
    <BookCreate fun_createBook={createBook} />
  </div>;
}

export default App;