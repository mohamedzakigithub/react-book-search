import React from "react";

export default function Book({ book }) {
  console.log(book);

  return (
    <div className="col s12 m8 offset-m2">
      <div className="card horizontal hoverable">
        <div className="card-image">
          <img src={book.volumeInfo.imageLinks.thumbnail} />
        </div>
        <div className="card-stacked">
          <div
            className="card-content"
            style={{ height: 100, overflow: "hidden" }}
          >
            <span class="card-title">{book.volumeInfo.title}</span>
            <p>{book.volumeInfo.description}</p>
          </div>
          <div className="card-action">
            <a target="_blank" href={book.volumeInfo.previewLink}>
              Go to the book page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
