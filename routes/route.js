import express from "express";
import { getBooks, addBook, deleteBook } from "../controllers/books";
const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);

export default router;
