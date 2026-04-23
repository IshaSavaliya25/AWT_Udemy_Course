import React, { useEffect, useState } from "react";
import "./App.css";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));

    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>📚 Book App</h1>

      <BookForm fetchBooks={fetchBooks} />
      <BookList books={books} fetchBooks={fetchBooks} />
    </div>
  );
}

export default App;