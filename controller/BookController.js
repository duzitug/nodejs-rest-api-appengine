import { Controller } from "./Controller.js";

import { courseModel } from "../model/courseModel.js";

import { studentModel } from "../model/studentModel.js";

export class BookController extends Controller {
  constructor(model) {
    super(model);
  }

  async create(request, response) {
    const { name, courseId, userId } = request.body;

    const book = await this.model.create({ name });

    const course = await courseModel.findById(courseId);

    const student = await studentModel.findById(userId);

    course.books.push(book);

    student.books.push(book);

    await course.save();

    await student.save();

    response.send(book);
  }
}
