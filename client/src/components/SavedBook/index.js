import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export default function SavedBook({ book, id, handleRemoveFromFavorites }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    checkAdded();
  }, [added]);

  function checkAdded() {
    API.getBook(id)
      .then((data) => {
        if (data.data) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="col s12 m8 offset-m2">
      <div className="card horizontal hoverable">
        <div className="card-image">
          <img src={book.image} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <span className="card-title">{book.title}</span>
            <p style={{ height: 60, overflow: "hidden" }}>{book.description}</p>
          </div>
          <div className="card-action">
            <a target="_blank" href={book.link}>
              Book preview
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleRemoveFromFavorites(book.bookId);
              }}
            >
              <i className="material-icons right red-text">favorite</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
