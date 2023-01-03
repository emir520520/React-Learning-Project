import BookShow from "./BookShow";

function BookList({books, fun_deleteBook, fun_editBook}) {
  const renderedBooks=books.map((book)=>{
    return <BookShow key={book.id} book={book} fun_deleteBook={fun_deleteBook} fun_editBook={fun_editBook}/>
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
