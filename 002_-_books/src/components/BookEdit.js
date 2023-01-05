import {useState} from "react";

function BookEdit({book, fun_editBook, fun_saveEdit}) {
  const [title, updateTitle]=useState(book.title);

  function handleChange(event) {
    updateTitle(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    fun_editBook(book.id, title);

    fun_saveEdit();
  }

  return <div>
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary" type="submit">Save</button>
    </form>
  </div>;
}

export default BookEdit;
