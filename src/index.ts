import express, { Request, Response } from "express";
import { addBooks, deleteBook, getallbooks, getBook, updateBook } from "./controllers/books.controller";
const app = express()

const port = process.env.PORT ||8080;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("API Books V1 ");
})

app.get("/api/v1/books",getallbooks);
  
app.get("/api/v1/books/:id",getBook);

app.post("/api/v1/books",addBooks);

app.put("/api/v1/books/:id",updateBook);

app.delete("/api/v1/books/:id",deleteBook);

app.listen(port,()=>{
  console.log('Server Started at Port,'+port)
})