"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBooks = exports.getBook = exports.getallbooks = void 0;
const data_books_1 = require("../utils/data.books");
var booksData = data_books_1.books;
// @desc    get all Book
// @route   GET /api/v1/books
const getallbooks = (req, res) => {
    res.status(200).send(booksData);
};
exports.getallbooks = getallbooks;
// @desc    get single Book
// @route   GET /api/v1/books/:id
const getBook = (req, res) => {
    const book = data_books_1.books.find((b) => b.id === req.params.id);
    res.status(200).send(book);
};
exports.getBook = getBook;
// @desc    Add book
// @route   POST /api/v1/book
const addBooks = (req, res) => {
    const body = req.body;
    const book = body.value;
    if (!req.body) {
        res.status(400).send({
            "success": false,
            "msg": "No data",
        });
    }
    else {
        data_books_1.books.push(book);
    }
};
exports.addBooks = addBooks;
// @desc    Update single book
// @route   PUT /api/v1/book/:id
const updateBook = (req, res) => {
    const book = booksData.find((p) => p.id === req.params.id);
    if (book) {
        const body = req.body;
        const bookUpdated = body.value;
        booksData = booksData.map((b) => b.id === req.params.id ? Object.assign(Object.assign({}, b), bookUpdated) : b);
        res.status(201).json({
            success: true,
            data: book,
        });
    }
    else {
        res.status(404).json({
            success: false,
            msg: "Book not Found",
        });
    }
};
exports.updateBook = updateBook;
// @desc    Delete book
// @route   DELETE /api/v1/books/:id
const deleteBook = (req, res) => {
    booksData = booksData.filter((p) => p.id !== req.params.id);
    res.json({
        success: true,
        msg: "books removed",
    });
};
exports.deleteBook = deleteBook;
