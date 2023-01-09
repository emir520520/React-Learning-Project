import { createContext, useState} from 'react';
import axios from "axios";
import App from "../App";

const BooksContext = createContext();

function Provider(){
    //Application state that will be shared through Context in the entire app
    const [books, setBooks] = useState([]);

    //----------------------------All the API call functions that will be used in the app
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    //Structure the state variable and functions that need to be shared through the app as the value for Context provider
    const bookContextValue={
        books,
        createBook,
        fetchBooks,
        editBookById,
        deleteBookById
    }

    return (
        <BooksContext.Provider value={bookContextValue}>
            <App />
        </BooksContext.Provider>
    );
}

export {Provider};
export default BooksContext;