"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./controllers/books.controller");
const app = express_1.default();
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.status(200).send("API Books V1 ");
});
app.get("/api/v1/books", books_controller_1.getallbooks);
app.get("/api/v1/books/:id", books_controller_1.getBook);
app.post("/api/v1/books", books_controller_1.addBooks);
app.put("/api/v1/books/:id", books_controller_1.updateBook);
app.delete("/api/v1/books/:id", books_controller_1.deleteBook);
app.listen(port, () => {
    console.log('Server Started at Port,' + port);
});
