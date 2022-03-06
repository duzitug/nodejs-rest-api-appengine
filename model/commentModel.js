import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    text: { type: String },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("comment", commentSchema);

export default commentModel;
