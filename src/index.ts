import express, { Request, Response } from "express";
import { addBooks, deleteBook, getallbooks, getBook, updateBook } from "./controllers/books.controller";
const app = express()


app.get("/", (req: Request, res: Response) => {
  res.status(200).send("API Books V1 ");
})

app.get("/api/v1/books",getallbooks);
  
app.get("/api/v1/books/:id",getBook);

app.post("/api/v1/books",addBooks);

app.put("/api/v1/books/:id",updateBook);

app.delete("/api/v1/books/:id",deleteBook);

app.listen(80,()=>{
  console.log('Server Started at Port, 80')
})