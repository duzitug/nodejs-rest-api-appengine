import { Router } from "express";

import { CourseController } from "../controller/CourseController.js";
import { courseModel } from "../model/courseModel.js";

const courseRouter = Router();

const courseController = new CourseController(courseModel);

courseRouter.get("/cursos", courseController.index.bind(courseController));
courseRouter.post("/cursos", courseController.create.bind(courseController));
courseRouter.get("/cursos/:id", courseController.read.bind(courseController));
courseRouter.put("/cursos/:id", courseController.update.bind(courseController));
courseRouter.delete(
  "/cursos/:id",
  courseController.delete.bind(courseController)
);

export { courseRouter };
