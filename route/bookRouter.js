import { Router } from "express";

import { BookController } from "../controller/BookController.js";
import { bookModel } from "../model/bookModel.js";

const bookRouter = Router();

const bookController = new BookController(bookModel);

bookRouter.get("/book", bookController.index.bind(bookController));
bookRouter.post("/book", bookController.create.bind(bookController));
bookRouter.get("/book/:id", bookController.read.bind(bookController));
bookRouter.put("/book/:id", bookController.update.bind(bookController));
bookRouter.delete("/book/:id", bookController.delete.bind(bookController));

export { bookRouter };
