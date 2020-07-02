import React from "react";
import SavedBook from "../SavedBook/";

export default function BooksList(props) {
  return (
    <div className="row">
      {props.results ? (
        props.results.map((book) => (
          <SavedBook
            book={book}
            id={book.bookId}
            key={book.bookId}
            handleRemoveFromFavorites={props.handleRemoveFromFavorites}
          />
        ))
      ) : (
        <p>{"No books saved"}</p>
      )}
    </div>
  );
}
