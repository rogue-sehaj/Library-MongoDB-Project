import express from "express";
import { getBooks, addBook, deleteBook } from "../controllers/books.js";
const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);

export default router;
