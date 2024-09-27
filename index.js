import express from 'express';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Database Vi Chalpeya Hanjeyyyy'))

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(PORT + ' Te Server Chalpeya'));