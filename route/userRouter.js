import { Router } from "express";

import { userController } from "../controller/userController.js";

const userRouter = Router();

userRouter.get("/usuarios", userController.index);
userRouter.post("/usuarios", userController.create);
userRouter.get("/usuarios/:id", userController.read);
userRouter.put("/usuarios/:id", userController.update);
userRouter.delete("/usuarios/:id", userController.delete);

export default userRouter;
