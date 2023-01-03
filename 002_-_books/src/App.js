import {useState} from "react";
import BookCreate from "./components/BookCreate";


function App() {
  const [books, addBooks]=useState([]);

  const createBook=(title) => {
    var id = Math.ceil(Math.random() * 500);

    const newBooks=[...books, {id: id, title: title}];

    addBooks(newBooks);
  };

  return <div>
    <BookCreate fun_createBook={createBook} />
  </div>;
}

export default App;