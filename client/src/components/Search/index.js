import React, { useState, useEffect } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="row" id="search" name="search">
      <div className="col offset-s2 input-field col s12">
        <div className="input-field col s6">
          <input
            type="text"
            placeholder="search books"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field col s6">
          <button
            className="btn col waves-effect waves-light"
            type="submit"
            onClick={() => props.handleSearchSubmit(search)}
          >
            Search
            <i className="material-icons right">search</i>
          </button>
        </div>
      </div>
    </div>
  );
}
