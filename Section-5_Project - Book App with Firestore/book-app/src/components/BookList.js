import React from "react";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

function BookList({ books, fetchBooks }) {

    const deleteBook = async (id) => {
        await deleteDoc(doc(db, "books", id));
        fetchBooks();
    };

    return (
        <div>
            {books.map(book => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>{book.publisher}</p>
                    <p>{book.year}</p>
                    <p>{book.price}</p>

                    <button onClick={() => deleteBook(book.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BookList;