import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import BooksModel from "./models/books.js";
import AuthorModel from "./models/authors.js";
import BorrowerModel from "./models/borrowers.js";
import router from "./routes/route.js";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Vi Chalpeya Hanjeyyyy"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server chlreya ji ${PORT} te`);
});
