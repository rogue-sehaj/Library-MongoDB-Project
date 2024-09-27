import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  publicationDate: Date,
  genres: [String],
  authorIds: [ObjectId], // References to Authors
  availableCopies: Number,
  totalCopies: Number,
});

const BooksModel = mongoose.model("Book", BooksSchema);

export default BooksModel;
