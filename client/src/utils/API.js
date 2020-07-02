import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env);
console.log(API_KEY);

export default {
  search: function (query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        query +
        "&key=" +
        API_KEY
    );
  },

  getBooks: function () {
    return axios.get("/api/books");
  },

  getBook: function (bookId) {
    return axios.get("/api/books/" + bookId);
  },

  deleteBook: function (bookId) {
    return axios.delete("/api/books/" + bookId);
  },

  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
