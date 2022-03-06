import { Controller } from "./Controller.js";

export class CommentController extends Controller {
  constructor(model) {
    super(model);
  }

  async create(request, response) {
    const { text } = request.body;

    const comment = await this.model.create({
      text,
    });

    response.send(comment);
  }
}
