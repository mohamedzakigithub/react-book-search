import axios from "axios";

export default {
  search: function (query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        query +
        "&key=AIzaSyCtCLU03U5gsUyQb36YCblXgKZxdEFzuYM"
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
