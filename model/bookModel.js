import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: String,
    student: { type: mongoose.Schema.Types.ObjectId, ref: "student" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "course" },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: "genre" },
  },
  { timestamps: true }
);

const bookModel = mongoose.model("book", bookSchema);

export { bookModel };
