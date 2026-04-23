import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function BookForm({ fetchBooks }) {
    const [book, setBook] = useState({
        title: "",
        author: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "books"), book);

        setBook({ title: "", author: "" });
        fetchBooks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Book Title"
                value={book.title}
                onChange={(e) => setBook({ ...book, title: e.target.value })}
            />

            <input
                placeholder="Author"
                value={book.author}
                onChange={(e) => setBook({ ...book, author: e.target.value })}
            />

            <input
                placeholder="Publisher"
                value={book.publisher}
                onChange={(e) => setBook({ ...book, publisher: e.target.value })}
            />

            <input
                placeholder="Year"
                value={book.year}
                onChange={(e) => setBook({ ...book, year: e.target.value })}
            />

            <input
                placeholder="Price"
                value={book.price}
                onChange={(e) => setBook({ ...book, price: e.target.value })}
            />

            <button>Add Book</button>
        </form>
    );
}

export default BookForm;