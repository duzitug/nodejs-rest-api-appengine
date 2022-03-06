import userModel from "../model/userModel.js";
import { Controller } from "./Controller.js";

export class CommentController extends Controller {
  constructor(model) {
    super(model);
  }

  async create(request, response) {
    const comment = await this.model.create(request.body);
    const user = await userModel.findById(request.params.userId);
    
    user.comments.push(comment);

    await user.save();

    response.send(comment);
  }

  async getCommentsByUserId(request, response) {
    const user = await userModel
      .findById(request.params.userId)
      .populate("comments");

    response.send(user.comments);
  }
}
