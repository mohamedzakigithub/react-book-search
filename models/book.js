const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  authors: { type: Array, required: true },
  image: { type: String, default: Date.now },
  link: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
