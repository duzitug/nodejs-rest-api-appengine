import { Router } from "express";

import { StudentController } from "../controller/StudentController.js";
import { studentModel } from "../model/studentModel.js";

const studentRouter = Router();

const studentController = new StudentController(studentModel);

studentRouter.get(
  "/estudante",
  studentController.index.bind(studentController)
);
studentRouter.post(
  "/estudante",
  studentController.create.bind(studentController)
);
studentRouter.get(
  "/estudante/:id",
  studentController.read.bind(studentController)
);
studentRouter.put(
  "/estudante/:id",
  studentController.update.bind(studentController)
);
studentRouter.delete(
  "/estudante/:id",
  studentController.delete.bind(studentController)
);

export { studentRouter };
