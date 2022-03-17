import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    nome: { type: String },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "course" },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
  },
  { timestamps: true }
);

const studentModel = mongoose.model("student", studentSchema);

export { studentModel };
