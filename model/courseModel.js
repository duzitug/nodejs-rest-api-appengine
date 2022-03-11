import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const courseModel = mongoose.model("course", courseSchema);

export { courseModel };
