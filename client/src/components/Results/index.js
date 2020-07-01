import React from "react";
import Book from "../Book/";

export default function Results(props) {
  return (
    <div className="row">
      {props.results.items ? (
        props.results.items.map((book) => <Book book={book} key={book.id} />)
      ) : (
        <p>No items</p>
      )}
    </div>
  );
}
