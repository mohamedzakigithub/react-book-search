import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar/";
import Search from "../components/Search/";
import Results from "../components/Results/";

export default function Home() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }
    API.search(search)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleSearchSubmit = (search) => {
    setSearch(search);
  };

  return (
    <div>
      <Navbar />
      <Search handleSearchSubmit={handleSearchSubmit} />
      <Results results={results} />
    </div>
  );
}
