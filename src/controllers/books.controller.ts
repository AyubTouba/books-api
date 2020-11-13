import { books } from "../utils/data.books";
import { Request, Response } from "express";
import { Book } from "../utils/Book";

var booksData = books;

// @desc    get all Book
// @route   GET /api/v1/books
const getallbooks = (req: Request, res: Response) => {
    res.status(200).send(booksData);
};  

// @desc    get single Book
// @route   GET /api/v1/books/:id
const getBook =  (req: Request, res: Response) => {
  const book: Book | undefined = books.find((b) => b.id === req.params.id);
  res.status(200).send(book);
};

// @desc    Add book
// @route   POST /api/v1/book
const addBooks = async (req: Request, res: Response) => {
  const body = await req.body();
  const book = body.value;

  if (!req.body) {
    res.status(400).send( {
      "success": false,
      "msg": "No data",
    });
  } else {
      books.push(book);
  }
};

// @desc    Update single book
// @route   PUT /api/v1/book/:id
const updateBook = async (req: Request, res: Response)  => {
  const book: Book | undefined = booksData.find((p) => p.id === req.params.id);

  if (book) {
    const body = await req.body();
    const bookUpdated: {
      name?: string;
      description?: string;
      price?: number;
    } = body.value;
    booksData = booksData.map((b) =>
      b.id === req.params.id ? { ...b, ...bookUpdated } : b
    );
    res.status(201).json({
      success: true,
      data: book,
    })
  } else {
    res.status(404).json({
      success: false,
      msg: "Book not Found",
    });
  }
};

// @desc    Delete book
// @route   DELETE /api/v1/books/:id
const deleteBook = (req: Request, res: Response) => {
    booksData = booksData.filter((p) => p.id !== req.params.id);
  res.json({
    success: true,
    msg: "books removed",
  });
};
export { getallbooks, getBook, addBooks, updateBook, deleteBook };