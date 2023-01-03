import {useState} from "react";

function BookCreate({fun_createBook}) {
  const [title, updateTitle]=useState('');

  const handleChange=(event)=>{
    updateTitle(event.target.value);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();

    fun_createBook(title);

    updateTitle('');
  }

  return (
      <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input className="input" value={title} onChange={handleChange} />
          <button className="button" type="submit">Create</button>
        </form>
      </div>);
}

export default BookCreate;
