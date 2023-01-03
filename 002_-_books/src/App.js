import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, updateBooks]=useState([]);

  const createBook=(title) => {
    var id = Math.ceil(Math.random() * 999999);

    const newBooks=[...books, {id: id, title: title}];

    updateBooks(newBooks);
  };

  const deleteBook=(id)=>{
    const newBooks=books.filter((book)=>{
      return book.id!==id;
    });

    updateBooks(newBooks);
  };

  const editBook=(id, newTitle)=>{
    const newBooks=books.map((book)=>{
      if(book.id==id){
        return {id:id, title:newTitle};
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