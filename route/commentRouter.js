import { Router } from "express";
import { CommentController } from "../controller/CommentController.js";
import commentModel from "../model/commentModel.js";

const commentController = new CommentController(commentModel);

const commentRouter = Router();

commentRouter.get(
  "/comentario",
  commentController.index.bind(commentController)
);
commentRouter.post(
  "/comentario/:userId",
  commentController.create.bind(commentController)
);
commentRouter.get(
  "/getCommentsByUserId/:userId",
  commentController.getCommentsByUserId.bind(commentController)
);
commentRouter.get(
  "/comentario/:id",
  commentController.read.bind(commentController)
);
commentRouter.put(
  "/comentario/:id",
  commentController.update.bind(commentController)
);
commentRouter.delete(
  "/comentario/:id",
  commentController.delete.bind(commentController)
);

export default commentRouter;
