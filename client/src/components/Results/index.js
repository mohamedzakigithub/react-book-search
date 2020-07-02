import React from "react";
import Book from "../Book/";

export default function Results(props) {
  return (
    <div className="row">
      {props.results.items ? (
        props.results.items.map((book) => (
          <Book book={book.volumeInfo} id={book.id} key={book.id} />
        ))
      ) : (
        <p>{null}</p>
      )}
    </div>
  );
}
