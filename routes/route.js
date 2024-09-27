import express from 'express';
const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);

export default router;