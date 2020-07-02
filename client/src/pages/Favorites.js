import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import BooksList from "../components/BooksList";

export default function Favorites() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleRemoveFromFavorites = (id) => {
    API.deleteBook(id).then((data) => {
      loadBooks();
    });
  };

  return (
    <div>
      <Navbar />
      <BooksList
        results={results}
        handleRemoveFromFavorites={handleRemoveFromFavorites}
      />
    </div>
  );
}
