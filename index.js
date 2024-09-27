import express from 'express';
import "dotenv/config";
import mongoose from 'mongoose';
import BooksModel from './models/books';
import AuthorModel from './models/authors';
import BorrowerModel from './models/borrowers';
import router from './routes/route.js';

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Database Vi Chalpeya Hanjeyyyy'))

app.use("/", router);
    
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(PORT + ' Te Server Chalpeya'));