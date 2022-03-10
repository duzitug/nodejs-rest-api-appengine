import { Router } from "express";

import { GenreController } from "../controller/GenreController.js";
import { genreModel } from "../model/genreModel.js";

const genreRouter = Router();

const genreController = new GenreController(genreModel);

genreRouter.get("/generos", genreController.index.bind(genreController));
genreRouter.post("/generos", genreController.create.bind(genreController));
genreRouter.get("/generos/:id", genreController.read.bind(genreController));
genreRouter.put("/generos/:id", genreController.update.bind(genreController));
genreRouter.delete("/generos/:id", genreController.delete.bind(genreController));

export { genreRouter };
