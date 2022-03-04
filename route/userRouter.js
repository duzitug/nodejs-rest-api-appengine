import { Router } from "express";

import { userController } from "../controll/userController.js";

const userRouter = Router();

userRouter.post("/usuarios", userController.create);
userRouter.get("/usuarios/:id", userController.read);

export default userRouter;
