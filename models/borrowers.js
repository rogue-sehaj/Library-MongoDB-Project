import mongoose from "mongoose";

const BorrowerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    bio: String,
    dateOfBirth: Date,
    bookIds: [ObjectId] // References to Books     
});

const BorrowerModel = mongoose.model( "Borrower", BorrowerSchema);

export default BorrowerModel; 