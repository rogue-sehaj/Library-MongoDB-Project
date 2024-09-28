import mongoose from "mongoose";

const BorrowerSchema = new mongoose.Schema({
  name: String,
  email: String,
  membershipDate: Date,
  borrowedBooks: [
    {
      bookId: String,
      borrowDate: Date,
      dueDate: Date,
      returnDate: Date,
    },
  ],
});

const BorrowerModel = mongoose.model("Borrower", BorrowerSchema);

export default BorrowerModel;
