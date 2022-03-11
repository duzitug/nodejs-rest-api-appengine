import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    nome: { type: String },
  },
  { timestamps: true }
);

const studentModel = mongoose.model("student", studentSchema);

export { studentModel };
