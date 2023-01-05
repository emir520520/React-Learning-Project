import {useState} from "react";
import BookEdit from "./BookEdit";

function BookShow({book, fun_deleteBook, fun_editBook}) {
  const [editStatus, updateEditStatus]=useState('false');

  function handleDelete() {
    fun_deleteBook(book.id);
  }

  function handleEdit() {
    const newStatus='true';

    updateEditStatus(newStatus);
  }

  function saveEdit(){
    const newStatus='false';

    updateEditStatus(newStatus);
  }

  let content=<h3>{book.title}</h3>
  if(editStatus==='true'){
    content=<BookEdit book={book} fun_editBook={fun_editBook} fun_saveEdit={saveEdit}/>;
  }

  return <div className="book-show">
    {content}
    <div className="actions">
      <button className="edit" onClick={handleEdit} />
      <button className="delete" onClick={handleDelete} />
    </div>
  </div>;
}

export default BookShow;
