import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "student" }],
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
  },
  { timestamps: true }
);

const courseModel = mongoose.model("course", courseSchema);

export { courseModel };
