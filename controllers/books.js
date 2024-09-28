import express from "express";
import BooksModel from "../models/books.js";


export function getBooks(request, response) {}

export async function addBook(request, response) {
    const newBook =  BooksModel(request.body);
    await newBook.save();
    response.send("Book Add Hogi Ji");
}

export function deleteBook(request, response) {}
